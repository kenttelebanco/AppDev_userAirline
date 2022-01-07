import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SigninService } from 'src/app/shared/signin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  isSignedIn = false
  constructor(public firebaseService: SigninService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
