import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';


import 'rxjs/Rx';
import {HttpModule} from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// servicios
import { EventosService} from "../providers/EventosService"
import { GuardadosService } from "../providers/GuardadosService";
import { OrganizadorService} from "../providers/OrganizadorService";
import { UsuarioService} from "../providers/UsuarioService";
import { PremiosService} from "../providers/PremiosProvider";




//paginas
import {HomePage} from "../pages/home/home";
import {TabsPage} from "../pages/tabs/tabs";
import {LoginPage } from "../pages/login/login";
import {GuardadosPage} from "../pages/guardados/guardados";
import {PerfilPage} from "../pages/perfil/perfil";
import {OrganizadorPage} from "../pages/organizador/organizador";
import {PremiosPage} from "../pages/premios/premios";
import {UbicacionPage} from "../pages/ubicacion/ubicacion";
import {ComprasPage} from "../pages/compras/compras";
import {ConfigPage} from "../pages/config/config";
import {DescripcionPremioPage} from "../pages/descripcion-premio/descripcion-premio";


//storage
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
TabsPage,
GuardadosPage,
PerfilPage,
LoginPage,
UbicacionPage,
PremiosPage,
ComprasPage,
ConfigPage,
DescripcionPremioPage,
    OrganizadorPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
TabsPage,
GuardadosPage,
PerfilPage,
UbicacionPage,
PremiosPage,
ComprasPage,
LoginPage,
ConfigPage,
DescripcionPremioPage,
    OrganizadorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EventosService,
    OrganizadorService,
    GuardadosService,
    UsuarioService,
    PremiosService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}





