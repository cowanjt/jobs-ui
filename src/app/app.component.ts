import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService, SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private title = 'Jobs UI';

  private user: SocialUser;
  public loggedIn: boolean;

  public constructor(private authService: AuthService, private titleService: Title) {
  }

  ngOnInit() {
    this.setTitle(this.title);

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  public signOut(): void {
    this.authService.signOut();
  }
}
