import React from "react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Why Choose Young Living?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">100% Pure</h3>
            <p className="text-gray-600">Our oils are extracted using strict distillation techniques to maintain purity and potency.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Seed to Seal Promise</h3>
            <p className="text-gray-600">We control every step of the production process to ensure the highest quality standards.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Sustainable Practices</h3>
            <p className="text-gray-600">Our commitment to the environment ensures responsible sourcing and production methods.</p>
          </div>
        </div>
      </div>
    </section>
  )
}