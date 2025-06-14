const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const userData = {
  "login": "raj-dave-2004",
  "id": 194329508,
  "node_id": "U_kgDOC5U7pA",
  "avatar_url": "https://avatars.githubusercontent.com/u/194329508?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/raj-dave-2004",
  "html_url": "https://github.com/raj-dave-2004",
  "followers_url": "https://api.github.com/users/raj-dave-2004/followers",
  "following_url": "https://api.github.com/users/raj-dave-2004/following{/other_user}",
  "gists_url": "https://api.github.com/users/raj-dave-2004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/raj-dave-2004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/raj-dave-2004/subscriptions",
  "organizations_url": "https://api.github.com/users/raj-dave-2004/orgs",
  "repos_url": "https://api.github.com/users/raj-dave-2004/repos",
  "events_url": "https://api.github.com/users/raj-dave-2004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/raj-dave-2004/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-01-09T03:37:27Z",
  "updated_at": "2025-06-04T08:39:10Z"
}
app.get('/', (req, res)=>{
    res.send('Hello')
})
app.get('/a', (req, res)=>{
    res.send('Hello')
})

app.get('/about', (req,res)=>{
    res.send("This is about page")
})

app.get('/login', (req,res)=>{
    res.send('<h1>Please login at chai or code</h1>')
})

app.get('/youtube/one', (req,res)=>{
    res.send('<i>This is youtube<i>')
})

app.get('/user-data',(req,res)=>{
    res.json(userData.login)
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening  on port${[port]}`);
    
})