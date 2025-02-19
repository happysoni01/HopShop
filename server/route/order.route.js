import { Router } from 'express'
import auth from '../middleware/auth.js'
import { CashOnDeliveryOrderController, getOrderDetailsController, paymentController, webhookStripe } from '../controllers/order.controller.js'

const orderRouter = Router()

orderRouter.post("/cash-on-delivery",auth,CashOnDeliveryOrderController)
orderRouter.post('/checkout',auth,paymentController)
orderRouter.post('/webhook',webhookStripe)
orderRouter.get('/webhook', (req, res) => {
    res.status(200).json({ message: "Webhook endpoint only accepts POST requests." });
});

orderRouter.get("/order-list",auth,getOrderDetailsController)

export default orderRouter