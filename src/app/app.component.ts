import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, SettingsPage } from '../pages/index.pages';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    tabs = TabsPage;
    settings = SettingsPage;

    rootPage:any = TabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    openPage(page:any){
      this.rootPage = page;
      this.menuCtrl.close();
    }
}

