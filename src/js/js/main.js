// import { promises } from "fs";

var p1 = new Promise(function (resolve, reject) {
    //聚茂1
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
    //聚茂2
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
        url: "/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
        dataType: "jsonp",
        success: function (data) {
            resolve(data)
        }
    })
})
Promise.all([p1, p2, p3]).then(function (data) {
    console.log(data)
    var da1 = data[0].data;
    var da2 = data[1].data;
    var da3 = data[2].result.wall.docs
    //console.log(da1)
    console.log(da3)
    var minstr = ""
    var rstr = ""

    for (i = 0; i < da1.length; i++) {
        //console.log(da[i].createId)  
        minstr += `<div class="optlist" data-id="a${da1[i].createId}">
            <a href="#">
                <div class="optlistimg">
                    <img alt="${da1[i].title}" src="https://img.jumore.com${da1[i].goodsPicture}">
                </div>
                <h4 class="textOverflow1" >${da1[i].title}</h4>
                <p><!----><!----><!----></p>
                <h5 >¥ ${da1[i].maxPrice ? (da1[i].maxPrice > 0 ? da1[i].maxPrice : 10) : 10}</h5>
            </a>
        </div>`
    }
    for (i = 1; i < da2.length - 1; i++) {
        //console.log(da[i].createId)  
        rstr += `<div class="optlist" data-id="b${da2[i].createId}">
            <a href="#">
                <div class="optlistimg">
                    <img alt="${da2[i].title}" src="https://img.jumore.com${da2[i].goodsPicture}">
                </div>
                <h4 class="textOverflow1" >${da2[i].title}</h4>
                <p><!----><!----><!----></p>
                <h5 >¥ ${Math.ceil(da2[i].minPrice)}</h5>
            </a>
        </div>`
    }
    var str = `<div class="jumore pulll">
        <h2>品牌优选</h2>
        <div class="csel">
            <div class="cselcontainer">
                <button type="button" class="cselarrow cselarrowl">
                    <i class="ciconl">&lt;</i>
                </button>
                <button type="button" class="cselarrow cselarrowr">
                    <i class="ciconr">&gt;</i>
                </button>
                <div class="cselitem">${minstr}                   
                </div>
            </div>
        </div>
    </div>
    <div class="jumore pullr">
        <h2>品牌优选</h2>
        <div class="csel">
            <div class="cselcontainer">
            <div class="cselitem">${rstr}
                        </div>
            </div>
        </div>
    </div>`

    var mopt = $(".container>.opt")
    mopt.html(str)
    //console.log(str)        
    var main = {
        cselcontainer: $(".cselcontainer"),
        cselitem: $(".cselitem"),
        optlist: $(".cselitem>.optlist"),
        btn: $(".cselcontainer>button"),
        iNow: 0,
        timer: null,
        init: function () {
            for (i = 0; i < this.optlist.length; i++) {
                if (this.optlist.eq(i).index() % 2 == 0) {
                    this.optlist.eq(i).css("margin-left", "32px")
                }
            }
            var num = this.optlist.length * (this.optlist.eq(0).outerWidth() + 24)

            this.cselitem.css("width", num)
            this.next()
            this.prev()
            this.show()
            this.hide()
            this.autoplay()
            this.slideup()
            this.slidedown()
            this.skip()
        },
        show: function () {
            var _this = this;
            this.cselcontainer.on("mouseover", function () {
                _this.btn.show()
                clearInterval(_this.timer)
            })
        },
        hide: function () {
            var _this = this;
            this.cselcontainer.on("mouseout", function () {
                _this.btn.hide()
                _this.autoplay()
            })
        },
        prev: function () {
            var _this = this;
            this.btn.eq(0).on("click", function () {
                var num = -2 * (_this.optlist.eq(0).outerWidth() + 24)
                console.log(_this.cselitem.css("left"))
                if (parseInt(_this.cselitem.css("left")) == 0) {
                    _this.cselitem.eq(0).animate({ left: num + 'px' }, 300);
                }
                if (parseInt(_this.cselitem.css("left")) == num) {
                    _this.cselitem.eq(0).animate({ left: "0" }, 300);
                }
            })
        },

        slideup: function () {
            var _this = this
            this.optlist.on("mouseover", function () {
                //console.log($(this).html())
                $(this).stop().animate({ padding: '5px 0 0 0' }, "1000");
            })
        },
        slidedown: function () {
            var _this = this
            this.optlist.on("mouseout", function () {
                //console.log($(this).html())
                $(this).stop().animate({ padding: '20px 0 0 0' }, "1000");
            })
        },
        next: function () {
            var _this = this;
            //手写
            // this.btn.eq(1).on("click",function(){
            //     if(_this.iNow == _this.optlist.length/2-1){
            //         _this.iNow=0;
            //     }else{
            //         _this.iNow++;
            //     }
            //     _this.exercise()
            // })
            this.btn.eq(1).on("click", function () {
                var num = -2 * (_this.optlist.eq(0).outerWidth() + 24)
                //console.log(_this.cselitem.css("left"))
                if (parseInt(_this.cselitem.css("left")) == 0) {
                    _this.cselitem.eq(0).animate({ left: num + 'px' }, 300);
                }
                if (parseInt(_this.cselitem.css("left")) == num) {
                    _this.cselitem.eq(0).animate({ left: "0" }, 300);
                }
            })
        },

        autoplay: function () {
            var _this = this;
            this.timer = setInterval(function () {
                var num = -2 * (_this.optlist.eq(0).outerWidth() + 24)
                //console.log(_this.cselitem.css("left"))
                if (parseInt(_this.cselitem.css("left")) == 0) {
                    _this.cselitem.eq(0).animate({ left: num + 'px' }, 300);
                }
                if (parseInt(_this.cselitem.css("left")) == num) {
                    _this.cselitem.eq(0).animate({ left: "0" }, 300);
                }
            }, 3000)
        },
        exercise: function () {
            this.cselitem.css("left", -(this.iNow * 2 * (this.optlist.eq(0).outerWidth() + 24)))
        },
        skip: function () {
            this.optlist.on("click", function (event) {
                var mId = $(this).attr("data-id");
                location.href = "../html/detail.html?mId=" + mId;
                //console.log(mId)
            });
        }
    }
    main.init()
    //list 渲染
    var lstr = ""
    var lrstr = ""
    for (let j = 1; j < 6; j++) {
        lrstr += `<li>
        <img src="../img/aside${j}.jpg">
        <label>
            <h2 title="四川鼎发食品有限公司" class="text-overflow"> 四川鼎发食品有限公司</h2>
            <a href="#">立即进店</a>
        </label>
    </li>`
    }
    for (let i = 1; i < 6; i++) {
        lstr += `<div class="cm cm${i}">
        <a href="#">
            <h3>豆制品</h3>
            <button>立即购买</button>
            <img src="${da3[i].img}">
        </a>
    </div>`
    }
    
    var ltotalstr = `<div class="farm">
        <header>
            <h2 class="title">休闲食品</h2>
            <div class="label">
                <a href="#" title="糖果">糖果</a>
                <a href="#" title="饼干">饼干</a>
                <a href="#" title="膨化食品">膨化食品</a>
            </div>
        </header>
        <div class="content">
            <div class="contentl">
                <a href="#">
                    <img src="${da3[0].img}">
                </a>
                <span>
                    <h2>休闲零食</h2>
                    <a class="inp" href="#">立即进入</a>

                </span>
            </div>
            <div class="contentm">
                ${lstr}
            </div>
            <div class="contentr">
                <ul>
                    ${lrstr}
                </ul>
            </div>
        </div>
    </div>
    
    `

    var mlist = $(".list")
    mlist.html(ltotalstr)
      //list1 渲染
      
      var lstr1 = ""
      
      for (let i = 7; i < 12; i++) {
          lstr1 += `<div class="cm cm${i-6}">
          <a href="#">
              <h3>豆制品</h3>
              <button>立即购买</button>
              <img src="${da3[i].img}">
          </a>
      </div>`
      }
      var ltotalstr1 = `
      <div class="farm">
          <header style="background:#bc9b43;">
              <h2 class="title">粮油副食</h2>
              <div class="label">
                  <a href="#" title="地方特产">地方特产</a>
                  <a href="#" title="米面杂粮">米面杂粮</a>
              </div>
          </header>
          <div class="content">
              <div class="contentl">
                  <a href="#">
                      <img src="${da3[6].img}">
                  </a>
                  <span style="background:#bc9b43;">
                      <h2>粮油副食</h2>
                      <a class="inp" href="#">立即进入</a>
  
                  </span>
              </div>
              <div class="contentm">
                  ${lstr1}
              </div>
              <div class="contentr">
                  <ul>
                      ${lrstr}
                  </ul>
              </div>
          </div>
      </div>`
  
      var mlist1 = $(".list1")
      mlist1.html(ltotalstr1)
      //list2 渲染
      
      var lstr2 = ""
      
      for (let i = 13; i < 18; i++) {
          lstr2 += `<div class="cm cm${i-12}">
          <a href="#">
              <h3>豆制品</h3>
              <button>立即购买</button>
              <img src="${da3[i].img}">
          </a>
      </div>`
      }
      var ltotalstr2 = `
      <div class="farm">
          <header style="background:#ab54bb;">
              <h2 class="title">速食调料</h2>
              <div class="label">
                  <a href="#" title="冷冻食品">冷冻食品</a>
              </div>
          </header>
          <div class="content">
              <div class="contentl">
                  <a href="#">
                      <img src="${da3[12].img}">
                  </a>
                  <span style="background:#ab54bb;">
                      <h2>速食调料</h2>
                      <a class="inp" href="#">立即进入</a>
  
                  </span>
              </div>
              <div class="contentm">
                  ${lstr2}
              </div>
              <div class="contentr">
                  <ul>
                      ${lrstr}
                  </ul>
              </div>
          </div>
      </div>`
  
      var mlist2 = $(".list2")
      mlist2.html(ltotalstr2)
       //list3 渲染
      
       var lstr3 = ""
      
       for (let i = 19; i < 24; i++) {
           lstr3 += `<div class="cm cm${i-18}">
           <a href="#">
               <h3>豆制品</h3>
               <button>立即购买</button>
               <img src="${da3[i].img}">
           </a>
       </div>`
       }
       var ltotalstr3 = `
       <div class="farm">
           <header style="background:#3dbbc0;">
               <h2 class="title">酒水饮料</h2>
               <div class="label">
                   <a href="#" title="果汁">果汁</a>
                   <a href="#" title="咖啡">咖啡</a>
               </div>
           </header>
           <div class="content">
               <div class="contentl">
                   <a href="#">
                       <img src="${da3[18].img}">
                   </a>
                   <span style="background:#3dbbc0;">
                       <h2>酒水饮料</h2>
                       <a class="inp" href="#">立即进入</a>
   
                   </span>
               </div>
               <div class="contentm">
                   ${lstr3}
               </div>
               <div class="contentr">
                   <ul>
                       ${lrstr}
                   </ul>
               </div>
           </div>
       </div>`
   
       var mlist3 = $(".list3")
       mlist3.html(ltotalstr3)
        //list4 渲染
      
      var lstr4 = ""
      
      for (let i = 25; i < 30; i++) {
          lstr4 += `<div class="cm cm${i-24}">
          <a href="#">
              <h3>豆制品</h3>
              <button>立即购买</button>
              <img src="${da3[i].img}">
          </a>
      </div>`
      }
      var ltotalstr4 = `
      <div class="farm">
          <header style="background:#e45b5b;">
              <h2 class="title">母婴滋补</h2>
              <div class="label">
              </div>
          </header>
          <div class="content">
              <div class="contentl">
                  <a href="#">
                      <img src="${da3[24].img}">
                  </a>
                  <span style="background:#e45b5b;">
                      <h2>母婴滋补</h2>
                      <a class="inp" href="#">立即进入</a>
  
                  </span>
              </div>
              <div class="contentm">
                  ${lstr4}
              </div>
              <div class="contentr">
                  <ul>
                      ${lrstr}
                  </ul>
              </div>
          </div>
      </div>`
  
      var mlist4 = $(".list4")
      mlist4.html(ltotalstr4)
      //list5 渲染
      
      var lstr5 = ""
      
      for (let i = 31; i < 36; i++) {
          lstr5 += `<div class="cm cm${i-30}">
          <a href="#">
              <h3>豆制品</h3>
              <button>立即购买</button>
              <img src="${da3[i].img}">
          </a>
      </div>`
      }
      var ltotalstr5 = `
      <div class="farm">
          <header style="background:#3dbbc0;">
              <h2 class="title">食品添加剂</h2>
              <div class="label">
              <a href="#" title="果汁">果汁</a>
              </div>
          </header>
          <div class="content">
              <div class="contentl">
                  <a href="#">
                      <img src="${da3[30].img}">
                  </a>
                  <span style="background:#3dbbc0;">
                      <h2>食品添加剂</h2>
                      <a class="inp" href="#">立即进入</a>
  
                  </span>
              </div>
              <div class="contentm">
                  ${lstr5}
              </div>
              <div class="contentr">
                  <ul>
                      ${lrstr}
                  </ul>
              </div>
          </div>
      </div>`
  
      var mlist5 = $(".list5")
      mlist5.html(ltotalstr5)
    //list列表
    function list() {

    }
    $.extend(list.prototype, {
        init: function () {
            this.mouseover()
            this.list()
        },
        mouseover: function () {
            var content = $(".content")
            var contentl = $(".contentl")
            var limg = $(".contentl>a>img")
            var lspan = $(".contentl>span")
            //内容左侧
            contentl.on("mouseover", function () {
                limg.stop().animate({ opacity: '1' }, "slow");
                lspan.stop().animate({ bottom: "0" }, "slow")
            })
            contentl.on("mouseout", function () {
                limg.stop().animate({ opacity: '0.9' }, "slow");
                lspan.stop().animate({ bottom: "-40px" }, "slow")
            })
            //内容中间
            var contentm = $(".contentm")
            var cm = $(".contentm>.cm")
            cm.on("mouseover", function () {
                var mh3 = $(this).find("h3")
                var mimg = $(this).find("img")
                mh3.css("color", "green")
                mimg.stop().animate({ right: "25px" }, "slow")
            })
            cm.on("mouseout", function () {
                var mh3 = $(this).find("h3")
                var mimg = $(this).find("img")
                mh3.css("color", "#3e3e3e")
                mimg.stop().animate({ right: "10px" }, "slow")
            })
            //内容右侧
            var contentrli = $(".contentr>ul>li")
            contentrli.on("mouseover", function () {
                $(this).find("label").show()
            })
            contentrli.on("mouseout", function () {
                $(this).find("label").hide()
            })
            //     content.on("mouseover",function(){
            //         var m = $(event.target)
            //         console.log(m)
            //         //$(event.target).attr("class")
            //     })

        },
        // 点击跳转
        list: function () {

            var list = $(".list")
            list.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "c"
                }
            })
            var list1 = $(".list1")
            list1.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    //console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "d"
                }
            })
            var list2 = $(".list2")
            list2.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    //console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "e"
                }
            })
            var list3 = $(".list3")
            list3.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    //console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "f"
                }
            })
            var list4 = $(".list4")
            list4.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    //console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "g"
                }
            })
            var list5 = $(".list5")
            list5.on("click", function () {
                //console.log(event.target.nodeName)
                //console.log(event.target.parentNode.className)
                if (event.target.nodeName == "IMG" || event.target.className == "label" || event.target.nodeName == "A") {
                    //console.log(1)
                    //location.href 
                    location.href = "../../html/list.html?" + "h"
                }
            })
        }



    })
    new list().init();
}
)