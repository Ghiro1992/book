import { Injectable } from '@angular/core';
import {Prodotti} from '../model/prodotti';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
const ApiUrl = 'http://localhost:81/bookServer/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // METODO GET RICEZIONE DATI
  getAll(): Observable <Prodotti[]> {
    return this.http.get<Prodotti[]>(ApiUrl);
  }

  // METODO POST AGGIUNTA DATI
  addBook(form: NgForm): Observable<Prodotti> {
    return this.http.post<Prodotti>(`${ApiUrl}`, form.value);
  }

  // METODO PATCH MODIFICA DATI
  editBook(form: NgForm, active: Prodotti): Observable<Prodotti> {
    return this.http.patch<Prodotti>(`${ApiUrl}?id=${active.id}`, form.value);
  }

  // METODO DELETE CANCELLAZIONE DATI
    deleteBook(book: Prodotti): Observable<Prodotti> {
      return this.http.delete<Prodotti>(`${ApiUrl}?id=${book.id}`);
  }

  // METODO DETAIL-BOOK PASSAGGIO PARAMTRI

  detailBook(id): Observable<Prodotti> {
    return this.http.get<Prodotti>(`${ApiUrl}?id=${id}`);
  }
  constructor(private http: HttpClient) { }
}
