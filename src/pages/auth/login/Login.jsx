import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion"
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import useAuth from "../../../hooks/useAuth";

const Login = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [signinError, setSigninError] = useState(false)

    // useNAVIGATE USE FOR REDIRECT USER AFTER LOGIN AND useLOCATION USE FOR TRACK URL PATH
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    //   Import CONTEXT FOR LOGIN
    const { loading, dispatch } = useAuth()

    // REACT HOOK FORM
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()


    // SUBMIT Or SIGNIN ACCOUNT
    const onSubmit = async (data) => {

        setSigninError(false)
        const { email, password } = data

        dispatch({ type: "CREDENTIAL_START" });

        try {

            const res = await axios.post("https://travelnest-server-production.up.railway.app/api/auth/login", { email, password }, {
                withCredentials: true,
            });

            dispatch({ type: "CREDENTIAL_SUCCESS", payload: res.data.details });
            reset()
            navigate(from, { replace: true });
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

            <div className="min-h-[calc(100vh-90px)] grid lg:grid-cols-2 xl:grid-cols-5">

                <div className="xl:col-span-3">
                    <img src="/auth/1.jpg" alt="banner" className="w-full h-full object-cover overflow-hidden" />
                </div>

                <div className="xl:col-span-2 flex justify-center items-center h-full w-full">
                    {/* Main Content */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }} className="flex flex-col itemscenter">
                        <div className=" flex flex-col items-center mt-5">
                            <Link to={'/'}> <h3 className="text-3xl font-semibold text-primary-color">TravelNest</h3></Link>
                            <p className='my-5 font-medium tracking-wider opacity-70'>Please Enter your details</p>
                        </div>


                        {/* SIGNIN FORM */}
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 min-w-[300px] sm:min-w-[400px]'>

                            {/* Email Input */}
                            <div className='flex flex-col gap-2'>
                                {/* <label>Email</label> */}
                                <input
                                    type="email"
                                    placeholder='Email'
                                    className={`bg-opacity-0 bg-black border-b py-2 pl-2 pr-5 w-full outline-none ${(errors.email || signinError) ? 'border-error' : ''}`}
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
                                        className={`bg-opacity-0 bg-black border-b py-2 pl-2 pr-12  w-full outline-none ${(errors.password || signinError) ? 'border-error' : ''}`}
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
                            <input type="submit" value={loading ? 'PROCESSING...' : 'LOGIN'} className={`bg-primary-color text-white py-2 rounded w-full ${loading ? 'cursor-progress' : 'cursor-pointer'}`} />
                        </form>

                        <p className='mt-7 mb-16 opacity-100 font-semibold text-primary-color text-center'><span className=' font-normal text-black'>Don’t have an account? </span>
                            <Link to={'/auth/signup'} state={location.state}>SignUp</Link>
                        </p>


                        {/* Social Login */}
                        {/* <SocialLogin />
                    <Link to='/auth/forgotPassword' className='text-primary-color font-medium text-right cursor-pointer'>Forgot Password</Link> */}
                    </motion.div>
                </div>


            </div>
        </>
    );
};

export default Login;