const express = require("express");
const app = express();
const axios = require("axios").default;
const url = "https://jsonplaceholder.typicode.com/users";
const posts = "https://jsonplaceholder.typicode.com/posts";

app.set("view engine" , "ejs")

app.get("/people", async (req, res)=>{
    const peopleResponse = await axios.get(url);
    const peopleData = peopleResponse.data;
    res.render("people", { people : peopleData })
})

app.get("/api/posts", async (req, res)=>{

    const postResponse = await axios.get(posts);
    let postData = postResponse.data;

    // Comments API - /posts/1/comments

    const commentsPromises = postData.map((post, index)=>{
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then((response)=>{
            return response.data
        })
    });

    const commentsResponses = await Promise.allSettled(commentsPromises);
    postData = postData.map((item, index)=>{
        return {...item, comments : commentsResponses[index].status === "fulfilled" ? commentsResponses[index].value : [] }
    })
    
    res.json({ posts : postData })
})

app.listen(3000, ()=>{
    console.log("Server started successfully.")
})