const moment= require('moment');
const thisMonth=moment().format('YYYY-MM')

const getOrders=(data)=>{
    return data.length
}

const getOrdersThisMonth=(data)=>{
    console.log(thisMonth)
    return data.filter(order=>order.order_placed.slice(0,7)===thisMonth).length
}

const getOrdersInProgress=(data)=>{
    return data.filter(order=>order.order_status==='in_progress').length
}

const getRevenue=(data)=>{
    return data
        .map(order=>order.price)
        .reduce((a,b)=>b+a,0)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const getRecentOrders=(data)=>{
    return data.slice(0,10)
}

module.exports={getOrders,getOrdersInProgress,getOrdersThisMonth, getRevenue, getRecentOrders}