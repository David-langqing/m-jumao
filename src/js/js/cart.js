function data() {
    this.arr = JSON.parse(localStorage.data)


}
$.extend(data.prototype, {
    init: function () {
        this.append()
        this.goods()
    },
    append: function () {
        var p1 = new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "/api/1001/search/relatedGoods?t=1537687424004&_store=1000001538.jumore.com&notContainId=204186&goodsCategoryGrade1Id=100043&goodsCategoryGrade2Id=102298",
                dataType: "json",
                success: function (data) {
                    resolve(data)
                }
            })
        })
        var p2 = new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "/api/1001/search/relatedGoods?t=1537700166821&_store=xiaocaowu.jumore.com&notContainId=203888&goodsCategoryGrade1Id=100042&goodsCategoryGrade2Id=100417",
                dataType: "json",
                success: function (data) {
                    resolve(data)
                }
            })
        })
        var p3 = new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
                dataType:"jsonp",
                success: function (data) {
                    resolve(data)
                }
            })
        })
        var arr = this.arr
        Promise.all([p1,p2,p3]).then(function (data) {
            var Ada = data[0]
            var Bda = data[1]
            var Cda = data[2]
            var astr = ""
            for (let key in arr) {
                var mp = arr[key].id.charAt(0)
                var ulk = arr[key].id.slice(1)
                var mnum = arr[key].num
                if (mp == "a") {
                    var nda = Ada.data
                    var da = []
                    for (let i in nda) {
                        var bstop = false;
                        var goods = {}
                        for (let j in da) {
                            if (nda[i].createId == da[j].createId) {
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            da.push(nda[i])
                        }
                    }
                    for (let key in da) {
                        if (da[key].createId == ulk) {
                            var goodspr = da[key].maxPrice ? (da[key].maxPrice > 0 ? da[key].maxPrice : 10) : 10
                            astr += `<div class="tit">
                            <div class="title">
                                <input type="checkbox" class="select">
                                <div class="cartdeeper">店铺:</div>
                                <a class="tit1" href="#">${da[key].companyName}</a>
                                <a class="tit2" href="#">
                                    <img src="../img/wakeup.png">
                                </a>
                                <a class="tit3" href="#">食品</a>
                                <div class="cartdeep">行业:</div>
                            </div>
                            <div class="row storemain">
                                <div class="goods" datd-id="a${da[key].createId}">
                                    <a class="goodsimg" href="#">
                                        <img src="https://img.jumore.com${da[key].goodsPicture}">
                                    </a>
                                    <div class="goodsinfo">
                                        <p>
                                            <a href="#">${da[key].title}</a>
                                        </p>
                                    </div>
                                    <div class="goodsprice">${parseInt(goodspr)}</div>
                                    <div class="goodsnum">
                                        <button class="mnum reduce">-</button>
                                        <input class="mnum" type="text" value="${mnum}">
                                        <button class="mnum add">+</button>
                                    </div>
                                    <div class="goodstotal">
                                        <div class="goodstot">${parseInt(mnum * goodspr)}</div>
                                    </div>
                                    <div class="goodsremove">
                                        <a class="goodsremoveA" href="#">删除</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        }
                    }
                }
                if (mp == "b") {
                    var nda = Bda.data
                    var da = []
                    for (let i in nda) {
                        var bstop = false;
                        var goods = {}
                        for (let j in da) {
                            if (nda[i].createId == da[j].createId) {
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            da.push(nda[i])
                        }
                    }
                    for (let key in da) {
                        if (da[key].createId == ulk) {
                            var goodspr = da[key].maxPrice ? (da[key].maxPrice > 0 ? da[key].maxPrice : 10) : 10
                            astr += `<div class="tit">
                            <div class="title">
                                <input type="checkbox" class="select">
                                <div class="cartdeeper">店铺:</div>
                                <a class="tit1" href="#">${da[key].companyName}</a>
                                <a class="tit2" href="#">
                                    <img src="../img/wakeup.png">
                                </a> 
                                <a class="tit3" href="#">食品</a>
                                <div class="cartdeep">行业:</div>
                            </div>
                            <div class="row storemain">
                                <div class="goods"  datd-id="b${da[key].createId}">
                                    <a class="goodsimg" href="#">
                                        <img src="https://img.jumore.com${da[key].goodsPicture}">
                                    </a>
                                    <div class="goodsinfo">
                                        <p>
                                            <a href="#">${da[key].title}</a>
                                        </p>
                                    </div>
                                    <div class="goodsprice">${parseInt(goodspr)}</div>
                                    <div class="goodsnum">
                                        <button class="mnum reduce">-</button>
                                        <input class="mnum" type="text" value="${mnum}">
                                        <button class="mnum add">+</button>
                                    </div>
                                    <div class="goodstotal">
                                        <div class="goodstot">${parseInt(mnum * goodspr)}</div>
                                    </div>
                                    <div class="goodsremove">
                                        <a class="goodsremoveA" href="#">删除</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        }
                    }
                }
                if (mp == "c") {
                    var nda = Cda.result.wall.docs;
                    
                    var da = []
                    for (let i in nda) {
                        var bstop = false;
                        var goods = {}
                        for (let j in da) {
                            if (nda[i].cfav == da[j].cfav) {
                                bstop = true;
                            }
                        }
                        if (!bstop) {
                            da.push(nda[i])
                        }
                    }
                    
                    for (let key in da) {
                        if (da[key].cfav == ulk) {
                            console.log(ulk)
                            var goodspr = da[key].maxPrice ? (da[key].maxPrice > 0 ? da[key].maxPrice : 10) : 10
                            astr += `<div class="tit">
                            <div class="title">
                                <input type="checkbox" class="select">
                                <div class="cartdeeper">店铺:</div>
                                <a class="tit1" href="#">烟台食品有限公司</a>
                                <a class="tit2" href="#">
                                    <img src="../img/wakeup.png">
                                </a> 
                                <a class="tit3" href="#">食品</a>
                                <div class="cartdeep">行业:</div>
                            </div>
                            <div class="row storemain">
                                <div class="goods"  datd-id="b${da[key].cfav}">
                                    <a class="goodsimg" href="#">
                                        <img src="${da[key].img}">
                                    </a>
                                    <div class="goodsinfo">
                                        <p>
                                            <a href="#">${da[key].title}</a>
                                        </p>
                                    </div>
                                    <div class="goodsprice">${parseInt(goodspr)}</div>
                                    <div class="goodsnum">
                                        <button class="mnum reduce">-</button>
                                        <input class="mnum" type="text" value="${mnum}">
                                        <button class="mnum add">+</button>
                                    </div>
                                    <div class="goodstotal">
                                        <div class="goodstot">${parseInt(mnum * goodspr)}</div>
                                    </div>
                                    <div class="goodsremove">
                                        <a class="goodsremoveA" href="#">删除</a>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        }
                    }
                    
                }
            }
            var store = $(".store")
            store.append(astr)
            var infonum = $(".infonum")
            infonum.text(arr.length)
            // var goodstot = $(".goodstot")
            // var total = 0;
            // for(let i=0;i<goodstot.length;i++){
            //     total+=parseInt(goodstot.eq(i).text())
            // }
            // var totalpr = $(".totalpr>span")
            // totalpr.text(total)
        })
    },
    goods: function () {
        var arr = this.arr
        $(function () {
            // 文档就绪
            
            var cart = $(".cart")
            cart.on("click",function(event){
                //console.log(event.target.className)
                var clname = event.target.className
                
                var total = 0;
                //加商品
                if(clname == "mnum add"){
                    var num = $(event.target).prev().val()
                    $(event.target).prev().val(++num)
                    //修改localstorage
                    var dataid = $(event.target).parent().parent().attr("datd-id")
                    for(let i in arr){
                        if(arr[i].id == dataid){
                            arr[i].num = num
                        }
                    }
                    localStorage.setItem("data",JSON.stringify(arr))
                    //单价变化
                    var price = $(event.target).parent().prev().text()
                    var numpr = num*price
                    $(event.target).parent().next().find(".goodstot").text(numpr)
                    
                }
                //减商品
                if(clname == "mnum reduce"){
                    var num = $(event.target).next().val()
                    $(event.target).next().val(num>1?--num:1)
                    //修改localstorage
                    var dataid = $(event.target).parent().parent().attr("datd-id")
                    for(let i in arr){
                        if(arr[i].id == dataid){
                            arr[i].num = num
                        }
                    }
                    localStorage.setItem("data",JSON.stringify(arr))
                    //单价变化
                    var price = $(event.target).parent().prev().text()
                    var numpr = num*price
                    $(event.target).parent().next().find(".goodstot").text(numpr)
                    
                }
                //删除
                if(clname == "goodsremoveA"){
                    //修改localstorage
                    var dataid = $(event.target).parent().parent().attr("datd-id")
                    for(let i in arr){
                        if(arr[i].id == dataid){
                            arr.splice(i, 1);
                        }
                    }
                    localStorage.setItem("data",JSON.stringify(arr))
                    $(event.target).parent().parent().parent().parent().remove()
                    
                }
                var select = $(".title>.select")
                //全选
                if(clname =="select select1"){
                    var checkedd =  $(event.target).prop("checked")
                    if(checkedd){
                        select.prop("checked",true)
                    }else{
                        select.prop("checked",false)
                    }
                }
                var select1 = $(".select1")
                //反选
                if(clname=="select"){
                    var bstop = false;
                    for(let i=0;i<select.length;i++){
                        
                        if(!select.eq(i).prop("checked")){
                            bstop = true
                        }
                    }
                    if(!bstop){
                        select1.prop("checked",true)
                    }else{
                        select1.prop("checked",false)
                    }
                }
                var totalpr = $(".totalpr>span")
                var goodstot = $(".goodstot")
                var total = 0
                //总价变化
                
                for(let i=0;i<goodstot.length;i++){
                    //ole.log(select.eq(i).prop("checked"))
                    if(select.eq(i).prop("checked")){
                       // console.log(goodstot.eq(i).text())
                        total+=parseInt(goodstot.eq(i).text())
                    }
                }
                totalpr.text(total)
            })
        });
    }


})
new data().init()
new bottom($("#bottombox")).init();