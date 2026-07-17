import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  detail = {
      name: 'Gaming Maus',
      description: `Eine ergonomische Gaming-Maus mit hoher Praezision und einstellbarer
DPI. Ideal fuer FPS- und MOBA-Spiele, bietet sie eine langlebige Bauweise und komfortable
Seitentasten fuer schnelles Reagieren.`,
      specs: 'dpi: 6400, cable length: 1.8m, color: Schwarz',
      stock: 120,
      price: 2500000,
    }

    deleteDetail(){
      this.detail.name = "";
    }
}
