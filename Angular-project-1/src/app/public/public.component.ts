import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})

export class PublicComponent implements OnInit {
  name:string='';
  constructor(private route:ActivatedRoute){}
ngOnInit(): void {
  this.route.params.subscribe(param=>{
    this.name=param['id']
    console.log(param);
    console.log(this.route);
  })
}
bookId:number=12;
authorId:number=12;
}
