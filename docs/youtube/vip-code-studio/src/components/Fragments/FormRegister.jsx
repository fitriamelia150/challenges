import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return (
        <form action="">
          <InputForm label="Full Name" type="text" placeholder="Full Name" name="fullname"/>
          <InputForm label="Email" type="email" placeholder="example@gmail.com" name="email"/>
          <InputForm label="Password" type="password" placeholder="****" name="password"/>  
          <InputForm label="Confirm Password" type="password" placeholder="****" name="password"/>  
          <Button variant="bg-blue-600">Register</Button>        
        </form>
    )
}

export default FormRegister