function Page(){
    this.el = $("#toper");
    this.header = $("#header")
    this.bottombox = $("#bottombox")
}
$.extend(Page.prototype,{
    init:function(){
        this.toper = new toper(this.el).init();
        this.mheader = new header(this.header).init();
        this.bottomb = new bottom(this.bottombox).init();
    }
    
})

new Page().init();
