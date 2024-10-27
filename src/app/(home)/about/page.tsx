import React from "react";
import { Card, CardContent } from "../../../../shadcn/components/ui/card";
import { Button } from "../../../../shadcn/components/ui/button";
import {
    Users,
    Target,
    BookOpen,
    Trophy,
    Globe2,
    GraduationCap,
    Clock,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../../../shadcn/components/ui/accordion";

const stats = [
    {
        icon: Users,
        value: "50K+",
        label: "Active Students",
    },
    {
        icon: BookOpen,
        value: "300+",
        label: "Expert Instructors",
    },
    {
        icon: Globe2,
        value: "100+",
        label: "Countries",
    },
    {
        icon: Trophy,
        value: "1M+",
        label: "Course Enrollments",
    },
];

const values = [
    {
        icon: Target,
        title: "Excellence",
        description:
            "We strive for excellence in everything we do, from course quality to student support.",
    },
    {
        icon: Users,
        title: "Community",
        description:
            "Building a supportive learning community where everyone can grow and succeed together.",
    },
    {
        icon: GraduationCap,
        title: "Innovation",
        description:
            "Continuously innovating our teaching methods and platform to enhance learning experiences.",
    },
];

const team = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "/api/placeholder/300/300",
        bio: "Former EdTech executive with 15 years of experience in education technology.",
    },
    {
        name: "Michael Chen",
        role: "Chief Learning Officer",
        image: "/api/placeholder/300/300",
        bio: "PhD in Educational Psychology, passionate about making learning accessible to all.",
    },
    {
        name: "Emma Williams",
        role: "Head of Content",
        image: "/api/placeholder/300/300",
        bio: "Award-winning curriculum designer with expertise in digital learning.",
    },
];

const AboutPage = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            {/* Hero Section */}
            <section className='relative bg-primary text-primary-foreground py-20 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/80' />
                <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                            Transforming Lives Through Education
                        </h1>
                        <p className='text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8'>
                            EduPro is on a mission to create a world where
                            quality education is accessible to everyone,
                            everywhere.
                        </p>
                        <Button size='lg' variant='secondary'>
                            Join Our Mission
                        </Button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-16 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        {stats.map((stat, index) => (
                            <Card
                                key={index}
                                className='text-center p-6 hover:shadow-lg transition-shadow'
                            >
                                <CardContent className='p-0'>
                                    <stat.icon className='h-8 w-8 mx-auto mb-4 text-blue-600' />
                                    <div className='text-3xl font-bold text-gray-900 mb-2'>
                                        {stat.value}
                                    </div>
                                    <div className='text-sm text-gray-600'>
                                        {stat.label}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className='py-16 bg-white px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        <div>
                            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                                Our Story
                            </h2>
                            <div className='space-y-4 text-gray-600'>
                                <p>
                                    Founded in 2020, EduPro emerged from a
                                    simple yet powerful idea: education should
                                    be accessible, engaging, and transformative
                                    for everyone.
                                </p>
                                <p>
                                    What started as a small collection of online
                                    courses has grown into a global learning
                                    community, connecting passionate instructors
                                    with eager learners from every corner of the
                                    world.
                                </p>
                                <p>
                                    Today, we're proud to be at the forefront of
                                    online education, continuously innovating to
                                    provide the best learning experience
                                    possible.
                                </p>
                            </div>
                        </div>
                        <div className='relative'>
                            <img
                                src='/api/placeholder/600/400'
                                alt='EduPro Journey'
                                className='rounded-lg shadow-xl'
                            />
                            <div className='absolute -bottom-6 -right-6 bg-primary/60 text-white p-4 rounded-lg hidden md:block'>
                                <Clock className='h-6 w-6 mb-2' />
                                <p className='font-bold'>Since 2020</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className='py-16 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                        Our Values
                    </h2>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className='hover:shadow-lg transition-shadow'
                            >
                                <CardContent className='p-6 text-center'>
                                    <value.icon className='h-12 w-12 mx-auto mb-4 text-blue-600' />
                                    <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                        {value.title}
                                    </h3>
                                    <p className='text-gray-600'>
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className='py-16 bg-white px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                        Meet Our Leadership
                    </h2>
                    <div className='grid md:grid-cols-3 gap-8'>
                        {team.map((member, index) => (
                            <Card
                                key={index}
                                className='overflow-hidden hover:shadow-lg transition-shadow'
                            >
                                <div className='aspect-square relative'>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                                <CardContent className='p-6'>
                                    <h3 className='text-xl font-bold text-gray-900 mb-1'>
                                        {member.name}
                                    </h3>
                                    <p className='text-blue-600 mb-3'>
                                        {member.role}
                                    </p>
                                    <p className='text-gray-600 text-sm'>
                                        {member.bio}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className='py-16 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-3xl mx-auto'>
                    <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                        Frequently Asked Questions
                    </h2>
                    <Accordion type='single' collapsible className='space-y-4'>
                        <AccordionItem value='item-1'>
                            <AccordionTrigger>
                                What makes EduPro different?
                            </AccordionTrigger>
                            <AccordionContent>
                                EduPro combines expert-led instruction with
                                cutting-edge technology and a supportive
                                community to create a unique learning
                                experience. Our focus on quality content,
                                personalized learning paths, and
                                industry-relevant skills sets us apart.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-2'>
                            <AccordionTrigger>
                                How are your instructors selected?
                            </AccordionTrigger>
                            <AccordionContent>
                                We have a rigorous selection process for our
                                instructors, ensuring they have both expertise
                                in their field and the ability to teach
                                effectively. All instructors go through a
                                comprehensive training program focused on online
                                teaching excellence.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value='item-3'>
                            <AccordionTrigger>
                                Do you offer certificates?
                            </AccordionTrigger>
                            <AccordionContent>
                                Yes, we offer certificates of completion for all
                                our courses. Many of our professional courses
                                also offer industry-recognized certifications
                                that can help advance your career.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 bg-primary text-white px-4 sm:px-6 lg:px-8'>
                <div className='max-w-7xl mx-auto text-center'>
                    <h2 className='text-3xl font-bold mb-6'>
                        Ready to Start Your Learning Journey?
                    </h2>
                    <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
                        Join thousands of learners already transforming their
                        lives through education.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button size='lg' variant='secondary'>
                            Explore Courses
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className=' bg-primary hover:bg-primary/50 hover:text-primary-foreground'
                        >
                            Become an Instructor
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
