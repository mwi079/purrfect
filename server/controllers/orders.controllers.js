import Airtable from 'airtable'
import dotenv from 'dotenv';
dotenv.config()
const apiKey=process.env.KEY
const airtable=new Airtable({apiKey}).base('app8wLQrrIMrnn673')

export const allOrders= async (ctx, next)=>{
    const result=[];
    try{
    await airtable('Orders')
        .select({view: 'Grid view',sort:[{field:'order_placed',direction:'desc'}]})
        .eachPage((orders,fetchNextPage)=>{
            orders.forEach((order)=>{
                console.log('Thinking about it...')
                result.push({
                    order_id:order.get('order_id'),
                    order_placed:order.get('order_placed'),
                    product_name:order.get('product_name'),
                    price:order.get('price'),
                    order_status: order.get('order_status')
                })
            })
            fetchNextPage()
        }).then(()=>{
            ctx.body=result
            ctx.status=200
            next()  
       })
    }
    catch(error){
        ctx.body=error
        ctx.status=500
    }
  
};




