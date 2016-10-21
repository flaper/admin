import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {ObjectLink, AutoFocusIt} from '@flaper/angular';
import {MomentModule} from 'angular2-moment';
import {PageNavigator} from "./PageNavigator/PageNavigator";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ObjectLink, AutoFocusIt, PageNavigator],
  exports: [CommonModule, FormsModule, MomentModule,
    ObjectLink, AutoFocusIt, PageNavigator]
})
export class SharedModule {
}
