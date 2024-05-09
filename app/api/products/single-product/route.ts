import prisma from "@/prisma";
import { conncetToDb } from "@/utils";

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
    await conncetToDb();
    const { id } = await req.json();

    console.log(id);

    const product = await prisma.product.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
    response = {
      success: true,
      data: product,
      successMessage: "fetch data successfully",
      error: false,
      errorMessage: "",
      statusCode: 200,
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
