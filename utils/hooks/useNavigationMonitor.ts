'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react";

export function useNavigationMonitor() {
  const path = usePathname();
  const searchParams = useSearchParams();

  useEffect(()=>{
    const url = `${path}?${searchParams}`;
    if(!path.includes('/checkout')){
      alert('hey bitch')
    }

  }, [path,searchParams])

  return null;

}