import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser  } from "angularx-social-login";


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

  signIn(): void {
    throw new Error("signIn() is not yet implmented.");
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      console.log(user);
    });
  }

  signInWithGithub(): void {
    throw new Error("signInWithGithub() is not yet implmented.");
  }
}
