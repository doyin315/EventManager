import {Directive, OnInit, ElementRef, Input} from '@angular/core';
import { inject } from '@angular/core/testing';

declare var $:any
@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement;
    @Input('modal-trigger') modalId;
    constructor(ref: ElementRef) {
            this.el = ref.nativeElement;
        }

    ngOnInit(){
        this.el.addEventListener('click', e => {
            $(`#${this.modalId}`).modal({});
        });
    }
}