import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import List from './components/list'
import moment from 'moment';

function App() {
  const [orders,setOrders]=useState([])
  const [ordersThisMonth,setOrdersThisMonth]=useState([])
  const[ordersInProgress, setOrdersInProgress]=useState([])
  const [revenue, setRevenue]=useState([])
  const [recentOrders, setRecentOrders]=useState([])
  useEffect(()=>{
    //! spinner starts
    const thisMonth=moment().format('MM/YYYY')
    
    axios('http://localhost:4000/').then(({data})=>{
      setOrders(data.length)
      setOrdersThisMonth(data.filter(order=>moment(order.order_placed).isSame(thisMonth,'month')).length)
      setOrdersInProgress(data.filter(order=>order.order_status==='in_progress').length)
      setRevenue(data.map(order=>order.price).reduce((a,b)=>b+a,0))
      setRecentOrders(data.slice(0,10))
    })
  },[])
  return (
    <>
    <center>
    <h2>Purrfect Performance</h2>
    </center>
    <center>Total Orders: {orders}</center>
    <center>Orders in progress: {ordersInProgress}</center>
    <center>Orders this month: {ordersThisMonth}</center>
    <center>Revenue: {revenue}</center>
    <center>
      <List orders={recentOrders}/>
    </center>

    </>
  );
}

export default App;
