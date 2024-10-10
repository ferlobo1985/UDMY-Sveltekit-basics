import { error } from '@sveltejs/kit';
import { SECRET_API } from '$env/static/private';
import { PUBLIC_API_KEY } from '$env/static/public';

export async function load({fetch,params}){

    console.log(SECRET_API, '-SECRET');
    console.log(PUBLIC_API_KEY, '-PUBLIC');

    const url = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
    const response = await fetch(url);
    const json = await response.json();

    if(Object.keys(json).length !== 0){
        return { post: json}
    }
    error(404,'Dang it !!')
}