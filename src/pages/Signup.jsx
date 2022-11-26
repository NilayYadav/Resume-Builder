import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import { Spinner } from "../components";
import { useAuth } from "../context/AuthProvider";

export function SignUp(){
    const { loginUserWithCredentials } = useAuth();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ spinner, setSpinner ] = useState(false);
    const inputClass = 'border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'

    async function newUserSignUp(){
        setSpinner(true)
        try {
            const api = "https://resume-builder.sauravkumar007.repl.co/user";
            const response = await axios.post(api, { name, username, email, password });
            if(response.status === 200){
                loginUserWithCredentials(email, password);
            }
        } catch (error) {
            console.log(error);
        }  
    }

    return (
        <div className="w-11/12 max-w-md m-auto mt-20 py-4 px-6 text-center border-2 border-coolGray rounded shadow-xl ">
            <h2 className="text-2xl font-bold text-grey mb-1">SignUp</h2>
            <div className="flex align-center flex-col">
                <input className={inputClass} 
                    type="text" 
                    placeholder="Name"
                    onChange={ (e) => setName(e.target.value) }
                    value={name}
                />
                <input className={inputClass} 
                    type="text" 
                    placeholder="Username"
                    onChange={ (e) => setUsername(e.target.value)}
                    value={username}
                />
                <input className={inputClass} 
                    type="email" 
                    placeholder="Email"
                    onChange={ (e) => setEmail(e.target.value)}
                    value={email}
                />
                <input className={inputClass} 
                    type="password" 
                    placeholder="Password"
                    onChange={ (e) => setPassword(e.target.value)}
                    value={password}
                />
                <input className={inputClass} 
                    type="password" 
                    placeholder="Re-Enter Password"
                    onChange={ (e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
            </div>
            <button className="w-full mt-3 bg-primary text-white text-lg font-bold py-2 px-10 hover:bg-btn_hover rounded"
                onClick={ newUserSignUp }
            > 
                { spinner ? <Spinner/> : "SignUp" }
            </button>
            <div className="mt-2 text-grey font-bold">
                <small>
                    Already have an account. 
                    <Link to="/login" className="text-primary">Login</Link>
                </small>
            </div>
        </div>
    )
}