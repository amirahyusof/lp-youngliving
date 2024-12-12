import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

export default function MainPage(){
  return (
    <div className="flex flex-col min-h-screen">
      <h1>Click the Page below</h1>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ul>
          <li className="flex space-x-4">
            <Link href="/version1">
              <Button>Landing Page Version 1</Button>
            </Link>
          </li>
          <li>
            <Link href="/version2">
              <Button>Landing Page Version 2</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

