# newforms-gridforms

[Grid Forms](http://kumailht.com/gridforms/) integration for
[newforms](https://guthub.com/insin/newforms).

## Demos

* [Product Form](http://insin.github.io/newforms-gridforms/) - the from from the
  Grid Forms homepage rendered with newforms-gridforms.

## Install

### Node.js (not available yet!)

newforms-gridforms can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```
npm install newforms-gridforms
```

### Browser bundle (not available yet!)

The browser bundle exposes a global `TBD` variable and expects to
find global `React` ([React](http://facebook.github.io/react/)) and `forms`
([newforms](https://github.com/insin/newforms)) variables to work with.

You can find it in the [/dist directory](https://github.com/insin/newforms-gridforms/tree/master/dist).

## Usage

```javascript
// Node only - a global NewformsGridForms variable is exported in the browser
var NewformsGridForms = require('newforms-gridforms')

// Components are exported as properties of NewformsGridForms
var {GridForm, Section, Row, Field} = NewformsGridForms
```

Nest `<Section>`, `<Row>` and `<Field>` components under a `<GridForm>` as
necessary.

Row spans will be calculated based on their Fields, so you only have to
specify `span` props for fields which need more than the default of `1`.

Currently, `GridForm` expects a form instance as a `form` prop.

`forms.RenderForm` will pass its form instance to a nested `GridForm`, as will
each component all the way down to `Field` - React's context feature will
obviate the need for the `form` prop and this manual passing process once
 [facebook/react#2112](https://github.com/facebook/react/issues/2112) lands.

Product Form example:

```html
<form>
  <forms.RenderForm form={ProductForm}>
    <GridForm>
      <Section name="Add to inventory">
        <Row>
          <Field name="productName" span="3"/>
          <Field name="tags"/>
        </Row>
        <Row>
          <Field name="vendor"/>
          <Field name="productType"/>
        </Row>
        <Row>
          <Field name="productDescription"/>
        </Row>
        <Row>
          <Field name="sku"/>
          <Field name="initialStockLevel"/>
          <Field name="costPrice"/>
          <Field name="wholesalePrice"/>
          <Field name="retailPrice"/>
        </Row>
      </Section>
    </GridForm>
  </forms.RenderForm>
</form>
```

## API

TBD

## MIT Licensed
