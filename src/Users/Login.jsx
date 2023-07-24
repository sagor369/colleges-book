import { useContext } from "react";
import Navbar from "../Shared/Header/Navbar";
import{FaGoogle} from "react-icons/fa"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { AuthContext } from "../Provaider/AuthProvaider";

const Login = () => {
  const {signIn, googleuser}= useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  console.log(from)


  const loginUser = (event) =>{
    event.preventDefault();
    const from = event.target
    const email = from.email.value 
    const password = from.password.value 

    signIn(email, password)
    .then(result =>{
      navigate(from, { replace: true })
      console.log(result)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const googleSign = () =>{
    googleuser()
  .then(result =>{
    navigate(from, { replace: true })
    console.log(result)
  })
  .catch(error => {
    console.log(error.message)
  })
  }
  

  return (
    <div>
        <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 md:w-1/2 w-full shadow-2xl bg-base-100">
            <form onSubmit={loginUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <input  type="submit" value={'Login'} className="btn btn-primary"/>
                <p><small>Create an new account <Link className="text-blue-500" to={'/register'}>Register</Link></small> </p>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="bg-slate-400 py-4 flex justify-center items-center rounded-b-xl">
                <button onClick={googleSign}><FaGoogle className="w-8 h-8  text-orange-300"/></button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
