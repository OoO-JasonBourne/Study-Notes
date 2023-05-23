"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
class Repo {
    constructor(repo) {
        this.name = repo.name;
        this.size = repo.size;
        this.language = repo.language;
        this.description = repo.description;
    }
}
exports.Repo = Repo;
