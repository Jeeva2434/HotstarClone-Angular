import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  
  populitems = PopularPic;
  popularShows:Pic[]=[];
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
    this.popularShows = this.rs.getPopularShows();
  }
  onSelectImage(list:any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.picName)
  }
}
