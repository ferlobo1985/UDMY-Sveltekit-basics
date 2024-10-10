<script>
    export let data;
    import { PUBLIC_API_KEY } from '$env/static/public';
    console.log(PUBLIC_API_KEY)
</script>
<!-- 
<h1>User by ID: {data.params.id} </h1>
<hr/>
<ul>
    {#each data.users as user(user.id) }
        <li>Name: {user.name}</li>
    {/each}
</ul> -->