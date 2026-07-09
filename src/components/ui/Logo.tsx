'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
// import "../../app/globals.css";
function Logo() {
  const router = useRouter()
  return (
    // 🐾
 <div  className="flex items-center gap-2 cursor-pointer"
 onClick={() => router.push('/')}
 >
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center"
            style={{ background: "var(--color-primary)" }}
          >
            <span className="text-xs  material-symbols-outlined ">pets</span>
          </div>
          <span className="font-bold text-white text-lg tracking-tight">SafePaws</span>
        </div>
  );
}

export default Logo