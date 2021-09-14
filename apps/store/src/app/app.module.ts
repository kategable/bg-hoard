import { StoreUtilFormattersModule } from '@bg-hoard/store/util-formatters';
 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreUiSharedModule } from '@bg-hoard/store/ui-shared';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormatRatingPipe } from './format-rating.pipe';

@NgModule({
  declarations: [AppComponent, FormatRatingPipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
    StoreUiSharedModule,
    StoreUtilFormattersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
