import React, {
    useState, useEffect, memo, useMemo,
} from 'react'
  import PropTypes from 'prop-types'
  import { useIntl } from 'react-intl'
  import {
    useTable, usePagination, useSortBy, useGlobalFilter, useAsyncDebounce,
  } from 'react-table'

const FilterComponent = ({ filterText, onFilter, onClear }) => {
const intl = useIntl()
return (
    <div className="input-group mx-1" style={{ minWidth: '200px', width: '30%' }}>
    <input
        id="search"
        type="text"
        className="form-control"
        placeholder={intl.formatMessage({ id: `${COMMON_PLACEHOLDER_ID}.search` })}
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
    />
    <div className="input-group-append">
        <button type="button" className="btn btn-form" onClick={onClear}>
        <IntlMessages id={`${COMMON_BUTTON_ID}.clear`} />
        </button>
    </div>
    </div>
)
}
const GlobalFilter = ({
    globalFilter,
    setGlobalFilter,
}) => {
    // input直接用globalFilter當value會卡 所以另創一個單純的value用於同步呈現
    const intl = useIntl()
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce((changeValue) => {
    setGlobalFilter(changeValue || undefined)
    }, 200)
    const onClear = useAsyncDebounce(() => {
    setGlobalFilter('')
    setValue('')
    }, 200)
    return (
    <div className="input-group global-filter">
        <input
        // id="search"
        // type="text"
        className="form-control"
        autoComplete="off"
        placeholder={intl.formatMessage({ id: `${COMMON_PLACEHOLDER_ID}.search` })}
        // aria-label="Search Input"
        value={value || ''}
        onChange={(e) => {
            setValue(e.target.value)
            onChange(e.target.value)
        }}
        onKeyPress={(e) => {
            if (e.key === 'Enter') {
            e.preventDefault()
            return false
            }
            return true
        }}
        />
        <div className="input-group-append">
        <button type="button" className="btn btn-form" onClick={onClear}>
            <IntlMessages id={`${COMMON_BUTTON_ID}.clear`} />
        </button>
        </div>
    </div>
    )
}

export const CustomTable = memo(({
    columns,
    data,
    loading,
    error,
    search,
    exports,
    exportsFormat,
    sort,
    footer,
    pagination,
}) => {
    // 有些欄位(columns)是用來顯示 button，所以傳進來的 data 會沒有該欄位值 (undefined)，
    // react-table 的 search 功能會把 columns 有但 data 沒有的值轉成 `undefined` 字串，
    // 導致搜尋 `undefined` 會匹配全部 data。
    const tableData = useMemo(() => (
    search ? formatedSearchData(columns, data) : data
    ), [search, data])

    // Use the state and functions returned from useTable to build your UI
    const {
    // --- useTable ---
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    prepareRow,

    // --- useGlobalFilter ---
    state: { globalFilter },
    setGlobalFilter,

    // --- usePagination ---
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    } = useTable(
    {
        columns,
        data: tableData,
        initialState: {
        pageSize: perPageOptions[0],
        },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    )
    const FullTableWrapper = ({ children }) => (
    <tbody>
        <tr>
        <td colSpan={columns.length}>
            {children}
        </td>
        </tr>
    </tbody>
    )
    FullTableWrapper.propTypes = {
    children: PropTypes.element.isRequired,
    }
    const isError = error && Object.keys(error).length !== 0
    const noData = page.length === 0

    useEffect(() => {
    if ((footer || pagination === false) && data.length > 0) setPageSize(data.length)
    }, [footer, pagination, data])

    return (
    <div className="my-3">
        <If condition={search || exports.length}>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-end justify-content-sm-between  align-items-center">
            <Choose>
            <When condition={search}>
                {/* 搜尋功能 */}
                <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                />
            </When>
            <Otherwise>
                <span />
            </Otherwise>
            </Choose>

            <Choose>
            <When condition={exports}>
                <ExportsButtons
                columns={columns}
                datas={data}
                files={exports}
                exportsFormat={exportsFormat}
                />
            </When>
            <Otherwise>
                <span />
            </Otherwise>
            </Choose>
        </div>
        </If>
        <div className="table-responsive mb-0">
        <table className="table table-striped table-bordered" {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                    if (!sort) {
                    return (
                        <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                        </th>
                    )
                    }
                    return (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <If condition={column.isSorted}>
                        <If condition={column.isSortedDesc}>
                            <i className="fas fa-sort-down ml-1" />
                        </If>
                        <If condition={!column.isSortedDesc}>
                            <i className="fas fa-sort-up ml-1" />
                        </If>
                        </If>
                        <If condition={!column.isSorted}>
                        <i className="fas fa-sort ml-1" />
                        </If>
                    </th>
                    )
                })}
                </tr>
            ))}
            </thead>
            <Choose>
            <When condition={loading}>
                <FullTableWrapper>
                <LoadingPrompt />
                </FullTableWrapper>
            </When>
            <When condition={isError}>
                <FullTableWrapper>
                <ApiErrorMessagePage messages={error.message} />
                </FullTableWrapper>
            </When>
            <When condition={noData}>
                <FullTableWrapper>
                <NoDataPage />
                </FullTableWrapper>
            </When>
            <Otherwise>
                <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
                    </tr>
                    )
                })}
                </tbody>
                <If condition={footer}>
                <tfoot>{footer}</tfoot>
                </If>
            </Otherwise>
            </Choose>
        </table>
        </div>

        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-center justify-content-sm-between align-items-center react-table-info">
        <IntlMessages
            id="form.common.pagination.total"
            values={{ total: data.length }}
        />

        <If condition={!footer && pagination}>
            <div className="pagination-container">
            <span>
                <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                <i className="fal fa-arrow-to-left" />
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => previousPage()} disabled={!canPreviousPage}>
                <i className="fal fa-arrow-left" />
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => nextPage()} disabled={!canNextPage}>
                <i className="fal fa-arrow-right" />
                </button>
                <button type="button" className="btn btn-sm btn-outline-dark" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                <i className="fal fa-arrow-to-right" />
                </button>
            </span>

            <span>
                <span className="ml-1">
                <IntlMessages
                    id="form.common.pagination.current-page-of"
                />
                <select
                    className="pagination-select"
                    value={pageIndex + 1}
                    onChange={(e) => {
                    const keyinPage = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(keyinPage)
                    }}
                >
                    {new Array(pageOptions.length).fill().map((_, index) => (
                    <option key={`page-${index + 1}`} value={index + 1}>
                        {index + 1}
                    </option>
                    ))}
                </select>
                <IntlMessages
                    id="form.common.pagination.page"
                />
                <span className="mx-1">/</span>
                <IntlMessages
                    id="form.common.pagination.total-page"
                    values={{ total: pageOptions.length }}
                />
                </span>

                <span className="mx-1">|</span>

                <span>
                <IntlMessages id="form.common.pagination.show" />
                <select
                    className="pagination-select"
                    value={pageSize}
                    onChange={(e) => {
                    setPageSize(Number(e.target.value))
                    }}
                >
                    {perPageOptions.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                    ))}
                </select>
                <IntlMessages id="form.common.pagination.record" />
                </span>
            </span>

            </div>
        </If>
        </div>

    </div>
    )
})