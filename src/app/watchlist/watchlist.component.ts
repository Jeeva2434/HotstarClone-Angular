import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  populitems = PopularPic;
  watchlist:Pic[] = this.rs.watchList;
  listlength:boolean = this.watchlist.length>0;

  constructor(private rs:RollservicesService) { }
  
  ngOnInit(): void {
  }
  onSelectWatch(item: any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == item.picName)
  }
}
