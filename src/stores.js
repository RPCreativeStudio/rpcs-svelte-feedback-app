import { writable } from 'svelte/store'

export const FeedbackStore = writable([
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
      },
])
