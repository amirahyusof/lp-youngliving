'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from '@chakra-ui/react'
import { Card } from '@chakra-ui/react'
import HeroImage from "@/public/images/hero-section.jpg"
import Lavender from "@/public/images/Lavender.png"
import Peppermint from "@/public/images/Peppermint.png"
import Lemon from "@/public/images/Lemon.png"
import Frankincense from "@/public/images/Frank.png"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient){
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              EssentialLife
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <Link href="#products" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-blue-500 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sunburst.svg')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white space-y-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                <span className="text-white">✨ Premium Essential Oils</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                Transform Your Life with Natural Wellness
              </h1>
              <p className="text-xl opacity-90">
                Discover the power of pure essential oils for your daily wellness routine
              </p>
              <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-6">
                Explore Collection
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <Image
                  src={HeroImage}
                  alt="Essential Oils Collection"
                  width={600}
                  height={400}
                  className="rounded-lg transform rotate-3 shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-lg p-4 shadow-lg">
                  <p className="text-blue-900 font-bold">12 Premium Oils</p>
                  <p className="text-blue-800">100% Pure & Natural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="search"
              placeholder="Search for essential oils..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-blue-100 focus:border-blue-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card.Root key={product.name} className="group hover:shadow-xl transition-shadow duration-300">
                <Card.Body className="p-4">
                  <div className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="rounded-lg w-full object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-2 right-2 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-blue-900">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Why Choose Young Living Essential Oils?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card.Root key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <Card.Body className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their lives with Young Living Essential Oils
          </p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-6">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-blue-200">
                Premium essential oils for your wellness journey.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-blue-200 hover:text-white">Products</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-blue-200 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">Email: info@essentiallife.com</li>
                <li className="text-blue-200">Phone: (555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-blue-800 border-blue-700 text-white placeholder-blue-400"
                />
                <Button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
            <p>© {currentYear} EssentialLife. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const products = [
  {
    name: "Lavender Essential Oil",
    description: "Calming and relaxing blend for peaceful sleep",
    price: 29.99,
    image: Lavender,
    badge: "Best Seller"
  },
  {
    name: "Peppermint Vitality",
    description: "Refreshing oil for energy and focus",
    price: 27.99,
    image: Peppermint,
    badge: "New"
  },
  {
    name: "Lemon Essential Oil",
    description: "Uplifting citrus for natural cleaning",
    price: 24.99,
    image: Lemon
  },
  {
    name: "Frankincense",
    description: "Ancient oil for spiritual wellness",
    price: 89.99,
    image: Frankincense,
    badge: "Premium"
  }
]

const benefits = [
  {
    title: "100% Pure",
    description: "Our oils are extracted using strict distillation techniques to maintain purity and potency.",
    icon: <span className="text-2xl">🌿</span>
  },
  {
    title: "Seed to Seal",
    description: "We control every step of the production process to ensure the highest quality standards.",
    icon: <span className="text-2xl">🌱</span>
  },
  {
    title: "Sustainable",
    description: "Our commitment to the environment ensures responsible sourcing and production methods.",
    icon: <span className="text-2xl">🌍</span>
  }
]



