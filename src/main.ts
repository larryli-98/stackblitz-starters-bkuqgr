import { importProvidersFrom } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { provideEffects, EffectsModule } from '@ngrx/effects';
import { MyLibraryComponent } from './app/my-library/my-library.component';
import {
  metaReducers,
  bookShelfReducer,
  magazineShelfStateReducer,
  newspaperShelfReducer,
  currentCheckoutReaderReducer,
} from './app/my-library/ngrx/reducers';
import * as actorsEffects from './app/my-library/ngrx/effects';
bootstrapApplication(MyLibraryComponent, {
  providers: [
    importProvidersFrom(
      StoreModule.forRoot(metaReducers),
      StoreModule.forFeature('bookshelf', bookShelfReducer),
      StoreModule.forFeature('magazine-shelf', magazineShelfStateReducer),
      StoreModule.forFeature('newspaper-shelf', newspaperShelfReducer),
      StoreModule.forFeature('checkout-reader', currentCheckoutReaderReducer),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: true,
      }),
      EffectsModule.forRoot(actorsEffects)
    ),
    provideAnimationsAsync(),
    provideAnimations(),
    //doesn't work with Redux tool chrome extension
    //provideStore(),
    //provideEffects(actorsEffects),
  ],
});
