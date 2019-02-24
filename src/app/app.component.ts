import { Component } from '@angular/core';
import { AuthService, SocialUser  } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jobs-ui';

  constructor(private authService: AuthService) {

  }

  signOut(): void {
    this.authService.signOut();
  }
  
}


