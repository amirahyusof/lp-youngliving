
import Link from 'next/link'
import React from 'react'
import HeroSection from '@/app/version1/hero'
import AboutSection from '@/app/version1/about'
import ProductSection from '@/app/version1/product'
import TestimonialSection from '@/app/version1/testimonial'
import CTASection from '@/app/version1/cta'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-600">EssentialLife</Link>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="text-gray-600 hover:text-green-600">About</Link></li>
            <li><Link href="#products" className="text-gray-600 hover:text-green-600">Products</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-green-600">Testimonials</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-green-600">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <TestimonialSection />
        <CTASection />
      </main>

      <footer className="bg-gray-100 mt-auto">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">© 2024 EssentialLife. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}