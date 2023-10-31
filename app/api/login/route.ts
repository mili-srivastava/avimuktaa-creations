import User from "@/models/User";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";

connectDB();
export const POST = async (request: NextRequest) => {
  try {
    const reqBody = request.json();

    //destructuring
    const { email, password } = await reqBody;

    //check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ status: 400, message: "User not found" });
    }

    //check if password matches
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ status: 400, message: "Invalid credentials" });
    }

    return NextResponse.json({ status: 200, message: "Login successful" });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: error.msg });
  }
};

export const GET = () => {
  return NextResponse.json({ status: 400, message: "Invalid Request" });
};
