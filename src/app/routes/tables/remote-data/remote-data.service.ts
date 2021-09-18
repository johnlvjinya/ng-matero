import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RepoSearchList {
  incomplete_results: boolean;
  items: any[];
  total_count: number;
}

@Injectable()
export class TablesRemoteDataService {
  constructor(private http: HttpClient) {}

  getData(params = {}): Observable<RepoSearchList> {
      console.log('ttttttttttttttttttt', this.http.get<RepoSearchList>('https://api.github.com/search/repositories', { params }));
      return this.http.get<RepoSearchList>('https://api.github.com/search/repositories', { params });
  }
}
