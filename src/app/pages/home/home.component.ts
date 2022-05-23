import { CommonModule } from '@angular/common';
import { Component, OnInit, Self } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseAuthParamsModel } from '../login/models';
import { LocalStorageService } from '../login/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LocalStorageService],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  public username$: Observable<ResponseAuthParamsModel>

  constructor(@Self() private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.username$ = this.localStorageService.getItem();
  }

}
