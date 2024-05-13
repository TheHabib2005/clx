import prisma from "@/prisma";

export const conncetToDb = async () => {
  try {
    await prisma.$connect();
    console.log("db conncet");
  } catch (error: any) {
    console.log(error);

    console.log("db conncet failed");
    return new Error(error.message);
  }
};

export const fetchProductById = async (id: string) => {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/products/single-product`,
      {
        method: "POST",
        headers: {
          authorization: process.env.AUTHORAZCTION_TOKEN!,
        },
        body: JSON.stringify({ id }),
        cache: "no-cache",
      }
    );
    let product = await response.json();
    return product;
  } catch (error) {
    console.log("error", error);

    return error;
  }
};
export const calculateDiscountPrice = (
  discountParcent: number,
  originalPrice: number
) => {
  let discountPrice = (originalPrice * discountParcent) / 100;
  let mainPrice = Math.round(originalPrice - discountPrice);
  return `$${mainPrice}`;
};

export const delay = (time: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));
