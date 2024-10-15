import axios from 'axios';
import { error } from '@sveltejs/kit';

// export const prerender = false;

export async function load({params}){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = await res.data;

        return {
            users:data,
            params
        }
    } catch(er){
        error(404,'Dang it !!')
    }
}

