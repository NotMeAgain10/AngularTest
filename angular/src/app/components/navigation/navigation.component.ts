import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isAuth() {
    console.log(!this.authService.user && this.authService.user === undefined);
    
    if (!this.authService.user && this.authService.user === undefined) {
      return true;
    }
    return false;
     
  }

  logout() {
    this.authService.logout
    this.router.navigate(['/login'])
  }

}
