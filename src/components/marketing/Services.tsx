import React from 'react'
import ServiceCard from '../ui/ServiceCard'
import { Clock, Truck, MapPin } from 'lucide-react'

function Services() {
    const services = [
        {icon: Clock, title: 'Same-Day Urban Dash', description: 'Fast, reliable pet/animal transportation within city limits. Our same-day service ensures your furry friend gets to their destination quickly and safely, with real-time updates and a stress-free experience.'},

        {icon: Truck, title: 'Interstate Comfort', description: 'Long-distance travel with scheduled pick-up and drop-off. Our interstate service offers climate-controlled vehicles, experienced drivers, and personalized care to ensure your pet’s/animals comfort and safety throughout the journey.'},
        
        {icon: MapPin, title: "Live GPS Tracking", description: "Peace of mind included. Track your pet's/animals location and status in real-time via our secure web app linked to your booking. Receive updates on their journey, estimated arrival time, and any important notifications, ensuring you stay connected every step of the way."},
    ]
  return (
    <section id='Services' className='flex flex-col gap-14 items-center justify-around p-5  bg-[#F6F8F8]' >
<div className='flex flex-col items-center gap-4.5' >
            <h3 className='text-[#17CFAD] font-bold text-lg' >Our Services</h3>
        <h1 className='text-3xl font-bold text-slate-900 text-center '>Tailored Logistics for Your Four-legged<br/> Friends</h1>
        <p className='text-slate-700 text-lg max-w-2xl text-center'>At SafePaws Nigeria, we understand that your pets are family. Our comprehensive pet transportation services are designed to provide a safe, comfortable, and stress-free travel experience for your furry companions. Whether you need to move across town or across the country, we have you covered.</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center place-content-evenly ' >
 {services.map((services, index) =>(
    <ServiceCard
    key={index} 
    icon={services.icon}
    title={services.title}
    description={services.description}
    />
 ))}
</div>

    </section>
  )
}

export default Services