import React from 'react'
import { Pagination } from 'react-bootstrap'

const JobPagination = ({ page, setPage, hasNextPage }) => {
  const adjustPage = (amount) => {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Pagination>
      { // 如果page不是1的話才顯示往前一頁的箭頭
        page !== 1 && <Pagination.Prev title='前一頁' onClick={() => adjustPage(-1)} />}
      {page !== 1 && <Pagination.Item title={`第1頁`} onClick={() => setPage(1)}>1</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item title={`第${page - 1}頁`} onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item title={`第${page + 1}頁`} onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next title='下一頁' onClick={() => adjustPage(1)} />}
    </Pagination>
  )
}

export default JobPagination
