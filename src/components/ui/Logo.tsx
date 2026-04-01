import React from 'react'
// import "../../app/globals.css";
function Logo() {
  return (
    <div className="flex items-center gap-4 text-foreground">
      <div className="size-8 bg-[#D1F5EF] flex items-center justify-center rounded-lg text-[#17CFAD]">
        <span className="material-symbols-outlined">pets</span>
      </div>
      <h2 className=" text-lg text-emerald-900 font-bold tracking-[-0.015em]">
        SafePaws Nigeria
      </h2>
    </div>
  );
}

export default Logo