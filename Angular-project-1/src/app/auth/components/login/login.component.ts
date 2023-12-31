import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string='';
  pass:string='';
  constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(qp=>{
      this.name=qp['name']
      this.pass=qp['password']
    })
  }

}
