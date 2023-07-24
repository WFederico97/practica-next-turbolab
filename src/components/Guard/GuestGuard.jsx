import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const GuestGuard = ({children}) => {
    const {token} = useAuth()
    const router = useRouter()
    useEffect(()=>{
        if(!router.isReady){
            return
        }
        
        if(localStorage.getItem("accessToken")){
            router.replace("/protected")

        }
    },[])
  return (
    <>{children}</>
  )
}

export default GuestGuard