import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() shoplistIsEnabled: EventEmitter<boolean> = new EventEmitter();

    onRecipesNavigation() {
      this.shoplistIsEnabled.emit(false);
    }

    onShoppingListNavigation() {
      this.shoplistIsEnabled.emit(true);
    }
}
