<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'

// $: count = feedback.length
//  $: average =feedback.reduce((a,{rating})=>a + rating,0) /feedback.length

//  const addFeedback = (e) =>{
// 	console.log(e.detail) 
//   	const newFeedback= e.detail
// 	feedback= [newFeedback, ... feedback]
// }


//   //for the button
// const deleteFeedback = (e) =>{
// 	const itemId=e.detail
// 	feedback=feedback.filter ((item)=>item.id !=itemId)
// 	console.log(e.detail)
// }

</script>

<main class="container">
  <h1>RPCS Customer Feedback Form</h1>
	<FeedbackForm  />
	<FeedbackStats />
	<FeedbackList  />
</main>
