import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LandmarkModel from 'src/app/models/LandmarkModel';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  landmarks:LandmarkModel[] = []
  landmark?: LandmarkModel
  constructor(private http:HttpClient,private loaderService:LoaderService) { }

  setLandmarks(landmarks:LandmarkModel[]) {
    this.landmarks = [...landmarks]
  }

  setLandmark(landmark:LandmarkModel | undefined) {
    this.landmark = landmark
  }

  getLandmarks() {
    return this.http.get(`http://localhost:5000/parse/classes/Landmark?order=order`) 
  }

  getLandmarkById(landmarkId:string) {
    return this.http.get(`http://localhost:5000/parse/classes/Landmark/${landmarkId}`)
  }

  searchLandmarks(searchValue:string) {
    const queryParamsAppendex = new URLSearchParams({
      order:'order',
      ...(searchValue && {where: `{"title":{"$text":{"$search":{"$term":"${searchValue}"},"$caseSensitive":false,"$diacriticSensitive":true}}}`})
    })
    return this.http.get(`http://localhost:5000/parse/classes/Landmark?${queryParamsAppendex}`)
  }


}
