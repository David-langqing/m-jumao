//import { promises } from "fs";
var urlId = location.href.split("?")[1].split("=")[1];
var prenum = urlId.charAt(0)
var mp = urlId.slice(1)
console.log(mp)

if (prenum == "a") {
    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "/api/1001/search/relatedGoods?t=1537687424004&_store=1000001538.jumore.com&notContainId=204186&goodsCategoryGrade1Id=100043&goodsCategoryGrade2Id=102298",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }
        })
    }).then(function (data) {
        function detail(data) {
            this.da = data.data;
        }
        $.extend(detail.prototype, {
            init: function () {
                this.navover()
                this.navout()
                this.fordata()
                this.mnum()
                this.cart()
            },
            navover: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseover", function () {
                    navlist.show()
                })
            },
            navout: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseout", function () {
                    navlist.hide()
                })
            },
            fordata: function () {
                for (var key in this.da) {
                    if (this.da[key].createId == mp) {
                        var company = this.da[key].companyName
                        var ltstr = `<div class="comname">
                            <span>${company}&nbsp;&nbsp;</span>
                        </div>`
                        var cnamestr = `<div class="cname">
                            <a href="index.html">首页</a> &gt;
                            <a href="#">${company}</a> &gt;
                            <a href="#">商品详情</a>
                        </div>`
                        var str = `<div class="hmain">
                        <div class="mimg">
                            <div class="bimg">
                                <img src="https://img.jumore.com${this.da[key].goodsPicture}">
                            </div>
                            <ul>
                                <li class="active">
                                    <a href="##">
                                        <img src="https://img.jumore.com${this.da[key].goodsPicture}" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="info">
                            <h1>${this.da[key].title}</h1>
                            <div class="Price">
                                <p class="textleft">
                                    <label class="textmuted">价格：</label>
                                    <span class="textprice">${this.da[key].maxPrice ? (this.da[key].maxPrice > 0 ? this.da[key].maxPrice : 10) : 10}</span>
                                </p>
                            </div>
                            <div class="buyinfo">
                                <ul class="productinfo">
                                    <li>
                                        <label> 净含量：</label>
                                        <div>${this.da[key].goodsAttr.netWeight}</div>
                                    </li>
                                    <li>
                                        <label> 售卖方式：</label>
                                        <div>${this.da[key].goodsAttr.sellMode ? this.da[key].goodsAttr.sellMode : "电议"}</div>
                                    </li>
                                    <li>
                                        <label> 是否进口：</label>
                                        <div>否</div>
                                    </li>
                                    <li>
                                        <label> 品牌：</label>
                                        <div>${this.da[key].goodsAttr.brand}</div>
                                    </li>
                                    <li>
                                        <label> 最小起订量：</label>
                                        <div>1</div>
                                    </li>
                                    <li>
                                        <label> 采购数量：</label>
                                        <div class="inputnum">
                                            <div class="inputwrap">
                                                <input type="number" value="1" class="formcon">
                                            </div>
                                            <div class="inputact">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                    <a class="active btn-line-warning ">加入购物车</a>
                                    <a href="cart.html" class="btn-line-warning">我的购物车</a>
                                </div>
                            </div>
                        </div>
                        <div class="ltl">
                            <div class="name">
                                <h3>店家推荐</h3>
                            </div>
                            <div class="con">
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/rue149826024127.png">
                                    </span>
                                    <p class="tit">成都厂家批发美味休闲食品原味蛋香酥脆化渣黄小蛋儿</p>
                                    <p>￥90.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/38s784031023309.png">
                                    </span>
                                    <p class="tit">成都时尚办公室零食休闲美味长腿黑美人</p>
                                    <p>￥198.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0127/a3k234852013224.png">
                                    </span>
                                    <p class="tit">台湾进口食品一本香草味拿铁卡布奇诺咖啡三合一速溶咖啡固体饮料</p>
                                    <p>￥168.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="https://img.jumore.com/jfs1/000/1C/B8/ClgMC1t03k2ALyemAACBFSzbso0935.jpg">
                                    </span>
                                    <p class="tit">台湾进口喜年来蔬菜饼干芝麻饼干办公室零食小吃一件代发包邮</p>
                                    <p>￥9.00</p>
                                </a>
                            </div>
                        </div>
                    </div>`
                    }
                }
                var lt = $(".lt")
                lt.append(ltstr);
                var cnamewrap = $(".cnamewrap")
                cnamewrap.append(cnamestr)
                var main = $(".main")
                main.append(str)
            },
            mnum: function () {
                var inputval = $(".inputwrap>input").val()
                var inputadd = $(".inputact>span").eq(0)
                var inputreduce = $(".inputact>span").eq(1)
                inputadd.on("click", function () {
                    $(".inputwrap>input").val(++inputval)
                })
                inputreduce.on("click", function () {
                    if (inputval > 1) {
                        $(".inputwrap>input").val(--inputval)
                    }
                })
            },
            cart: function () {
                var btn1 = $(".btn-line-warning").eq(0)
                btn1.on("click", function () {
                    //[{"id":"01","num":1},{"id":"02","num":4},{"id":"02","num":1},{"id":"02","num":1}]
                    var num = $(".inputwrap>input").val();
                    var arr = []
                    var goods = {}
                    console.log(urlId)
                    console.log(localStorage.data)
                    if (localStorage.data) {
                        arr = JSON.parse(localStorage.data)
                        var bstop = false;

                        for (var key in arr) {
                            if (arr[key].id == urlId) {
                                arr[key].num = num
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            goods.id = urlId;
                            goods.num = num;
                            arr.push(goods)
                        }
                    } else {
                        console.log(1)
                        goods.id = urlId;
                        goods.num = num;
                        arr.push(goods)
                    }
                    localStorage.setItem("data", JSON.stringify(arr));

                })
                var btn2 = $(".btn-line-warning").eq(1)
                btn2.on("mouseover", function () {
                    btn2.addClass("active")
                })
                btn2.on("mouseout", function () {
                    btn2.removeClass("active")
                })
            }
        })
        new detail(data).init()
    })
}
else if (prenum == "b") {
    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "/api/1001/search/relatedGoods?t=1537700166821&_store=xiaocaowu.jumore.com&notContainId=203888&goodsCategoryGrade1Id=100042&goodsCategoryGrade2Id=100417",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }
        })
    }).then(function (data) {
        function detail(data) {
            this.da = data.data;
        }
        $.extend(detail.prototype, {
            init: function () {
                this.navover()
                this.navout()
                this.fordata()
                this.mnum()
                this.cart()
            },
            navover: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseover", function () {
                    navlist.show()
                })
            },
            navout: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseout", function () {
                    navlist.hide()
                })
            },
            fordata: function () {
                for (var key in this.da) {
                    if (this.da[key].createId == mp) {
                        var company = this.da[key].companyName
                        var ltstr = `<div class="comname">
                            <span>${company}&nbsp;&nbsp;</span>
                        </div>`
                        var cnamestr = `<div class="cname">
                            <a href="index.html">首页</a> &gt;
                            <a href="#">${company}</a> &gt;
                            <a href="#">商品详情</a>
                        </div>`
                        var str = `<div class="hmain">
                        <div class="mimg">
                            <div class="bimg">
                                <img src="https://img.jumore.com${this.da[key].goodsPicture}">
                            </div>
                            <ul>
                                <li class="active">
                                    <a href="##">
                                        <img src="https://img.jumore.com${this.da[key].goodsPicture}" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="info">
                            <h1>${this.da[key].title}</h1>
                            <div class="Price">
                                <p class="textleft">
                                    <label class="textmuted">价格：</label>
                                    <span class="textprice">${Math.ceil(this.da[key].minPrice)}</span>
                                </p>
                            </div>
                            <div class="buyinfo">
                                <ul class="productinfo">
                                    <li>
                                        <label> 净含量：</label>
                                        <div>${this.da[key].goodsAttr.netWeight}</div>
                                    </li>
                                    <li>
                                        <label> 售卖方式：</label>
                                        <div>${this.da[key].goodsAttr.sellMode ? this.da[key].goodsAttr.sellMode : "电议"}</div>
                                    </li>
                                    <li>
                                        <label> 是否进口：</label>
                                        <div>否</div>
                                    </li>
                                    <li>
                                        <label> 品牌：</label>
                                        <div>${this.da[key].goodsAttr.brand}</div>
                                    </li>
                                    <li>
                                        <label> 最小起订量：</label>
                                        <div>1</div>
                                    </li>
                                    <li>
                                        <label> 采购数量：</label>
                                        <div class="inputnum">
                                            <div class="inputwrap">
                                                <input type="number" value="1" class="formcon">
                                            </div>
                                            <div class="inputact">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                <a class="active btn-line-warning ">加入购物车</a>
                                <a href="cart.html" class="btn-line-warning">我的购物车</a>
                                </div>
                            </div>
                        </div>
                        <div class="ltl">
                            <div class="name">
                                <h3>店家推荐</h3>
                            </div>
                            <div class="con">
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/rue149826024127.png">
                                    </span>
                                    <p class="tit">成都厂家批发美味休闲食品原味蛋香酥脆化渣黄小蛋儿</p>
                                    <p>￥90.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/38s784031023309.png">
                                    </span>
                                    <p class="tit">成都时尚办公室零食休闲美味长腿黑美人</p>
                                    <p>￥198.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0127/a3k234852013224.png">
                                    </span>
                                    <p class="tit">台湾进口食品一本香草味拿铁卡布奇诺咖啡三合一速溶咖啡固体饮料</p>
                                    <p>￥168.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="https://img.jumore.com/jfs1/000/1C/B8/ClgMC1t03k2ALyemAACBFSzbso0935.jpg">
                                    </span>
                                    <p class="tit">台湾进口喜年来蔬菜饼干芝麻饼干办公室零食小吃一件代发包邮</p>
                                    <p>￥9.00</p>
                                </a>
                            </div>
                        </div>
                    </div>`
                    }
                }
                var lt = $(".lt")
                lt.append(ltstr);
                var cnamewrap = $(".cnamewrap")
                cnamewrap.append(cnamestr)
                var main = $(".main")
                main.append(str)
            },
            mnum: function () {
                var inputval = $(".inputwrap>input").val()
                var inputadd = $(".inputact>span").eq(0)
                var inputreduce = $(".inputact>span").eq(1)
                inputadd.on("click", function () {
                    $(".inputwrap>input").val(++inputval)
                })
                inputreduce.on("click", function () {
                    if (inputval > 1) {
                        $(".inputwrap>input").val(--inputval)
                    }
                })
            },
            cart: function () {
                var btn1 = $(".btn-line-warning").eq(0)
                btn1.on("click", function () {
                    //[{"id":"01","num":1},{"id":"02","num":4},{"id":"02","num":1},{"id":"02","num":1}]
                    var num = $(".inputwrap>input").val();
                    var arr = []
                    var goods = {}
                    console.log(urlId)
                    console.log(localStorage.data)
                    if (localStorage.data) {
                        arr = JSON.parse(localStorage.data)
                        var bstop = false;

                        for (var key in arr) {
                            if (arr[key].id == urlId) {
                                arr[key].num = num
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            goods.id = urlId;
                            goods.num = num;
                            arr.push(goods)
                        }
                    } else {
                        console.log(1)
                        goods.id = urlId;
                        goods.num = num;
                        arr.push(goods)
                    }
                    localStorage.setItem("data", JSON.stringify(arr));

                })
                var btn2 = $(".btn-line-warning").eq(1)
                btn2.on("mouseover", function () {
                    btn2.addClass("active")
                })
                btn2.on("mouseout", function () {
                    btn2.removeClass("active")
                })
            }
        })
        new detail(data).init()
    })
}
else if (prenum == "c") {
    
    new Promise(function (resolve, reject) {
        $.ajax({
            type: "get",
            url: "/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
            dataType: "jsonp",
            success: function (data) {
                resolve(data);
            }
        })
    }).then(function (data) {
        
        var data = data.result.wall.docs;
        function detail(data) {
            this.da = data;
            
        }
        $.extend(detail.prototype, {
            init: function () {
                this.navover()
                this.navout()
                this.fordata()
                this.mnum()
                this.cart()
                
            },
            navover: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseover", function () {
                    navlist.show()
                })
            },
            navout: function () {
                var navli = $(".navitem>li").eq(1)
                var navlist = navli.find(".catelist")
                navli.on("mouseout", function () {
                    navlist.hide()
                })
            },
            fordata: function () {
                
                for (var key in this.da) {
                    if (this.da[key].cfav == mp) {
                        console.log(this.da[key].cfav)
                        var company = "烟台食品有限公司"
                        var ltstr = `<div class="comname">
                            <span>${company}&nbsp;&nbsp;</span>
                        </div>`
                        var cnamestr = `<div class="cname">
                            <a href="index.html">首页</a> &gt;
                            <a href="#">${company}</a> &gt;
                            <a href="#">商品详情</a>
                        </div>`
                        var str = `<div class="hmain">
                        <div class="mimg">
                            <div class="bimg">
                                <img src="${this.da[key].img}">
                            </div>
                            <ul>
                                <li class="active">
                                    <a href="##">
                                        <img src="${this.da[key].img}" alt="">
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="info">
                            <h1>${this.da[key].title}</h1>
                            <div class="Price">
                                <p class="textleft">
                                    <label class="textmuted">价格：</label>
                                    <span class="textprice">${Math.ceil(this.da[key].price)}</span>
                                </p>
                            </div>
                            <div class="buyinfo">
                                <ul class="productinfo">
                                    <li>
                                        <label> 净含量：</label>
                                        <div>${this.da[key].itemType}</div>
                                    </li>
                                    <li>
                                        <label> 售卖方式：</label>
                                        <div>电议</div>
                                    </li>
                                    <li>
                                        <label> 是否进口：</label>
                                        <div>否</div>
                                    </li>
                                    <li>
                                        <label> 品牌：</label>
                                        <div>${company}</div>
                                    </li>
                                    <li>
                                        <label> 最小起订量：</label>
                                        <div>1</div>
                                    </li>
                                    <li>
                                        <label> 采购数量：</label>
                                        <div class="inputnum">
                                            <div class="inputwrap">
                                                <input type="number" value="1" class="formcon">
                                            </div>
                                            <div class="inputact">
                                                <span>+</span>
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div>
                                <a class="active btn-line-warning ">加入购物车</a>
                                <a href="cart.html" class="btn-line-warning">我的购物车</a>
                                </div>
                            </div>
                        </div>
                        <div class="ltl">
                            <div class="name">
                                <h3>店家推荐</h3>
                            </div>
                            <div class="con">
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/rue149826024127.png">
                                    </span>
                                    <p class="tit">成都厂家批发美味休闲食品原味蛋香酥脆化渣黄小蛋儿</p>
                                    <p>￥90.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0206/38s784031023309.png">
                                    </span>
                                    <p class="tit">成都时尚办公室零食休闲美味长腿黑美人</p>
                                    <p>￥198.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="//www.xglvip.com//data/goods/18/0127/a3k234852013224.png">
                                    </span>
                                    <p class="tit">台湾进口食品一本香草味拿铁卡布奇诺咖啡三合一速溶咖啡固体饮料</p>
                                    <p>￥168.00</p>
                                </a>
                                <a href="#">
                                    <span>
                                        <img src="https://img.jumore.com/jfs1/000/1C/B8/ClgMC1t03k2ALyemAACBFSzbso0935.jpg">
                                    </span>
                                    <p class="tit">台湾进口喜年来蔬菜饼干芝麻饼干办公室零食小吃一件代发包邮</p>
                                    <p>￥9.00</p>
                                </a>
                            </div>
                        </div>
                    </div>`
                    }
                }
                console.log(this.da)
                console.log(ltstr)
                var lt = $(".lt")
                lt.append(ltstr);
                var cnamewrap = $(".cnamewrap")
                cnamewrap.append(cnamestr)
                var main = $(".main")
                main.append(str)
            },
            mnum: function () {
                var inputval = $(".inputwrap>input").val()
                var inputadd = $(".inputact>span").eq(0)
                var inputreduce = $(".inputact>span").eq(1)
                inputadd.on("click", function () {
                    $(".inputwrap>input").val(++inputval)
                })
                inputreduce.on("click", function () {
                    if (inputval > 1) {
                        $(".inputwrap>input").val(--inputval)
                    }
                })
            },
            cart: function () {
                var btn1 = $(".btn-line-warning").eq(0)
                btn1.on("click", function () {
                    //[{"id":"01","num":1},{"id":"02","num":4},{"id":"02","num":1},{"id":"02","num":1}]
                    var num = $(".inputwrap>input").val();
                    var arr = []
                    var goods = {}
                    console.log(urlId)
                    console.log(localStorage.data)
                    if (localStorage.data) {
                        arr = JSON.parse(localStorage.data)
                        var bstop = false;

                        for (var key in arr) {
                            if (arr[key].id == urlId) {
                                arr[key].num = num
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            goods.id = urlId;
                            goods.num = num;
                            arr.push(goods)
                        }
                    } else {
                        console.log(1)
                        goods.id = urlId;
                        goods.num = num;
                        arr.push(goods)
                    }
                    localStorage.setItem("data", JSON.stringify(arr));

                })
                var btn2 = $(".btn-line-warning").eq(1)
                btn2.on("mouseover", function () {
                    btn2.addClass("active")
                })
                btn2.on("mouseout", function () {
                    btn2.removeClass("active")
                })
            }
        })
        new detail(data).init()
    })
}