import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  id:number=0;
  authorId:number=0;
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
   this.route.params.subscribe(param=>{
    this.id=param['id'];
    this.authorId=param['authorId']
    console.log(param['id'])
    
   })
  }

}
