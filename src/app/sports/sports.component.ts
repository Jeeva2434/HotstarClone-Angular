import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  
  populitems = PopularPic;
  sportsField:Pic[]=[];

  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
    this.sportsField = this.rs.getSportsField();
  }
  onSelectSport(list:any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.picName)
  }
}
