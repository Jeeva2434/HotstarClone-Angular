import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  populitems = PopularPic;
  latestMovie :any[] = []; 
  popularShows:Pic[]=[];
  sportsField:Pic[]=[];
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
  this.latestMovie = this.rs.getLatestMovies();
  this.popularShows = this.rs.getPopularShows();
  this.sportsField = this.rs.getSportsField();
  }
  
  onSelect(list: any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.names)
  }
  onSelectImage(list:any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.picName)
  }
  onSelectSport(list:any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.picName)
  }
}
