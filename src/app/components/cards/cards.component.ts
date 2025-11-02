import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  weatherData: any = null; // variável que vai receber os dados

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // inscreve no serviço e recebe os dados
    this.weatherService.currentWeather.subscribe((data) => {
      console.log('Recebi o clima:', data);
      this.weatherData = data;
    });
  }
}
