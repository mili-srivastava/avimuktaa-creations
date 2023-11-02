"use client";

import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

//import toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    //check if all fields are filled
    if (name === "" || email === "" || password === "") {
      setLoading(false);
      toast.error("Please fill all the fields", {
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

    try {
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "https://avimuktaa-creations.vercel.app",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      };

      const response = await axios.post(
        "http://localhost:3000/api/signup",
        {
          name: name,
          email: email,
          password: password,
        },
        config
      );

      console.log(response.data);

      if (response.data.status === 201) {
        toast.success("Signup Successfull!", {
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

      if (response.data.status === 409) {
        toast.error("Account already exists", {
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
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white shadow-2xl px-5 my-5">
      <p className=" font-medium text-lg text-primary">
        Signup for Avimuktaa Creations
      </p>
      <p className="text-xs">Everyone Deserves A Beautiful Home</p>
      <form action="POST" className="mt-5 flex flex-col gap-2">
        <Input
          placeholder="Enter your name"
          type="text"
          className="my-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          placeholder="Enter your email"
          type="email"
          className="my-2"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          className="my-2"
          onChange={(e) => {
            setPassowrd(e.target.value);
          }}
        />
        <Button className="bg-primary text-white " onClick={submit}>
          {loading ? "Loading..." : "Signup"}
        </Button>
      </form>
      <p className="text-center my-5 text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-500">
          Login
        </Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Form;
