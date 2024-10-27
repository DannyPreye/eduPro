"use client";
import React from "react";
import { Button } from "../../../../shadcn/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../../shadcn/components/ui/card";
import { Badge } from "../../../../shadcn/components/ui/badge";
import { Users, ArrowRight, Star, Globe, Timer, Award } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
    const router = useRouter();

    const features = [
        {
            icon: <Globe className='w-6 h-6' />,
            title: "Learn From Anywhere",
            description:
                "Access world-class education from the comfort of your home",
        },
        {
            icon: <Users className='w-6 h-6' />,
            title: "Expert Instructors",
            description:
                "Learn from industry professionals and certified experts",
        },
        {
            icon: <Timer className='w-6 h-6' />,
            title: "Self-Paced Learning",
            description:
                "Study at your own pace with lifetime access to courses",
        },
        {
            icon: <Award className='w-6 h-6' />,
            title: "Certified Learning",
            description: "Earn certificates upon course completion",
        },
    ];

    const stats = [
        { number: "10K+", label: "Active Students" },
        { number: "500+", label: "Expert Tutors" },
        { number: "1000+", label: "Courses" },
        { number: "95%", label: "Success Rate" },
    ];

    return (
        <div className='flex flex-col min-h-screen'>
            {/* Hero Section */}
            <section className='container mx-auto px-4 py-12 md:py-24 space-y-8'>
                <div className='flex flex-col items-center text-center space-y-6'>
                    <Badge variant='secondary' className='px-4 py-1'>
                        ✨ Transform Your Future With Quality Education
                    </Badge>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-4'>
                        Master New Skills with
                        <br className='hidden sm:block' />
                        <span className='text-primary'>
                            {" "}
                            Expert-Led Courses
                        </span>
                    </h1>
                    <p className='text-lg md:text-xl text-muted-foreground max-w-[600px] px-4'>
                        Join thousands of learners acquiring in-demand skills
                        from industry experts. Start your learning journey
                        today.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4'>
                        <Button
                            className='p-3 border flex gap-2 hover:border-primary hover:bg-secondary hover:text-secondary-foreground duration-700 w-full sm:w-auto'
                            size='lg'
                            onClick={() => router.push("/courses")}
                        >
                            Explore Courses
                            <ArrowRight className='ml-2 h-4 w-4' />
                        </Button>
                        <Button
                            className='p-3 hover:bg-primary/90 hover:text-primary-foreground duration-700 w-full sm:w-auto'
                            size='lg'
                            variant='outline'
                            onClick={() => router.push("/tutors")}
                        >
                            Become a Tutor
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='border-y bg-muted/50 py-8 md:py-12'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className='text-center space-y-2 p-4'
                            >
                                <h3 className='text-2xl md:text-3xl font-bold text-primary'>
                                    {stat.number}
                                </h3>
                                <p className='text-sm md:text-base text-muted-foreground'>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='py-12 md:py-24'>
                <div className='container mx-auto px-4 space-y-12'>
                    <div className='text-center space-y-4 px-4'>
                        <h2 className='text-2xl md:text-3xl font-bold'>
                            Why Choose EduPro?
                        </h2>
                        <p className='text-muted-foreground max-w-[600px] mx-auto'>
                            We provide a comprehensive learning experience with
                            features designed to help you succeed.
                        </p>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className='border-2 rounded-md hover:border-primary p-4 md:p-5 hover:shadow-lg duration-700 transition-colors'
                            >
                                <CardHeader>
                                    <div className='p-2 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4'>
                                        {feature.icon}
                                    </div>
                                    <CardTitle className='text-lg md:text-xl'>
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className='text-sm md:text-base text-muted-foreground'>
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Courses Preview */}
            <section className='py-12 md:py-24'>
                <div className='container mx-auto px-4 space-y-12'>
                    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 px-4'>
                        <div className='space-y-4'>
                            <h2 className='text-2xl md:text-3xl font-bold'>
                                Featured Courses
                            </h2>
                            <p className='text-muted-foreground max-w-[600px]'>
                                Start learning from our most popular courses
                            </p>
                        </div>
                        <Button
                            className='p-2 flex gap-2 hover:bg-primary/90 hover:text-primary-foreground duration-700 w-full sm:w-auto'
                            size='lg'
                            onClick={() => router.push("/courses")}
                        >
                            View All Courses
                            <ArrowRight className='ml-2 h-4 w-4' />
                        </Button>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                        {[1, 2, 3].map((_, index) => (
                            <Card
                                key={index}
                                className='cursor-pointer p-4 rounded-md hover:border-primary hover:shadow-lg transition-shadow'
                            >
                                <CardHeader className='space-y-4'>
                                    <img
                                        src={`/api/placeholder/800/400`}
                                        alt='Course thumbnail'
                                        className='w-full h-40 sm:h-48 object-cover rounded-lg'
                                    />
                                    <div className='flex flex-wrap items-center gap-2'>
                                        <Badge variant='secondary'>
                                            Development
                                        </Badge>
                                        <Badge variant='secondary'>
                                            Beginner
                                        </Badge>
                                    </div>
                                    <CardTitle className='line-clamp-2 text-lg md:text-xl'>
                                        Complete Web Development Bootcamp
                                    </CardTitle>
                                    <div className='flex items-center space-x-1 text-yellow-500'>
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className='w-4 h-4 fill-current'
                                            />
                                        ))}
                                        <span className='text-muted-foreground text-sm ml-2'>
                                            (4.9)
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className='space-y-4'>
                                    <CardDescription className='line-clamp-2'>
                                        Learn web development from scratch with
                                        hands-on projects and real-world
                                        applications
                                    </CardDescription>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center space-x-2'>
                                            <img
                                                src={`/api/placeholder/40/40`}
                                                alt='Tutor'
                                                className='w-8 h-8 rounded-full'
                                            />
                                            <span className='text-sm font-medium'>
                                                John Doe
                                            </span>
                                        </div>
                                        <span className='text-primary font-bold'>
                                            $99.99
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='border-t bg-muted/50'>
                <div className='container mx-auto px-4 py-12 md:py-24'>
                    <Card className='bg-primary text-primary-foreground'>
                        <CardContent className='p-6 md:p-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8'>
                            <div className='space-y-4 text-center md:text-left'>
                                <h2 className='text-2xl md:text-3xl font-bold'>
                                    Ready to Start Learning?
                                </h2>
                                <p className='text-primary-foreground/90 max-w-[500px]'>
                                    Join thousands of students already learning
                                    on our platform. Get started with your first
                                    course today!
                                </p>
                            </div>
                            <Button
                                className='p-2 flex gap-2 bg-secondary text-secondary-foreground hover:border-primary hover:bg-secondary/90 hover:text-secondary-foreground duration-700 w-full md:w-auto'
                                size='lg'
                                variant='secondary'
                                onClick={() => router.push("/signup")}
                            >
                                Get Started Now
                                <ArrowRight className='ml-2 h-4 w-4' />
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}
