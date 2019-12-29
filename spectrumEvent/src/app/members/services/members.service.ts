import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/Rx';

@Injectable()
export class MembersService {

    public BASE_URL = 'https://next.json-generator.com'

    constructor(private http: HttpClient) {

    }

    /**
     * Get All Members List
     */
    getAllMembers() {

        var url = this.BASE_URL + '/api/json/get/NyNrlJTX8';

        return this.http.get(url)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error || JSON.parse(error._body)));

    }

    /**
     * Get all Events
     */
    getAllEvents() {
        /* var url = this.BASE_URL + '/api/json/get/Vk7OTypQ8';

        return this.http.get(url)
            .map((res: Response) => {
                return res;
            })
            .catch((error: any) => Observable.throw(error || JSON.parse(error._body))); */

        return [
            {
                "_id": "5c540cb4d1e88f219439d0bd",
                "organizer": {
                    "first": "Jamie",
                    "last": "Guy"
                },
                "company": "ORGANICA",
                "about": "Nisi pariatur amet velit qui nostrud aliquip qui consectetur adipisicing proident. Aute do tempor veniam minim commodo id minim in nostrud minim excepteur consequat mollit. Laborum id adipisicing laborum aliquip nostrud. Officia ipsum officia nostrud proident sunt dolor veniam reprehenderit laborum commodo quis. Laboris magna cillum commodo amet labore sint. Adipisicing in enim amet laboris et nostrud aute aute. Duis anim magna esse cupidatat nisi id consectetur.",
                "scheduled_at": "Monday, January 28, 2019 10:23 AM",
                "scheduled": 1576146180000,
                "duration": 3,
                "capacity": 80
            },
            {
                "_id": "5c540cb41c3f7ba1b57461e9",
                "organizer": {
                    "first": "Mcdonald",
                    "last": "Perkins"
                },
                "company": "ORBIN",
                "about": "Irure sunt non dolore laborum. Veniam do deserunt veniam quis exercitation proident aliquip laborum mollit laboris culpa. Nulla amet qui ipsum cupidatat laborum cillum do ea ullamco elit quis sit. Sint consectetur duis et deserunt esse in laborum labore. Labore officia cupidatat quis ad anim amet. Ipsum et commodo quis nulla deserunt tempor magna cillum eu adipisicing pariatur consectetur. Incididunt quis aliquip consectetur mollit minim do eu sit.",
                "scheduled_at": "Wednesday, January 16, 2019 10:35 AM",
                "scheduled": 1576494000000,
                "duration": 4,
                "capacity": 68
            },
            {
                "_id": "5c540cb4753ef92e33ce4f97",
                "organizer": {
                    "first": "Nash",
                    "last": "Mcintyre"
                },
                "company": "ZILLACOM",
                "about": "Consectetur dolor fugiat amet duis. Deserunt proident pariatur laborum duis tempor. Duis sunt laboris exercitation sunt labore laboris aliquip irure ex ea fugiat nisi dolor proident. Anim enim tempor amet culpa et in esse amet est cupidatat.",
                "scheduled_at": "Monday, January 28, 2019 4:55 PM",
                "scheduled": 1576674000000,
                "duration": 2,
                "capacity": 57
            },
            {
                "_id": "5c540cb422d4c98e0bcb9f16",
                "organizer": {
                    "first": "Castaneda",
                    "last": "Dodson"
                },
                "company": "BOILICON",
                "about": "Occaecat laboris eu culpa tempor anim. Nisi eu ullamco incididunt cillum consequat laboris. Deserunt nisi occaecat elit ex enim cupidatat et est id nostrud. Ipsum non incididunt sit labore culpa adipisicing deserunt fugiat eiusmod. Commodo esse voluptate ipsum voluptate pariatur tempor ad labore esse consequat qui consequat fugiat.",
                "scheduled_at": "Thursday, January 10, 2019 1:49 AM",
                "scheduled": 1576763400000,
                "duration": 4,
                "capacity": 90
            },
            {
                "_id": "5c540cb4fd2c33cfb65bdd2b",
                "organizer": {
                    "first": "Diana",
                    "last": "Love"
                },
                "company": "ECRATER",
                "about": "Non irure labore duis amet ad ea consequat id laboris. Cupidatat reprehenderit nulla dolore id consectetur reprehenderit. Elit officia est nisi et non cillum qui ipsum fugiat deserunt Lorem quis officia. Commodo ipsum excepteur irure laboris labore. Ea nostrud aute nulla in consequat sunt consectetur adipisicing ea. Cillum ea minim nostrud aute Lorem velit veniam et dolor adipisicing pariatur veniam.",
                "scheduled_at": "Saturday, January 19, 2019 12:09 AM",
                "scheduled": 1576850400000,
                "duration": 3,
                "capacity": 83
            }];
    }

}