import { DataStorageService } from './../shared/data-storage.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;

    constructor(private dataStorage: DataStorageService) {}

    onSaveData() {
        this.dataStorage.storeRecipes(); 
    }

    onFetchRecipe() {
        this.dataStorage.fetchRecipes().subscribe();
    }
}
