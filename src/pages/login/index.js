import LoginForm from "@/components/login/LoginForm"

const Login = ( ) => {
    return <LoginForm/>
}

Login.guestGuard = true // ** seteado de flag para cambio de ruta
export default Login