import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { map, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import * as RecipeActions from '../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(private store: Store<fromApp.AppState>) {}

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
      this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchRecipe() {
      this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout( ) {
    this.store.dispatch(new AuthActions.Logout())
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
