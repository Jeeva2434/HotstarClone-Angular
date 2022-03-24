import { Injectable } from '@angular/core';
import { Pic } from './pic';
import { PopularPic } from './popularPic';
@Injectable({
  providedIn: 'root'
})
export class RollservicesService {

  constructor() { }

  userName:string ='';
  user:boolean = false;
  
  filteredItems:Pic[] = [];
  watchList:Pic[]=[];
  listlength:boolean = false;
  watchAddCount :number = 0;

  playTime:string = '';

  popShow:Pic[] = [];

  latestMovie = [
    {
      imgUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8863/1128863-h-75af4b0bb266",
      names: "Maaran"
    },
    {
      imgUrl:"https://wallpaperaccess.com/full/2162049.jpg",
      names: "Master"
    },
    {
      imgUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/8493/1000058493/1000058493-h",
      names: "Madras"
    },
    {
      imgUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3595/333595-h",
      names: "DJ"
    },
    {
      imgUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/5948/1000035948/1000035948-h",
      names: "Thuppakki"
    },
    {
      imgUrl:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4439/674439-h",
      names: "Bolt"
    }
  ]
  getLatestMovies(){
      return this.latestMovie;
  }

  popularShows = [
    {
      picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4603/1104603-h-788dec723da4",
      picName: "Cooku with Comali",
      duration: "Venkatesh Bhat and Damu bring to you a brand new season of the much-awaited comic coookery! Get set for a high does of entainment with your favourite cooks.",
      type: "Reality * Tamil * Star",
      video:""
    },
    {
      picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8679/1028679-h-f9e901f53b9b",
      picName: "LOKI",
      duration: "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of \"Avengers:Endgame\"",
      type: "Superhero * U/A 13+ * Tamil - Marvel",
      video:""
    },
    {
      picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6362/936362-h",
      picName: "The Falcon",
      duration: "Following the events\"Avengers:Endgame\",Sam Wilson and Bucky Barnes team up in a global that tests their abilities and their patience.",
      type: "Superhero * U/A 13+ * Marvel",
      video:""
    },
    {
      picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3510/753510-h",
      picName: "Kingdom of The White Wolf",
      duration: "Animal & Nature * u/A 7+ * Nat Geo",
      type: "Animation",
      video:""
    }
  ]

  getPopularShows(){
    return this.popularShows;
}
 
sportsField = [
  {
  picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8107/1158107-h-739cb5b29f68",
  picName: "Highlights:SA Drub BD,Level Series",
  duration: "20Mar",
  type: "Cricket * English",
  video:""
  },
  {
    picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6474/1156474-h-1b3204450926",
    picName: "Highlights:Eng Stay Afloat,Beat NZ",
    duration: "",
    type: "ICC Women's Cricket World Cup 2022 * English",
    video:""
  },
  {
    picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4615/1154615-h-23d75a91d41a",
    picName: "Highlights:Oz Dominate Ind,Into SFs",
    duration: "19MAR",
    type: "ICC Women's Cricket World Cup 2022 * English",
    video:""
  },
  {
    picImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9518/1119518-h-fb5b15220c54",
    picName: "Highlights:Dabang Lift Maiden Title",
    duration: "",
    type: "VIVO Pro Kabaddi 2021",
    video:""
  }
]
getSportsField(){
  return this.sportsField;
}

}
