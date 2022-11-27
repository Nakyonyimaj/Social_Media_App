import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../../utils";

export default function Loginpage() {
  const [data,setValues] = useState({
    email:"",
    password:""
  })
  const handleChange = (e) => {
    setValues({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try{
      const {result} = await axios.post('/api/users/signin',{data});
      toast.success('You have successfully logged in',{
        position: toast.POSITION.TOP_RIGHT
    });
    }catch(err){
      toast.error(getError(err));
    }
  }


  return (
    <div className=" md:flex md:p-11 md:mt-16  md:justify-between sm:pt-10 ">
      <ToastContainer limit={1}/>
      <div className=" w-[50%]  md:flex md:flex-col md:justify-start sm:mx-auto md:items-start "> 
        <div className="sm:text-center">
          <h1 className="text-5xl font-bold text-fblue">facebook</h1>
          <h2 className="text-3xl">Recent logins</h2>
          <p>Click your picture or add an account</p>
        </div>

        <div className="flex space-x-6 ">
          <div className="md:w-[60%] sm:w-[50%] h-44 flex-shrink-0 rounded-xl overflow-hidden shadow ">
            <div className="relative h-full group cursor-pointer">
              <img
                src="photoholgic-UPY_iepQt5c-unsplash.jpg"
                alt="Story images"
                className=" h-[80%] w-full"
              />
              <div className="flex items-center  px-10">Glamar</div>
            </div>
          </div>
          <div className=" md:w-[60%] sm:w-[50%] h-44 flex-shrink-0 rounded-xl overflow-hidden shadow bg-gray ">
            <div className="relative h-full  group cursor-pointer">
              <div className="flex flex-col items-center">
                <AiOutlinePlusCircle className="text-4xl text-white absolute mt-10 bg-fblue border-2 border-white rounded-full" />
                <div className="absolute bottom-0 w-full bg-white p-2 px-5">
                  Add account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*form*/}
      <div className="w-[80%] max-w-md sm:mx-auto sm:items-center sm:pl-6 sm:pt-10">
        <form onSubmit={onSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter email or phonenumber"
            />
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border  rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter password"
              name="password"
              value={data.password}
              type="password"
              onChange={handleChange}
            />
          </div>

          <div className=" flex flex-col items-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
            <div className="p-2 mb-3 px-1 hover:underline decoration-fblue">Forgotten  password?</div>
            <div className="w-full border-b-2 border-gray mb-2"></div>
            <div className="">
                <button className="bg-green p-3 px-8 rounded text-white font-bold mt-4">Create New Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
