'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '`@/utils/supabase/server';


interface LoginFormData
{
    email: string;
    password: string;
}


export async function login(formData: LoginFormData)
{

    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.email,
        password: formData.password,
    };

    const { error } = await supabase.auth.signInWithPassword(data);



    console.log(error);

    if (error) {
        throw new Error(error.message);
    }





    revalidatePath('/', 'layout');
    redirect('/dashboard');
}


interface SignUpFormData
{
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    role: string;
}
export async function signup(formData: SignUpFormData)
{
    const supabase = await createClient();

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.email,
        first_name: formData.first_name,
        last_name: formData.last_name,
        password: formData.password,
        role: formData.role,
    };

    const { error } = await supabase.auth.signUp(data);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/dashboard');
}


export async function logout()
{
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/', 'layout');
    redirect('/');
}
