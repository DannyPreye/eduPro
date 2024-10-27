"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../../../../shadcn/components/ui/card";
import { Button } from "../../../../shadcn/components/ui/button";
import { Input } from "../../../../shadcn/components/ui/input";
import { Label } from "../../../../shadcn/components/ui/label";
import {
    RadioGroup,
    RadioGroupItem,
} from "../../../../shadcn/components/ui/radio-group";
import { AlertCircle, Loader2 } from "lucide-react";
import {
    Alert,
    AlertDescription,
} from "../../../../shadcn/components/ui/alert";
import { useToast } from "../../../../shadcn/hooks/use-toast";
import { signup } from "../actions";

interface SignupFormValues {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: "student" | "tutor";
}

const SignupSchema = Yup.object().shape({
    first_name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("First name is required"),
    last_name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .matches(/[a-zA-Z]/, "Password must contain at least one letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    role: Yup.string()
        .oneOf(["student", "tutor"], "Please select a role")
        .required("Please select a role"),
});

const SignupForm = () => {
    const { toast } = useToast();

    const formik = useFormik<SignupFormValues>({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "student",
        },
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            try {
                await signup(values);
            } catch (error: { message: string }) {
                toast({
                    title: "Error",
                    description: error?.message,
                    variant: "destructive",
                });
            }
        },
    });

    const getInputErrorClass = (fieldName: keyof SignupFormValues) =>
        formik.touched[fieldName] && formik.errors[fieldName]
            ? "border-red-500 focus-visible:ring-red-500"
            : "";

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4'>
            <div className='max-w-md w-full space-y-8'>
                <Card className='w-full'>
                    <CardHeader>
                        <CardTitle className='text-2xl font-bold text-center text-gray-900'>
                            Join EduPro
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form
                            onSubmit={formik.handleSubmit}
                            className='space-y-6'
                        >
                            {/* Role Selection */}
                            <div className='space-y-2'>
                                <Label>I want to join as a</Label>
                                <RadioGroup
                                    defaultValue='student'
                                    className='flex gap-4'
                                    onValueChange={(value) =>
                                        formik.setFieldValue("role", value)
                                    }
                                >
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem
                                            value='student'
                                            id='student'
                                        />
                                        <Label
                                            htmlFor='student'
                                            className='cursor-pointer'
                                        >
                                            Student
                                        </Label>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <RadioGroupItem
                                            value='tutor'
                                            id='tutor'
                                        />
                                        <Label
                                            htmlFor='tutor'
                                            className='cursor-pointer'
                                        >
                                            Tutor
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Name Fields */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div className='space-y-2'>
                                    <Label htmlFor='first_name'>
                                        First Name
                                    </Label>
                                    <Input
                                        id='first_name'
                                        {...formik.getFieldProps("first_name")}
                                        className={getInputErrorClass(
                                            "first_name"
                                        )}
                                    />
                                    {formik.touched.first_name &&
                                        formik.errors.first_name && (
                                            <Alert
                                                variant='destructive'
                                                className='py-2'
                                            >
                                                <AlertCircle className='h-4 w-4' />
                                                <AlertDescription>
                                                    {formik.errors.first_name}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='last_name'>Last Name</Label>
                                    <Input
                                        id='last_name'
                                        {...formik.getFieldProps("last_name")}
                                        className={getInputErrorClass(
                                            "last_name"
                                        )}
                                    />
                                    {formik.touched.last_name &&
                                        formik.errors.last_name && (
                                            <Alert
                                                variant='destructive'
                                                className='py-2'
                                            >
                                                <AlertCircle className='h-4 w-4' />
                                                <AlertDescription>
                                                    {formik.errors.last_name}
                                                </AlertDescription>
                                            </Alert>
                                        )}
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className='space-y-2'>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    id='email'
                                    type='email'
                                    {...formik.getFieldProps("email")}
                                    className={getInputErrorClass("email")}
                                />
                                {formik.touched.email &&
                                    formik.errors.email && (
                                        <Alert
                                            variant='destructive'
                                            className='py-2'
                                        >
                                            <AlertCircle className='h-4 w-4' />
                                            <AlertDescription>
                                                {formik.errors.email}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                            </div>

                            {/* Password Fields */}
                            <div className='space-y-2'>
                                <Label htmlFor='password'>Password</Label>
                                <Input
                                    id='password'
                                    type='password'
                                    {...formik.getFieldProps("password")}
                                    className={getInputErrorClass("password")}
                                />
                                {formik.touched.password &&
                                    formik.errors.password && (
                                        <Alert
                                            variant='destructive'
                                            className='py-2'
                                        >
                                            <AlertCircle className='h-4 w-4' />
                                            <AlertDescription>
                                                {formik.errors.password}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                            </div>

                            <div className='space-y-2'>
                                <Label htmlFor='confirmPassword'>
                                    Confirm Password
                                </Label>
                                <Input
                                    id='confirmPassword'
                                    type='password'
                                    {...formik.getFieldProps("confirmPassword")}
                                    className={getInputErrorClass(
                                        "confirmPassword"
                                    )}
                                />
                                {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword && (
                                        <Alert
                                            variant='destructive'
                                            className='py-2'
                                        >
                                            <AlertCircle className='h-4 w-4' />
                                            <AlertDescription>
                                                {formik.errors.confirmPassword}
                                            </AlertDescription>
                                        </Alert>
                                    )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type='submit'
                                className='w-full'
                                disabled={
                                    formik.isSubmitting || !formik.isValid
                                }
                            >
                                {formik.isSubmitting ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Creating account...
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default SignupForm;
