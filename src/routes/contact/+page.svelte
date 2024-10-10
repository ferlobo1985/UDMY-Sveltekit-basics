<script>
    import { goto, afterNavigate,beforeNavigate } from '$app/navigation'; 

    afterNavigate(()=>{
        console.log('After navigation')
    });
    beforeNavigate(()=>{
        console.log('Before navigation')
    })
</script>

<h1>This is the contact page</h1>
<button on:click={()=> goto('/')}>HOME</button>