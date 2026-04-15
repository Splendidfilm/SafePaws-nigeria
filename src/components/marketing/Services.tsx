// src/components/marketing/Services.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { Clock, Truck, MapPin } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Same-Day Urban Dash',
    description: 'Fast, reliable pet transportation within city limits. Our same-day service ensures your furry friend gets to their destination quickly and safely, with real-time updates and a stress-free experience.',
  },
  {
    icon: Truck,
    title: 'Interstate Comfort',
    description: 'Long-distance travel with scheduled pick-up and drop-off. Our interstate service offers climate-controlled vehicles, experienced drivers, and personalized care to ensure your pet’s comfort and safety throughout the journey.',
  },
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Peace of mind included. Track your pet’s location and status in real-time via our secure web app. Receive updates on their journey, estimated arrival time, and important notifications.',
  },
];

export default function Services() {
  return (
    <section id="services" className=" w-full  bg-[#F6F8F8] dark:bg-[#11211e] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full ">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <h3 className="text-[#17CFAD] font-bold text-lg tracking-wider uppercase">
            Our Services
          </h3>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            Tailored Logistics for Your<br className="hidden md:block" /> Four-legged Friends
          </h2>

          <p className="text-slate-700 dark:text-gray-400 text-lg max-w-2xl mt-4">
            At SafePaws Nigeria, we understand that your pets are family. Our comprehensive pet transportation services are designed to provide a safe, comfortable, and stress-free travel experience for your furry companions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}