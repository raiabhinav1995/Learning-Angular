import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './app-servers.component.html',
  styleUrls: ['./app-servers.component.css']
})
export class AppServersComponent implements OnInit {
  allowNewServers=false;
  serverCreationStatus='No server was created';
  serverName='';
  constructor() 
  {
    setTimeout(()=>
    {
      this.allowNewServers=true;
    },2000)

   }

  ngOnInit(): void {
  }
  onCreateServer()
  {
    this.serverCreationStatus="Server was created";
  }

}
