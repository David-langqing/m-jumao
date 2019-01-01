 //banner图右侧数据
 $.ajax({
  type: "get",			
  //	/purchase?t=1537260442932&currentPage=1&pageSize=30&sort=releaseTime+desc&platformCode=1014
  url: "/api/1014/search/purchase?t=1537260442932&currentPage=1&pageSize=30&sort=releaseTime+desc&platformCode=1014",
  dataType:"json",
  success: function (data) {
      var da = data.data.result;
      var bannerUl = $(".content>.business>.new-lists>ul")
      var str=""
      for(i=0;i<da.length;i++){
        str+=`<li class="textOverflow1">
            <div class="flow2" title="${da[i].title}">
                <a href="#" >
                    <span class="news-type">【采购】</span>${da[i].title}
                </a>
            </div>
        </li>`
      }
      bannerUl.append(str)
       var bannerright = {
          mupUl:$(".content>.business>.new-lists>ul"),
          mLi:$(".content>.business>.new-lists>ul>li"),
          iNow:0,
          timer:null,
          
          init:function(){
            var li = this.mLi.clone(true);
            this.mupUl.append(li);
            this.mupUl.css("height",this.mLi.eq(0).height()*(this.mLi.length+1))
            this.autoPlay()
            this.over()
          },
          autoPlay:function(){
            var _this =this;
            this.timer = setInterval(function(){
             
              if(_this.iNow == _this.mLi.length-2){
                
                _this.iNow=0
                _this.mupUl.css("top","0")
                _this.mupUl.animate({top: 0}, 1);   
                
              }else{
                _this.iNow++
              }
              _this.upul()
            },200)
          },
          upul:function(){
            if(this.iNow==29){
            }
            this.mupUl.animate({
              top: -(this.iNow*this.mLi.eq(0).height()+5)}, 1000);        
          },

          over:function(){
            
            var _this = this; 
            $(".mupUl").on("mouseover", function(){
              clearInterval(_this.timer)
            });
          },




        // mupUl:$(".content>.business>.new-lists>ul"),
        // mLi:$(".content>.business>.new-lists>ul>li"),
        // init:function(){
        //   this.mupUl.css("height",this.mLi.length*this.mLi.height())
        //   this.upUl();
        // },
        // upUl:function(){
        //   var num = (this.mLi.length*this.mLi.height()/10)*10
        //   this.mupUl.animate({
        //     _this:this,

        //     top: -this.mLi.length*this.mLi.height()},num,
        //     function(){
        //       var nupul = $(".content>.business>.new-lists>ul");
        //       if((-parseInt(nupul.css("top")))>=nupul.height()){
        //         console.log(1)
        //         return function(){
        //           console.log(this)
        //         }
        //       }
        //   })
          
        // }
      }
      bannerright.init();
      
  }
})


$(document).ready(function(){
  var banner ={
    aLi:$(".banner>ul>li"),
    oUl:$(".banner>ul"),
    DirA:$(".dir>a"),
    btn:$(".btn>a"),
    iNow:0,
    timer:null,
    
    
    init:function(){
      this.DirA.hide()
      var li = this.aLi.eq(0).clone(true);
      this.oUl.append(li);
      this.oUl.css("width",this.aLi.eq(0).children("img").width()*(this.aLi.length+1))
      this.autoPlay();
      this.over();
      this.out();
      this.next();
      this.prev();
      this.toggle();
    },
    autoPlay:function(){
      var _this =this;
      this.timer = setInterval(function(){
       
        if(_this.iNow == _this.aLi.length){
          _this.iNow=0
          _this.oUl.css("left","0")
        }else{
          _this.iNow++
        }
        _this.toimg()
      },3000)
    },
    over:function(){
      var _this = this; 
      $(".banner").on("mouseover", function(){
        clearInterval(_this.timer)
        _this.DirA.show();
      });
    },
    out:function(){
      var _this = this; 
      $(".banner").on("mouseout", function(){
        _this.autoPlay();
        _this.DirA.hide();
      });
    },
    prev:function(){
      var _this = this;
      this.DirA.eq(0).on("click",function(){
        if(_this.iNow == 0){
          _this.iNow=_this.aLi.length-1
          _this.oUl.css("left",-(_this.iNow*_this.aLi.eq(0).children("img").width()))
        }else{
          _this.iNow--
        }
        _this.toimg()
      })
    },
    next:function(){
      var _this = this;
      this.DirA.eq(1).on("click",function(){
        if(_this.iNow == _this.aLi.length){
          _this.iNow=0
          _this.oUl.css("left","0")
        }else{
          _this.iNow++
        }
        _this.toimg()
      })
    },
    toggle:function(){
      var _this = this;
      this.btn.on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active")
        _this.iNow = $(this).index()
        _this.toimg();
      })
    },
    toimg:function(){
      this.oUl.animate({
        left: -(this.iNow*this.aLi.eq(0).children("img").width())
      }, 1000);
      this.btn.eq(this.iNow==this.aLi.length?0:this.iNow).addClass("active").siblings().removeClass("active")
      
    },
    
    
  } 

  banner.init();
 var ulshow = {
  tabtitle : $(".tabtitle"),
  init: function(){
    this.bclick()
  },
  bclick : function(){
      var _this = this;
      this.tabtitle.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).index()==1){
          $(this).parent().find(".bar").css(
            "left","130px")
            $(this).parent().parent().find(".content").find(".modify-price").show().siblings().hide()
        }if($(this).index()==0){
          $(this).parent().find(".bar").css(
            "left","10px")
            $(this).parent().parent().find(".content").find(".business").show().siblings().hide()
        }
      })
  }
 }
 ulshow.init();
})
 