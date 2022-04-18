import moment from 'moment';
const thisMonth=moment().format('MM/YYYY')

export const getOrders=(data)=>{
    return data.length
}

export const getOrdersThisMonth=(data)=>{
    return data.filter(order=>moment(order.order_placed).isSame(thisMonth,'month')).length
}

export const getOrdersInProgress=(data)=>{
    return data.filter(order=>order.order_status==='in_progress').length
}

export const getRevenue=(data)=>{
    return data
        .map(order=>order.price)
        .reduce((a,b)=>b+a,0)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const getRecentOrders=(data)=>{
    return data.slice(0,10)
}