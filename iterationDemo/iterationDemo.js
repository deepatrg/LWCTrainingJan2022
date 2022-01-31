import { LightningElement } from 'lwc';

export default class IterationDemo extends LightningElement {
    showiteratordemo = false;
    contacts = [
        {
            Id: 'C1',
            Name: 'John Taylor',
            Email: 'jt@test.com',
        },
        {
            Id: 'C2',
            Name: 'Peter Jones',
            Email: 'pj@test.com',
        },
        {
            Id: 'C3',
            Name: 'Jennifer Thomas',
            Email: 'jt1@test.com',
        },
        {
            Id: 'C4',
            Name: 'Peter Parker',
            Email: 'pp@test.com',
        },        
    ];
}