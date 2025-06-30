import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000

// ✅ CORS setup
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'https://delish-deliver-1-git-master-dhanushs-projects-adfe2c73.vercel.app',
  'https://your-vercel-custom-domain.com' // if you added a custom domain
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));


// middleware
app.use(express.json())

// db connection
connectDB()

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // or use your allowed origin
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin'); // <== Very important for images
  next();
}, express.static('uploads'));

app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.send('API Working')
})

app.listen(port, () => {
  console.log(`server started on http://localhost:${port}/`)
})
