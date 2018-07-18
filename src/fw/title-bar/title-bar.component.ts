import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import {faEllipsisV, faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  faBars=faBars;
  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }

}
