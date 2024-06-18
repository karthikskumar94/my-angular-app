import { Component, Input, OnInit} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  @Input()
  details!: string;


  sharedData!: string;

  constructor(private sharedService: SharedService){}

  ngOnInit(){
    this.sharedData=this.sharedService.getData();
  }

}
