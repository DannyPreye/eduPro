import { BookOpen } from "lucide-react";
import React from "react";

const Logo = () => {
    return (
        <div className='flex items-center space-x-4'>
            <BookOpen className='h-6 w-6' />
            <span className='text-xl font-bold'>EduPro</span>
        </div>
    );
};

export default Logo;
