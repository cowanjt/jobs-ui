import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser  } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    console.log(this.loggedIn);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    console.log(this.user);
    this.authService.signOut();
  }
}
