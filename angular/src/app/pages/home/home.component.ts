import { Component,OnDestroy,OnInit } from '@angular/core';
import LandmarkModel from '../../models/LandmarkModel';
import { LandmarkService } from '../../services/landmark/landmark.service';
import { LoaderService } from '../../services/loader/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private landmarkService: LandmarkService,private loaderService:LoaderService) {}

  ngOnInit() {
    this.loaderService.setLoading(true)
    this.landmarkService.getLandmarks().subscribe(({results}:LandmarkModel[] | any) => {
      this.landmarkService.setLandmarks(results)
    },
    _ => {
      console.log(_)
      this.loaderService.setLoading(false)
    },
    () => {
      this.loaderService.setLoading(false)
    }
    )
  }


  getLoading():boolean {
    return this.loaderService.isLoading
  }

  getLandmarks(): LandmarkModel[] {
    return this.landmarkService.landmarks || []
  }

 

}
