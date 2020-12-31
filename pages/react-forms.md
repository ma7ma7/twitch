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

**On the Component we want to use Redux form on**

```javascript
import { Field, reduxForm} from "redux-form";

class CreateStream extends React.Component {
  renderInput({ input }) {
    return <input {...input} />
  }

  render() {
    return {
      <form>
        <Field name="title" component={this.renderInput}>
      </form>
    }
  }
}

export default reduxForm({
  form: 'streamCreate'
})(componentName)
```

The `<Field />` Component itself is don't know what is a text field or a checkbox ... it's only here to help redux implement and make redux easy to use with react here the `component` keyword came to define the inputs using functionor a component

The `{...input}` this syntax here is recommended instead of pass the value and the onChange and ler and so one the field it self need all properties came from the value object because of redux needs so we pass this special JSX destruction

### Handle Submit

With redux-form to handle forms we don't use onSubmit and assing a handler directly we use instead

```javascript
  <form onSubmit={this.props.handleSubmit(this.onFormSubmit)}> // onFormSubmit is a function that we define by our self
```

### Validate Input

Input validation need an extra work:

1. we define an extra argument on the inputComponent function

```javascript
  renderInput({ input, label, meta }) {
    return (
        ...
        <div>{meta.error}</div>
    );
  }
```

2. define a function to validate

```javascript
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must set A Ditle";
  }

  if (!formValues.description) {
    errors.description = "You must set Description";
  }

  return errors;
};
```

3. then we pass the validate as parameter on the reduxForm hook

```javascript
export default reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);
```

How this is gonna work ? on the validate function we return an object with the same name of our feild then the redux-form is automaticlly iject this object on the component function we take this object error and we extract the error message from them
