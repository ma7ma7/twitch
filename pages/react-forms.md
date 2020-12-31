## React forms

React forms is a little bit repetitive, and to use it with react we prefere to use **redux-form** library that do a lot of things as shown in the image bellow:
![How React Forms Works](../images/readux-forms-flow.JPG)

### Installation

`npm i redux-form`

**on the reducers index**

```javascript
import { combineReducers } from "redux";
import { reduce as formReducer } from "redux-form";
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
```
