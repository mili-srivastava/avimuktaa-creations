import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";

connectDB();
export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();

    // destructuring
    const { name, email, password } = reqBody;

    // check if user exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ status: 409, msg: "User already exists" });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    //save user
    const savedUser = await newUser.save();

    return NextResponse.json({
      status: 201,
      msg: "User created successfully",
      data: savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ status: 500, msg: error.message });
  }
};

export const GET = () => {
  return NextResponse.json({ status: 400, msg: "Invalid Request" });
};
