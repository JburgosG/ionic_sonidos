import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-modal',
    templateUrl: 'modal.html',
})
export class ModalPage {

    name:any = '';
    old:number = 0;

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {

        this.name = this.navParams.get('name');
        this.old = this.navParams.get('old');
    }

    close_with_params(){

        let data = {
            name: 'Oscar David',
            old: 38,
            coords:{
                lat: 98,
                lng: 25
            }
        };

        this.viewCtrl.dismiss(data);
    }

    close_without_params(){
        this.viewCtrl.dismiss();
    }
}