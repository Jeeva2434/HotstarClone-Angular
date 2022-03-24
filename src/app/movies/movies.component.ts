import { Component, OnInit } from '@angular/core';
import { Pic } from '../pic';
import { PopularPic } from '../popularPic';
import { RollservicesService } from '../rollservices.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  populitems = PopularPic;
  latestMovie :any[] = [];
  constructor(private rs:RollservicesService) { }

  ngOnInit(): void {
    this.latestMovie = this.rs.getLatestMovies();
  }
  onSelect(list: any):void{
    this.rs.filteredItems = this.populitems.filter(i => i.picName == list.names)
  }
}
