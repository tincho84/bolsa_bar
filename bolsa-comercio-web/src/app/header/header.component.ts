import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titulo = 'Welcome to the beer world';

  constructor() { }

  /**Se llama apenas se crea el componente, sirve para poner la logica de inicializacion */
  ngOnInit() {
  }

}
