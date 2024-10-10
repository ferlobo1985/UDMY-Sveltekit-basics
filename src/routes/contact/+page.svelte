<script>
    export let form;
</script>


<form method="POST">
    <div class="mb-3">
        <label for="name" class="form-label">You name</label>
        <input type="text" class="form-control" name="name" id="formname"/>
        {#if form && form.errors}
            <strong>{form.errors.name}</strong>
        {/if}
    </div>
    <button type="submit">Submit</button>
</form>
{#if form && form.success}
    <p>thank you !!!</p>
{/if}