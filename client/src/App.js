import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import List from './components/list.js'
import LoadingSpin from "react-loading-spin";
import { getOrders, getOrdersInProgress, getOrdersThisMonth, getRecentOrders, getRevenue } from './helpers.js';

function App() {
  const [orders,setOrders]=useState([])
  const [ordersThisMonth,setOrdersThisMonth]=useState([])
  const [ordersInProgress, setOrdersInProgress]=useState([])
  const [revenue, setRevenue]=useState([])
  const [recentOrders, setRecentOrders]=useState([])
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
    axios('http://localhost:4000/').then(({data})=>{
      setOrders(getOrders(data))
      setOrdersThisMonth(getOrdersThisMonth(data))
      setOrdersInProgress(getOrdersInProgress(data))
      setRevenue(getRevenue(data))
      setRecentOrders(getRecentOrders(data))
      setLoading(false)
    }).catch((error)=>console.log(error))
  },[])
  return (
    <>
    <center>
    <h2>Purrformance</h2>
    </center>
    {loading? <center><LoadingSpin/></center>:
    <>
     <center><b>Total Orders:</b> {orders}</center>
     <center><b>Orders in progress:</b> {ordersInProgress}</center>
     <center><b>Orders this month:</b> {ordersThisMonth}</center>
      <center><b>Revenue:</b> £{revenue}</center>
      <center>
       <List orders={recentOrders}/>
      </center>
      </>
}
    </>
  );
}

export default App;
