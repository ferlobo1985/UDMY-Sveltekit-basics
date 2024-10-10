<script>
    import axios from 'axios';
    let email = '';

    async function postUser(){
        try{
            const url = '/api/users';
            const response = await axios.post(url,{
                email
            });
            console.log(response.data)
        } catch(error){
            console.log(error.response.data.message)
        }
    }
</script>

<h1>This is the HOME USERS page</h1>
<input type="email" bind:value={email}/>
<button on:click={postUser}>Post user</button>