import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface JsonLd { [key: string]: any };

@Component({
  selector: 'ui-json-ld',
  // templateUrl: './json-ld.component.html',
  template: `<div [innerHTML]="html"></div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonLdComponent implements OnInit {
  @Input() json: JsonLd = {};
  html: SafeHtml;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.html = this.toSafe(this.json);
  }
  toSafe(jld: JsonLd): SafeHtml {
    const json = JSON.stringify(jld, null, 2)
      .replace(/<\/script>/g, '<\\/script>');

    return this.sanitizer
      .bypassSecurityTrustHtml(`
        <script type="application/ld+json">
          ${json}
        </script>
      `);
  }

}


/**
 * json = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://programando.web.app/posts/angular-firebase-utils/"
    },
    "headline": "Angular Firebase.utils.ts",
    "description": "Funções úteis, pequenas e reutilizáveis",
    "image": "https://programando.web.app/assets/covers/firebase-utils.webp",
    "author": {
      "@type": "Person",
      "name": "Guilherme Siquinelli"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Programando Web Apps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://programando.web.app/assets/logos/logo.svg",
        "width": 512,
        "height": 512
      }
    },
    "datePublished": "2020-04-29",
    "dateModified": "2020-04-30"
  }
*/