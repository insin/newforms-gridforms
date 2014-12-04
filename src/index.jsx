'use strict';

var React = require('react')

var GridForm = React.createClass({
  render() {
    return <div className="grid-form">
      {this.props.children}
    </div>
  }
})

var Section = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render() {
    return <fieldset>
      <legend>{this.props.name}</legend>
      {this.props.children}
    </fieldset>
  }
})

var Row = React.createClass({
  render() {
    console.log(this.props.children)
    var span = 0
    React.Children.forEach(this.props.children, c => span += Number(c.props.span))
    return <div data-row-span={span}>
      {this.props.children}
    </div>
  }
})

var Field = React.createClass({
  contextTypes: {
    form: React.PropTypes.object.isRequired
  },

  propTypes: {
    name: React.PropTypes.string.isRequired
  , span: React.PropTypes.string
  },

  getDefaultProps() {
    return {span: '1'}
  },

  render() {
    var bf = this.context.form.boundField(this.props.name)
    return <div data-field-span={this.props.span}>
      {bf.labelTag()}
      {bf.render()}
    </div>
  }
})

module.exports = {GridForm, Section, Row, Field}