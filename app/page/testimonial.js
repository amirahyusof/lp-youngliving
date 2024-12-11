import React from "react"

export default function TestimonialSection() {
  const testimonials = [
    { name: 'Sarah K.', quote: 'Young Living oils have transformed my daily wellness routine. I feel more energized and balanced!' },
    { name: 'Mike R.', quote: 'The quality of these oils is unmatched. I use them for everything from cleaning to relaxation.' },
    { name: 'Emily L.', quote: "I love how versatile these oils are. They've helped me create a more natural lifestyle for my family." },
  ]

  return (
    <section id="testimonials" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <p className="text-green-600 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}