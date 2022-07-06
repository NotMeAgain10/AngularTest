import { Component, OnInit } from '@angular/core';
import { LandmarkService } from 'src/app/services/landmark/landmark.service';
import {  Validators, FormControl }   from '@angular/forms';
import {catchError, debounceTime, filter, switchMap} from 'rxjs/operators'
import { of } from 'rxjs';
 


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

 
  searchValue = new FormControl(null,[Validators.required])
 
  constructor(private landmarkService:LandmarkService,) {
    
   }

  ngOnInit(): void {
    this.searchValue.valueChanges.pipe(
      filter(v => typeof v === "string"),
      debounceTime(1000),
      switchMap((value:string) => { 
        if(!value) return this.landmarkService.getLandmarks().pipe(catchError(err => of([])))
        return this.landmarkService.searchLandmarks(value).pipe(catchError(err => of([])))
      })
    ).subscribe(({results}:any) => {
       this.landmarkService.setLandmarks(results || [])
    })
  }


  

}
