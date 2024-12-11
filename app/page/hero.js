import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Transform Your Life with Young Living Essential Oils
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Experience the power of nature's purest essences for your health and well-being.
          </p>
          <Link href="#products" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">
            Explore Our Products
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image src="/placeholder.svg" alt="Young Living Essential Oils" width={600} height={400} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}
