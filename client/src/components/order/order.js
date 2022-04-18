import React from "react";
import './style.css'

export default function Order(props){
    return(
        <div className="order">
        <p>{props.order.product_name}</p>
        
        <p>{props.order.order_placed}</p>
        </div>
    )
}