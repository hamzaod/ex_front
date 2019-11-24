import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SearchPipe } from './pipes/search.pipe';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    // Components
    ToolbarComponent,

    // Pipes
    SearchPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  exports: [ 
    // Modules
    MaterialModule,
    FormsModule,
    TranslateModule,

    // Components
    ToolbarComponent,
  
    // Pipes
    SearchPipe]
})
export class SharedModule { }
