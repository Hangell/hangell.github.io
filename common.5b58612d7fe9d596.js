"use strict";(self.webpackChunkideas=self.webpackChunkideas||[]).push([[592],{4144:(_,c,r)=>{r.d(c,{Z:()=>a});var t=r(4004),n=r(4650),l=r(529);let a=(()=>{class e{constructor(o){this.http=o}slugify(o){return o.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}listPosts(){return this.http.get("assets/database/blog.json")}listPostsFilter(o){return this.http.get("/assets/database/blog.json").pipe((0,t.U)(d=>d.filter(u=>u.category===o)))}}return e.\u0275fac=function(o){return new(o||e)(n.LFG(l.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},3949:(_,c,r)=>{r.d(c,{A:()=>a});var t=r(4650),n=r(6895);function l(e,s){if(1&e&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"div",4)(3,"h5",5),t._uU(4),t.qZA(),t.TgZ(5,"h6",6),t._uU(6),t.qZA(),t.TgZ(7,"div",0)(8,"div",7)(9,"a"),t._uU(10),t.ALo(11,"date"),t.qZA()(),t.TgZ(12,"div",7)(13,"a",8),t._uU(14,"Conferir..."),t.qZA()()()()()),2&e){const o=s.$implicit;t.xp6(1),t.Q6J("src",o.photo,t.LSH),t.xp6(3),t.Oqu(o.title),t.xp6(2),t.Oqu(o.category),t.xp6(4),t.Oqu(t.xi3(11,5,o.date,"MM LLL YYYY")),t.xp6(3),t.MGl("href","/read/",o.slug,"",t.LSH)}}let a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-card"]],inputs:{posts:"posts"},decls:2,vars:1,consts:[[1,"row"],["class","card-content col-12 col-sm-10 col-md-3 col-lg-3",4,"ngFor","ngForOf"],[1,"card-content","col-12","col-sm-10","col-md-3","col-lg-3"],[1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle","mb-2","text-success"],[1,"col-6"],[1,"float-end",3,"href"]],template:function(o,d){1&o&&(t.TgZ(0,"div",0),t.YNc(1,l,15,8,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",d.posts))},dependencies:[n.sg,n.uU]}),e})()},716:(_,c,r)=>{r.d(c,{d:()=>l});var t=r(6895),n=r(4650);let l=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[t.ez]}),a})()}}]);