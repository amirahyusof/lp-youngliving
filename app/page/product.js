"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Lavender from "@/public/images/Lavender.png"
import Peppermint from "@/public/images/Peppermint.png"
import Lemon from "@/public/images/Lemon.png"
import Frankincense from "@/public/images/Frank.png"


export default function ProductSection() {
  const products = [
    { name: 'Lavender', description: 'Calming and relaxing', price: 29.99, src: Lavender, alt: "Lavender Oil" },
    { name: 'Peppermint', description: 'Energizing and refreshing', price: 27.99, src: Peppermint, alt: "Peppermint Oil" },
    { name: 'Lemon', description: 'Uplifting and cleansing', price: 24.99, src: Lemon, alt: "Lemon Oil" },
    { name: 'Frankincense', description: 'Grounding and rejuvenating', price: 89.99, src: Frankincense, alt: "Frankincense Oil" },
  ]

  return (
    <section id="products" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Top Essential Oils</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={product.src} alt={product.alt} width={200} height={200} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-green-800">${product.price}</p>
              <Button 
                type="submit"
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
               Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}