import { Agent } from './agent';
import { Director } from './director';
import { Manager } from './manager';

export class Service {
    id: any;
    name: any;
    color: any;
    agents: Agent[] = [];
    // tslint:disable-next-line:max-line-length
    constructor (id?: any, name?: any, color?: any) {
        this.id = id;
        this.name = name;
        this.color = color;
    }

    public addAgent(agent: Agent): void {
        this.agents.push(agent);
    }

    public getAgentById(agentId: any): Agent {
        return this.agents[this.agents.findIndex((agent) => agent.id === agentId)];
    }
}
