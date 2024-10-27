"use client";
import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../../shadcn/components/ui/card";
import { Input } from "../../../../shadcn/components/ui/input";
import { Button } from "../../../../shadcn/components/ui/button";
import { Badge } from "../../../../shadcn/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../../shadcn/components/ui/select";
import { Slider } from "../../../../shadcn/components/ui/slider";
import {
    Search,
    BookOpen,
    Clock,
    Star,
    Users,
    Filter,
    ChevronDown,
    GraduationCap,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../../shadcn/components/ui/sheet";
import { ScrollArea } from "../../../../shadcn/components/ui/scroll-area";
import { Separator } from "../../../../shadcn/components/ui/separator";

interface Course {
    id: string;
    title: string;
    instructor: string;
    description: string;
    level: string;
    duration: string;
    rating: number;
    students: number;
    price: number;
    category: string;
    thumbnail: string;
}

const categories = [
    "All Categories",
    "Programming",
    "Design",
    "Business",
    "Marketing",
    "Music",
    "Photography",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const CoursePage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [priceRange, setPriceRange] = useState([0, 200]);
    const [sortBy, setSortBy] = useState("popularity");

    // Sample course data
    const courses: Course[] = [
        {
            id: "1",
            title: "Complete Web Development Bootcamp",
            instructor: "Sarah Johnson",
            description:
                "Learn full-stack web development from scratch with HTML, CSS, JavaScript, React, Node.js, and more.",
            level: "Beginner",
            duration: "48 hours",
            rating: 4.8,
            students: 15420,
            price: 99.99,
            category: "Programming",
            thumbnail: "/api/placeholder/400/225",
        },
        // Add more sample courses here
    ];

    return (
        <div className='min-h-screen bg-gray-50 p-4 md:p-6'>
            {/* Header */}
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between mb-8'>
                    <div>
                        <h1 className='text-3xl font-bold text-gray-900'>
                            Explore Courses
                        </h1>
                        <p className='text-gray-600 mt-2'>
                            Discover your next learning adventure
                        </p>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className='hidden md:flex items-center space-x-4 flex-1 max-w-xl ml-8'>
                        <div className='relative flex-1'>
                            <Search className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                            <Input
                                placeholder='Search courses...'
                                className='pl-10'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Search Bar - Mobile */}
                <div className='md:hidden mb-4'>
                    <div className='relative'>
                        <Search className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                        <Input
                            placeholder='Search courses...'
                            className='pl-10'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filters and Sort */}
                <div className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6'>
                    {/* Mobile Filter Button */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant='outline'
                                className='md:hidden w-full'
                            >
                                <Filter className='h-4 w-4 mr-2' />
                                Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='left' className='w-full sm:w-96'>
                            <SheetHeader>
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <ScrollArea className='h-full py-4'>
                                <div className='space-y-6'>
                                    {/* Mobile Filters Content */}
                                    <div className='space-y-4'>
                                        <Label>Category</Label>
                                        <Select
                                            value={selectedCategory}
                                            onValueChange={setSelectedCategory}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((category) => (
                                                    <SelectItem
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className='space-y-4'>
                                        <Label>Level</Label>
                                        <Select
                                            value={selectedLevel}
                                            onValueChange={setSelectedLevel}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {levels.map((level) => (
                                                    <SelectItem
                                                        key={level}
                                                        value={level}
                                                    >
                                                        {level}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className='space-y-4'>
                                        <Label>Price Range</Label>
                                        <Slider
                                            value={priceRange}
                                            min={0}
                                            max={200}
                                            step={1}
                                            onValueChange={setPriceRange}
                                        />
                                        <div className='flex justify-between text-sm text-gray-600'>
                                            <span>${priceRange[0]}</span>
                                            <span>${priceRange[1]}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>

                    {/* Desktop Filters */}
                    <div className='hidden md:flex items-center space-x-4'>
                        <Select
                            value={selectedCategory}
                            onValueChange={setSelectedCategory}
                        >
                            <SelectTrigger className='w-[180px]'>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={selectedLevel}
                            onValueChange={setSelectedLevel}
                        >
                            <SelectTrigger className='w-[150px]'>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {levels.map((level) => (
                                    <SelectItem key={level} value={level}>
                                        {level}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <div className='w-[200px] space-y-2'>
                            <Slider
                                value={priceRange}
                                min={0}
                                max={200}
                                step={1}
                                onValueChange={setPriceRange}
                            />
                            <div className='flex justify-between text-sm text-gray-600'>
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex-1' />

                    {/* Sort */}
                    <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='popularity'>
                                Most Popular
                            </SelectItem>
                            <SelectItem value='rating'>
                                Highest Rated
                            </SelectItem>
                            <SelectItem value='newest'>Newest</SelectItem>
                            <SelectItem value='price-low'>
                                Price: Low to High
                            </SelectItem>
                            <SelectItem value='price-high'>
                                Price: High to Low
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Course Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {courses.map((course) => (
                        <Card
                            key={course.id}
                            className='flex flex-col hover:shadow-lg transition-shadow'
                        >
                            <CardHeader className='p-0'>
                                <div className='relative aspect-video'>
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className='object-cover w-full h-full rounded-t-lg'
                                    />
                                    <Badge
                                        className='absolute top-4 right-4'
                                        variant={
                                            course.level === "Beginner"
                                                ? "secondary"
                                                : course.level ===
                                                  "Intermediate"
                                                ? "default"
                                                : "destructive"
                                        }
                                    >
                                        {course.level}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className='flex-1 p-6'>
                                <div className='flex items-center text-sm text-gray-600 mb-2'>
                                    <BookOpen className='h-4 w-4 mr-1' />
                                    <span>{course.category}</span>
                                </div>
                                <CardTitle className='text-xl mb-2 line-clamp-2'>
                                    {course.title}
                                </CardTitle>
                                <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
                                    {course.description}
                                </p>
                                <div className='flex items-center text-sm text-gray-600 space-x-4'>
                                    <div className='flex items-center'>
                                        <Clock className='h-4 w-4 mr-1' />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Star className='h-4 w-4 mr-1 text-yellow-400' />
                                        <span>{course.rating}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <Users className='h-4 w-4 mr-1' />
                                        <span>
                                            {course.students.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                            <Separator />
                            <CardFooter className='p-6 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <GraduationCap className='h-5 w-5 mr-2 text-gray-600' />
                                    <span className='text-sm text-gray-600'>
                                        {course.instructor}
                                    </span>
                                </div>
                                <span className='font-bold text-lg'>
                                    ${course.price.toFixed(2)}
                                </span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Load More Button */}
                <div className='mt-8 text-center'>
                    <Button variant='outline' size='lg'>
                        Load More Courses
                        <ChevronDown className='ml-2 h-4 w-4' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CoursePage;

// Label component used in mobile filters
const Label = ({ children }: { children: React.ReactNode }) => (
    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
        {children}
    </span>
);
