const { getOrders, getOrdersInProgress, getOrdersThisMonth, getRevenue } =require ('../helpers.js')

const orders=[
    {order_status:'in_progress',order_placed:'2022-04-01',price:1} ,
    {order_status:'complete',order_placed:'2021-04-01',price:2},
    {order_status:'complete',order_placed:'2022-04-02',price:4}
]

test('returns correct count', ()=>{
    expect(getOrders(orders)).toBe(3)
}) 

test('returns correct orders in progress', ()=>{
    expect(getOrdersInProgress(orders)).toBe(1)
}) 

test('returns correct orders this month', ()=>{
    expect(getOrdersThisMonth(orders)).toBe(2)
}) 

test('returns correct revenue', ()=>{
    expect(getRevenue(orders)).toBe('7.00')
}) 