import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherService } from '../../weather.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  city: any = '';
  apiKey: any = environment.apiKey;
  weatherData: any = null;
  ativo: boolean = true;
  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  apagar() {
    this.city = ''; // limpa o input automaticamente
  }

  inverter() {
    this.ativo = !this.ativo;
    this.weatherService.setAtivo(this.ativo);
  }

  getWeather() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}&days=2&lang=pt`;
    return this.http.get(url).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.weatherService.setWeather(data); // envia para o service
      },
      error: (err) => {
        console.error('Erro ao buscar clima:', err);
      },
    });
  }

  ngOnInit(): void {}
}
