import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import useAuth from "../../../hook/useAuth";

const Login = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [signinError, setSigninError] = useState(false)

    const navigate = useNavigate()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()


    const { loading, dispatch } = useAuth()

    console.log(loading);

    // SUBMIT Or SIGNIN ACCOUNT
    const onSubmit = async (data) => {

        setSigninError(false)
        const { email, password } = data

        dispatch({ type: "CREDENTIAL_START" });

        try {

            const res = await axios.post("http://localhost:3000/api/auth/login", { email, password });

            dispatch({ type: "CREDENTIAL_SUCCESS", payload: res.data.details });
            reset()
            navigate("/")
            toast.success("Successfully Login!")

        } catch (err) {
            setSigninError(true)
            toast.error(err.response.data.message)
            dispatch({ type: "CREDENTIAL_FAILURE", payload: err.response.data.message });
        }
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Signin | Snap Academy</title>
            </Helmet>

            <div className="h-[calc(100vh-90px)] my-container flex justify-center items-center">

                {/* Main Content */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="glass-content flex flex-col items-center shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md">
                    <div className="lg:text-xl xl:text-3xl flex items-center gap-2 mt-5">
                        <h3 className="font-bold text-primary-color primary-font"><Link to='/'>TravelNest</Link></h3>
                    </div>

                    <p className='mt-10 mb-5 font-medium tracking-wider'>Welcome To Snap Academy</p>

                    {/* SIGNIN FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 w-full sm:w-[400px] md:w-[450px] max-w-[768px] px-5'>

                        {/* Email Input */}
                        <div className='flex flex-col gap-2'>
                            {/* <label>Email</label> */}
                            <input
                                type="email"
                                placeholder='Email'
                                className={`bg-opacity-0 bg-black border  py-2 px-5 rounded w-full ${(errors.email || signinError) ? 'outline-error border border-error' : ''}`}
                                {...register("email",
                                    {
                                        required: 'Email is required', pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Invalid email address'
                                        }
                                    }
                                )}
                            />

                            {/* Show Error on UI */}
                            {
                                errors?.email?.type === 'required' ? <span className='text-error font-medium'>{errors?.email?.message}</span> :
                                    errors?.email?.type === 'pattern' ? <span className='text-error font-medium'>{errors?.email?.message}</span> : ''
                            }
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-2 relative'>
                            {/* <label>Password</label> */}
                            <div className='relative'>
                                <input
                                    type={seePassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded w-full ${(errors.password || signinError) ? 'outline-error border border-error' : ''}`}
                                    {...register("password", { required: 'Password is required' })} />
                                {/* LOOK PASSWORD */}
                                <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                    {
                                        !seePassword ? <HiEye onClick={() => setSeePassword(true)} /> : <HiEyeSlash onClick={() => setSeePassword(false)} />
                                    }
                                </div>
                            </div>

                            {/* Show Error on UI */}
                            {errors?.password?.type === 'required' && <span className='text-error font-medium'>{errors?.password?.message}</span>}
                        </div>

                        {/* Submit */}
                        <input type="submit" value={loading ? 'Processing...' : 'Login'} className={`bg-primary-color text-white py-2 rounded-md w-full ${loading ? 'cursor-progress' : 'cursor-pointer'}`} />
                    </form>

                    <p className='mt-7 mb-16 opacity-100 font-bold text-primary-color'><span className=' font-normal text-black'>Don’t have an account? </span>
                        <Link to={'/auth/signup'} state={location.state}>SignUp</Link>
                    </p>


                    {/* Social Login */}
                    {/* <SocialLogin />
                    <Link to='/auth/forgotPassword' className='text-primary-color font-medium text-right cursor-pointer'>Forgot Password</Link> */}
                </motion.div>
            </div>
        </>
    );
};

export default Login;