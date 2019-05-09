import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GreetingServiceService} from '../greeting-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private Router: Router, public connect: GreetingServiceService) { }

  ngOnInit() {
  }

  backHome() {
    this.Router.navigate(['/']);
  }
  sayHello() {
    console.log("Hello User!!");
  }
}
