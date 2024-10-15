import { error } from '@sveltejs/kit'

export async function load({params, locals}) {
    console.log(locals)
    if(locals.user){
        return {auth:true}
    }
    error(401,'You are not allowed')
}