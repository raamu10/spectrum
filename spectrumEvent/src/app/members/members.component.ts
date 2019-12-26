import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { MembersService } from './services/members.service';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html'
})

export class MembersComponent implements OnInit, AfterViewInit, OnDestroy {
    public memberList = [];

    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private membersService: MembersService, private toaster: ToastrService) {

    }

    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            destroy: true
        };

        this.getMemberList();
    }

    getMemberList () {
        this.membersService.getAllMembers().subscribe( (resp: any) => {
            this.memberList = resp;
            this.rerenderTable();
        }, (error: any) => {
            this.toaster.error(error.error.error || 'Error while getting Data');
        })
    }

    ngAfterViewInit() {
        this.dtTrigger.next();
    }


    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }

    rerenderTable() {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }
}