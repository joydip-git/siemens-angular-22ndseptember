import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PostsListComponent } from "./components/posts-list/posts-list.component";
import { PostsService } from "./services/posts.service";
import { PostDetailComponent } from "./components/post-detail/post-detail.component";

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [PostsListComponent, PostDetailComponent],
    providers: [PostsService],
    exports: [PostsListComponent],
    bootstrap: []
})
export class PostsModule {

}