import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const focusRef = useRef();

    console.log(focusRef)

    const initialForm = {
        username : "",
        email : "",
        password : ""
    }

    const{formState, onInputChange} = useForm(initialForm);

    const {username, email, password} = formState;

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(formState);
    }


    useEffect(() => {
        focusRef.current.focus();
    }, [])
    

  return (
    <>
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label htmlFor="exampleInputUser1" className="form-label">User name: </label>
            <input 
                type="text" 
                className="form-control" 
                name="username" 
                placeholder="Enter your Username"
                value = {username}
                onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address: </label>
            <input 
                ref={focusRef}
                type="email" 
                className="form-control" 
                name="email" 
                placeholder="Enter your Email"
                value = {email}
                onChange={onInputChange}
            />
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password: </label>
            <input 
                type="password" 
                className="form-control" 
                name="password"
                placeholder="Password"
                value = {password}
                onChange={onInputChange}
            />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
