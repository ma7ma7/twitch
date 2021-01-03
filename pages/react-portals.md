# React Portals

React Portal is a react feature that we use whene we want to render a component not in the normal react workflow inside the root element but we create a new container. we use it usally with modals amd third party libraries to avoid the probelem of **z-index**

```javascript
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
```

and on the `index.html` public file.

```html
<div id="modal"></div>
```
