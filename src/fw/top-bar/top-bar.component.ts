import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  faArrowDown = faArrowDown;
  constructor(private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

}
