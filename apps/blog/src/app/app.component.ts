import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'webapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((evt) => {
        const updateApp = window.confirm(`
          Hey, vamos atualizar de (${evt.current.appData['version']} pra ${evt.available.appData['version']})?
          Mudança: ${evt.current.appData['changelog']}
          Quer fazer agora mesmo?
        `);
        if (updateApp) { window.location.reload(); }
      });
    }
  }
}
