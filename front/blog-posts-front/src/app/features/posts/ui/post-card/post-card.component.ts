import { Component, inject, input } from "@angular/core";
import { Post } from "../../posts.model";
import { Router } from "@angular/router";

@Component({
    selector: 'post-card',
    standalone: true,
    templateUrl: './post-card.component.html',
    styleUrls: ['./post-card.component.scss'],
})
class PostCardComponent {
    post = input.required<Post>();
    router = inject(Router);

    onReadMore() {
        this.router.navigate(['/posts', this.post().id]);
    }
}

export default PostCardComponent;