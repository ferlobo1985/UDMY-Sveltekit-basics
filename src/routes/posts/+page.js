import axios from "axios";
import { error } from "@sveltejs/kit";

export async function load({params}){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data =  await res.data;

        return {
            posts:data
        }
    } catch(e){
        error(404,'Dang it !!')
    }
}