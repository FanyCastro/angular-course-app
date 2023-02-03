import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private dataStorage: DataStorageService,
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      (user) => {
        this.isAuthenticated = !! user;
      }
    );
  }

  onSaveData() {
      this.dataStorage.storeRecipes();
  }

  onFetchRecipe() {
      this.dataStorage.fetchRecipes().subscribe();
  }

  onLogout( ) {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
