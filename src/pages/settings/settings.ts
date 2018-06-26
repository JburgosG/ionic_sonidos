import { Component } from '@angular/core';
import { MutantDetailPage } from '../index.pages';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../index.pages';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
export class SettingsPage {

    pageMutant:any = MutantDetailPage;

    mutants:any = [
        {
            name: "Magneto",
            power: "Controlar metales"
        },
        {
            name: "Wolverine",
            power: "Regeneración acelerada"
        },
        {
            name: "Profesor X",
            power: "Poderes psíquicos"
        },
        {
            name: "Gambito",
            power: "Cargar objetos inanimados con energia"
        }
    ];

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public modalCtrl: ModalController) {}

    DetailPage(mutant:any){
      this.navCtrl.push(MutantDetailPage, {
          'mutant': mutant
      });
    }

    activeHome(){
        this.navCtrl.parent.select(0);
    }

    activeModal(){

        var data = {name: 'Jairo Burgos Guarin', old: 30};
        let window = this.modalCtrl.create(ModalPage, data);
        window.present();
        window.onDidDismiss(response => {
            if(response){
                console.log(response);
            }else{
                console.log('Se cerro sin parametros');
            }
        });
    }
}