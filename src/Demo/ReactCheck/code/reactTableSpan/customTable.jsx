import React from "react"
import styled from "styled-components"
import { useTable } from "react-table"
import PropTypes from 'prop-types'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function DataTable({ data, columns, date }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key="123">
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()} key="123">
                    {column.Header === "Name" && column.depth === 0
                      ? date
                      : column.render("Header")}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key="123">
                {row.cells.map((cell) => {
                  return row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key="123">
                        {cell.render("Cell")}
                      </td>
                    )
                  })
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Styles>
  )
}

export default DataTable

DataTable.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.instanceOf(Array).isRequired,
  date: PropTypes.string.isRequired,
}

