import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
@Component({
  selector: 'app-slider-all',
  templateUrl: './slider-all.component.html',
  styleUrls: ['./slider-all.component.css']
})
export class SliderAllComponent implements OnInit {
   

  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
  }

}
