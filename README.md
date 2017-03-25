## It's easy peasy

Check out the [demo](https://aaronshaf.github.io/shaf-button/).

<img src="https://camo.githubusercontent.com/08d6c4eb74b3fefa1562569693e4158f4e80bed8/68747470733a2f2f64337676366c703535716a6171632e636c6f756466726f6e742e6e65742f6974656d732f334f316e3369335a3059326632653233334d316c2f53637265656e2532305265636f7264696e67253230323031372d30312d3331253230617425323030392e3536253230414d2e6769663f582d436c6f75644170702d56697369746f722d49643d323738356636313064373837393963633335323834393330343064396235383326763d3030303666396333" height="66px" />

Upgrade your buttons, force-touch them, make them springy and delightful. Force-touch works in Safari as well (if your device supports it).

```html
<!-- Custom Elements v1 polyfill (2.7KB gzipped) -->
<script src="https://unpkg.com/@webcomponents/custom-elements@1.0.0-alpha.3"></script>
```

```html
<!-- our custom element's source (1.2KB gzipped) -->
<script src="https://unpkg.com/shaf-button@1.0.11"></script>
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
