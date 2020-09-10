import order from './orderAction';
import orderPayment from'./orderPaymentAction';

const {
    addOrder,
    getClientOrders,
    getAllOrders,
    getOrder,
    cancelOrder,
    deliverOrder,
} = order;

export { addOrder, orderPayment, getClientOrders, getAllOrders, getOrder, cancelOrder,deliverOrder };