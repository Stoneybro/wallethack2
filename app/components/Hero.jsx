import React from 'react'
import Image from 'next/image'
import Herosvg from './herosvg'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <>
     <main className=' overflow-hidden flex max-w-[1120px] px-[15px] mx-auto w-full z-10'>
        
        <div className="  flex w-1/2 flex-col justify-center gap-[0.7rem]">
            <motion.div
            initial={{opacity:0,translateX:-100}}
            animate={{opacity:1,translateX:0}}
            transition={{duration:0.8}}
            className="text-5xl">
            The best way to<br/> trade tokens on the <br/>
                <span className='text-secondary'>Stellar DEX</span>
            </motion.div>
            <div className="text-[#ffffffcc] mb-[0.7rem]">
            Easily automate multiple trades at once with our drag and drop interface. It’s time to HACK your crypto profit.
            </div>
            <div>
            <motion.button
            whileHover={{scale:1.05}}
            className=" flex justify-center items-center gap-[0.35rem] bg-button-color rounded-[20px] px-[18px] py-[5px] text-[0.9rem]"> <Image src={'/icons/button-icon.svg'} width={15} height={15} alt={'logo inside button'} /><span>Start trade</span></motion.button>
            </div>
        </div>
        <div className=" -mt-16 w-1/2 -ml-[70px]">
    <Herosvg />
        </div>
    </main>
    </>
   
  )
}

export default Hero