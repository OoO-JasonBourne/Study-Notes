import * as request from "request"
import { User } from "./User"
import { Repo } from "./Repos";


const options = {
    headers: {
        "User-Agent": "request"
    },
    json: true
}

export class GithubApiService {
    getUserInfo(userName: string, callback:any) {
        request.get("https://api.github.com/users/" + userName, options, function (error: any, response: any, body: any) { 
        // console.log(body);
        let user:User = new User(body);
        // console.log(user)
        callback(user)
        })
    }
    getRepoInfo(repoName:string, callback:any){
        request.get("https://api.github.com/users/" + repoName + "/repos", options, function(error:any, response:any, body: any) {
            // let repo:Repo = new Repo(body);
            let repo:Repo[] = body.map((repo:any) => new Repo(repo))
            // console.log(repo);  
            callback(repo)         
        })
    }
}

