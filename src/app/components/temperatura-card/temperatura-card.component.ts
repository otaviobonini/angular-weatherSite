import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../weather.service';
@Component({
  selector: 'app-temperatura-card',
  templateUrl: './temperatura-card.component.html',
  styleUrls: ['./temperatura-card.component.css'],
})
export class TemperaturaCardComponent implements OnInit {
  weatherData: any = null; // variável que vai receber os dados
  ativo!: boolean;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    // inscreve no serviço e recebe os dados
    this.weatherService.currentWeather.subscribe((data) => {
      console.log('Recebi o clima:', data);
      this.weatherData = data;
    });
    this.weatherService.ativo$.subscribe((valor) => {
      this.ativo = valor;
    });
  }

  formatDate(localtime: string): string {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    if (!localtime) return '';

    const data = new Date(localtime);
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${dia}-${mes}-${ano}`;
  }

  tomorrowDate(formatedTime: string): string {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const data = new Date(formatedTime);
    const diaNovo = data.getDate() + 1;
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaNovo}-${mes}-${ano}`;
  }

  // Pega só o horário: 13:38
  formatTime(localtime: string): string {
    if (!localtime) return '';

    const data = new Date(localtime);
    const horas = data.getHours().toString().padStart(2, '0');
    const minutos = data.getMinutes().toString().padStart(2, '0');

    return `${horas}:${minutos}`;
  }
}
