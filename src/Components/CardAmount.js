import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function CardAmount({ temporary }) {

    const history = useNavigate()


    return (
        <div className='shadow p-4 text-muted tablet-mt'>
            <p className='fw-bold '>The total amount of</p>
            <div className='border-bottom py-3 border-bottom'>
                <table className='table table-borderless' >
                    <tbody>
                        <tr  >
                            <td>Temporary Amount</td>
                            <td>${temporary}</td>
                        </tr>
                        <tr className='border-bottom'>
                            <td>Shipping</td>
                            <td>Gratis</td>
                        </tr>
                        <tr className='fw-bold border-0'>
                            <td>The total amount of (including VAT)</td>
                            <td>${temporary}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            <div >
                <Button style={{ width: '100%', fontSize: '12px', padding: '10px' }}
                    onClick={(event) => {
                        Swal.fire("Success checkout", "you have pay for finish this order", "success")
                        history("/")
                        event.preventDefault()
                    }}
                    className="text-uppercase">
                    go to checkout
                </Button>
            </div>

        </div>
    )
}

export default CardAmount