"use client"
import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'


export default function HeroSection(){
  return (
    <section className="relative h-[600px] bg-cover bg-no-repeat mx-auto flex items-center justify-center"
      style={{ backgroundImage: "url('/images/abstract.png')" }}>
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
      <div className="z-10 px-4 max-w-2xl tex-center space-y-6">
        <div className="flex mx-auto items-center">
          <div className="space-y-6">
            <Badge className="bg-yellow-400 text-emerald-800 px-3 py-1 text-sm">
              Premium Young Living Essential Oils
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4">
              Elevate Your Wellness with Nature's Essence
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-6">
              Hi! I'm your personal Young Living consultant. Let me help you discover the transformative power of pure, therapeutic-grade essential oils.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 gap-2 w-40"
                onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20learning%20more%20about%20Young%20Living%20Essential%20Oils", "_blank")}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 bg-white text-emerald-600 hover:bg-emerald-50 w-40"
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Oils
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mt-6">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              type="search"
              placeholder="Search for essential oils..."
              className="pl-10 border-emerald-200 bg-white focus-visible:ring-emerald-500"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}

