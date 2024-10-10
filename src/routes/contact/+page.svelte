<script>
    export let form;
    console.log(form)
</script>


<form method="POST">
    <div class="mb-3">
        <label for="name" class="form-label">You name</label>
        <input type="text" class="form-control" name="name" id="formname"/>
    </div>
    <button type="submit">Submit</button>
</form>