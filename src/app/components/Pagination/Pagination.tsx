import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import Stack from '@mui/material/Stack';

type PaginationProps = {
  page: number,
  changePage: (value: number) => void,
  changePageLimit: (value: number) => void,
  pageLimit: number
}

const Pagination = ({ page, changePage, changePageLimit, pageLimit }: PaginationProps) => {

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => {
    changePage(page)
  }
  const handlePerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,) => {
    changePageLimit(parseInt(event.target.value, 10))
    changePage(0)
  }
  return (
    <Stack>
      <TablePagination
        component="div"
        count={120}
        rowsPerPageOptions={[10, 25, 50, 100]}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={pageLimit}
        onRowsPerPageChange={handlePerPageChange}/>
    </Stack>
  )
}

export default Pagination;
