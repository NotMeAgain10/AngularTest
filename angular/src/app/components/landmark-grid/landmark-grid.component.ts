import { Component, Input, OnInit } from '@angular/core';
import LandmarkModel from 'src/app/models/LandmarkModel';
import { LandmarkService } from 'src/app/services/landmark/landmark.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-landmark-grid',
  templateUrl: './landmark-grid.component.html',
  styleUrls: ['./landmark-grid.component.css']
})
export class LandmarkGridComponent  {


  availableGridOptions = [
    {
      name:'Grid View',
      gridOptions: {
        md:`col-md-4`,
        xs:`col-xs-12`,
        sm:`col-sm-12`,
        lg:`col-lg-4`,
        xl:`col-xl-4`,
        margin:'my-2'
      },
      icon:'assets/grid-view.png',
      maxShortInfoLength:100
    },
    {
      name:'List View',
      gridOptions: {
        md:`col-md-12`,
        xs:`col-xs-12`,
        sm:`col-sm-12`,
        lg:`col-lg-12`,
        xl:`col-xl-12`,
        margin:'my-2'
      },
      maxShortInfoLength:500,
      icon:'assets/list-view.png'
    }
  ]

  selectedViewIndex: number = 0

  constructor(public landmarkService:LandmarkService,public loaderService: LoaderService) { }

 


  getLandmarks(): LandmarkModel[]  {
    return this.landmarkService.landmarks?.length ? this.landmarkService.landmarks : []
  }

  setSelectedViewIndex(idx:number) {
    this.selectedViewIndex = idx
  }

  getLoading():boolean {
    return this.loaderService.isLoading
  }

  getGridClass():string {
    return Object.values(this.availableGridOptions[this.selectedViewIndex].gridOptions).join(' ')
  }

}
