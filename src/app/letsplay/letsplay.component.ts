import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-letsplay',
  templateUrl: './letsplay.component.html',
  styleUrls: ['./letsplay.component.css']
})
export class LetsplayComponent implements OnInit {

  playV:string = this.rs.playTime;
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
  }

}
