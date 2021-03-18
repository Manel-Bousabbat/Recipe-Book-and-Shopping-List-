import {Component, EventEmitter, Output} from '@angular/core';
import {OuterSubscriber} from 'rxjs/internal-compatibility';
@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
 @Output() featureSelected = new EventEmitter<string>();
  // tslint:disable-next-line:typedef
  onSelect(feature: string ){
    this.featureSelected.emit(feature);
  }
}
