import React from 'react'
import Input from '../Input/Input'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import { useState } from 'react'

export default function LoginPage() {
    const { register, handleSubmit } = useForm()
    const [formData, setFormData] = useState({})
    const login = async (data) => {
        setFormData(data)
    }
    return (
        <section className=' dark:bg-[#212627] text-black bg-[#c6c7d8]  dark:text-white w-full h-[100vh] flex justify-center items-center text-center -z-30 ' >
            <div className=' flex flex-col justify-center items-center w-[45vh]   h-[70vh] dark:bg-[#303637]  bg-slate-600 inherit  m-2   rounded-2xl bg-[url("https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png")] bg-contain bg-no-repeat '>
                <div className='bg-[#000000a8] w-full m-3 mx-3 rounded-tl-xl rounded-br-xl  '>
                    <p className='text-5xl text-center mb-6 ' >Login</p>
                </div>
                <form onSubmit={handleSubmit(login)}  >
                    <div className='   h-max   mx-auto bg-[#000000a8] bg-opacity-50 p-4 rounded-lg  w-full '>

                        <div>
                            <Input
                                label="E-Mail"
                                type="email"
                                placeholder="Enter Your E-mail"
                                {...register("email", {
                                    required: true, validate: {
                                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be a valid address",
                                    }
                                })}
                            />
                        </div>
                        <div>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="Enter Your Password"
                                {...register("password", { required: true })}
                            />
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className='w-full'
                    >
                        Login
                    </Button>
                </form>

            </div>
            <div>
                <p>

                </p>
            </div>
        </section>
    )
}
