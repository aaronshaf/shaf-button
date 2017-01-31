## It's easy peasy

Check out the [demo](https://aaronshaf.github.io/shaf-button/).

<img src="https://d3vv6lp55qjaqc.cloudfront.net/items/3O1n3i3Z0Y2f2e233M1l/Screen%20Recording%202017-01-31%20at%2009.56%20AM.gif?X-CloudApp-Visitor-Id=2785f610d78799cc3528493040d9b583&v=0006f9c3" height="66px" />

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (1.2KB gzipped) -->
<script src="https://unpkg.com/shaf-button@1.0.2"></script>
```

### Usage

```css
.my-styled-button {
  background: linear-gradient(to bottom, #00b7ea 0%, #009ec3 100%);
  border-radius: 5px;
  border: 0 none;
  color: white;
  padding: 8px 16px;
  font-size: 1.1rem;
  user-select: none;
  outline: none;
}
```

```html
<shaf-button>
  <button class="my-styled-button">
    Click my corners
  </button>
</shaf-button>
```
