import { error } from '@sveltejs/kit';

export function GET(obj){
    // console.log(obj)
    return new Response(
        JSON.stringify({username:'Steve'}),
        {status:201}
    )
}

export async function POST({request}){
    const { email } = await request.json();

    if(email !== "francis@gmail.com"){
        return error(400,'You are not francis')
    }

    return new Response('Sucesss',{status:201})
}