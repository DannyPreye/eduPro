import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../shadcn/components/ui/card";
import { useToast } from "../../../../shadcn/hooks/use-toast";
import { signup } from "../actions";
import { Label } from "../../../../shadcn/components/ui/label";
import { Input } from "../../../../shadcn/components/ui/input";
import { Button } from "../../../../shadcn/components/ui/button";
import { LoaderCircle } from "lucide-react";

const SignUp = () => {
    const { toast } = useToast();
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });
    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
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

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = formik;

    return (
        <Card className='p-6 bg-white shadow-lg rounded-lg'>
            <CardHeader>
                <CardTitle className='text-2xl font-semibold'>
                    Create an account
                </CardTitle>
                <CardDescription className='text-sm text-gray-500'>
                    Join thousands of learners on EduPro
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className='space-y-5 mt-6'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-1'>
                            <Label htmlFor='first_name'>First name</Label>
                            <Input
                                type='text'
                                value={values.first_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='first_name'
                                placeholder='John'
                                className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                                required
                            />
                            {errors.first_name && touched.first_name && (
                                <p className='text-red-500'>
                                    {errors.first_name}
                                </p>
                            )}
                        </div>
                        <div className='space-y-1'>
                            <Label htmlFor='last_name'>Last name</Label>
                            <Input
                                type='text'
                                value={values.last_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                id='last_name'
                                placeholder='Doe'
                                className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                                required
                            />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='email'
                            type='email'
                            placeholder='name@example.com'
                            className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                            required
                        />
                        {errors.email && touched.email && (
                            <p className='text-red-500'>{errors.email}</p>
                        )}
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='password'
                            type='password'
                            className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                            required
                        />
                        {errors.password && touched.password && (
                            <p className='text-red-500'>{errors.password}</p>
                        )}
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col space-y-4 '>
                    <Button
                        type='submit'
                        className='w-full py-3 flex items-center justify-center gap-2  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600'
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <LoaderCircle className='mr-2 h-5 w-5 animate-spin' />
                        )}
                        Create account
                    </Button>
                    <Button
                        variant='outline'
                        className='w-full py-3 flex items-center justify-center border rounded-md'
                    >
                        <LoaderCircle className='mr-2 h-5 w-5' />
                        Sign up with Google
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default SignUp;
