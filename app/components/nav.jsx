import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Nav = () => {
  return (
    <nav className='flex justify-center p-[15px]'>
    <div className='flex items-center justify-between max-w-[1120px] w-full'>
    <div className='nav-logo'><Image src={'/icons/logo-icon.svg'} width={150} height={50} alt={'logo (wallet hack)'}/></div>
    <div className='flex gap-[3rem]'>
      <Link href={'#'}>Features</Link>
      <Link href={'#'}>Hack Tokens</Link>
      <Link href={'#'}>FaQs</Link>
    </div>
    <button className='flex justify-center items-center gap-[0.35rem] bg-button-color rounded-[20px] px-[18px] py-[5px] text-[0.9rem]'><Image src={'/icons/button-icon.svg'} width={15} height={15} alt={'logo inside button'} /><span>Trade</span></button>

    </div>
        </nav>
  )
}

export default Nav