// types/index.ts
interface User
{
    id: string;
    email: string;
    name: string;
    role: 'student' | 'tutor' | 'admin';
    avatar?: string;
    bio?: string;
    createdAt: Date;
}

interface Course
{
    id: string;
    title: string;
    description: string;
    tutorId: string;
    price: number;
    category: string[];
    level: 'beginner' | 'intermediate' | 'advanced';
    thumbnail: string;
    featured: boolean;
    rating: number;
    enrollmentCount: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Lesson
{
    id: string;
    courseId: string;
    title: string;
    description: string;
    videoUrl?: string;
    content: string;
    duration: number;
    order: number;
    resources: Resource[];
}

interface Resource
{
    id: string;
    lessonId: string;
    title: string;
    type: 'pdf' | 'doc' | 'link';
    url: string;
}
