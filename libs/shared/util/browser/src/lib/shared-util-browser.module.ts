import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LOCAL_STORAGE_PROVIDERS } from './local-storage.service';
import { MetaService } from './meta.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    MetaService,
    LOCAL_STORAGE_PROVIDERS
  ]
})
export class SharedUtilBrowserModule {}
