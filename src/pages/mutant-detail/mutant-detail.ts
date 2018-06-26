import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-mutant-detail',
    templateUrl: 'mutant-detail.html',
})
export class MutantDetailPage {

    mutant:any = {};

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.mutant = this.navParams.get('mutant');
    }

    goToBack(){
        this.navCtrl.pop();
    }

    goHome(){
        this.navCtrl.popToRoot();
    }
}