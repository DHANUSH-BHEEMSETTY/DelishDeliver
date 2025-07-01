import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import 'dotenv/config'

// ✅ App config
const app = express()
const port = process.env.PORT || 4000

// ✅ Allowed Frontend Origins (localhost + Vercel)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://delish-deliver-1.vercel.app',
  'https://delish-deliver-1-git-master-dhanushs-projects-adfe2c73.vercel.app',
  'https://delishdeliver-1.onrender.com',
  'https://admin-delish-deliver.vercel.app'  // ✅ Your admin frontend on Vercel
]

// ✅ CORS middleware — must be before any routes
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS: ' + origin))
    }
  },
  credentials: true
}))

// ✅ Parse JSON bodies
app.use(express.json())

// ✅ Connect to MongoDB
connectDB()

// ✅ Serve image files with proper headers
app.use('/images', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // or specific origin
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin') // for image access
  next()
}, express.static('uploads'))

// ✅ Routes
app.use('/api/food', foodRouter)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// ✅ Root route
app.get('/', (req, res) => {
  res.send('API Working')
})

// ✅ Start server
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`)
})
