import { Agent } from './agent';
import { Director } from './director';
import { Manager } from './manager';

// Env
import { environment } from '../../environments/environment';
const _APP_LOGO_URL = environment.appLogoUrl;

export class Service {
    id: any;
    name: any;
    agentsCount: any;
    managersCount: any;
    timeoffsCount: any;
    agents: Agent[] = [];
    // tslint:disable-next-line:max-line-length
    constructor (id?: any, name?: any, agentsCount?: any, managersCount?: any, timeoffsCount?: any) {
        this.id = id;
        this.name = name;
        this.agentsCount = agentsCount;
        this.managersCount = managersCount;
        this.timeoffsCount = timeoffsCount;
    }

    public addAgent(agent: Agent): void {
        this.agents.push(agent);
    }

    public getAgentById(agentId: any): Agent {
        return this.agents[this.agents.findIndex((agent) => agent.id === agentId)];
    }
}
