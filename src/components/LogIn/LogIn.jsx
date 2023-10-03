import React, { useContext, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authinfo } from '../../provider/Authcontext/Authcontext';

const LogIn = () => {
    const [error,seterror]=useState("")
    const location=useLocation()
    const navigate=useNavigate()
    const [passwordshow,setpasswordshow]=useState(false)
    const {signinUser}=useContext(Authinfo)
    let from = location.state?.from?.pathname || "/";
    const hanldefrom = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signinUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        navigate(from, { replace: true })
    }

    return (
        <div className="hero min-h-screen  bg-base-200">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full lg:w-[400px]  shadow-2xl bg-base-100">
                    <form onSubmit={hanldefrom} className="card-body">
                    <h1 className='text-center text-3xl'>Please Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative'>
                            <input  type={`${passwordshow ? 'text':'password'}`} name="password" placeholder="password" className="input w-full input-bordered" />
                            <h1 onClick={()=>setpasswordshow(!passwordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{passwordshow ? <AiFillEye size={22}/>:<BsEyeSlashFill size={20}/>}</h1>
                            </div>
                            {error && <h1 className='text-[red] font-bold'>{error}</h1>}
                            <label className="label">
                                <Link to="/forget" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary capitalize">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
