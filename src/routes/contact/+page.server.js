export const actions ={
    default:async({request})=>{
        const formData = await request.formData();
        const name = formData.get('name');

        return {
            success:true,
            username:`The name was ${name}`
        }
    }
}