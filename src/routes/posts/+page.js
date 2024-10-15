import axios from "axios";
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const prerender = true;

export async function load({params}){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data =  await res.data;

        return {
            posts:data
        }
    } catch(e){
        redirect(307,'/')
        // error(404,'Dang it !!')
    }
}