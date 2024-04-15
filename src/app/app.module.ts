import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { SkeletonModule } from 'primeng/skeleton';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SkeletonInterceptor } from './core/skeleton.interceptor';
@NgModule({
  declarations: [AppComponent, FormSearchComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkeletonModule,
    TableModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SkeletonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
