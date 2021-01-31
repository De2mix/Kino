
export class Rezerwacja
{

    id: number;
    miejsce: number;
    usernameID: number;

    constructor(obj: any) {
        this.id = obj && obj.id || null;
        this.miejsce = obj && obj.miejsce || null;
        this.usernameID = obj && obj.usernameID || null;
 
    }

}