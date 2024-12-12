"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductSection() {
  const products = [
    { 
      name: 'Lavender', 
      description: 'Calming and relaxing', 
      price: 29.99, 
      src: '/images/Lavender.png', 
      alt: "Lavender Oil" 
    },
    { 
      name: 'Peppermint', 
      description: 'Energizing and refreshing', 
      price: 27.99, 
      src: '/images/Peppermint.png', 
      alt: "Peppermint Oil" 
    },
    { 
      name: 'Lemon', 
      description: 'Uplifting and cleansing', 
      price: 24.99, 
      src: '/images/Lemon.png', 
      alt: "Lemon Oil" 
    },
    { 
      name: 'Frankincense', 
      description: 'Grounding and rejuvenating', 
      price: 89.99, 
      src: '/images/Frank.png', 
      alt: "Frankincense Oil" 
    },
  ]

  return (
    <section id="products" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Top Essential Oils</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="bg-white p-6 rounded-lg shadow-md">
              <Image 
                src={product.src} 
                alt={product.alt} 
                width={200} 
                height={200} 
                className="mx-auto mb-4"
                priority={true}
                placeholder="empty"
              />
              <h3 className="text-xl font-semibold text-green-600 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-bold text-green-800">${product.price}</p>

              <div>
                <Button 
                  type="button"
                  className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
                  View Detail
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}