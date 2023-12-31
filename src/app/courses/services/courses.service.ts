import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Course } from '../model/course';
import { delay, first, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpCLient: HttpClient) { }

list() {

    return this.httpCLient.get<Course[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(courses => console.log(courses))
    );

}

}
