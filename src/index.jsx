'use strict';

var React = require('react/addons')
var cloneWithProps = React.addons.cloneWithProps

var GridForm = React.createClass({
  render() {
    return <div className="grid-form">
      {React.Children.map(this.props.children, child => cloneWithProps(child, {form: this.props.form}))}
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
      {React.Children.map(this.props.children, child => cloneWithProps(child, {form: this.props.form}))}
    </fieldset>
  }
})

var Row = React.createClass({
  render() {
    console.log(this.props.children)
    var span = 0
    React.Children.forEach(this.props.children, c => span += Number(c.props.span))
    return <div data-row-span={span}>
      {React.Children.map(this.props.children, child => cloneWithProps(child, {form: this.props.form}))}
    </div>
  }
})

var Field = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  , span: React.PropTypes.string
  },

  getDefaultProps() {
    return {span: '1'}
  },

  render() {
    var bf = this.props.form.boundField(this.props.name)
    return <div data-field-span={this.props.span}>
      {bf.labelTag()}
      {bf.render()}
    </div>
  }
})

module.exports = {GridForm, Section, Row, Field}