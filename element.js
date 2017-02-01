import createElementClass from 'create-element-class'
import css from './styles'

export default createElementClass({
  attributeChangedCallback (name, oldValue, newValue) {
    if (this.rendered) {
      this.updateRendering()
    }
  },
  connectedCallback () {
    this.button = document.querySelector('button')
    this.classList.add('shaf-button')
    this.reset()

    this.reset = this.reset.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.handleUnpress = this.handleUnpress.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handlePointerDown = this.handlePointerDown.bind(this)

    this.button.addEventListener('blur', this.handleUnpress)
    this.button.addEventListener('mousedown', this.handlePress)
    this.button.addEventListener('mousemove', this.handleMove)
    this.button.addEventListener('touchstart', this.handleTouchStart)
    this.button.addEventListener('touchmove', this.handleTouchMove)
    this.button.addEventListener('pointerdown', this.handlePointerDown)
    this.button.addEventListener('pointermove', this.handleMove)
    this.button.addEventListener('webkitmouseforcedown', this.handleMove)
    this.button.addEventListener('webkitmouseforcechanged', this.handleMove)
  },
  reset () {
    this.relativeXRatio = 0.5
    this.relativeYRatio = 0.5
    this.rotateX
    this.rotateY
    this.extraScale = 0
    this.isMouseDown = false
    this.wasTouched = false
  },
  handlePointerDown (event) {
    if (event.pointerType === 'touch') {
      this.wasTouched = true
    }
    this.handlePress(event)
  },
  handleTouchStart (event) {
    this.wasTouched = true
    this.handlePress(event)
  },
  handleTouchMove (event) {
    this.wasTouched = true
    this.handleMove(event)
  },
  detachedCallback () {
    this.button.removeEventListener('blur', this.handleUnpress)
    this.button.removeEventListener('mousedown', this.handlePress)
    this.button.removeEventListener('mousemove', this.handleMove)
    this.button.removeEventListener('touchstart', this.handleTouchStart)
    this.button.removeEventListener('touchmove', this.handleTouchMove)
    this.button.removeEventListener('pointerdown', this.handlePointerDown)
    this.button.removeEventListener('pointermove', this.handleMove)
    this.button.removeEventListener('webkitmouseforcedown', this.handleMove)
    this.button.removeEventListener('webkitmouseforcechanged', this.handleMove)
    document.removeEventListener('mouseup', this.handleUnpress)
    document.removeEventListener('pointercancel', this.handleUnpress)
    document.removeEventListener('pointerup', this.handleUnpress)
    document.removeEventListener('touchend', this.handleUnpress)
  },
  handlePress (event) {
    this.isMouseDown = true
    const extraScaleFromPressure = getRealPressure(event) - 1
    const extraScaleFromTouch = this.wasTouched ? 0.2 : 0
    this.extraScale = extraScaleFromPressure + extraScaleFromTouch
    this.button.style.transform = `perspective(500px) rotateX(${this.rotateY *
      (-1)}deg) rotateY(${this.rotateX}deg) scale(${0.98 -
      this.extraScale * 0.05})`
    document.addEventListener('mouseup', this.handleUnpress)
    document.addEventListener('pointercancel', this.handleUnpress)
    document.addEventListener('pointerup', this.handleUnpress)
    document.addEventListener('touchend', this.handleUnpress)
  },
  handleUnpress () {
    this.isMouseDown = false
    this.button.style.transform = `perspective(500px) rotateX(${this.rotateY *
      1.05}deg) rotateY(${this.rotateX * (-1.05)}deg) scale(${1.01 +
      this.extraScale * 0.03})`
    setTimeout(
      () => {
        this.button.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
      },
      100
    )
    this.reset()
    document.removeEventListener('blur', this.handleUnpress)
  },
  handleMove (event) {
    this.extraScale = getRealPressure(event) - 1
    this.relativeXRatio = (event.pageX - this.button.offsetLeft) /
      this.button.offsetWidth
    this.relativeYRatio = (event.pageY - this.button.offsetTop) /
      this.button.offsetHeight
    this.rotateX = -8 + this.relativeXRatio * 16
    this.rotateY = -8 + this.relativeYRatio * 16
    if (this.isMouseDown) {
      this.handlePress(event)
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))
  document.head.insertBefore(style, document.head.firstChild)
})

function getRealPressure (event) {
  return event.handlePressure || event.force || event.webkitForce || 1
}
