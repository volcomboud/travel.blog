import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;

  title!: string;
  description!: string;
  createDate!: Date;
  react!: number;
  comments!: string [];
  imageUrl!: string;
  aimer!: boolean;      

  ngOnInit(){
  }

  onAddAime() {
    if (this.aimer){
      this.post.react--;
      this.post.aimer = false;
    }
    else {
      this.post.react++;
      this.post.aimer = true;
    }
  }
}

