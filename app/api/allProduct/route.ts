import prisma from "@/prisma";
import { allProduct } from "@/staticData";
import { conncetToDb, delay } from "@/utils";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  let response: {
    success: boolean;
    data: any;
    successMessage: string;
    error: boolean;
    errorMessage: string;
    statusCode: number;
  } = {
    success: false,
    data: null,
    successMessage: "",
    error: false,
    errorMessage: "",
    statusCode: 200,
  };

  // Example usage:

  try {
    let q = await req.json();
    await delay(500);
    let products = allProduct.filter((item) => {
      return item.title.toLowerCase().includes(q.toLowerCase());
    });
    response = {
      success: true,
      data: products,
      successMessage: "fetch data successfully",
      error: false,
      errorMessage: "",
      statusCode: 200,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
    response = {
      success: false,
      data: [],
      successMessage: "",
      error: true,
      errorMessage: "something went wrong",
      statusCode: 500,
    };
    return NextResponse.json(response);
  }
};
