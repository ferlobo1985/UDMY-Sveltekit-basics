<script>
    import { enhance } from '$app/forms';
    export let form;
</script>

<form method="POST" use:enhance={({formElement, formData, action, cancel, submitter})=>{
    console.log(formElement) // DOM ELEMENT
    console.log(formData.get('name')) /// FORMDATA OBJECT
    console.log(action) /// where is going to POST
    // cancel()
    return async ({result,update})=>{
        console.log(result);
        update()
    }

}}>
    <div class="mb-3">
        <label for="name" class="form-label">You name</label>
        <input type="text" class="form-control" name="name" id="formname"/>
        {#if form && form.errors}
            <strong>{form.errors.name}</strong>
        {/if}
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
{#if form && form.success}
    <p>thank you !!!</p>
{/if}