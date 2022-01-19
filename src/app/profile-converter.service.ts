import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileConverterService {


  constructor() {}

  getUserProfile(name: string, contactinfo: string, bio: string): string{
    let profile: string = ('Marjorie Patton, marjoriepatton@rocket.com, Hustle real hard');
    return profile;
    }
  
    setUserProfile()  {
      
    }
}



// getUserProfile returns the profile object
// setUserProfile replaces the profile object with a new one
