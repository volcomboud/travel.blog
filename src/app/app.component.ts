import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  poster!: Post;

  ngOnInit(): void {
      this.poster = new Post(
      "Injecter works ->> ?",
      "Les belles montagnes",
      new Date(),
      8,
      "Vraiment patate jambon ton truc",
      "https://pixabay.com/get/gbda147ace34c0d9979f4211d982f6a0bf3890ae8e5c7a8fb38729073ca222e0ffe0bc72d68f0f56f20084d2094da2c949f16fe0dfeafc22e76464ae234fe4cafac74ce51fdaddc6db0378c6201d49983_1280.jpg",
      true
    );
  }
}
