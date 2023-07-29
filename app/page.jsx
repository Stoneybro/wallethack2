'use client'


import { Poppins,Open_Sans } from 'next/font/google'
import Hero from './components/Hero'
import Orderdemo from './components/orderdemo'
const poppins = Poppins({ 
  subsets: ['latin'] ,
  weight:['100','200','300','400','500','600','700','800','900']
})
const openSans = Open_Sans({ 
  subsets: ['latin'] ,
  weight:['300','400','500','600','700','800']
})

export default function Home() {

  return (
    
    <div>
       <Hero />
       <Orderdemo />
    </div>
  )
}
