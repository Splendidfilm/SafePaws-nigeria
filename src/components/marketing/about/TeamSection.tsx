// src/components/marketing/about/TeamSection.tsx
'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamSection() {
  const team = [
    {
      name: "Dr. Amara Oke",
      role: "Chief Veterinarian",
      image: "/images/Amara.png",
      title: "Medical Oversight"
    },
    {
      name: "Tunde Bakare",
      role: "Lead Handler",
      image: "/images/Tunde.png",
      title: "Logistics Expert"
    },
    {
      name: "Chioma Uzor",
      role: "Support Head",
      image: "/images/Amara.png",
      title: "Client Success"
    },
    {
      name: "Ibrahim Musa",
      role: "Regional Director",
      image: "/images/Ibrahim.png",
      title: "Operations"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Our Expert Handlers</h2>
            <p className="text-gray-600">
              The heart of SafePaws is our team of dedicated professionals who bring years of veterinary and handling experience to every trip.
            </p>
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-[#17CFAD] transition-colors">
            Join the Team
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="aspect-3/4 rounded-3xl overflow-hidden mb-4 relative">
                <Image 
                  src={member.image}
                  alt={member.name}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute bottom-4 left-4 right-4 transition-all duration-300">
                  <motion.div
                  className="bg-white/90 backdrop-blur-md p-4 rounded-2xl">
                    <p className="text-xs font-bold text-[#17CFAD] uppercase tracking-wider">{member.role}</p>
                  </motion.div>
                </motion.div>
              </div>
              <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
              <p 
              className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}