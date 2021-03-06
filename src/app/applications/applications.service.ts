import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AddForm, Application} from './applications.state';
import {environment} from '../../environments/environment';
import {User} from '../user/user.state';

@Injectable()
export class ApplicationsService {

  constructor(private http: HttpClient) {
  }

  getApps(user: User): Observable<Application[]> {
    return this.http.get<Application[]>(`${environment.api}/users/${user.userId}/apps`);
  }

  addApp(user: User, form: AddForm): Observable<Application> {
    return this.http.post<Application>(`${environment.api}/users/${user.userId}/apps`, form);
  }

}
