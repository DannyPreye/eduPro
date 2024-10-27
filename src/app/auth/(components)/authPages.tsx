"use client";
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../shadcn/components/ui/card";
import { Input } from "../../../../shadcn/components/ui/input";
import { Button } from "../../../../shadcn/components/ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../../shadcn/components/ui/tabs";
import { Label } from "../../../../shadcn/components/ui/label";
import {
    Alert,
    AlertDescription,
} from "../../../../shadcn/components/ui/alert";
import { LoaderCircle } from "lucide-react";
import Logo from "`@/app/components/Logo";
import Link from "next/link";

import Login from "./Login";
import SignUp from "./SignUp";

const AuthPages = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        // Add your Supabase signup logic here
        setIsLoading(false);
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100 py-16 px-6'>
            <div className='w-full max-w-md space-y-10'>
                <div className='flex flex-col items-center'>
                    <Link href={"/"}>
                        <Logo />
                    </Link>
                    <h2 className='mt-4 text-4xl font-bold tracking-tight text-gray-900'>
                        Welcome to EduPro
                    </h2>
                    <p className='mt-2 text-sm text-gray-600'>
                        Sign in or create an account to access your learning
                        dashboard
                    </p>
                </div>

                <Tabs defaultValue='login' className='w-full space-y-4'>
                    <TabsList className='grid w-full grid-cols-2'>
                        <TabsTrigger value='login'>Login</TabsTrigger>
                        <TabsTrigger value='signup'>Sign up</TabsTrigger>
                    </TabsList>

                    <TabsContent value='login'>
                        <Login />
                    </TabsContent>

                    <TabsContent value='signup'>
                        <SignUp />
                    </TabsContent>
                </Tabs>

                {error && (
                    <Alert variant='destructive' className='mt-6'>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </div>
        </div>
    );
};

export default AuthPages;
