var x = new Promise(function (resolve, reject) {
    //热搜    https://www.jumoresp.com
    $.ajax({
        type: "get",			
        url: "/api/1014/search/init?t=1537281817590",
        dataType:"json",
        success: function (data) {
			resolve(data);
            
        }
    })
}).then(function (data) {
    //console.log(data.data.searchItem)
    //console.log(data.data.hotWordList[0].hotWork)
    var mmm =data.data.hotWordList[0].hotWork
    return mmm
})
header.Tem = ` <div class="headwrap">
<div class="searchwrap">
    <div class="logo">
        <a href="#">
            <img src="../img/logo.png">
        </a>
    </div>
    <div class="searchbox">
        <div class="search">
            <ul class="searchType">
                <li class="active">商品</li>
                <li>企业</li>
                <li>采购</li>
            </ul>
            <div class="searchMain">
                <input placeholder="请输入您要查询的商品名称" value="" class="searchInput">
                <button type="button" class="searchBtn">搜 索</button>
            </div>

        </div>
        <div class="hotSearch">
            <span>热门搜索：</span>
            <span>
                <a href="#" class="">饼干礼盒</a>
            </span>
            <span>
                <a href="#" class="">坚果炒货</a>
            </span>
            <span>
                <a href="#" class="">牛奶</a>
            </span>
        </div>
    </div>
    <div class="purchase">
        <a href="#">发布采购</a>
    </div>
</div>
<div class="navwrap">
    <div class="nav">
        <div class="navmain">
            <div class="navhead">
                <h3>
                    <i></i>全部商品分类
                </h3>
            </div>
            <div class="cate">
                <ul class="catemenu">
                    <li class="boderbottom">
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav11.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav12.png" style="opacity: 1;">
                            </i>粮油副食
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">粮油副食</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">米面杂粮</a>
                                    </li>
                                    <li>
                                        <a href="#">食用油</a>
                                    </li>
                                    <li>
                                        <a href="#">调味品</a>
                                    </li>
                                    <li>
                                        <a href="#">蜂制品</a>
                                    </li>
                                    <li>
                                        <a href="#">腊味</a>
                                    </li>
                                    <li>
                                        <a href="#">烘焙原料</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav21.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav22.png" style="opacity: 1;">
                            </i>休闲零食
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">休闲零食</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">坚果炒货</a>
                                    </li>
                                    <li>
                                        <a href="#">糖果类</a>
                                    </li>
                                    <li>
                                        <a href="#">饼干类</a>
                                    </li>
                                    <li>
                                        <a href="#">海产干货</a>
                                    </li>
                                    <li>
                                        <a href="#">膨化食品</a>
                                    </li>
                                    <li>
                                        <a href="#">巧克力类</a>
                                    </li>
                                    <li>
                                        <a href="#">小食类</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav31.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav32.png" style="opacity: 1;">
                            </i>酒水饮料
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">酒水饮料</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">酒类</a>
                                    </li>
                                    <li>
                                        <a href="#">茶叶</a>
                                    </li>
                                    <li>
                                        <a href="#">奶类</a>
                                    </li>
                                    <li>
                                        <a href="#">榨汁类</a>
                                    </li>
                                    <li>
                                        <a href="#">饮用水</a>
                                    </li>
                                    <li>
                                        <a href="#">咖啡</a>
                                    </li>
                                    <li>
                                        <a href="#">冲饮</a>
                                    </li>
                                    <li>
                                        <a href="#">饮料类</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav41.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav42.png" style="opacity: 1;">
                            </i>母婴滋补
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">母婴滋补</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">滋补品</a>
                                    </li>
                                    <li>
                                        <a href="#">保健品</a>
                                    </li>
                                    <li>
                                        <a href="#">婴幼儿食品</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav51.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav52.png" style="opacity: 1;">
                            </i>速食调料
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">速食调料</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">肉罐头</a>
                                    </li>
                                    <li>
                                        <a href="#">水果罐头</a>
                                    </li>
                                    <li>
                                        <a href="#">水产罐头</a>
                                    </li>
                                    <li>
                                        <a href="#">速溶饮料</a>
                                    </li>
                                    <li>
                                        <a href="#">方便食品</a>
                                    </li>
                                    <li>
                                        <a href="#">冷冻速食</a>
                                    </li>
                                    <li>
                                        <a href="#">调味品</a>
                                    </li>
                                    <li>
                                        <a href="#">乳品速食</a>
                                    </li>
                                    <li>
                                        <a href="#">火锅丸串</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#">
                            <i class="navi">
                                <img class="img1" src="../img/nav61.png" style="opacity: 1;">
                                <img class="img2" src="../img/nav62.png" style="opacity: 1;">
                            </i>食品添加剂
                        </a>
                        <div class="catepart">
                            <div class="cateitem">
                                <div class="header">
                                    <a href="#">食品添加剂</a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">甜味剂</a>
                                    </li>
                                    <li>
                                        <a href="#">增味剂</a>
                                    </li>
                                    <li>
                                        <a href="#">着色护色剂</a>
                                    </li>
                                    <li>
                                        <a href="#">香精香料</a>
                                    </li>
                                    <li>
                                        <a href="#">防腐剂</a>
                                    </li>
                                    <li>
                                        <a href="#">放氧化剂</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="navr">
            <ul class="clearfix">
                <li>
                    <a href="#">品牌直供</a>
                </li>
                <li>
                    <a href="#" target="_blank">采购信息</a>
                </li>
                <li class="dropdown">
                    <a>聚贸服务
                        <i class="iconr icon5"></i>
                    </a>
                    <div class="dropmenu">
                        <a href="#" target="_blank">聚贸通</a>
                        <a href="#" target="_blank">聚运通</a>
                        <a href="#" target="_blank">聚融通</a>
                        <a href="#" target="_blank">聚智能</a>
                        <a href="#" target="_blank">聚认证</a>
                        <a href="#" target="_blank">聚咨询</a>
                        <a href="" target="_blank">大数聚</a>
                    </div>
                </li>
                <li>
                    <a href="#" target="_blank">行业资讯</a>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>`



    function header(container) {
        this.el = container;
    }

    $.extend(header.prototype, {
        init: function () {
            this.createheader();
        },
        createheader: function () {
            this.content = $("<div></div>")
            this.content.html(header.Tem)
            this.el.append(this.content)
        }
    })
    $("#header").ready(function () {

        var aLi = $(".searchType>li")
        //console.log(aLi)
        aLi.click(function () {
            $(this).addClass("active").siblings().removeClass("active")
            var mtxt = $(this).text();
            var str = `请输入您要查询的${mtxt}名称`
            var inpVal = $(this).parent().next().find("input").attr("placeholder", str);
            //console.log(str)
        })


        var navmain = {
            navmain: $(".navmain"),
            init: function () {
                this.over();
                this.out();
            },
            over: function () {
                this.navmain.on("mouseover", function (event) {
                    let me = $(this);
                    me.children(".cate").show();
                })
            },
            out: function () {
                this.navmain.on("mouseout", function (event) {
                    let me = $(this);
                    //console.log(me.find(".cate").html())
                    me.find(".cate").hide();
                })
            }
        }
        navmain.init();
        var navtwo = {
            navtwo: $(".navmain>.cate>ul>li"),
            init: function () {
                this.over();
                this.out();
            },
            over: function () {
                this.navtwo.on("mouseover", function (event) {
                    let me = $(this);
                    me.children(".catepart").show();
                    $(this).addClass("active").siblings().removeClass("active")
                    let num = $(this).index() * 64;
                    me.children(".catepart").css({
                        top: (-num) + "px"
                    })
                    //     me.children("a").eq(0).css
                    //    console.log( )
                })
            },
            out: function () {
                this.navtwo.on("mouseout", function (event) {
                    let me = $(this);
                    me.children(".catepart").hide();
                    $(this).removeClass("active")
                })
            }
        }
        navtwo.init();

    })