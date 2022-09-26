import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "src/models/post.model";
import { PostsService } from "../../services/posts.service";

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

    // private service: PostsService;
    // constructor(service: PostsService) {
    //     this.service = service
    // }
    loading = true
    errorMessage = ''
    posts?: Post[];
    post?: Post;
    constructor(private service: PostsService) {

    }
    ngOnInit(): void {
        const obs: Observable<Post[]> = this.service.getAllPosts()
        obs.subscribe({
            next: (arr: Post[]) => {
                this.posts = arr.slice(0, 9)
                this.loading = false
                this.errorMessage = ''
            },
            error: (err) => {
                this.posts = undefined
                this.loading = false
                this.errorMessage = err.message
            }
        })
    }
    fetchPost(id: number) {
        this.service.getPostById(id)
            .subscribe({
                next: (resp: Post) => {
                    this.post = resp
                },
                error: (err) => {
                    console.log(err)
                }
            })
    }
}