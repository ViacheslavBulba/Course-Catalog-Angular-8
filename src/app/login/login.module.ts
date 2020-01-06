import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login/login.component';
import { AuthenticationEffects } from './store/effects/authentication.effects';
import { reducers } from './store/reducers/authentication.reducer';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('authentication', reducers),
    EffectsModule.forFeature([
      AuthenticationEffects,
    ]),
  ]
})
export class LoginModule { }
