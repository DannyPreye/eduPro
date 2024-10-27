"use client";
import React from "react";
import { Toaster } from "../../shadcn/components/ui/toaster";

interface Props {
    children: React.ReactNode;
}
const Providers: React.FC<Props> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
};

export default Providers;
