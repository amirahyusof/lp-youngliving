import { Button } from "@chakra-ui/react";
import React from "react";

export default function CTASection() {
  return (
    <section id="contact" className="bg-green-600 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Wellness Journey?</h2>
        <p className="text-xl text-green-100 mb-8">Join our community and discover the power of Young Living essential oils today!</p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-full mb-4 text-gray-800"
            required
          />
          <Button
            type="submit"
            className="bg-white text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300"
          
          >
            Get Started
          </Button>
        </form>
      </div>
    </section>
  )
}