import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {GithubService} from '../../services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // coming up from req and based on this we can show component conditionally
   user = null;
   //coming from form
   userName : string; 
   error = null;

  constructor(
          private ref:ChangeDetectorRef,
          private githubService : GithubService
  ) { }

  ngOnInit(): void {
  }

    findUser(){
      this.githubService.getUserDetails(this.userName).subscribe(
        (user) =>{
          this.user = user;
          this.error = null;
          this.ref.detectChanges();
        },
        (err) => {
          this.user =null;
          this.error ="User not found";
          this.ref.detectChanges();
        }
      );
 }

}
