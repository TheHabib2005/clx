"use client"
import React, { useState } from 'react'

const useErrorHandler = () => {


    const [error, setError] = useState({
        error: false,
        errorMessage: ""
    });

    const showError = (arr: any) => {
        setError({
            error: arr.error,
            errorMessage: arr.message
        })
    }

    const resetError = () => {
        setError({
            error: false,
            errorMessage: ""
        })
    }

    return { error, showError, resetError }
}

export default useErrorHandler