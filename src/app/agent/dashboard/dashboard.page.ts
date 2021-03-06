import { Component, OnInit } from '@angular/core';
import { Platform, MenuController  } from '@ionic/angular';

// Services
import { AuthService } from '../../service/auth/auth.service';
import { ApiService } from '../../service/api/api.service';

// Models
import { Agent } from '../../models/agent';
import { Service } from '../../models/service';
import { Employee } from '../../models/employee';

// Env
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public agent: Agent;
  public serviceSelected: Service;
  public environment = environment;

  // tslint:disable-next-line:max-line-length
  constructor(private platform: Platform, private authService: AuthService, private apiServce: ApiService, public menuCtrl: MenuController) { }

  ngOnInit() {
    this.platform.ready().then(() => this.setAgent());
  }

  private setAgent(): void {
    this.authService.getAuth().then((user: any) => {
      // tslint:disable-next-line:max-line-length
      this.agent = new Agent(null, user.lastname, user.firstname, user.avatar, user.email, user.gender, user.token, user.employee_id, user.service_id);
    }).then(() => this.setServices())
    .catch(e => console.log('Erreur setting agent: ', e));
  }

  private setServices(): void {
    this.apiServce.get('agentsService').then((resp: any) => {
      for (let i = 0; i < resp.length; i++) {
        this.agent.addService(new Service(resp[i].id, resp[i].name, resp[i].total_managers, resp[i].total_agents));
      }
    }).then(() => this.showService())
    .catch(e => console.log('Erreur setting services: ', e));
  }

  private showService(): void {
    this.setServiceSelected().then((resp: Service) => this.setTimeoffs(resp.id))
    .catch(e => console.log('Erreur showing service: ', e));
  }

  private setServiceSelected(): Promise<Service> {
    return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      resolve(this.serviceSelected = (!this.serviceSelected) ? this.agent.getServiceById(this.agent.currentServiceId) : this.serviceSelected);
    });
  }

  private setTimeoffs(serviceId: any): void {
    this.apiServce.get('employeeTimeoffbyservice/' + serviceId).then((resp: any) => {
      let currentTimeoff: Employee;
      for (let i = 0; i < resp.length; i++) {
        // tslint:disable-next-line:max-line-length
        currentTimeoff = new Employee(resp[i].employee_id, resp[i].Nom, resp[i].Prenom, resp[i].service, resp[i].Congées_obtenue, resp[i].Congées_en_cours, resp[i].Congées_pris, resp[i].Congées_restant, resp[i].TotalDemandeCongéesValider, resp[i].CongéesValider);
      }
      this.serviceSelected.addAgent(currentTimeoff);
    }).catch(e => console.log('Erreur setting timeoff: ', e));
  }
}
