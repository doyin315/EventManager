import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../index'; 
import {AuthService} from '../user/auth.service';
import {VoterService} from './voter.service';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'session-list',
    templateUrl:'./session-list.component.html'
})

export class SessionListComponent implements OnChanges{
    constructor(private auth: AuthService,
                private voterService: VoterService) {}
    @Input() sessions: ISession[];
    @Input() filterby: string;
    @Input() sortby: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterby);
            this.sortby === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDsc);
        }
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName );
        }
        else {
            this.voterService.addVoter(session,
                this.auth.currentUser.userName);
        }
        if (this.sortby === 'votes') {
            this.visibleSessions.sort(sortByVotesDsc);
        }
    }

    userHasVoted(session) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
    }
    filterSessions(filter)  {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session =>
                session.level.toLocaleLowerCase() === filter);
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if (s1.name > s2.name) {
        return 1;
    }
    else if (s1.name === s2.name) {
        return 0;
    }
    else {
        return -1;
    }
}

function sortByVotesDsc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length;
}