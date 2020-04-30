/*
 * ----------------------------------------------------------------------------------------
 * 'THE BEER-WARE LICENSE' (Revision 42):
 * <guiseek@gmail.com> escreveu este arquivo. Enquanto você retiver esta nota você poderá
 * fazer o que quiser com esta coisa. Caso nos encontremos algum dia e você ache que esta
 * esta coisa vale, você poderá me comprar uma cerveja em retribuição, Guilherme Siquinelli
 * ----------------------------------------------------------------------------------------
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewChecked, Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isScullyGenerated, ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { HighlightService } from '@webapp/common/ui/kit';
import { BlogPostingJsonLd, createJsonLdObject, MetaService } from '@webapp/shared/util/browser';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true
})
export class PostComponent implements OnInit, AfterViewChecked {
  post$: Observable<ScullyRoute>;
  location: null;
  isGenerated: boolean;
  showVideo = false;
  contentLoaded = false;
  jsonLd: Partial<BlogPostingJsonLd> = {};
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private dom: Document,
    private srs: ScullyRoutesService,
    private route: ActivatedRoute,
    // private cdr: ChangeDetectorRef,
    private highlightService: HighlightService,
    private metaService: MetaService
  ) {
    this.isGenerated = isScullyGenerated();
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    if (this.isGenerated && !this.contentLoaded) {
      window.setTimeout(() => this.contentLoaded = true);
    }
  }

  ngOnInit() {
    this.post$ = this.srs.getCurrent().pipe(
      map(post => {
        const inPosts = post.route.includes('/posts/');
        const withSlug = this.route.snapshot.params.id;
        if (inPosts && withSlug) {
          return post;
        }
      }),
      tap(post => {
        this.jsonLd = createJsonLdObject(post);
        this.metaService.createMetaDataForPost(post);
        if (post && post.video) {
          this.addYoutubeApi();
        } else {
          this.showVideo = false;
        }
      }),
    );
  }

  addYoutubeApi() {
    if (isPlatformBrowser(this.platformId)) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.showVideo = true;
    }
  }
}
