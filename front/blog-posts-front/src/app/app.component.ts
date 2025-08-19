import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import PostCardComponent from "./features/posts/ui/post-card/post-card.component";
import { Post } from './features/posts/posts.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blog-posts-front';
  post: Post = {
    id: "1",
    title: 'Sample Post',
    shortContent: 'This is a sample post.',
    content: 'This is the full content of the sample post.',
    cover: 'https://via.placeholder.com/150'
  };
}
