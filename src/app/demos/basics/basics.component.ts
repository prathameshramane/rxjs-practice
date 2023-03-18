import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements AfterViewInit {
  public postArrays = [
    { title: 'MyTitle1', description: 'MyDescription1' },
    { title: 'MyTitle2', description: 'MyDescription2' },
    { title: 'MyTitle3', description: 'MyDescription3' },
  ];

  public postArrays$ = from(this.postArrays);

  public myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3000);
  });

  public myPromise$ = from(this.myPromise);

  constructor() {
    this.postArrays$.subscribe({
      next: (data) => {console.log(data)},
      error: (error) => {console.log(error)},
      complete: () => {console.log("Array data complete")},
    })
    this.myPromise$.subscribe({
      next: (data) => {console.log(data)},
      error: (error) => {console.log(error)},
      complete: () => {console.log("Promise complete")},
    })
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-me-id')!, 'click').subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log('Event Complete'),
    });
  }
}
