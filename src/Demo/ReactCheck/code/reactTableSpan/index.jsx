import React, { useMemo } from 'react'
import CustomTable from './customTable'

const ReactTablePagination = () =>{
  const data = [
    {
      date: "2021-01-01",
      options: [
        { isFirst: "y", name: "john" },
        { isFirst: "n", name: "Sam" }
      ]
    },
    {
      date: "2021-11-01",
      options: [
        { isFirst: "n", name: "TY" },
        { isFirst: "n", name: "joe" }
      ]
    }
  ]
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "First One",
            accessor: "isFirst"
          }
        ]
      }
    ],
    []
  )

  return (
    <div className="App">
      {data.map((d) => {
        return <CustomTable data={d.options} columns={columns}  date={d.date} key={d.date} />
      })}
    </div>
  )
}

export default ReactTablePagination