import {Component, OnInit} from '@angular/core'
import {ImageLoaderService, ErrorHandlingSubscriber} from '../../shared/index'
import {from, Observable} from 'rxjs'
import {flatMap, tap, take, toArray, delay} from 'rxjs/operators'
import {SafeUrl} from '@angular/platform-browser'

@Component({
    selector: 'history-component',
    styleUrls: ['history.css'],
    templateUrl: 'history.html'
})
export class HistoryComponent implements OnInit {

    // public images = this.imageLoaderService.history
    // public showSpinner = true
    // public active = false

    // constructor(private imageLoaderService: ImageLoaderService) {}

    public ngOnInit(): void {
    //     this.onLoad()
    //         .pipe(
    //             tap(Void => this.showSpinner = false),
    //             delay(100),
    //             tap(Void => this.active = true)
    //         )
    //         .subscribe(new ErrorHandlingSubscriber())
    }

    // private onLoad(): Observable<SafeUrl[]> {
    //     return from(this.images)
    //         .pipe(
    //             flatMap(img => img.onLoad.asObservable()),
    //             take(this.images.length),
    //             toArray()
    //         )
    // }
}