import axios from 'axios';
import { error } from '@sveltejs/kit';

export async function load(){
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = await res.data;

        return {
            users:data,
            car:'Farrari',
            colors:['red','blue','green']
        }
    } catch(er){
        error(404,'Dang it !!')
    }
}

