import { LightningElement } from 'lwc';

export default class ConditionalRenderingAddress extends LightningElement {

    paddr1;
    paddr2;
    paddr3;
    paddr4;
    caddr1;
    caddr2;
    caddr3;
    caddr4;

    copyAddress(event){
        let chkval = event.target.checked;
        if (chkval === true){
            console.log('####-Inside If' );
            var inp=this.template.querySelectorAll("lightning-input");
            inp.forEach(function(element){
                if(element.name=="p1")
                    this.caddr1=element.value;
                else if(element.name=="p2")
                    this.caddr2=element.value;
                else if(element.name=="p3")
                    this.caddr3=element.value;
                else if(element.name=="p4")
                    this.caddr4=element.value;
            },this);
        }else{
            this.caddr1 ='';
            this.caddr2 ='';
            this.caddr3 ='';
            this.caddr4 ='';
        }

    }//Eof copyAddress
}//Eof
