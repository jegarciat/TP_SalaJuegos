import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salaJuegos';

  edadUno:number = 0;
  edadDos:number = 0;
  promedio:number = 0;
  suma:number = 0;

  public calcular(){
    this.calcularSuma();
    this.calcularPromedio();
  }

  private calcularSuma()
  {
    this.suma = this.edadUno + this.edadDos;
    return this.suma;
  }

  private calcularPromedio()
  {
    this.promedio = this.calcularSuma()/2;
  }
}
