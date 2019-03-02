import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, LinkedInLoginProvider, FacebookLoginProvider, SocialUser  } from "angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  public loggedIn: boolean;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }

  signInWithLocal(): void {
    throw new Error("signIn() is not yet implmented.");
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user);
    });
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user);
    });
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user);
    });
  }
}
