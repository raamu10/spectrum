import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

import { MembersService } from './services/members.service';

import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './../shared/loader/loader.service'
import { IDropdownSettings } from 'ng-multiselect-dropdown';

//JQuery
declare var $: any;

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html'
})

export class MembersComponent implements OnInit, AfterViewInit, OnDestroy {
    public memberList = [];
    public eventList = [];
    public selectedMember: any = {};
    private modalRef: NgbModalRef;
    public selectedEvent: any;
    public dropdownSettings: IDropdownSettings = {};
    public addedEvent = [];

    @ViewChild(DataTableDirective)
    dtElement: DataTableDirective;

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private membersService: MembersService, private toaster: ToastrService,
        private loaderService: LoaderService, private modalService: NgbModal) {

    }

    ngOnInit() {

        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            destroy: true
        };

        this.dropdownSettings = {
            singleSelection: true,
            idField: '_id',
            textField: 'company',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
          };

        this.getMemberList();
        this.getEventList();
        
    }

    /**
     * Get Members list
     */
    getMemberList () {
        this.loaderService.display(true);
        this.membersService.getAllMembers().subscribe( (resp: any) => {
            this.memberList = resp;
            this.rerenderTable();
            this.loaderService.display(false);
        }, (error: any) => {
            this.loaderService.display(false);
            this.toaster.error(error.error.error || 'Error while getting Members');
        });
    }

    getEventList() {
        this.membersService.getAllEvents().subscribe( (resp:any) => {
            this.eventList = resp;

        }, (error: any) => {
            this.toaster.error(error.error.error || 'Error while getting Events');
        } );
    }

    /**
     * Trigger the datatable to set options
     */
    ngAfterViewInit() {
        this.dtTrigger.next();
    }


    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }

    /**
     * Render the table
     */
    rerenderTable() {
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
    }

    /**
     * Show delete confirmation popup
     * @param selectedMember {Object}
     */
    showDeleteConfirmation (selectedMember) {
        this.selectedMember = selectedMember;
        $('#deletePopup').modal('show');
    }

    /**
     * Delete the member
     */
    deleteMember() {
        this.memberList.forEach((member, idx) => {
            if (member._id === this.selectedMember._id) {
                this.memberList.splice(idx, 1);
            }
        });

        this.toaster.success('Member deleted successfully');
        this.rerenderTable();
    }

    openAddEventPopup(modal, selectedMember) {
        this.selectedMember = selectedMember;
        this.selectedEvent = '';
        this.modalRef = this.modalService.open(modal);
        this.modalRef.result.then((result) => {
        }, (reason) => {
        });
    }

    addSelectedEventToMember() {
        console.log("selected Event:", this.selectedEvent);
        console.log("selected member:", this.selectedMember);

        if (this.selectedEvent.length != 0) {

            this.addedEvent.push({
                eventId: this.selectedEvent,
                member: this.selectedMember
            });


            this.toaster.success('Event added successfully');

        }

        this.modalRef.dismiss();
        
    }

    onItemSelect(item: any) {
        console.log("-- item:" ,item);
        this.selectedEvent = item._id;
    }

    
}