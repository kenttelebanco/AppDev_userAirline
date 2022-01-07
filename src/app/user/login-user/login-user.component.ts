import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SigninService } from 'src/app/shared/signin.service';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  isSignedIn = false

  openAlertDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent,{
      data:{
        message: 'Successfully Registered!',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  signupform= this.fb.group({
    name:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    checkbox:[false, Validators.requiredTrue],
  })

  signinform= this.fb.group({
    emailsignin:['', [Validators.required, Validators.email]],
    passwordsignin:['', Validators.required],
  })
  
  constructor(public firebaseService: SigninService, public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(){
    if(localStorage.getItem('user')!==null)
  this.isSignedIn = true
  else 
  this.isSignedIn=false
  }

  async onSignin(email:string, password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

  handleLogout(){
    this.isSignedIn = false
  }

  get fin(){
    return this.signinform.controls;
  }

  get fup(){
    return this.signupform.controls;
  }
}

