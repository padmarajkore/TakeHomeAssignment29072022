import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../salesperson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  salesPersonsList: Salesperson [] =  [
    new Salesperson("Raj", "Kore", "padmaraj.com@gmail.com",20000,"300"),
    new Salesperson("Raj", "Kore", "padmaraj.com@gmail.com",20000,"300"),
    new Salesperson("Raj", "Kore", "padmaraj.com@gmail.com",20000,"300"),

  ]
  formModel : Salesperson = new Salesperson("","","",0,"");
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formModel);
    this.salesPersonsList.push(this.formModel);
    
  }


}
