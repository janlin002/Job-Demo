import React, { useState } from 'react'

const Index = () => {
    const [pageState, setPageState] = useState('search')

    // funciton 等邏輯會寫在這，透過props傳遞到個頁面
    return (
        <>
        <If condition={pageState === 'search'}>
            <Search />
        </If>
        <If condition={pageState === 'result'}>
            <Result />
        </If>
        </>
        
    )
}

export default Index