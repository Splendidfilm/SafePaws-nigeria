'use client'

import { useParams } from 'next/navigation';
import ApplicationForm from '@/components/marketing/careers/ApplicationForm';


const jobData: Record<string,string> = {
    "pet-handler": "Pet Handler Specialist",
  "customer-success": "Customer Success Champion",
  "logistics-coordinator": "Logistics Coordinator",
  "full-stack-engineer": "Full-Stack Engineer",
}


export default function Applypage() {
    const params = useParams()
    const slug = params.slug as string;

    const jobTitle = jobData[slug] || "Position"
  return (
    <div className='min-h-screen bg-gray-50 ' >
        <ApplicationForm jobTitle={jobTitle} />
    </div>
  )
}
