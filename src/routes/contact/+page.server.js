import { fail } from '@sveltejs/kit';

export const actions ={
    name:async({request})=>{
        const formData = await request.formData();
        const name = formData.get('name');
        const errors = {};

        if(!name){
            errors.name = 'The input is empty';
        }
        if(!errors.name){
            return {success:true}
        }
        // 422 Unprocessable Entity
        return fail(422,{errors})
    }
}