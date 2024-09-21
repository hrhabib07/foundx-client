"use server";

import axiosInstance from "@/src/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await axiosInstance.post("/auth/register", userData);
    console.log("response data : ", res.data);
  } catch (error: any) {
    throw new Error(error);
  }
};
