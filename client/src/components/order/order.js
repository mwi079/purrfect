import React from "react";
import './style.css'

export default function Order(props){
    return(
        <div className="order">
            <div className="orderContent">
        <div><b>Name:</b> {props.order.product_name}</div>
        
        <div><b>Order Placed:</b> {props.order.order_placed}</div>
        </div>
        </div>
    )
}