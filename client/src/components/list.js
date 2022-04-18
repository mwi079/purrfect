import React from 'react'
import Order from './order/order.js'

export default function List(props) {
    console.log(props.orders)
  return (
      <div>
        <h4>Recent Orders</h4>
     {props.orders.map(order=><Order order={order} key={order.order_id}/>)}
     </div>  )
}