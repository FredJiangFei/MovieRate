import React, { Component } from 'react'

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((c) => (
            <th className="hand" key={c.key}>
              {c.label}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
