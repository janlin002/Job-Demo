import { useRouter } from 'next/router'
import Link from "next/link"

import { getProductById } from '../../utils/fake-data'
import { PageTitle, ProductContainer, BackLink } from "../../components/[id].style"
import ProductCard from '../../components/ProductCard'

const Product = () =>{
  const router = useRouter()
  const { id } = router.query

  if (!id) return <></>

  const product = getProductById(id as string)

  return (
    <>
      <PageTitle>商品詳細頁面</PageTitle>
      <BackLink>
        <Link href="/products">回產品列表</Link>
      </BackLink>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  )
}

export default Product