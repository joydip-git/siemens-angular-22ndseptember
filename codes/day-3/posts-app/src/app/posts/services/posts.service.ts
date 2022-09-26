import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "src/models/post.model";

@Injectable()
export class PostsService {

    // private http: HttpClient;
    // constructor(http: HttpClient) {
    //     this.http = http
    // }
    constructor(private http: HttpClient) {

    }
    getAllPosts(): Observable<Post[]> {
        const obs: Observable<Post[]> = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        return obs
    }
    getPostById(postId: number): Observable<Post> {
        const obs: Observable<Post> = this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + postId)
        return obs
    }
}