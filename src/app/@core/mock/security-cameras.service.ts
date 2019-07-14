import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {

  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: '',
    },
    {
      title: 'Camera #2',
      source: '',
    },
    {
      title: 'Camera #3',
      source: '',
    },
    {
      title: 'Camera #4',
      source: '',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
