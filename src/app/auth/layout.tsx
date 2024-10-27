import { createClient } from "`@/utils/supabase/server";
import React from "react";
import Header from "../(home)/components/Header";
import Footer from "../(home)/components/Footer";
import { redirect } from "next/navigation";

interface Props {
    children: React.ReactNode;
}
const layout: React.FC<Props> = async ({ children }) => {
    const supabase = createClient();

    const {
        data: { user },
    } = await (await supabase).auth.getUser();
    console.log(user);

    if (user) {
        return redirect("/dashboard");
    }
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default layout;
