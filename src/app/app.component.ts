import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SigninService } from './shared/signin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userAirline';
  name= "Log In";


  constructor(private fb: FormBuilder, private signin: SigninService) {}

  ngOnInit() {}

}
