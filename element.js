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
    this.relativeXRatio = 0.5
    this.relativeYRatio = 0.5
    this.rotateX
    this.rotateY
    this.extraScale = 0
    this.isMouseDown = false

    this.press = this.press.bind(this)
    this.unpress = this.unpress.bind(this)
    this.mousemove = this.mousemove.bind(this)

    this.button.addEventListener('blur', this.unpress)
    this.button.addEventListener('mousedown', this.press)
    this.button.addEventListener('touchstart', this.press)
    this.button.addEventListener('mousemove', this.mousemove)
    this.button.addEventListener('touchmove', this.mousemove)
    this.button.addEventListener('webkitmouseforcedown', this.mousemove)
    this.button.addEventListener('webkitmouseforcechanged', this.mousemove)
  },
  detachedCallback () {
    this.button.removeEventListener('blur', this.unpress)
    this.button.removeEventListener('mousedown', this.press)
    this.button.removeEventListener('mousemove', this.mousemove)
    this.button.removeEventListener('webkitmouseforcedown', this.mousemove)
    this.button.removeEventListener('webkitmouseforcechanged', this.mousemove)
  },
  press (event) {
    this.isMouseDown = true
    this.extraScale = getRealPressure(event) - 1
    this.button.style.transform = `perspective(500px) rotateX(${this.rotateY *
      (-1)}deg) rotateY(${this.rotateX}deg) scale(${0.98 -
      this.extraScale * 0.05})`
    document.addEventListener('mouseup', this.unpress)
  },
  unpress () {
    this.isMouseDown = false
    this.button.style.transform = `perspective(500px) rotateX(${this.rotateY *
      1.1}deg) rotateY(${this.rotateX * (-1.1)}deg) scale(${1.02 +
      this.extraScale * 0.04})`
    setTimeout(
      () => {
        this.button.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
      },
      100
    )
    document.removeEventListener('blur', this.unpress)
  },
  mousemove (event) {
    this.extraScale = getRealPressure(event) - 1
    this.relativeXRatio = (event.pageX - this.button.offsetLeft) /
      this.button.offsetWidth
    this.relativeYRatio = (event.pageY - this.button.offsetTop) /
      this.button.offsetHeight
    this.rotateX = -5 + this.relativeXRatio * 10
    this.rotateY = -5 + this.relativeYRatio * 10
    if (this.isMouseDown) {
      this.press(event)
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
  return event.pressure || event.force || event.webkitForce || 1
}
