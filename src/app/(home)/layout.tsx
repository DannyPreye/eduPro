import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {
    children: React.ReactNode;
}
const layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='min-h-screen'>{children}</main>
            <Footer />
        </>
    );
};

export default layout;
