'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from '@chakra-ui/react'

export default function BlackSeedOilPage() {
  const [isClient, SetIsClient] = useState(false)

  useEffect(() => {
    SetIsClient(true)
  }, [])
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#FFF4D2] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/sunburst.svg')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-2 inline-block">
                <span className="text-green-600">✨ Minyak Biji Hitam Premium</span>
              </div>
              <h1 className="text-4xl text-[#A8D5BA] md:text-6xl font-bold">
                BLACK SEED OIL YOUNG LIVING
              </h1>
              <p className="text-xl opacity-90 text-gray-400">
                Solusi semula jadi untuk keselesaan badan anda setiap hari
              </p>
              <Button className="bg-[#A8D5BA] text-white hover:bg-green-100 hover:text-black text-lg px-8 py-6">
                Pesan Sekarang
              </Button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <Image
                  src="/placeholder.svg"
                  alt="Black Seed Oil Young Living"
                  width={600}
                  height={400}
                  className="rounded-lg transform rotate-3 shadow-xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-lg p-4 shadow-lg">
                  <p className="text-blue-900 font-bold">100% Semula Jadi</p>
                  <p className="text-blue-800">Kualiti SEED TO SEAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section id="product" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A8D5BA] mb-12">
            Kenapa BLACK SEED OIL YOUNG LIVING?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Manfaat Utama:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="text-green-500 mt-1 mr-2" />
                  <span>Membantu mengurangkan keradangan ringan</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-green-500 mt-1 mr-2" />
                  <span>Menyokong kesihatan sistem imun</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-green-500 mt-1 mr-2" />
                  <span>Kaya dengan antioksidan</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="text-green-500 mt-1 mr-2" />
                  <span>Sesuai untuk penggunaan harian</span>
                </li>
              </ul>
            </div>
            <div>
              <Image
                src="/placeholder.svg"
                alt="Black Seed Oil Benefits"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FFF4D2] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A8D5BA] mb-12">
            Apa Kata Pengguna Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card.Root key={index} className="bg-white">
                <Card.Body className="p-6">
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold text-green-900">{testimonial.name}</p>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#A8D5BA] mb-12">
            Mengapa Memilih BLACK SEED OIL YOUNG LIVING?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {benefits.map((benefit, index) => (
              <Card.Root key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-[#FFF4D2]">
                <Card.Body className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card.Body>
              </Card.Root>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#A8D5BA] mb-8">
            Mulakan Perjalanan Kesihatan Anda Hari Ini!
          </h2>
          <p className="text-xl text-green-900 mb-8 max-w-2xl mx-auto">
            Jangan biarkan ketidakselesaan menghalang anda. Dapatkan BLACK SEED OIL YOUNG LIVING sekarang!
          </p>
          <Button className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 text-lg px-8 py-6">
            Hubungi Kami Untuk Pesanan
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#A8D5BA] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg text-[#FFF4D2] font-semibold mb-4">Hubungi Kami</h3>
              <p className="text-white">Email: info@essentiallife.com</p>
              <p className="text-white">Telefon: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white text-center text-white">
            <p>© {new Date().getFullYear()} EssentialLife. Hak Cipta Terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const testimonials = [
  {
    quote: "Saya rasa lebih bertenaga dan selesa setiap hari sejak menggunakan Black Seed Oil ini!",
    name: "Aminah S."
  },
  {
    quote: "Kualiti minyak ini sangat bagus. Ia telah membantu meningkatkan sistem imun saya.",
    name: "Farid M."
  },
  {
    quote: "Saya suka bagaimana ia membantu mengurangkan ketidakselesaan badan saya secara semula jadi.",
    name: "Nurul H."
  }
]

const benefits = [
  {
    title: "100% Semula Jadi",
    description: "Diekstrak menggunakan teknik penyulingan ketat untuk mengekalkan ketulenan dan potensi.",
    icon: <span className="text-2xl">🌿</span>
  },
  {
    title: "Kualiti SEED TO SEAL",
    description: "Kami mengawal setiap langkah proses pengeluaran untuk memastikan standard kualiti tertinggi.",
    icon: <span className="text-2xl">🌱</span>
  },
  {
    title: "Dipercayai Ramai",
    description: "Dipercayai oleh pengguna yang mencari penyelesaian semula jadi untuk menyokong kesihatan badan.",
    icon: <span className="text-2xl">🌟</span>
  }
]

