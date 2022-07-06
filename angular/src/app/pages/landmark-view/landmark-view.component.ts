import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import LandmarkModel from 'src/app/models/LandmarkModel';
import { LandmarkService } from 'src/app/services/landmark/landmark.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-landmark-view',
  templateUrl: './landmark-view.component.html',
  styleUrls: ['./landmark-view.component.css']
})
export class LandmarkViewComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,public landmarkService: LandmarkService,public loaderService: LoaderService) { }
  showImage:boolean = false;

  ngOnInit(): void {
    this.loaderService.setLoading(true)
    this.route.paramMap.subscribe((params:ParamMap) => {
      const landmarkId = params.get('landmarkId')
      if(!landmarkId) {
        this.router.navigate(['/'])
        return 
      }

      this.landmarkService.getLandmarkById(landmarkId).subscribe((landmark:LandmarkModel)=>{
          if(!landmark) {
            this.router.navigate(['/'])
            return 
          }
          this.landmarkService.setLandmark(landmark)
          this.loaderService.setLoading(false)

        },
        (_) => {
          this.loaderService.setLoading(false)
          this.router.navigate(['/'])
        },
        () => {
          this.loaderService.setLoading(false)
        }
        )
    })

  }
  

  toggleImageFullScreen() {
    this.showImage = !this.showImage
  }

   

}
