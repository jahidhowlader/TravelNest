import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { HiEye, HiEyeSlash } from 'react-icons/hi2';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hook/useAuth';
import axios from 'axios';


const Signup = () => {

    // All State are here
    const [seePassword, setSeePassword] = useState(false)
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false)
    const [existEmailError, setExistEmailError] = useState(false)

    // useNAVIGATE USE FOR REDIRECT USER AFTER LOGIN AND useLOCATION USE FOR TRACK URL PATH
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname === '/dashboard/profile' ? '/dashboard/profile' : '/';

    // IMPORT AUTHCONTEXT
    const { loading, dispatch } = useAuth()


    // REACT HOOK FORM
    const { register, handleSubmit, reset, watch, formState: { errors }, } = useForm()

    // SUBMIT Or CREATE ACCOUNT
    const onSubmit = async (data) => {

        setExistEmailError(false)
        const { username, email, password } = data

        dispatch({ type: "CREDENTIAL_START" });

        try {

            const res = await axios.post("http://localhost:3000/api/auth/register", { username, email, password });

            dispatch({ type: "CREDENTIAL_SUCCESS", payload: res.data.details });
            reset()
            navigate("/")
            toast.success("Successfully Signup!")

        } catch (err) {

            console.log(err);

            if (err.response.status === 409) {
                setExistEmailError(true)
            }


            toast.error(err.response.data.message)
            dispatch({ type: "CREDENTIAL_FAILURE", payload: err.response.data.message });
        }
    }

    return (
        <>
            {/* Ttile */}
            <Helmet>
                <title>Signup | Snap Academy</title>
            </Helmet>

            <div className="h-[calc(100vh-90px)] my-container flex justify-center items-center">

                {/* Main Content */}
                <div className="flex flex-col items-center mt-5 shadow-sm border border-gray border-opacity-30 rounded xl:rounded-md">
                    <div className="lg:text-xl xl:text-3xl flex items-center gap-2 mt-5">
                        <h3 className="font-bold uppercase text-primary-color primary-font"><Link to='/'>TravelNest</Link></h3>
                    </div>

                    <p className='mt-10 mb-5 font-medium tracking-wider'>Welcome To Snap Academy</p>

                    {/* SIGNIN FORM */}
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 w-full sm:w-[400px] md:w-[450px] max-w-[768px] px-5'>

                        {/* Name Input*/}
                        <div className='flex flex-col gap-2'>
                            <input
                                type="text"
                                placeholder='User name '
                                className={`bg-opacity-0 bg-black border  py-2 px-5 rounded-md w-full ${errors.username ? 'outline-error border border-error' : ''}`}
                                {...register("username",
                                    { required: 'Name is required', maxLength: { value: 20, message: 'Name length should be less than 20 characters' } }
                                )} />

                            {/* Show Error on UI */}
                            {
                                errors?.username?.type === 'required' ? <span className='text-error font-medium'>{errors?.username?.message}</span> :
                                    errors?.username?.type === 'maxLength' ? <span className='text-error font-medium'>{errors?.username?.message}</span> : ''
                            }
                        </div>

                        {/* Email Input */}
                        <div className='flex flex-col gap-2'>
                            {/* <label>Email</label> */}
                            <input
                                type="email"
                                placeholder='Email'
                                className={`bg-opacity-0 bg-black border  py-2 px-5 rounded-md w-full ${(errors.email || existEmailError) ? 'outline-error border border-error' : ''}`}
                                {...register("email",
                                    {
                                        required: 'Email is required', pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Invalid email address'
                                        }
                                    }
                                )} />

                            {/* Show Error on UI */}
                            {
                                errors?.email?.type === 'required' ? <span className='text-error font-medium'>{errors?.email?.message}</span> :
                                    errors?.email?.type === 'pattern' ? <span className='text-error font-medium'>{errors?.email?.message}</span> :
                                        existEmailError ? <span className='text-error font-medium'>Eamil is already registered!</span> : ''
                            }
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-2'>
                            {/* <label>Password</label> */}
                            <div className='relative'>
                                <input
                                    type={seePassword ? 'text' : 'password'}
                                    placeholder='Password'
                                    className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded-md w-full ${errors.password ? 'outline-error border border-error' : ''}`}
                                    {...register("password",
                                        {
                                            required: 'Password is required', pattern: {
                                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/,
                                                message: 'Password will be 1 number, 1 Capital and 1 special character and 8 character'
                                            }
                                        }
                                    )} />
                                {/* LOOK PASSWORD */}
                                <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                    {
                                        !seePassword ? <HiEye onClick={() => setSeePassword(true)} /> : <HiEyeSlash onClick={() => setSeePassword(false)} />
                                    }
                                </div>
                            </div>

                            {/* Show Error on UI */}
                            {
                                errors?.password?.type === 'required' ? <span className='text-error font-medium'>{errors?.password?.message}</span> :
                                    errors?.password?.type === 'pattern' ? <span className='text-error font-medium'>{errors?.password?.message}</span> : ''
                            }
                        </div>

                        {/* Confirm Password */}
                        <div className='flex flex-col gap-2'>
                            <div className='relative'>
                                <input
                                    type={seeConfirmPassword ? 'text' : 'password'}
                                    placeholder='Confirm Password'
                                    className={`bg-opacity-0 bg-black border py-2 pl-5 pr-12 rounded-md w-full ${errors.confirmPassword ? 'outline-error border border-error' : ''}`}
                                    {...register("confirmPassword",
                                        {
                                            required: 'Confirm Password is required', validate: (value) => value === watch('password')
                                        }
                                    )} />
                                {/* LOOK CONFIRM PASSWORD */}
                                <div className='absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer'>
                                    {
                                        !seeConfirmPassword ? <HiEye onClick={() => setSeeConfirmPassword(true)} /> : <HiEyeSlash onClick={() => setSeeConfirmPassword(false)} />
                                    }
                                </div>
                            </div>

                            {/* Show Error on UI */}
                            {
                                errors?.confirmPassword?.type === 'required' ? <span className='text-error font-medium'>{errors?.confirmPassword?.message}</span> :
                                    errors?.confirmPassword?.type === 'validate' ? <span className='text-error font-medium'>Password do not match </span> : ''
                            }
                        </div>

                        {/* Submit */}
                        <input type="submit" value={loading ? 'Processing...' : 'SIgn up'} className={`bg-primary-color text-white py-2 rounded-md w-full ${loading ? 'cursor-progress' : 'cursor-pointer'}`} disabled={loading ? true : false} />
                    </form>

                    <p className='mt-7 mb-16 opacity-100 font-bold text-primary-color'><span className=' font-normal text-black'>Don’t have an account? </span> <Link to={'/auth/login'}>Login</Link></p>

                    {/* Social Login */}
                    {/* <SocialLogin /> */}
                </div>
            </div>
        </>

    );
};

export default Signup;