import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
getAuthors(){
  return [{
    name:'Chetan Bhagat',
    book: '2 States'
  },{
    name:'Shravya Bhinder',
    book: 'Something I never told You'
  },{
    name:'Mrityunjay',
    book: 'Memorable Memoir'
  },{
    name:'Savi Sharma',
    book: 'Everyone has a story'
  }];
}
  constructor() { }
}
