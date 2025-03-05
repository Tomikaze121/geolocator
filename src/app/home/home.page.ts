import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  location:any;

  constructor() {}
async getCurrentLocation() {
  try {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current Position: '+coordinates);

    const { latitude, longitude } = coordinates.coords;
    alert ('Latitude $(latitude), Longitude $Longitude $(longitude)');
    
  } catch (error){
   alert ('error getting location: '+error)
  }
  
}

async watchLocation(){
  const watchId = Geolocation.watchPosition({}, (position,err) =>{
    if(err){
      console.log('Error watching position: ', err);

      return;
    }
    console.log('Watched Position: ', position);
    this.location = position?.coords;});
}
}
