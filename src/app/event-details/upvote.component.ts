import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'upvote',
    template:`<div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="well votingWidget">
            <div class="votingButton">
            <i  [style.color]="iconColor" class="glyphicon glyphicon-heart"></i>
            <div class="badge badge-inverse votingCount"></div>
            <div>{{count}}</div>
            </div>
            </div>
    </div>`
})

export class UpvoteComponent {
    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;
    onClick() {
        this.vote.emit({});
    }
}