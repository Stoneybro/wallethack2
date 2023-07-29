'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import coin from '../../public/svgs/coin.svg'
import eth from '../../public/svgs/eth.svg'
import caret from '../../public/svgs/caret.svg'
import shield from '../../public/svgs/shield.svg'
import { motion } from 'framer-motion'
const Orderdemo = () => {
    const [coinx,setCoinx]=useState('')
    const [ethx,setEthx]=useState('0.0')
    const [shieldx,setShieldx]=useState(0.0)
    const [popup,setPopup]=useState()
    const [pop,setPop]=useState()
    function setbutton(color,firstcoin,firstamount,secondamount,secondcoin) {
        setPopup(
            {
                color:color,firstamount:firstamount,firstcoin:firstcoin,secondamount:secondamount,secondcoin:secondcoin
            }
        )

    }
    useEffect(()=>{
        setPop(popup)
    },[popup])
    useEffect(()=>{
        
        if (coinx>1) {
            setCoinx(coinx.replace(/[^\d.]/g, ''))
            
        }else if (!coinx) {
            setCoinx('')
            setEthx('0.0')
            setShieldx('0.00')
        }
      
        if (coinx>=0 && coinx) {
            setShieldx((parseFloat(coinx)*0.1).toFixed(2))
            setEthx((parseFloat(coinx)*0.0008).toFixed(2))
        }
      
      
    },[coinx])
  return (
    <div className='z-10 mb-[80px] '>
        <div className="order-shadow">
            
        </div>
    <main className="py-4 max-w-[1000px] mx-auto w-full border border-[#178EF233] rounded-[20px] bg-primary">
        <div className="text-[#ffffff7f] my-[50px] text-center">
        Drag and drop and trade multiple tokens at once and Hack your crypto profit
        </div>
        <div className="w-[741px] mx-auto flex flex-col items-center gap-[30px]">
        <div className="w-[741px] mx-auto flex  justify-between ">
            <div className="bg-[#60cf8311] border-[1px] border-[#a1eb90] rounded-lg h-[130px] w-[100px] flex items-center justify-center relative transition-all duration-500 ease-out after:absolute after:top-[50%] after:left-[100%] after:w-[115px] after:h-[2px] after:bg-secondary">
                <div className="m-auto transition-all duration-300 ease-out  flex justify-center items-center w-full h-full group/card"><Image src={coin} className='transition-all duration-300 ease-out group-hover/card:w-14' /></div>
                <div className="text-secondary rounded-full h-[24px] w-[24px] border-secondary border-[1px] absolute flex justify-center items-center top-[42%] left-[145%] z-10 bg-primary">+</div>
            </div>
          
            <div className=" bg-[#60cf8311] border-[1px] border-[#a1eb90] rounded-lg h-[130px] w-[100px] flex items-center justify-center relative transition-all duration-500 ease-out after:absolute after:top-[50%] after:left-[100%] after:w-[115px] after:h-[2px] after:bg-secondary">
            <div className="m-auto transition-all duration-300 ease-out  flex justify-center items-center w-full h-full group/card"><Image src={shield} className='transition-all duration-300 ease-out group-hover/card:w-14'/></div>
                <div className="text-secondary rounded-full h-[24px] w-[24px] border-secondary border-[1px] absolute flex justify-center items-center top-[42%] left-[145%] z-10 bg-primary">+</div>
            </div>

            <div className="bg-[#60cf8311] border-[1px] border-[#a1eb90] rounded-lg h-[130px] w-[100px] flex items-center justify-center relative transition-all duration-500 ease-out after:absolute after:top-[50%] after:left-[100%] after:w-[115px] after:h-[2px] after:bg-secondary">
            <div className="m-auto transition-all duration-300 ease-out  flex justify-center items-center w-full h-full group/card"><Image src={eth} className='transition-all duration-300 ease-out group-hover/card:w-[4.5rem]' /></div>
                <div className="text-secondary rounded-full h-[24px] w-[24px] border-secondary border-[1px] absolute flex justify-center items-center top-[42%] left-[145%] z-10 bg-primary">+</div>
            </div>

            <div className="bg-[#60cf8311] border-[1px] border-[#a1eb90] rounded-lg h-[130px] w-[100px] flex items-center justify-center relative transition-all duration-500 ease-out cnone">
            <div className="m-auto transition-all duration-300 ease-out  flex justify-center items-center w-full h-full group/card"><Image src={coin} className='transition-all duration-300 ease-out group-hover/card:w-14' /></div>
            </div>
        </div>


        <div className="flex justify-between items-center w-full">

        <div className="relative"><div className="w-[100px] flex justify-center items-center border border-[#178EF233] rounded"><input className=' text-sm border-0 outline-none bg-primary w-full text-button-color p-[10px] rounded h-[40px]' type="text" value={coinx} onChange={(e)=>setCoinx(e.target.value)} placeholder='0' /></div><span className='absolute text-[8px] right-0 text-[#ffffff80] mt-1'>10,998.99 USDC</span> </div>

        <button className="h-[40px] w-[90px] flex  items-center bg-button-color px-[10px] rounded text-white text-xs justify-between" onClick={()=>setbutton('blue','USDC',coinx,0.1,'XLM')}>0.1<Image src={caret} /></button>
        <div className="relative"><div className="w-[100px] flex justify-center items-center border border-[#178EF233] rounded"><input className=' text-sm border-0 outline-none bg-primary w-full text-button-color p-[10px] rounded h-[40px]' type="text"  value={shieldx} placeholder='0'  /></div><span className='absolute text-[8px] right-0 text-[#ffffff80] mt-1'>2203.23 XLM</span></div>
        <button className="h-[40px] w-[90px] flex  items-center bg-button-color px-[10px] rounded text-white text-xs justify-between" onClick={()=>setbutton('green','XLM',shieldx,0.008,'ETH')}>0.00008<Image src={caret} /></button>
        <div className="relative"><div className="w-[100px] flex justify-center items-center border border-[#178EF233] rounded"><input className=' text-sm border-0 outline-none bg-primary w-full text-button-color p-[10px] rounded h-[40px]' type="text" placeholder='0' value={ethx} /></div><span className='absolute text-[8px] right-0 text-[#ffffff80] mt-1'>0.02382 ETH</span></div>
        <button className="h-[40px] w-[90px] flex  items-center bg-button-color px-[10px] rounded text-white text-xs justify-between" onClick={()=>setbutton('gold','ETH',ethx,0.000725,'USDC')}>0.000725<Image src={caret} /></button>
        <div className="relative"><div className="w-[100px] flex justify-center items-center border border-[#178EF233] rounded"><input className=' text-sm border-0 outline-none bg-primary w-full text-button-color p-[10px] rounded h-[40px]' type="text" value={coinx} placeholder='0' /></div><span className='absolute text-[8px] right-0 text-[#ffffff80] mt-1'>10,998.99 USDC</span></div>
       
        </div>


      {          <div className=" bg-card border-[#178EF233] border flex justify-center items-center p-2 text-sm w-[390px] gap-[6px] rounded my-6 ">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8.18164" cy="8" r="8" fill={pop?.color || "#65925C"}/>
                        </svg>
        <div className="">Buy order created: for {pop?.firstamount||100} {pop?.firstcoin||'XLM'} / {pop?.secondamount||0.008} {pop?.secondcoin||'ETH'}</div>
                </div>}
                </div>
    </main>
    </div>
  )
}

export default Orderdemo