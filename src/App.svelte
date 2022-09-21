<script>
	import FeedbackForm from './components/FeedbackForm.svelte';
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'

	let feedback=[
	{
    id: 1,
    rating: 10,
    text: 'The quick brown fox jump over the lazy dog.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, Where’s the peck of pickled peppers Peter Piper picked?',
  },
  {
    id: 3,
    rating: 8,
    text: 'I scream, you scream, we all scream, for ice cream!',
  },
  {
    id: 4,
    rating: 10,
    text: 'How much wood would a woodchuck chuck if a woodchuck could chuck wood? He would chuck, he would, as much as he could, and chuck as much wood as a woodchuck would if a woodchuck could chuck wood.',
  }]

$: count = feedback.length
$: average =feedback.reduce((a,{rating})=>a + rating,0) /feedback.length

const addFeedback = (e) =>{
	console.log(e.detail)
	const newFeedback= e.detail
	feedback= [newFeedback, ... feedback]
}


  //for the button
const deleteFeedback = (e) =>{
	const itemId=e.detail
	feedback=feedback.filter ((item)=>item.id !=itemId)
	console.log(e.detail)
}

</script>

<main class="container">
  <h1>RPCS Customer Feedback Form</h1>
	<FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average}/>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
</main>
