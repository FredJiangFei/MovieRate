import React, { Component } from 'react'
import Select from './select'
import Input from './input'

class Form extends Component {
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    )
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }

  renderInput(name, label, type = 'text') {
    const { data, errors } = this.state

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }
}

export default Form
