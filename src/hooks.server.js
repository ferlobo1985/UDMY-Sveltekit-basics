

export async function handle({event,resolve}) {
    if(event.url.pathname.startsWith('/users')){
        event.cookies.set('x-test','some value',{path:'/'})
    }    

    /// go to the DB., check of token
    // event.locals.user = {email:'Francis@gmail.com',admin:true}
    event.locals.user = null;

    const response = await resolve(event);
    return response;
}