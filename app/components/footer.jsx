import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const Footer = () => {
  return (
    <footer className='bg-[#0E1826] flex flex-col px-4 py-6 gap-4'>
    <div className='flex items-center max-w-[1120px] mx-auto justify-between w-full'>
    <div className='footer-logo'><Image src={'/icons/footer-logo.svg'} width={150} height={50} alt={'logo (wallet hack)'}/></div>
    <div className='flex gap-12'>
      <Link href={'#'}>Features</Link>
      <Link href={'#'}>Hack Tokens</Link>
      <Link href={'#'}>FaQs</Link>
    </div>
        <div className="flex gap-4">
            <Link href={'#'}><Image src={'/icons/Social.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/medium-logo.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/reddit.svg'} width={30} height={30} /></Link>
            <Link href={'#'}><Image src={'/icons/youtube-logo.svg'} width={30} height={30}/></Link>
        </div>
    </div>
    
        <div className='mx-auto text-[#ffffff94]'>2023 Wallethack</div>
        </footer>
  )
}

export default Footer