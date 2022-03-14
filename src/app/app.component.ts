import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  


  ngOnInit(): void {
    
  }
  firstname: String =""
  lastname:String =""
  email : string = ""
  password: string = ""
  gender : string = ""
  country : string = ""
  msg : string =""


  registration(f:any) 
  {
  // alert("registred ")
  if(f.valid){
    this.msg = "Firstname:" + this.firstname + "<br> Lastnamr:" + this.lastname + "<br> Email:" + this.email + 
    "<br> Password:" + this.password + "<br>Gender:" + this.gender + "<br> Country:" + this.country + "<br>"

  }
  else
  {
    this.msg ="invalid"
  }
  }
}
