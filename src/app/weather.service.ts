import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // disponibiliza o serviço em toda a aplicação
})
export class WeatherService {
  // BehaviorSubject guarda o último valor e emite para quem assina
  private weatherSource = new BehaviorSubject<any>(null);
  currentWeather = this.weatherSource.asObservable();

  constructor() {}

  // Função para atualizar os dados do clima
  setWeather(data: any) {
    this.weatherSource.next(data);
  }

  private ativoSource = new BehaviorSubject<boolean>(true);
  ativo$ = this.ativoSource.asObservable();

  setAtivo(valor: boolean) {
    this.ativoSource.next(valor);
  }
}
