/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useTable } from 'react-table'
import PropTypes from 'prop-types'

const CustomTab = ({ columns, data }) => {
  //   const data = React.useMemo( // content
  //     () => [
  //       {
  //         col1: 'Hello',
  //         col2: 'World',
  //         col3: 'hello',
  //         col4: 'world',
  //         col5: '123',
  //       },
  //     ],
  //     [],
  //   )
  //   const columns = React.useMemo( // colums
  //     () => [
  //       {
  //         Header: '序號',
  //         accessor: 'col1', // accessor is the "key" in the data
  //       },
  //       {
  //         Header: '人員帳號',
  //         accessor: 'col2',
  //       },
  //       {
  //         Header: '人員名稱',
  //         accessor: 'col3',
  //       },
  //       {
  //         Header: '上次登入時間',
  //         accessor: 'col4',
  //       },
  //       {
  //         Header: '功能群組',
  //         accessor: 'col5',
  //       },
  //     ],
  //     [],
  //   )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  return (
    <div className="table-responsive">
      <table {...getTableProps()} className="table table-striped table-bordered">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr 
              {...headerGroup.getHeaderGroupProps()}
              key='123'>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key="123"
                  
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* <If condition={data.length !== 0}>
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              )
            })}
          </If> */}
          {/* <If condition={data.length === 0}>
            <tr>
              <td colSpan={columns.length}>
                <div className="d-flex justify-content-center" style={{ height: '20vh', width: '100%' }}>
                  <h2 className="text-muted align-self-center text-center">
                    <p>
                      查無資料
                    </p>
                  </h2>
                </div>
              </td>
            </tr>
          </If> */}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTab

CustomTab.propTypes = {
  columns: PropTypes.instanceOf(Array).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
}
