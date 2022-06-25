import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { REMOVE_BUCKET } from '../Redux/Bucket/TypeBucker'



function CartList({ list, addBucket, reduceBucket }) {

    const dispatch = useDispatch()

    return (
        <div className='shadow p-4 text-muted'>
            <p className='fw-bold '>Cart ({list.length} Items)</p>
            {list.map((data, index) => {
                if (data.totalGoods > 0) {
                    return ((
                        <div key={index} className='border-bottom py-3'>
                            <Row >
                                <Col xl={3}>
                                    <img className="img-card" src={data.image} alt="test" />
                                </Col>
                                <Col xl={6}  >
                                    <h2 className='fw-bold' style={{ fontSize: '30px' }}>{data.title}</h2>
                                    <p>{data.description}</p>
                                    <p>Color : {data.color}</p>
                                    <p>Size : {data.size}</p>
                                    <div className='d-flex  text-uppercase fw-bold justify-content-between' style={{ fontSize: '14px' }}>
                                        <a href="#" className='text-decoration-none text-muted' onClick={(event) => dispatch({ type: REMOVE_BUCKET, payload: { index: index } })} ><i className="fa-solid fa-trash-can"></i>Remove Item</a>
                                        <small ><i className="fa-solid fa-heart"></i>Move to WishList</small>
                                    </div>
                                </Col>
                                <Col >
                                    <div className='bucket-addon' >
                                        <div className='bucket-button'>
                                            <div className='mt-2' >
                                                <button className='border bg-light' disabled={data.totalGoods === 1} onClick={(event) => reduceBucket(index)}>
                                                    <i className="fa-solid fa-minus"></i>
                                                </button>
                                                <button className='border bg-light text-dark' disabled>
                                                    {data.totalGoods}
                                                </button>
                                                <button className='border bg-light' onClick={(event) => addBucket(index)}>
                                                    <i className="fa-solid fa-plus"></i>
                                                </button>
                                            </div>
                                            <p className='text-muted' style={{ fontSize: '12px' }}>
                                                {data.totalGoods === 1 && "(Note , 1 Place)"}
                                            </p>
                                        </div>
                                        <p className='fw-bold footer-price'>{"$" + data.price.toLocaleString()}</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))
                }

            }

            )}



        </div>
    )
}

export default CartList