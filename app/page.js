import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

export default function MainPage(){
  return (
    <div className="flex flex-col min-h-screen mx-auto justify-center bg-[#FFF5E4]">
      <h1 className='text-2xl mx-auto justify-center'>Click the Page below</h1>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul className='mx-auto justify-center space-y-4'>
          <li>
            <Button className="bg-[#FF9494] text-white hover:bg-[#FFD1D1] text-lg px-8 py-6">
              <Link href="/version1">
                Landing Page Version 1
              </Link>
            </Button>
          </li>
          <li>
          <Button className="bg-[#FF9494] text-white hover:bg-[#FFD1D1] text-lg px-8 py-6">
            <Link href="/version2">
              Landing Page Version 2
            </Link>
          </Button>
          </li>
          <li>
          <Button className="bg-[#FF9494] text-white hover:bg-[#FFD1D1] text-lg px-8 py-6">
            <Link href="/version3">
              Landing Page Version 3
            </Link>
          </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

