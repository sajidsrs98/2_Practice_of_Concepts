import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    div {
      margin: 10px;
    }
    
    .offline {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverUpdationStatus: string = 'Server is not updated!';
  serverName: string = 'Two Way Data Binding';
  serverUpdated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 4000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  onUpdateServer() {
    this.serverUpdated = true;
    this.serverUpdationStatus = 'Updated server name is: ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    this.serverStatus = "online";
  }

  getColor() {
    return this.serverStatus = 'online' ? 'green' : 'yellow';
  }

}
