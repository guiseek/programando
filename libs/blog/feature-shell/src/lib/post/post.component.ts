import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  OnInit,
  ViewEncapsulation,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import {
  isScullyGenerated,
  ScullyRoute,
  ScullyRoutesService
} from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HighlightService, MetaService } from '@webapp/common/ui/kit';

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
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private srs: ScullyRoutesService,
    private highlightService: HighlightService,
    private metaService: MetaService
  ) {
    this.isGenerated = isScullyGenerated();
  }

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    this.highlightService.highlightAll();
    if (this.isGenerated) {
      console.log('this.contentLoaded = true;')
      this.contentLoaded = true;
    }
  }

  ngOnInit() {
    this.post$ = this.srs.getCurrent().pipe(
      map(post => {
        if (post.route.includes('/posts/')) {
          return post;
        }
      }),
      tap(post => {
        this.metaService.createMetaDataForPost(post);
        if (post && post.video) {
          this.addYoutubeApi();
        } else {
          this.showVideo = false;
        }
      }),
    );
    // this.post$ = merge(
    //   this.srs.getCurrent(),
    //   this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    // ).pipe(
    //   switchMap(ev => this.srs.getCurrent()),
    //   tap(post => {
    //     const { title, description, cover } = post;
    //     this.seoService.generateTags({
    //       title, description,
    //       image: cover
    //     });

    //     if (post && post.video) {
    //       this.addYoutubeApi();
    //     } else {
    //       this.showVideo = false;
    //     }
    //   })
    // );
  }

  addYoutubeApi() {
    if (isPlatformBrowser(this.platformId)) {
      const tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.showVideo = true;
    }
  }

  shareTextContent() {
    return encodeURI(location.href);
  }
}
