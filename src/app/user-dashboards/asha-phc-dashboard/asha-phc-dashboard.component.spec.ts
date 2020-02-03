import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshaPhcDashboardComponent } from './asha-phc-dashboard.component';
import { statusPipe } from '../../shared/pipes/status.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppHelper } from '../../shared/helper/app.helper';
import { Routes } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

export const routes: Routes = [
  {
    path: '',
    component: AshaPhcDashboardComponent
  }
];
describe('AshaPhcDashboardComponent', () => {
  let component: AshaPhcDashboardComponent;
  let fixture: ComponentFixture<AshaPhcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AshaPhcDashboardComponent, statusPipe],
       imports: [
         FormsModule, ReactiveFormsModule,
          NgxMaskModule.forRoot(),
        HttpClientTestingModule,
        NgxPaginationModule,
        AngularMultiSelectModule,
        NgbModalModule,
        RouterTestingModule.withRoutes(routes),
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
      providers: [AppHelper,DataService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshaPhcDashboardComponent);
    component = fixture.debugElement.componentInstance;
    
    let store = {};
    spyOn(window.localStorage, 'getItem').and.callFake(function () {
      return JSON.stringify({ "test": "test" });
    });
    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      return store[key] = value;
    });
    localStorage.setItem("login_hospital", JSON.stringify({ "username": "getwell", "email": "get@yahoo.com", "user_type": "Hospital", "id": 92, "hospital_name": "getwell", "hospital_branch_name": "getwell indore", "hospital_branch_id": 59 }))

    fixture.detectChanges();
    var close = ()=>{

    }
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
