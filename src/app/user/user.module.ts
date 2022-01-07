import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { BookUserComponent } from './book-user/book-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserSheduleComponent } from './user-shedule/user-shedule.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BookDialogComponent } from './book-user/book-dialog/book-dialog.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LoginDialogComponent } from './login-user/login-dialog/login-dialog.component';
import { UsernavComponent } from './usernav/usernav.component';
import { BookingDataComponent } from './book-user/booking-data/booking-data.component';
import { BookingCardComponent } from './book-user/booking-card/booking-card.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { UserbookingCardComponent } from './user-booking/userbooking-card/userbooking-card.component';
import { HomeScreenComponent } from '../airline-homescreen/home-screen.component';
import { AdminLoginDialogComponent } from '../admin/login-dialog/login-dialog.component';
import { AdminsLoginComponent } from '../admin/admins-login/admins-login.component';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { FlightAddComponent } from '../admin/flight-add/flight-add.component';
import { FlightDialogComponent } from '../admin/flight-add/flight-dialog/flight-dialog.component';
import { AdminnavComponent } from '../admin/adminnav/adminnav.component';
import { FlightDeleteComponent } from '../admin/flight-delete/flight-delete.component';
import { FlightDataComponent } from '../admin/flight-delete/flight-data/flight-data.component';
import { FlightCardComponent } from '../admin/flight-delete/flight-card/flight-card.component';



@NgModule({
  declarations: [
    BookUserComponent,
    LoginUserComponent,
    UserSheduleComponent,
    BookDialogComponent,
    UserHomeComponent,
    LoginDialogComponent,
    UsernavComponent,
    BookingDataComponent,
    BookingCardComponent,
    UserBookingComponent,
    UserbookingCardComponent,
    HomeScreenComponent,
    AdminLoginDialogComponent,
    AdminsLoginComponent,
    AdminHomeComponent,
    FlightAddComponent,
    FlightDialogComponent,
    AdminnavComponent,
    FlightDeleteComponent,
    FlightDataComponent,
    FlightCardComponent,
    FlightDialogComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: []

})
export class UserModule { }
