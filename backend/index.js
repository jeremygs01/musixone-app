import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
dotenv.config()
const app = express()
app.use(cors({origin:process.env.CORS_ORIGIN||'*'}))
app.use(express.json())
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
app.get('/',(req,res)=>res.json({ok:true,msg:'Backend OK'}))
const PORT=process.env.PORT||10000
app.listen(PORT,()=>console.log('Backend on',PORT))
