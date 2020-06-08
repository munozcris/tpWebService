export class Noticia {
    id: number;
    pid: string;
    seo: string;
    tit: string;
    des: string;
    con: string;
    pub: string;
    tst: string;
    thb: string;
    img: string;
    cap: string;
    aut: string;
    ava: string;

    constructor (id?: number, pid?: string, seo?: string, tit?: string, des?: string, con?: string, pub?: string, tst?: string, thb?: string, img?: string, cap?: string, aut?: string, ava?: string){
        this.id=id;
        this.pid=pid;
        this.seo=seo;
        this.tit=tit;
        this.des=des;
        this.con=con;
        this.pub=pub;
        this.tst=tst;
        this.thb=thb;
        this.img=img;
        this.cap=cap;
        this.aut=aut;
        this.ava=ava;
    }

}
