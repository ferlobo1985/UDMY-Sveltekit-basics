<script>
    import { page } from '$app/stores';
</script>

<h1>Sorry, {$page.error?.message}</h1>
<p>The code is:{$page.status}</p>