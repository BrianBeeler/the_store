export class NavigationLink {
    constructor(public name:string, public link:string, public isActive:boolean) { }

    setActiveStatus(status: boolean) {
        this.isActive = status;
    } 
}