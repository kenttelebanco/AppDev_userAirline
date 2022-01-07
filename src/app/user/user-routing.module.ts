import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../admin/admin-home/admin-home.component';
import { AdminsLoginComponent } from '../admin/admins-login/admins-login.component';
import { FlightAddComponent } from '../admin/flight-add/flight-add.component';
import { FlightDeleteComponent } from '../admin/flight-delete/flight-delete.component';
import { HomeScreenComponent } from '../airline-homescreen/home-screen.component';
import { BookUserComponent } from './book-user/book-user.component';
import { BookingDataComponent } from './book-user/booking-data/booking-data.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSheduleComponent } from './user-shedule/user-shedule.component';


const routes: Routes = [
{ path: '', redirectTo: 'homescreen', pathMatch: 'full' },
{path: 'lg', redirectTo: ' /user-login', pathMatch: 'full'},
{path: 'uh', redirectTo: ' /user-home', pathMatch: 'full'},
{path: 'bu', redirectTo: ' /book-user', pathMatch: 'full'},
{path: 'ub', redirectTo: ' /user-booking', pathMatch: 'full'},

{path: 'homescreen', component:HomeScreenComponent},

{path: 'user-home', component: UserHomeComponent},
{path: "book-user", component: BookUserComponent},
{path: "user-booking", component: UserBookingComponent},
{path: "sched-user", component: UserSheduleComponent},
{path: 'user-login', component: LoginUserComponent},

{path: 'al', redirectTo: '/admin-login', pathMatch: 'full'},
{path: 'ah', redirectTo: '/admin-home', pathMatch: 'full'},
{path: 'fa', redirectTo: '/flight-admin', pathMatch: 'full'},
{path: 'fd', redirectTo: '/flight-delete', pathMatch: 'full'},

{path: 'admin-login', component: AdminsLoginComponent},
{path: 'admin-home', component: AdminHomeComponent},
{path: 'flight-admin', component: FlightAddComponent},
{path: 'flight-delete', component: FlightDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
