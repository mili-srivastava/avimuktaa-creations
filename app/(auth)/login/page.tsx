"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false);

  const router = useRouter();

  const submit = async (e: any) => {
    e.preventDefault();

    //check if all fields are filled
    if (email === "" || password === "") {
      toast.error('Please fill all the fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }
    
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        email: email,
        password: password,
      });

      if (response.data.status === 200) {
        toast.success('Login Successfull', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        router.push("/");
      }

      else if (response.data.status === 401) {
        toast.error('Invalid Credentials', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else if(response.data.status === 400){
        toast.error('User Not Found', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }

    } 
    
    catch (error: any) {
      toast.error('Something went wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(error);
    }

    finally{
      setLoading(false);
    }

  };

  return (
    <div className="bg-white shadow-2xl w-96 h-96 rounded-large mx-auto my-10 px-5">
      <p className="text-center p-2 text-2xl font-medium text-primary">Welcome Back!</p>
      <p className="text-center text-sm">
        Login to your Avimuktaa Creations Account
      </p>
      <form action="POST" className="my-8 flex flex-col gap-3">
        <Input
          placeholder="Enter your email"
          className="my-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Enter your password"
          className="my-2"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button className="bg-primary text-white" onClick={submit}>
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
      <p className="text-sm text-center">
        Don&apos;t have an Account?{" "}
        <Link href="/signup" className="text-blue-500">
          Signup
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Page;
