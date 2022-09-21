<script>
    import {onMount,onDestroy} from 'svelte'
    import {FeedbackStore} from '../stores'
    import {fade, scale} from 'svelte/transition'
    import FeedbackItem from './FeedbackItem.svelte'
    let feedback=[]
//   //console.log(feedback)
     FeedbackStore.subscribe((data) => feedback =data)

// // const unsubscribe = FeedbackStore.subscribe((data) => feedback)
    
     onMount (()=> {
        console.log('mounted')
     })

//     onDestroy(()=> {
//         unsubscribe(()
//         })
//     })

</script>

{#each $FeedbackStore as fb (fb.id)}
 <div in:scale out:fade="{{duration: 500}}"> 
    <!-- <div transition:fade> -->
    <FeedbackItem item={fb} />
</div>
{/each}