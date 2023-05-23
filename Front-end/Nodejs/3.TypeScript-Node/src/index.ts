import { GithubApiService } from "./GithubApiService";
import { Repo } from "./Repos";
import { User } from "./User";
import * as Lodash from "lodash";
import express from "express"
import url from "url";

const app = express();

let api:GithubApiService = new GithubApiService();

app.get("/github", (req, res) => {
    let username:any = url.parse(req.url, true).query.username;
    api.getUserInfo(username, (user:User) => {
        // console.log(user);
        api.getRepoInfo(user.login, (repos:Repo[]) => {
            // console.log(repo)
            let repos_sorted = Lodash.sortBy(repos, [(repo:Repo) => repo.size * -1])
            user.repos = repos_sorted;
            // console.log(user)
            res.send(user);
        });
    })
})




app.listen(3000, () => {
    console.log("The service is running on 'http://localhost:3000'")
})