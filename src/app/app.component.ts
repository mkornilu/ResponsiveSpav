import { Component } from '@angular/core';
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';
import { MenuService } from '../fw/services/menu.service';
import { initialMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private frameworkConfigService: FrameworkConfigService, private menuService: MenuService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Facebook', link: 'http://google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Facebook', link: 'http://twitter.com' },
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);

    menuService.items=initialMenuItems;

  }
}
