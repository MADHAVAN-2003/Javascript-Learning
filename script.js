
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve("Promise is resolved after 5 sec")
    },5000)
})

//USE OF ASYN & AWAIT
async function getData(){
    const awaitPromise = await promise
    console.log(awaitPromise);
    console.log("After waiting 5 sec this statement is printed")
}

getData()

//BEFORE ASYNC & AWAIT METHOD TO HANDLE PROMISES
function normalPromiseHandle(){
    promise.then((res)=> console.log(res))
    console.log("In normal way 1st i will be Printed ,after only")
}
normalPromiseHandle()



//Work Out Problems with Time interal behaiviour of Async / Await  

let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Promise1 is Resolved in Async")
    },10000)
  })
  
  let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Promise2 is Resolved in Async")
    },5000)
  })
  
  async function getData(){
    console.log("Hello This Async/Await")
    const promise1 = await p1
    console.log(promise1)
    
    const promise2 = await p2
    console.log(promise2)
  }
  
  getData()


//Fetch the real-world API . GITHUB user details of Mine as Example and  Show it on Console with Async , Await , Fetch

// const api = "https://api.github.com/users/MADHAVAN-2003";
// const api2 = "https://api.github.com/users/MADHAVAN-KIOT";

// async function getGitHubData() {
//   const fetchApi = await fetch(api);
//   const fetchApi2 = await fetch(api2);

//   const jsonValue = await fetchApi.json();
//   const jsonValue2 = await fetchApi2.json();
//   console.log(jsonValue);
//   console.log(jsonValue2);
// }

getGitHubData();


//ERROR- HANDLING FETCHING API

const api = "https://api.github.com/users/MADHAVAN-2003";
const api2 = "https://api.github.com/users/MADHAVAN-piot";

async function getGitHubData() {
  try {
    const fetchApi = await fetch(api);
    const fetchApi2 = await fetch(api2);

    const jsonValue = await fetchApi.json();
    const jsonValue2 = await fetchApi2.json();
    console.log(jsonValue);
    console.log(jsonValue2);
    
  } catch(err) {
    console.log(err);
  }
}

getGitHubData();
