import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeaderSection(){
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 shadow-md shadow-emerald-600 border-emerald-100 bg-white/95 backdrop-blur-md ">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#48615b]">Essentique</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-emerald-900">
          <Link href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Products
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            About Me
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Benefits
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700 w-32">
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  )
}

