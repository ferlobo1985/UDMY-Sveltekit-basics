<script>
    export let data;
</script>

<h1>User by ID: {data.params.id} </h1>
<hr/>
<ul>
    {#each data.users as user(user.id) }
        <li>Name: {user.name}</li>
    {/each}
</ul>