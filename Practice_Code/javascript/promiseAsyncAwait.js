// Q1. Write a function delay(ms) that returns a Promise which resolves after ms milliseconds

// function delay(ms){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//             console.log('promise resolved')
//         },ms)
//     })
// }
// delay(5000)

// Q2. Convert Promise to async/await
// fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// async function fetchAPI(){
//     try {
//         const res = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// fetchAPI()

// Q3. Create a Promise that randomly resolves or rejects
// let randomPromise = new Promise((resolve, reject)=>{
//     let random = Math.floor(Math.random()*2)
//     if(random)
//         resolve('success')
//     else
//         reject('error')
// })
// randomPromise
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))

// Q4. Write a function that: Fetches user data Then fetches posts using user id (Second call must wait for first)

async function fetchUserData(){
    const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes/joke/random')    
    const userData = await response.json()
    console.log(userData.data.content)
}
fetchUserData()