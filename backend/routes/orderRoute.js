import express from 'express'
import authMiddleware from '../middleware/auth.js'
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyOrder
} from '../controllers/orderController.js'
import orderModel from '../models/orderModel.js'

const orderRouter = express.Router()

orderRouter.post('/place', authMiddleware, placeOrder);
orderRouter.post('/verify', verifyOrder);
orderRouter.post('/userorders', authMiddleware, userOrders);
orderRouter.get('/list', listOrders);
orderRouter.post('/status', updateStatus);

// 🚨 TEMP: Clear all orders
orderRouter.delete('/clear', async (req, res) => {
  try {
    await orderModel.deleteMany({});
    res.json({ success: true, message: 'All orders deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to delete orders' });
  }
});

export default orderRouter;
