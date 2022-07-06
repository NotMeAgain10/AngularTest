import { Component, Input } from '@angular/core';
import LandmarkModel from 'src/app/models/LandmarkModel';

@Component({
  selector: 'app-landmark-card',
  templateUrl: './landmark-card.component.html',
  styleUrls: ['./landmark-card.component.css']
})
export class LandmarkCardComponent  {

  isExpanded:boolean = false

  @Input() landmark: LandmarkModel | any = {}
  @Input() maxShortInfoLength:number = 100

  getShortInfo() :string{
    if(!this.landmark?.objectId) return ''
    return !this.isExpanded ? this.landmark?.short_info?.split('').slice(0,this.maxShortInfoLength).join('') : this.landmark.short_info
  }


  toggleExpandShortInfo() {
    this.isExpanded = !this.isExpanded
  }

  shouldExpand():boolean {
    return this.landmark &&  this.landmark.short_info?.length > this.maxShortInfoLength
  }

  getLandmarkUrl() :string {
    return `/landmarks/${this.landmark?.objectId}`
  }

}
