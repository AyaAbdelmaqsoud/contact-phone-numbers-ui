import { Component, OnInit,ViewChild ,AfterViewInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { ContactPhoneNumberService } from '../services/contactPhoneNumber-service';
import {Phone} from '../interface/contact-phone-number/model/Phone';

@Component({
  selector: 'app-contactPhoneNumber',
  templateUrl: './contactPhoneNumber.component.html',
  styleUrls: ['./contactPhoneNumber.component.css']
})
export class ContactPhoneNumberComponent implements OnInit,AfterViewInit {

  public dataSource = new MatTableDataSource<Phone>();

  public displayedColumns = [ 'demo-position','name', 'country' ,'countrycode' , 'phone' , 'state'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  public country:String="";
  public state:String="";
  constructor(private contactPhoneNumberService:ContactPhoneNumberService) { }

  ngOnInit(): void {
    this.contactPhoneNumberService.getContactPhoneNumberList(null,null).subscribe(data => {
      this.dataSource.data = data;
  });

  }

  


  public loadPhoneNumbers()
  {
    this.contactPhoneNumberService.getContactPhoneNumberList(this.country,this.state).subscribe(data => {
      this.dataSource.data = data;
  });
  }

}
