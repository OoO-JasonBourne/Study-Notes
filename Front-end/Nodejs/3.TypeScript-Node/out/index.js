"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GithubApiService_1 = require("./GithubApiService");
const Lodash = __importStar(require("lodash"));
const express_1 = __importDefault(require("express"));
const url_1 = __importDefault(require("url"));
const app = (0, express_1.default)();
let api = new GithubApiService_1.GithubApiService();
app.get("/github", (req, res) => {
    let username = url_1.default.parse(req.url, true).query.username;
    api.getUserInfo(username, (user) => {
        // console.log(user);
        api.getRepoInfo(user.login, (repos) => {
            // console.log(repo)
            let repos_sorted = Lodash.sortBy(repos, [(repo) => repo.size * -1]);
            user.repos = repos_sorted;
            // console.log(user)
            res.send(user);
        });
    });
});
app.listen(3000, () => {
    console.log("The service is running on 'http://localhost:3000'");
});
