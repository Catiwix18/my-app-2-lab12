import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
  }
}
