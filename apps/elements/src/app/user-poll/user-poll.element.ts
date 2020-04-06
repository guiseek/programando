import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'web-user-poll',
  templateUrl: './user-poll.element.html',
  styleUrls: ['./user-poll.element.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class UserPollElement implements OnInit {

  @Input() question: string = '...?';
  @Input() docId: string = 'poll-id';

  yes: number = 0;
  no: number = 0;
  hasVoted = false;
  pollRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.pollRef = this.afs.doc(`polls/${this.docId}`);

    this.pollRef.valueChanges().pipe(
      tap((doc = { }) => {
        console.log(doc);
        this.yes = doc.yes || 0;
        this.no = doc.no || 0;
        this.cd.detectChanges();
      })
    ).subscribe();
  }

  vote(val: string) {
    this.hasVoted = true;
    this.pollRef.set(
      { [val]: this[val] + 1 },
      { merge: true }
    );
  }
  get yesPercent() {
    return (this.yes / (this.yes + this.no)) * 100;
  }

  get noPercent() {
    return (this.no / (this.yes + this.no)) * 100;
  }
}
