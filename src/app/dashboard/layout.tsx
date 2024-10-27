"use client";
import React from "react";
import { useState } from "react";
import {
    Menu,
    Bell,
    Search,
    User,
    LayoutDashboard,
    BookOpen,
    LineChart,
    Calendar,
    MessageSquare,
    Settings,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../../../shadcn/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../shadcn/components/ui/dropdown-menu";
import Logo from "../components/Logo";
import { logout } from "../auth/actions";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const navigation = [
        { name: "Dashboard", icon: LayoutDashboard, href: "#" },
        { name: "Courses", icon: BookOpen, href: "#" },
        { name: "Progress", icon: LineChart, href: "#" },
        { name: "Calendar", icon: Calendar, href: "#" },
        { name: "Messages", icon: MessageSquare, href: "#" },
    ];

    return (
        <div className='min-h-screen flex  bg-gray-50'>
            {/* Desktop Sidebar */}
            <div
                className={` inset-y-0 z-50 sticky top-0  flex-col hidden lg:flex
        ${sidebarOpen ? "w-64" : "w-16"}
        transition-all duration-300 bg-white border-r`}
            >
                {/* Logo */}
                <div className='flex items-center h-16 px-4 border-b'>
                    {sidebarOpen && <Logo />}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`${
                            sidebarOpen ? "ml-auto" : "mx-auto"
                        } p-2 rounded-lg hover:bg-gray-100`}
                    >
                        {sidebarOpen ? (
                            <ChevronLeft className='h-5 w-5' />
                        ) : (
                            <ChevronRight className='h-5 w-5' />
                        )}
                    </button>
                </div>

                {/* Navigation */}
                <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 group'
                        >
                            <item.icon className='h-5 w-5 text-gray-500 group-hover:text-primary' />
                            {sidebarOpen && (
                                <span className='ml-3 text-sm font-medium'>
                                    {item.name}
                                </span>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Bottom section */}
                <div className='p-4 border-t'>
                    <a
                        href='#'
                        className='flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 group'
                    >
                        <Settings className='h-5 w-5 text-gray-500 group-hover:text-primary' />
                        {sidebarOpen && (
                            <span className='ml-3 text-sm font-medium'>
                                Settings
                            </span>
                        )}
                    </a>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger className='fixed left-4 top-4 z-40 lg:hidden'>
                    <Menu className='h-6 w-6' />
                </SheetTrigger>
                <SheetContent side='left' className='w-64 p-0'>
                    <div className='flex flex-col h-full'>
                        <div className='flex items-center h-16 px-4 border-b'>
                            <h1 className='text-xl font-bold'>EduPlatform</h1>
                        </div>
                        <nav className='flex-1 p-4 space-y-2'>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className='flex items-center px-2 py-2 rounded-lg hover:bg-gray-100 group'
                                >
                                    <item.icon className='h-5 w-5 text-gray-500 group-hover:text-primary' />
                                    <span className='ml-3 text-sm font-medium'>
                                        {item.name}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Main Content */}
            <div
                className={`lg:pl-${
                    sidebarOpen ? "64" : "16"
                } transition-all flex-1 duration-300`}
            >
                {/* Top bar */}
                <header className='sticky top-0 z-40 w-full h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
                    <div className='flex items-center justify-between h-full px-4 md:px-6'>
                        <div className='flex-1 hidden md:flex'>
                            <div className='relative'>
                                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500' />
                                <input
                                    type='search'
                                    placeholder='Search...'
                                    className='pl-8 h-9 w-64 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors'
                                />
                            </div>
                        </div>

                        {/* Right side items */}
                        <div className='flex items-center space-x-4'>
                            <button className='relative'>
                                <Bell className='h-6 w-6' />
                                <span className='absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center'>
                                    3
                                </span>
                            </button>

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className='h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center'>
                                        <User className='h-4 w-4' />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align='end'>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Settings
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={async () => {
                                            await logout();
                                        }}
                                    >
                                        Sign out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className='p-4 md:p-6 lg:p-8'>
                    {/* Breadcrumb */}
                    <div className='mb-6'>
                        <h2 className='text-2xl font-semibold'>Dashboard</h2>
                        <div className='text-sm text-muted-foreground'>
                            Welcome back to your learning journey
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className='grid gap-6'>{children}</div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
