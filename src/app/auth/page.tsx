"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "../../../shadcn/components/ui/card";

import { Button } from "../../../shadcn/components/ui/button";
import { Input } from "../../../shadcn/components/ui/input";
import { Label } from "../../../shadcn/components/ui/label";
import { AlertCircle, Loader2, Mail, Lock } from "lucide-react";
import { Alert, AlertDescription } from "../../../shadcn/components/ui/alert";
import Link from "next/link";
import { Checkbox } from "../../../shadcn/components/ui/checkbox";
import Logo from "../components/Logo";
import { useToast } from "../../../shadcn/hooks/use-toast";
import { login } from "./actions";

interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
    rememberMe: Yup.boolean(),
});

const LoginForm = () => {
    const { toast } = useToast();
    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validationSchema: LoginSchema,
        onSubmit: async (values) => {
            try {
                await login(values);
            } catch (error: { message: string }) {
                toast({
                    title: "Error",
                    description: error?.message,
                    variant: "destructive",
                });
            }
        },
    });

    const getInputErrorClass = (fieldName: keyof LoginFormValues) =>
        formik.touched[fieldName] && formik.errors[fieldName]
            ? "border-red-500 focus-visible:ring-red-500"
            : "";

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
            <div className='max-w-md w-full space-y-4'>
                <div className='text-center flex flex-col items-center space-y-2'>
                    <Logo />
                    <p className='text-gray-600'>Welcome back!</p>
                </div>

                <Card className='w-full'>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold text-center text-gray-900'>
                            Login to Your Account
                        </CardTitle>
                        <CardDescription className='text-center'>
                            Enter your credentials to access your account
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form
                            onSubmit={formik.handleSubmit}
                            className='space-y-6'
                        >
                            {formik.status && (
                                <Alert variant='destructive'>
                                    <AlertCircle className='h-4 w-4' />
                                    <AlertDescription>
                                        {formik.status}
                                    </AlertDescription>
                                </Alert>
                            )}

                            {/* Email Field */}
                            <div className='space-y-2'>
                                <Label htmlFor='email'>Email</Label>
                                <div className='relative '>
                                    <Mail className='absolute left-3 top-[50%] translate-y-[-50%] h-5 w-5 text-gray-400' />
                                    <Input
                                        id='email'
                                        type='email'
                                        placeholder='Enter your email'
                                        {...formik.getFieldProps("email")}
                                        className={`pl-10 ${getInputErrorClass(
                                            "email"
                                        )}`}
                                    />
                                </div>
                                {formik.touched.email &&
                                    formik.errors.email && (
                                        <Alert
                                            variant='destructive'
                                            className=''
                                        >
                                            <AlertCircle className='h-4 w-4' />
                                            <AlertDescription>
                                                {formik.errors.email}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                            </div>

                            {/* Password Field */}
                            <div className='space-y-2'>
                                <div className='flex justify-between items-center'>
                                    <Label htmlFor='password'>Password</Label>
                                    <Link
                                        href='/forgot-password'
                                        className='text-sm text-blue-600 hover:text-blue-800 transition-colors'
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className='relative'>
                                    <Lock className='absolute left-3 top-[50%] translate-y-[-50%]  h-5 w-5 text-gray-400' />
                                    <Input
                                        id='password'
                                        type='password'
                                        placeholder='Enter your password'
                                        {...formik.getFieldProps("password")}
                                        className={`pl-10 ${getInputErrorClass(
                                            "password"
                                        )}`}
                                    />
                                </div>
                                {formik.touched.password &&
                                    formik.errors.password && (
                                        <Alert
                                            variant='destructive'
                                            className=''
                                        >
                                            <AlertCircle className='h-4 w-4' />
                                            <AlertDescription>
                                                {formik.errors.password}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className='flex items-center space-x-2'>
                                <Checkbox
                                    id='rememberMe'
                                    checked={formik.values.rememberMe}
                                    onCheckedChange={(checked) =>
                                        formik.setFieldValue(
                                            "rememberMe",
                                            checked
                                        )
                                    }
                                />
                                <Label
                                    htmlFor='rememberMe'
                                    className='text-sm cursor-pointer'
                                >
                                    Remember me
                                </Label>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type='submit'
                                className='w-full'
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Signing in...
                                    </>
                                ) : (
                                    "Sign In"
                                )}
                            </Button>

                            {/* Sign Up Link */}
                            <p className='text-center text-sm text-gray-600'>
                                Don't have an account?{" "}
                                <Link
                                    href='/signup'
                                    className='font-medium text-blue-600 hover:text-blue-800 transition-colors'
                                >
                                    Sign up
                                </Link>
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginForm;
