export class Person {
    id: number;
    name: string;
    link: string;
    avatar: string;
    votes: number; 

    constructor(id: number, name: string, link: string, avatar: string, votes?: number) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
        this.link = link;
        this.votes = votes || 0;
    }

    domain(): string {
        try {
            const link: string = this.link.split('//')[1];
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

}
