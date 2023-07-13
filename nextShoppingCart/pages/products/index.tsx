import { useState, useEffect, ChangeEvent } from 'react'
import styled from "styled-components"
import { useRouter } from 'next/router'

import { getAllProduct, Direction, sortByPrice } from "../../utils/fake-data"
import ProductCard from "../../components/ProductCard"

export const PageTitle = styled.h1`
  color: #333;
  margin-top: 30px;
  text-align: center;
`

export const ProductGallery = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  gap: 24px;
`

export const PriceFilter = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 20px;
`

const Home = () =>{
  const [direction, setDirection] = useState<Direction>("ASC")
  const router = useRouter()

  const products = sortByPrice(direction)

  // 將資料寫進 query-string
  const handleSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const dir = e.target.value
    router.push(`${router.pathname}?direction=${dir}`, undefined, {
      shallow: true,
    })
  }

  useEffect(() => {
    if (router.query.direction) {
      setDirection(router.query.direction as Direction)
    }
  }, [router.query.direction])

  return (
    <>
      <PageTitle>商品列表</PageTitle>
      <PriceFilter>
        Price:
        <select value={direction} onChange={handleSortingDirectionChange}>
          <option value="ASC">價格由低到高</option>
          <option value="DES">價格由高到低</option>
        </select>
      </PriceFilter>
      <ProductGallery>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </>
  )

}

export default Home