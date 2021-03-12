import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  flights: Flight[] = [
    {
      origin: "Miami", destination: 'Chicago', flightNumber: 345,
      depart: '2020-02-25T23:18:21.932Z',
      arrive: '2020-02-25T23:21:21.932Z',
      nonstop: true
    },
    {
      origin: "New York", destination: 'Los Angeles', flightNumber: 432,
      depart: '2020-05-25T23:18:00.932Z',
      arrive: '2020-05-25T23:23:21.932Z',
      nonstop: false
    },
  ];

  /*getFlights(){
    return this.flights;
  }*/
  getFlights(): Observable<any> {
    return this.http.get("http://localhost:3000/flights/");
  }

  postFlight(flight: Flight) {

  }

  deleteFlight(id: number) {

  }
}
