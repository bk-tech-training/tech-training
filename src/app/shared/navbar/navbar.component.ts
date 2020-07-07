import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: Observable<User>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.currentUser;
  }

  signInWithGoogle() {
    this.authService.signnInWithGoogle();
  }

  signOut() {
    this.authService.signout();
  }
}
