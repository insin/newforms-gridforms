/*!
 * newforms-gridforms 2.0.0 - https://github.com/insin/newforms-gridforms
 * MIT Licensed
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GridForms = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = (typeof window !== "undefined" ? window.React : typeof global !== "undefined" ? global.React : null)

var GridForm = React.createClass({displayName: "GridForm",
  render:function() {
    return React.createElement("div", {className: "grid-form"}, 
      React.Children.map(this.props.children, function(child)  {return React.cloneElement(child, {form: this.props.form});}.bind(this))
    )
  }
})

var Section = React.createClass({displayName: "Section",
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render:function() {
    return React.createElement("fieldset", null, 
      React.createElement("legend", null, this.props.name), 
      React.Children.map(this.props.children, function(child)  {return React.cloneElement(child, {form: this.props.form});}.bind(this))
    )
  }
})

var Row = React.createClass({displayName: "Row",
  render:function() {
    var span = 0
    React.Children.forEach(this.props.children, function(c)  {return span += Number(c.props.span);})
    return React.createElement("div", {"data-row-span": span}, 
      React.Children.map(this.props.children, function(child)  {return React.cloneElement(child, {form: this.props.form});}.bind(this))
    )
  }
})

var Field = React.createClass({displayName: "Field",
  propTypes: {
    name: React.PropTypes.string.isRequired
  , span: React.PropTypes.string
  },

  getDefaultProps:function() {
    return {span: '1'}
  },

  render:function() {
    var bf = this.props.form.boundField(this.props.name)
    return React.createElement("div", {"data-field-span": this.props.span}, 
      bf.labelTag(), 
      bf.render()
    )
  }
})

module.exports = {GridForm:GridForm, Section:Section, Row:Row, Field:Field}
},{}]},{},[1])(1)
});