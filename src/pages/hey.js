import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import * as yup  from "yup"
import  {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
import { useForm } from 'react-hook-form';

const REGISTER_URL = "https://blogapi-wm30.onrender.com/api/v1/signup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password:yup.string().min(6).max(12).required()
  })
  
export const RegisterPage = () => {

  const  {register ,handleSubmit ,formState :{errors}} =  useForm({
    resolver:yupResolver(schema)
  })

  const navigate  = useNavigate();
  const   onSubmit  = async  (data) =>{
      console.log(data);

      try {
        const  response  = await  axios.post(REGISTER_URL,data)
        console.log(response);
        navigate("/login")

      } catch (error) {
        console.log(error.response);
      }
  }
  return (
    <div className="w-full mt-4 flex justify-center items-center p-2">
      <fieldset className="w-1/2 bg-indigo-100 flex justify-center items-center rounded-2xl
        xl:w-1/2
        lg:w-1/2
        md:w-full
        sm:w-full
        xs:w-full
      "
        
      >
        <legend className="w-full">
          <center>
            <div className="bg-indigo-900 w-32 h-32 text-indigo-50 p-4 rounded-full flex justify-center items-center border-8 border-white">
              <FaUser className="text-6xl"/>
            </div>
          </center>
        </legend>
        <form  onSubmit={handleSubmit(onSubmit)} className="bg-indigo-100 w-full p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2 group">
            <label htmlFor=""    className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Username</label>
            <input type="text"
            id='username'
            placeholder='username'
            name='name'
            autoComplete="off"

        
           {...register("name")}
            className= "border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
            <span>{errors?.name?.message}</span>
            
          </div>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Email</label>
            <input type="email" 
             id='email'
             placeholder='email'
             name='email'
             {...register("email")}
             aria-describedbly="emailnote"
            className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
            <span>{errors?.email?.message}</span>
          </div>
          <div className="flex flex-col gap-2 group">
            <label htmlFor="" className="text-indigo-900 text-lg  group-hover:font-semibold duration-500 space-x-4">Password</label>
            <input type="password" 
            id='password'
            placeholder='password'
            name='password'
            {...register("password")}
            aria-describedbly="pwdnote"
            className="border-indigo-300 border bg-indigo-100 text-indigo-900 px-8 py-3 rounded-lg outline-none"/>
            <span>{errors?.password?.message}</span>
          </div>
          <div className="flex flex-col gap-2 group">
            
            <input type="submit" 
          // disabled={!validName || !validPassword? true:false}
          value="Signup" className="border-indigo-300 border bg-indigo-900  text-indigo-50 px-8 py-3 rounded-lg outline-none cursor-pointer"/>
          </div>
        </form>
      </fieldset>
    </div>
  )
}