import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { map, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../auth/auth.service';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

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
    private router: Router,
    private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.userSub = this.store.select('auth')
    .pipe(map(authState => authState.user))
    .subscribe(
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
    this.store.dispatch(new AuthActions.Logout())
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
