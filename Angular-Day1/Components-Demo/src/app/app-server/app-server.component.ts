import {Component} from '@angular/core';

@Component(
    {
        selector: 'app-server',
        templateUrl: './app-server.component.html',
        styleUrls: ['./app-server.css']
    })

export class AppServer
{
serverId=10;
serverStatus='Offline';

getServerStatus()
{

    return this.serverStatus;
}
}