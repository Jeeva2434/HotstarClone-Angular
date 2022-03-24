import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  populitems = PopularPic;
  constructor(private rs:RollservicesService) { }
   
  public userName:string = this.rs.userName; 
  user:boolean = this.rs.user;
  values:string = ""
  ngOnInit(): void {

  }
  myFun() {
    this.values = ((document.getElementById("value") as HTMLInputElement).value);
    console.log(this.values);
    var v = this.values;
    this.rs.filteredItems = this.populitems.filter(i => i.picName == v)
}
//  receiveMsg(event:any){
//    this.user = event;
//  }
}
