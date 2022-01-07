import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-user-shedule',
  templateUrl: './user-shedule.component.html',
  styleUrls: ['./user-shedule.component.css']
})

export class UserSheduleComponent implements AfterViewInit {

  displayedColumns = ['date','code', 'arrival', 'origin', 'departure','destination','airline','status' ];
  dataSource!: MatTableDataSource<any>;
  today: number = Date.now();

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private afs: AngularFirestore) {
    setInterval(() => {this.today = Date.now()}, 1);
  }

  ngAfterViewInit(){
    this.afs.collection<any>('bookusers').valueChanges().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  } 

}
