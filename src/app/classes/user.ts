


export class User
{

    id: number;
    email: string;
    password: string;
    username: string;

    constructor(obj: any) {
        this.id = obj && obj.id || null;
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
        this.username = obj && obj.username || null;
 
    }

}