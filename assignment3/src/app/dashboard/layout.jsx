'use client'
import React from "react";
import { useRouter } from "next/navigation";


function Page({ children }) {
    const router = useRouter()
    return ( 


        <div>
            {children}
          <button onClick={()=>router.push('/dashboard')}>go to dashboard</button>
          <button onClick={()=>router.push('/dashboard/profile')}>go to profile</button>
          <button onClick={()=>router.push('/dashboard/settings')}>go to settings</button>
        </div>
     );
}

export default Page;