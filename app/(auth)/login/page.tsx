import React from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white shadow-2xl w-96 h-96 rounded-large mx-auto my-10 px-5">
      <p className="text-center p-2 text-2xl font-medium">Welcome Back!</p>
      <p className="text-center text-sm">
        Login to your Avimuktaa Creations Account
      </p>
      <form action="POST" className="my-8 flex flex-col gap-3">
        <Input placeholder="Enter your email" className="my-2" />
        <Input placeholder="Enter your password" className="my-2" />
        <Button color="primary">Login</Button>
      </form>
      <p className="text-sm text-center">
        Don&apos;t have an Account?{" "}
        <Link href="/signup" className="text-blue-500">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default page;
