"use client"
import useErrorHandler from '@/hooks/useErrorHandler'
import React, { ReactNode } from 'react'

const ErrorBoundery = ({ children, fallBack }: { children: ReactNode, fallBack: any }) => {

    const { error } = useErrorHandler();


    if (error.error) {
        return <div>
            <h1>error</h1>
            <h4>{error.errorMessage}</h4>
        </div>
    }


    return (
        <>
            {children}
        </>
    )
}

export default ErrorBoundery