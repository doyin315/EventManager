import { Component, Input, ViewChild, ElementRef } from "@angular/core";

declare var $:any
@Component({
    selector: 'simple-modal',
    template: `<div id="{{elementId}}" #modalcontainer  class="modal fade" tabindex="-1">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close"
                                data-dismiss="modal"><span>&times;</span></button>
                                <h4 class="modal-title">{{title}}</h4>
                            </div>
                            <div class="modal-body " (click)="closeModal()">
                                <ng-content ></ng-content>
                            </div>
                        </div>
                    </div>
                </div>`,
    styles: [`.modal-body {
        height: 250px; overflow-y: scroll;
        background-color: #485563;
    }
 `]
})

export class  SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalcontainer',{static:false}) containerEl: ElementRef;
    @Input() closedOnBodyClick: string;

    closeModal(){
        if (this.closedOnBodyClick.toLocaleLowerCase() === 'true') {
        $(this.containerEl.nativeElement).modal('hide');
    }
    }
}