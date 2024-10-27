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
import { Label } from "../../../../shadcn/components/ui/label";
import { Input } from "../../../../shadcn/components/ui/input";
import { Button } from "../../../../shadcn/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { login } from "../actions";
import { useToast } from "../../../../shadcn/hooks/use-toast";

const Login = () => {
    const { toast } = useToast();
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Required"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
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
        <Card className='p-6  bg-white shadow-lg rounded-lg'>
            <CardHeader>
                <CardTitle className='text-2xl font-semibold'>
                    Login to your account
                </CardTitle>
                <CardDescription className='text-sm text-gray-500'>
                    Enter your email and password to access your learning
                    dashboard
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className='space-y-5 mt-6'>
                    <div className='space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                            id='email'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder='name@example.com'
                            required
                        />
                        {errors.email && touched.email && (
                            <p className='text-red-500'>{errors.email}</p>
                        )}
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            className='p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600'
                            id='password'
                            type='password'
                            required
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && (
                            <p className='text-red-500'>{errors.password}</p>
                        )}
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col space-y-4 '>
                    <Button
                        type='submit'
                        className='w-full py-3 flex items-center justify-center bg-primary gap-2  text-white rounded-md hover:bg-primary/10 hover:text-primary focus:outline-none focus:ring-2 focus:ring-indigo-600'
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <LoaderCircle className='mr-2 h-5 w-5 animate-spin' />
                        )}
                        Sign in
                    </Button>
                    <div className='relative flex justify-center text-xs uppercase text-gray-500'>
                        <span className='bg-white px-2'>Or continue with</span>
                    </div>
                    <Button
                        type='button'
                        variant='outline'
                        className='w-full flex items-center justify-center py-3 border rounded-md'
                    >
                        <LoaderCircle className='mr-2 h-5 w-5' />
                        Google
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
};

export default Login;
