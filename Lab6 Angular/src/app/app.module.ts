import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'albums', component: AlbumsComponent},
            {path: 'about', component: AboutComponent},
            {path: 'albums/:albumId', component: AlbumDetailComponent}
        ])
    ],
    declarations: [
        AppComponent,
        HelloComponent,
        TopBarComponent,
        HomeComponent,
        AlbumsComponent,
        AboutComponent,
        AlbumDetailComponent
    ],
    exports: [
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
