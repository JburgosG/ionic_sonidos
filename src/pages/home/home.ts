import { Component } from '@angular/core';
import { ANIMALES } from '../../data/data.animales';
import { Refresher, reorderArray } from 'ionic-angular';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  time: any;
  audio = new Audio();
  order:boolean = false;
  animales: Animal[] = [];

  constructor() {
    this.animales = ANIMALES.slice(0);
  }

  play_audio(animal:Animal){
    this.stop_audio(animal);

    if(animal.reproduciendo){
      animal.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;
    this.audio.load();
    this.audio.play();
    animal.reproduciendo = true;

    this.time = setTimeout(() => animal.reproduciendo = false, animal.duracion * 1000);
  }

  delete_animal(id:number){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.animales.splice(id, 1);
  }

  do_refresh(refresher:Refresher){
    setTimeout(() => {
      this.animales = ANIMALES.slice(0);
      refresher.complete();
    }, 1500);
  }

  order_animal(index:any){
    this.animales = reorderArray(this.animales, index);
  }

  private stop_audio(animalSelect:Animal){
    clearTimeout(this.time);
    this.audio.pause();
    this.audio.currentTime = 0;

    for(let animal of this.animales){
      if(animal.nombre != animalSelect.nombre){
        animal.reproduciendo = false;
      }
    }

  }
}
