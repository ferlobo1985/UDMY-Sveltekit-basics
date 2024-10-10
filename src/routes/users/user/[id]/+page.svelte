<script>
    export let data;
    console.log(data)
</script>

<!-- <h1>User by ID: </h1> -->

<ul>
    {#each data.users as user(user.id) }
        <li>Name: {user.name}</li>
    {/each}
</ul>