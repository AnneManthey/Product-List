import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  list = [
    {
      name: 'Gaming Maus',
      description: `Eine ergonomische Gaming-Maus mit hoher Praezision und einstellbarer
DPI. Ideal fuer FPS- und MOBA-Spiele, bietet sie eine langlebige Bauweise und komfortable
Seitentasten fuer schnelles Reagieren.`,
      specs: 'dpi: 6400, cable length: 1.8m, color: Schwarz',
      stock: 120,
      price: 2500000,
    },
    {
      name: 'USB-C Kabel',
      description: `Robustes Ladekabel fuer Smartphones, Tablets und Laptops. Unterstuetzt
schnelles Laden und Datenuebertragung. Perfekt fuer den taeglichen Einsatz zu Hause, im Buero
oder unterwegs.`,
      specs: 'length: 1m, color: Weiss, type: USB-C zu USB-A',
      stock: 300,
      price: 4800,
    },
    {
      name: 'Mechanische Tastatur',
      description: `Hochwertige mechanische Tastatur mit RGB-Hintergrundbeleuchtung. Die
schnellen Switches sorgen fuer praezise Eingaben und langen Schreibkomfort. Ideal fuer Gamer
und Vielschreiber.`,
      specs: 'switches: Red, connection: USB, color: Schwarz',
      stock: 85,
      price: 79.9,
    },
    {
      name: 'HDMI Kabel',
      description: `Ein zuverlaessiges HDMI 2.1 Kabel, das gestochen scharfe Bilder in 4K
und 8K Qualitaet liefert. Geeignet fuer Fernseher, Monitore, Konsolen und Projektoren.
Unterstuetzt HDR und hohe Bildwiederholraten.`,
      specs: 'length: 2m, version: 2.1, color: Schwarz',
      stock: 250,
      price: 12.99,
    },
    {
      name: 'Externe SSD',
      description: `Leistungsstarke und kompakte externe SSD fuer schnelle
Datenuebertragung. Perfekt fuer grosse Dateien, Gaming-Bibliotheken oder als Backup-Loesung.
Stossfestes Gehaeuse fuer den mobilen Einsatz.`,
      specs: 'capacity: 1TB, interface: USB 3.2, color: Silber',
      stock: 60,
      price: 109.99,
    },
    {
      name: 'Bluetooth Kopfhoerer',
      description: `Kabellose Over-Ear Kopfhoerer mit klaren Hoehen und kraeftigem Bass.
Dank 20 Stunden Akkulaufzeit und komfortabler Ohrpolster ideal fuer lange Musik- oder
Gaming-Sessions.`,
      specs: 'battery life: 20h, color: Schwarz, connection: Bluetooth 5.0',
      stock: 150,
      price: 59.95,
    },
  ]
}
