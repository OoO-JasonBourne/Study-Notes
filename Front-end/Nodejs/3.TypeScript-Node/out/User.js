"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(responseUser) {
        this.repos = [];
        this.login = responseUser.login;
        this.bio = responseUser.bio;
        this.name = responseUser.name;
        this.avatar_url = responseUser.url;
    }
}
exports.User = User;
