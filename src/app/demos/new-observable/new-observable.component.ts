import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.scss'],
})
export class NewObservableComponent implements OnInit {
  public newObservable$ = new Observable<number>((observer) => {
    for (let index = 0; index <= 5; index++) {
      // if (index === 4) observer.error('Unknown Error');
      observer.next(index);
    }
    observer.complete();
  });

  public observer = {
    next: (data: number) => console.log(data),
    error: (err: string) => console.log(err),
    complete: () => console.log('Operation complete'),
  };

  constructor() {}

  ngOnInit(): void {
    this.newObservable$.subscribe(this.observer);
  }
}
