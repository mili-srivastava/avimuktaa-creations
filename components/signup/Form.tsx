import React from "react";
import { Input } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Link from "next/link";

const form = () => {
  return (
    <div className="h-screen bg-white shadow-2xl px-5 my-5">
      <p className=" font-medium text-lg">Signup for Avimuktaa Creations</p>
      <p className="text-xs">Everyone Deserves A Beautiful Home</p>
      <form className="mt-5 flex flex-col gap-2">
        <Input placeholder="Enter your name" className="my-2"  />
        <Input placeholder="Enter your email" className="my-2" />
        <Input placeholder="Enter your password" className="my-2" />
        <Button color="primary">Signup</Button>
      </form>
      <p className="text-center my-5 text-sm">Already have an account? <Link href="/login" className="text-blue-500">Login</Link></p>
    </div>
  );
};

export default form;
