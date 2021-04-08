// install this > npm install axios
// API URL - https://jsonplaceholder.typicode.com/users

const axios = require("axios").default;
const url = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/postslkjfjsdfjlksjflksf";

// -------------------------------------------------------
// Promise.then
// axios.get(url).then((response)=>{
//     const { data } = response;
//     // const data = response.data;
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// -------------------------------------------------------


// -------------------------------------------------------
// Parallel Calls
// axios.get(url).then((response)=>{
//     const { data } = response;
//     // const data = response.data;
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// -------------------------------------------------------

// -------------------------------------------------------
// axios.get(url).then((response)=>{
//     const { data } = response;
//     // const data = response.data;
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })
// -------------------------------------------------------


// -------------------------------------------------------
// // Series Calls
// axios.get(url)
// // First API Response
// .then((response)=>{
//     const outerData = response.data;

//     // Second API Response
//     return axios.get(posts)
//     .then((response)=>{
//         const innerData = response.data;
//         return innerData
//     })
//     .then((innerData)=>{
//         return { people : outerData, posts : innerData }
//     })
//     .catch((error)=>{
//         console.log(error);
//     })

// })
// .then((response)=>{
//     // inner api
//     console.log(JSON.stringify(response))
// })
// .catch((error)=>{
//     console.log(error);
// })
// -------------------------------------------------------


// -------------------------------------------------------
// async function getData(){
//     try {
//         const response = await axios.get(url);
//         const { data } = response;
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();
// -------------------------------------------------------


// -------------------------------------------------------
// Series
// async function getData(){
//     try {
//         const peopleResponse = await axios.get(url);
//         const peopleData = peopleResponse.data;
//         // 10 secs

//         const postsResponse = await axios.get(posts);
//         const postsData = postsResponse.data;
//         // 20 secs

//         // 10 + 20
//         console.log({ people : peopleData, posts : postsData });

//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();
// -------------------------------------------------------

// -------------------------------------------------------
// Parallel
async function getData() {
    try {
        const peoplePromise = axios.get(url);
        const postsPromise = axios.get(posts);
        const [peopleResponse, postsResponse] = await Promise.allSettled([peoplePromise, postsPromise]);
        let peopleData = [];
        let postsData = [];
        if (peopleResponse.status === "fulfilled") {
            peopleData = peopleResponse.value.data
        }
        if (postsResponse.status === "fulfilled") {
            postsData = postsResponse.data
        }
        console.log({ people: peopleData, posts: postsData });
    } catch (error) {
        console.log("error");
    }
}
getData();
// -------------------------------------------------------