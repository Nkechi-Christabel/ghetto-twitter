const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const likeBtn = document.querySelectorAll('.addLike')

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener('click', deleteTodo)
})

Array.from(likeBtn).forEach((el) => {
  el.addEventListener('click', likeTweet)
})

Array.from(todoComplete).forEach((el) => {
  el.addEventListener('click', markIncomplete)
})

async function deleteTodo() {
  const tweetId = this.parentNode.parentNode.dataset.id
  try {
    const response = await fetch('tweets/deleteTweet', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'tweetIdFromJSFile': tweetId
      })
      
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function likeTweet() {
  const tweetId = this.parentNode.parentNode.dataset.id
  // console.log(tweetId)
  try {
    const response = await fetch('tweets/likeTweet', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': tweetId
      })
    })
    const data = await  response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id
  try {
    const response = await fetch('tweets/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  } catch (err) {
    console.log(err)
  }
}