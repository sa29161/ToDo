import { WelcomeDataService } from './../service/data/welcome-data.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Welcome"
  name=''
  welcomeMessageFromService:string;

  constructor(private route:ActivatedRoute,
    private service:WelcomeDataService) { 

  }

  ngOnInit(): void {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
      ,error => this.handleErrorResponse(error)

    );
  }

  getWelcomeMessagewithParameter(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServicewithPath(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
      ,error => this.handleErrorResponse(error)

    );

    console.log("last line"+this.name);
  }

  handleSuccessfulResponse(response){
    console.log(response);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message;
  }

}
