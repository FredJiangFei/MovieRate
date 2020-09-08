import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types';

// sfc
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props

  const pagesCount = Math.ceil(itemsCount / pageSize)
  if (pagesCount === 1) return null

  const pages = _.range(1, pagesCount + 1)

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((p) => (
          <li
            className={p === currentPage ? 'page-item active' : 'page-item'}
            key={p}
            onClick={() => onPageChange(p)}
          >
            <a className="page-link hand">{p}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired
}

export default Pagination
