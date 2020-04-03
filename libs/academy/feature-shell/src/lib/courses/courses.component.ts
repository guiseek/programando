import { takeUntil, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { webAnimations } from '@webapp/common/ui/kit';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'webapp-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  animations: webAnimations
})
export class CoursesComponent implements OnInit, OnDestroy {
  categories: any[];
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredCourses: any[] = [];
  currentCategory: string;
  searchTerm: string;

  // Private
  private _unsubscribeAll: Subject<any>;


  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _service: ScullyRoutesService
  ) {
    // Set the defaults
    this.currentCategory = 'all';
    this.searchTerm = '';

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    // Subscribe to categories
    this._http.get<any[]>('/assets/data/topics.json')
      .pipe(
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(categories => {
        this.categories = categories;
      });

    // Subscribe to courses
    this._service.available$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(courses => {
        console.log(courses)
        this.filteredCourses = this.coursesFilteredByCategory = this.courses = courses;
      });
  }
  open(course) {
    const id = course.route.replace('/cursos','')
    this._router.navigate(['/curso',id,'1']);
  }
  filterCoursesByCategory(): void {
    // Filter
    if (this.currentCategory === 'all') {
      this.coursesFilteredByCategory = this.courses;
      this.filteredCourses = this.courses;
    }
    else {
      this.coursesFilteredByCategory = this.courses.filter((course) => {
        return course.keywords.includes(this.currentCategory);
      });

      this.filteredCourses = [...this.coursesFilteredByCategory];

    }

    // Re-filter by search term
    this.filterCoursesByTerm();
  }

  /**
   * Filter courses by term
   */
  filterCoursesByTerm(): void {
    const searchTerm = this.searchTerm.toLowerCase();

    // Search
    if (searchTerm === '') {
      this.filteredCourses = this.coursesFilteredByCategory;
    }
    else {
      this.filteredCourses = this.coursesFilteredByCategory.filter((course) => {
        console.log(course);
        return course && course.title && course.title.toLowerCase().includes(searchTerm);
      });
    }
  }
  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
