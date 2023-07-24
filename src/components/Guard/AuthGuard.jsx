import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

const AuthGuard = ({children}) => {

    const router = useRouter()
    const {token} = useAuth()

    useEffect(()=> {
        if(!router.isReady){
            return
        }
        if(!token && !localStorage.getItem("accessToken")){
            router.replace("/login")
        }
    }, [router.route]) // ** la dependencia está atenta a los cambios en la ruta de direccion del sitio
  return (
    <>{children}</>
  )
}

export default AuthGuard