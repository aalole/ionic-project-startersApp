import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GreetingServiceService} from '../greeting-service.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private Router: Router, public connect: GreetingServiceService) {}

  ngOnInit() {
    this.connect.getlocalData().subscribe(data =>{
      console.log("Local Data");
      console.log(data);
    })

    this.connect.getRemoteData().subscribe(data =>{
      console.log("remote Data");
      console.log(data);
    })
    
  }
  backToDetails() {
    this.Router.navigate(['/details']);
  }
}
