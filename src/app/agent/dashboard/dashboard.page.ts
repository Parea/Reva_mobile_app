import { Component, OnInit } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';

// Models
import { Agent } from '../../models/agent';
import { Service } from '../../models/service';

// Env
import { environment } from './../../../environments/environment';
import { ValidationTimeoff } from '../../models/validationtimeoff';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public agent: Agent;
  public serviceSelected: Service;
  public environment = environment;
  TimeoffForm: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private authService: AuthService, private apiService: ApiService, public menuCtrl: MenuController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.platform.ready().then(() => { this.setAgent(); this.createTimeoff(); });

    this.TimeoffForm = this.formBuilder.group({
      motif: ['', Validators.required],
      start_timeoff: ['', Validators.required],
      end_timeoff: ['', Validators.required],
      numbers_days_taken: ['', Validators.required],
      employee_id: ['', Validators.required],
      manager_id: ['', Validators.required],
      service_id: ['', Validators.required]
    });
  }

  private setAgent(): void {
    this.authService.getAuth().then((data: any) => {
      // tslint:disable-next-line:max-line-length
      this.agent = new Agent(data.user_id, data.lastname, data.firstname, null, data.email, data.avatar);
      console.log('setAgent', this.agent);
    }).then(() => this.setTimeoffs())
    .catch(e => console.log('Erreur setting agent: ', e));
  }

  private setTimeoffs(): void { // récupére les données de l'agent connecter
    this.apiService.get('mytimeoff').then((resp: any) => {
      console.log('resp', resp);
      this.agent.serviceName = resp['serviceName'];
      this.agent.timeoffgranted = resp['timeoffgranted'];
      this.agent.timeoffprogress = resp['timeoffprogress'];
      this.agent.timeofftaken = resp['timeofftaken'];
      this.agent.totaltimeoff = resp['totaltimeoff'];
      this.agent.totaltimeoffnotvalidated = resp['totaltimeoffnotvalidated'];
      this.agent.totaltimeoffvalidated = resp['totaltimeoffvalidated'];
      const respValidated = resp['timeoffvalidated'];
      for (let i = 0; i < respValidated.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.agent.addValidation(new ValidationTimeoff(respValidated[i]['created_at'], respValidated[i]['employee_id'], respValidated[i]['end_timeoff'], respValidated[i]['id'], respValidated[i]['manager_id'], respValidated[i]['motif'], respValidated[i]['numbers_days_taken'], respValidated[i]['other_motif'], respValidated[i]['service_id'], respValidated[i]['start_timeoff'], respValidated[i]['updated_at'], respValidated[i]['validate'], respValidated[i]['validation_date']));
      }
      const respNotValidated = resp['timeoffnotvalidated'];
      for (let i = 0; i < respNotValidated.length; i++) {
        // tslint:disable-next-line:max-line-length
        this.agent.addValidation(new ValidationTimeoff(respNotValidated[i]['created_at'], respNotValidated[i]['employee_id'], respNotValidated[i]['end_timeoff'], respNotValidated[i]['id'], respNotValidated[i]['manager_id'], respNotValidated[i]['motif'], respNotValidated[i]['numbers_days_taken'], respNotValidated[i]['other_motif'], respNotValidated[i]['service_id'], respNotValidated[i]['start_timeoff'], respNotValidated[i]['updated_at'], respNotValidated[i]['validate'], respNotValidated[i]['validation_date']));
      }
    }).catch(e => console.log('Erreur setting timeoff: ', e));
  }

  get f() { return this.TimeoffForm.controls; }

  public createTimeoff(): void {
    if (this.TimeoffForm.invalid) {return; }
    const dataForm = new FormData();
    dataForm.append('motif', this.f.motif.value);
    dataForm.append('start_timeoff', this.f.start_timeoff.value);
    dataForm.append('end_timeoff', this.f.end_timeoff.value);
    dataForm.append('numbers_days_taken', this.f.numbers_days_taken.value);
    dataForm.append('employee_id', this.f.employee_id.value);
    dataForm.append('manager_id', this.f.manager_id.value);
    dataForm.append('service_id', this.f.service_id.value);

    this.apiService.post('formtimeoff/create', dataForm).then((resp) => {
      this.ngOnInit();
      console.log('success post data', dataForm);
    }).catch(e => console.log('Erreur post data: ', e));
  }
}
