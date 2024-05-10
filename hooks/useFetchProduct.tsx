"use client";
import { ProductsTYPE } from "@/constant-type";
import { error } from "console";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const useFetchProduct = (category?: any) => {
    const [isFetchingProduct, setIsFetchingProduct] = useState<boolean>(false);
    const [products, setPorducts] = useState<ProductsTYPE[]>([]);
    const [isFetchingError, setIsFetchingError] = useState({
        error: false,
        message: "",
    });
    const ssearchParams = useSearchParams();
    const params = new URLSearchParams(ssearchParams);
    const brand = params.get("brands")?.split(" ");
    const cate = params.get("category")?.split(" ");
    const page = params.get("page")
    const sortby = params.get("sort-by")


    const searchQuery = params.get("q");

    let filterQuery: any = {};

    if (brand) {
        filterQuery.brand = brand
    }
    if (category) {
        filterQuery.categorys = category
    }
    if (searchQuery) {
        filterQuery.searchQuery = searchQuery || ""
    }

    if (page) {
        filterQuery.page = page || 1
    }
    if (sortby) {
        filterQuery.sortby = sortby || "asc"
    }



    const fetchProduct = async () => {
        try {
            setIsFetchingProduct(true);
            let response = await fetch("/api/products", {
                method: "POST",
                body: JSON.stringify(filterQuery),
                cache: "no-cache",
            });
            let res_result = await response.json();


            if (res_result.success) {
                setPorducts(res_result.data);
            }
            if (res_result.error) {
                setIsFetchingError({
                    error: true,
                    message: res_result.errorMessage,
                })
            } else {
                setIsFetchingError({
                    error: false,
                    message: "",
                })
            }
            setIsFetchingProduct(false);
        } catch (error) {
            console.log(error);
            setIsFetchingProduct(false);

            throw new Error("error form backend")
        }
    };

    useEffect(() => { fetchProduct() }, [params.toString()]);

    return { isFetchingError, isFetchingProduct, fetchProduct, products }
};

export default useFetchProduct;
