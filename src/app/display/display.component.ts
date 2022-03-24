import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  filteredItem :Pic[] = this.rs.filteredItems;
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
  }
addWatch(v1:Pic){
  console.log(v1);
  if(this.rs.watchList.length!=0){
    for(let i=0;i<this.rs.watchList.length;i++){
      if(v1.picName==this.rs.watchList[i].picName)
      this.rs.watchAddCount+=1;
    }
    if(this.rs.watchAddCount==0)
    this.rs.watchList.unshift(v1);
  }
  else{
    this.rs.watchList.unshift(v1);
  }   
}
play(p1:Pic){
  this.rs.playTime = p1.video;
}

}


