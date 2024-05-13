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
    const { brand, categorys, searchQuery, sortby } = await req.json();
    console.log(sortby);

    const product = await prisma.product.findMany({
      where: {
        brand: {
          in: brand,
        },
        category: {
          in: categorys,
        },
        OR: [
          {
            title: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
        ],
      },
      skip: 0,
      take: 15,

      orderBy: {
        price: sortby,
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
