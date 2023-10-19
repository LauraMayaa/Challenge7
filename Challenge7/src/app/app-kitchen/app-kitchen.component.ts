import { Component } from '@angular/core';

@Component({
  selector: 'app-app-kitchen',
  templateUrl: './app-kitchen.component.html',
  styleUrls: ['./app-kitchen.component.scss']
})
export class AppKitchenComponent {

  // Propriétés pour stocker les quantités et le statut
  flourQuantity!: number;
  saltQuantity!: number;
  sugarQuantity!: number;
  eggQuantity!: number;
  numberOfCookies!: number;
  isCooked!: boolean;

  startCooking() {
    // À l'envoi du formulaire (submit), nous pouvons accéder aux valeurs ici
    console.log('Start cooking');
    console.log('Flour Quantity:', this.flourQuantity);
    console.log('Salt Quantity:', this.saltQuantity);
    console.log('Sugar Quantity:', this.sugarQuantity);
    console.log('Egg Quantity:', this.eggQuantity);
    console.log('Number of Cookies:', this.numberOfCookies);

    // Vous pouvez également définir le statut de la cuisson ici, par exemple :
    this.isCooked = true;
  }

}
