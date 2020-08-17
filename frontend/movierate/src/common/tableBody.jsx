import React, { Component } from 'react'
import _ from 'lodash';

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.key);
  }

  render() {
    const { data, columns } = this.props

    return (
      <tbody>
        {data.map((i) => (
          <tr key={i.id}>
            {columns.map((c) => (
              <td key={i.id + c.key}>
                {this.renderCell(i, c)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    )
  }
}

export default TableBody
