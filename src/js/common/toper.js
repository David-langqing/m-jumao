function toper(container){
    this.el = container;

}
toper.Template = ` <div class="topsidewrap">
<div class="topside">
    <div class="topl">
        <div>
            <a href="#">手机聚贸</a>
        </div>
        <span>欢迎来到聚贸食品平台</span>
        <ul>
            <li>
                <a class="firstA" href="../../html/login.html">请登陆</a>
            </li>
            <li>
                <a href="#">免费注册</a>
            </li>
        </ul>
    </div>
    <div class="topr">
        <ul class="nav">
            <li>
                <a href="../../html/index.html">聚贸总站</a>
            </li>
            <li>
                <a href="#">我的聚贸</a>
            </li>
            <li>
                <a href="#"class="paddingleft">
                    <i class="icon icon1"></i>我的采购单</a>
            </li>
            <li>
                <a href="#"class="paddingleft">
                    <i class="icon icon2"></i>我的收藏</a>
            </li>
            <li>
                <a href="#"class="paddingleft">
                    <i class="icon icon3"></i>聚诚通</a>
            </li>
            <li class="drop-down">
                <a href="" class="paddingright">客服电话
                    <i class="iconr icon5"></i>
                </a>
                <i class="mi"></i>
                <div class="content">
                    <p>国内：
                        <span>400-860-0550</span>
                    </p>
                    <p>海外：
                        <span>+86-571-8760-7878</span>
                    </p>
                </div>
            </li>
            <li class="drop-down">
                <a href="" class="paddingright">网站导航
                    <i class="iconr icon6"></i>
                </a>
                <i class="mi"></i>
                <div class="content  down1 websiteNav">
                    <div class="msite">
                        <h2 class="title">交易平台</h2>
                        <ul>
                            <li>
                                <a href="#">聚贸总站</a>
                            </li>
                            <li>
                                <a href="#">聚贸化工</a>
                            </li>
                            <li>
                                <a href="#">聚贸有色</a>
                            </li>
                            <li>
                                <a href="#">聚贸煤炭</a>
                            </li>
                            <li>
                                <a href="#">聚贸钢铁</a>
                            </li>
                            <li>
                                <a href="#">聚贸矿产</a>
                            </li>
                            <li>
                                <a href="#">聚贸农产品</a>
                            </li>
                            <li>
                                <a href="#">聚贸工业品</a>
                            </li>
                            <li>
                                <a href="#">聚贸机械</a>
                            </li>
                            <li>
                                <a href="#">聚贸消费品</a>
                            </li>
                            <li>
                                <a href="#">聚贸食品</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mservice">
                        <h2 class="title">服务平台</h2>
                        <ul>
                            <li>
                                <a href="#">聚贸通</a>
                            </li>
                            <li>
                                <a href="#">聚运通</a>
                            </li>
                            <li>
                                <a href="#">聚融通</a>
                            </li>
                            <li>
                                <a href="#">聚智能</a>
                            </li>
                            <li>
                                <a href="#">聚认证</a>
                            </li>
                            <li>
                                <a href="#">聚咨询</a>
                            </li>
                            <li>
                                <a href="#">大数聚</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mfeature">
                        <h2 class="title">聚贸特色</h2>
                        <ul>
                            <li>
                                <a href="#">国家馆</a>
                            </li>
                            <li>
                                <a href="#">省馆</a>
                            </li>
                            <li>
                                <a href="#">一带一路馆</a>
                            </li>
                            <li>
                                <a href="#">外贸500强馆</a>
                            </li>
                            <li>
                                <a href="#">品牌馆</a>
                            </li>
                            <li>
                                <a href="#">清真馆</a>
                            </li>
                            <li>
                                <a href="#">阿斯塔纳馆</a>
                            </li>
                            <li>
                                <a href="#">聚文化</a>
                            </li>
                            <li>
                                <a href="#">聚贸资讯</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </li>
            <li class="lastli" alt="聚贸食品国际站">
                <a href="#"class="paddingleft">
                    <i class="icon icon4"></i>聚贸食品国际站</a>
            </li>
        </ul>
    </div>
</div>
</div> `

$.extend(toper.prototype,{
    init:function(){
        this.createtoper();
    },
    createtoper:function(){
        this.content = $("<div></div>")
        this.content.html(toper.Template);
        this.el.append(this.content);
    }
})


$("#toper").ready(function(){
    var mdown = $(".drop-down")
    var mcon = $(".content");

    mdown.mouseover (function(){
        $(this).css(
            {"background":"#fff"},
            {"border-left" : "1px solid #ddd;"},
            {"border-right": "1px solid #ddd;"});
        $(this).children(".mi").show();
        $(this).children(".mi").css({"background": "#fff"}) 
        $(this).children(".content").show();
    })
    mdown.mouseout (function(){
        $(this).css(
            {"background":""},
            {"border-left" : "none"},
            {"border-right": "none"});
        $(this).children(".mi").css({"background": "#f5f5f5"})
        $(this).children(".mi").hide();
        $(this).children(".content").hide();
    })
});

