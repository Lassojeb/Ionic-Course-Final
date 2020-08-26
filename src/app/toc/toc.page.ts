import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      id: 1,
      title: 'Chapter 1 | Where It All Began',
      url: '/chapter1'
    },
    {
      id: 2,
      title: 'Chapter 2 | The Journey of the Hero',
      url: '/chapter2'
    },
    {
      id: 3,
      title: 'Chapter 3 | Now It Ends',
      url: '/chapter3'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
