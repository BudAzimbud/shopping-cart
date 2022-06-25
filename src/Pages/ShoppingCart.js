import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CardAmount from '../Components/CardAmount'
import CartList from '../Components/CartList'
import HeaderCart from '../Components/HeaderCart'
import { ADD_BUCKET, LIST_BUCKET, REDUCE_BUCKET } from '../Redux/Bucket/TypeBucker'

function ShoppingCart() {

  const dispatch = useDispatch()

  const listBucket = useSelector((state) => {
    return state.bucket.listBucket
  })


  const temporary = useSelector((state) => {
    let result = 0
    state.bucket.listBucket.forEach((data) => {
      result += (data.price * data.totalGoods)
    })
    return result
  })



  const addBucket = (index) => {
    dispatch({ type: ADD_BUCKET, payload: { index: index } })
  }

  const reduceBucket = (index) => {
    dispatch({ type: REDUCE_BUCKET, payload: { index: index } })
  }

  useEffect(() => {
    dispatch({ type: LIST_BUCKET })
  }, [dispatch])

  return (
    <Container>
      <HeaderCart />
      <Container className="mt-3 py-5">
        <Row>
          <Col xl={9}>
            <CartList
              list={listBucket}
              addBucket={addBucket}
              reduceBucket={reduceBucket}
            />
          </Col>
          <Col xl={3} sm={12}>
            <CardAmount temporary={temporary.toLocaleString()} />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ShoppingCart