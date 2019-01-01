 function mlist(){
    this.url = location.href;
    this.urlId = this.url.split("?")[1];
    this.init()
 }
 $.extend(mlist.prototype,{
     init:function(){
        this.fordata();
     },
     fordata:function(){
         var _this = this;
        if(this.urlId=="c"){
             $.ajax({
                type:"get",
                url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
                dataType:"jsonp",
                success:function(data){
                    //console.log(1)
                    var da = data.result.wall.docs;
                    var mstr=``
                    console.log(da)
                    for(let i=0;i<15;i++){
                        mstr+=` <div class="product" data-id=c${da[i].cfav}>
                        <div class="tar">
                            <div class="imgbox">
                                <a href="#">
                                    <img src="${da[i].img}">
                                </a>
                                <div class="mark">
                                    <span class="liprice">￥${da[i].price}</span>
                                </div>
                            </div>
                            <div class="normalshow">
                                <p class="liprice">
                                    <span>￥${da[i].price}元</span>
                                    <span>/件</span>
                                </p>
                                <h4 class="lititle">
                                    <a href="#">${da[i].title}</a>
                                </h4>
                                <p class="desc">
                                    <a href="#">杭州跃华物资有限公司</a>
                                </p>
                                <div class="address">
                                    <address class="pull-left location ">
                                        <i class="icon icon-location"></i>
                                        <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                                    </address>
                                    <span class="pull-right">贸易商</span>
                                </div>
                                <p class="tags">
                                    <i class="icon el-tooltip icon-vip3"></i>
                                    <i class="icon icon-auth el-tooltip" ></i>
                                    <!---->
                                </p>
                            </div>
                        </div>
                    </div>`
                    }
                    var lipro = $(".lipro")
                    //console.log(lipro.html())
                    lipro.html(mstr)
                    _this.mclick()
                }
            })
        }
        if(this.urlId=="d"){
            $.ajax({
               type:"get",
               url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
               dataType:"jsonp",
               success:function(data){
                   //console.log(1)
                   var da = data.result.wall.docs;
                   var mstr=``
                   console.log(da)
                   for(let i=15;i<30;i++){
                       mstr+=` <div class="product" data-id=c${da[i].cfav}>
                       <div class="tar">
                           <div class="imgbox">
                               <a href="#">
                                   <img src="${da[i].img}">
                               </a>
                               <div class="mark">
                                   <span class="liprice">￥${da[i].price}</span>
                               </div>
                           </div>
                           <div class="normalshow">
                               <p class="liprice">
                                   <span>￥${da[i].price}元</span>
                                   <span>/件</span>
                               </p>
                               <h4 class="lititle">
                                   <a href="#">${da[i].title}</a>
                               </h4>
                               <p class="desc">
                                   <a href="#">杭州跃华物资有限公司</a>
                               </p>
                               <div class="address">
                                   <address class="pull-left location ">
                                       <i class="icon icon-location"></i>
                                       <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                                   </address>
                                   <span class="pull-right">贸易商</span>
                               </div>
                               <p class="tags">
                                   <i class="icon el-tooltip icon-vip3"></i>
                                   <i class="icon icon-auth el-tooltip" ></i>
                                   <!---->
                               </p>
                           </div>
                       </div>
                   </div>`
                   }
                   var lipro = $(".lipro")
                   //console.log(lipro.html())
                   lipro.html(mstr)
                   _this.mclick()
               }
           })
       }
       if(this.urlId=="e"){
        $.ajax({
           type:"get",
           url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
           dataType:"jsonp",
           success:function(data){
               //console.log(1)
               var da = data.result.wall.docs;
               var mstr=``
               console.log(da)
               for(let i=30;i<45;i++){
                   mstr+=` <div class="product" data-id=c${da[i].cfav}>
                   <div class="tar">
                       <div class="imgbox">
                           <a href="#">
                               <img src="${da[i].img}">
                           </a>
                           <div class="mark">
                               <span class="liprice">￥${da[i].price}</span>
                           </div>
                       </div>
                       <div class="normalshow">
                           <p class="liprice">
                               <span>￥${da[i].price}元</span>
                               <span>/件</span>
                           </p>
                           <h4 class="lititle">
                               <a href="#">${da[i].title}</a>
                           </h4>
                           <p class="desc">
                               <a href="#">杭州跃华物资有限公司</a>
                           </p>
                           <div class="address">
                               <address class="pull-left location ">
                                   <i class="icon icon-location"></i>
                                   <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                               </address>
                               <span class="pull-right">贸易商</span>
                           </div>
                           <p class="tags">
                               <i class="icon el-tooltip icon-vip3"></i>
                               <i class="icon icon-auth el-tooltip" ></i>
                               <!---->
                           </p>
                       </div>
                   </div>
               </div>`
               }
               var lipro = $(".lipro")
               //console.log(lipro.html())
               lipro.html(mstr)
               _this.mclick()
           }
       })
    }
       if(this.urlId=="f"){
        $.ajax({
           type:"get",
           url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
           dataType:"jsonp",
           success:function(data){
               //console.log(1)
               var da = data.result.wall.docs;
               var mstr=``
               console.log(da)
               for(let i=45;i<60;i++){
                   mstr+=` <div class="product" data-id=c${da[i].cfav}>
                   <div class="tar">
                       <div class="imgbox">
                           <a href="#">
                               <img src="${da[i].img}">
                           </a>
                           <div class="mark">
                               <span class="liprice">￥${da[i].price}</span>
                           </div>
                       </div>
                       <div class="normalshow">
                           <p class="liprice">
                               <span>￥${da[i].price}元</span>
                               <span>/件</span>
                           </p>
                           <h4 class="lititle">
                               <a href="#">${da[i].title}</a>
                           </h4>
                           <p class="desc">
                               <a href="#">杭州跃华物资有限公司</a>
                           </p>
                           <div class="address">
                               <address class="pull-left location ">
                                   <i class="icon icon-location"></i>
                                   <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                               </address>
                               <span class="pull-right">贸易商</span>
                           </div>
                           <p class="tags">
                               <i class="icon el-tooltip icon-vip3"></i>
                               <i class="icon icon-auth el-tooltip" ></i>
                               <!---->
                           </p>
                       </div>
                   </div>
               </div>`
               }
               var lipro = $(".lipro")
               //console.log(lipro.html())
               lipro.html(mstr)
               _this.mclick()
           }
       })
   }
   if(this.urlId=="g"){
       $.ajax({
          type:"get",
          url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
          dataType:"jsonp",
          success:function(data){
              //console.log(1)
              var da = data.result.wall.docs;
              var mstr=``
              console.log(da)
              for(let i=60;i<75;i++){
                  mstr+=` <div class="product" data-id=c${da[i].cfav}>
                  <div class="tar">
                      <div class="imgbox">
                          <a href="#">
                              <img src="${da[i].img}">
                          </a>
                          <div class="mark">
                              <span class="liprice">￥${da[i].price}</span>
                          </div>
                      </div>
                      <div class="normalshow">
                          <p class="liprice">
                              <span>￥${da[i].price}元</span>
                              <span>/件</span>
                          </p>
                          <h4 class="lititle">
                              <a href="#">${da[i].title}</a>
                          </h4>
                          <p class="desc">
                              <a href="#">杭州跃华物资有限公司</a>
                          </p>
                          <div class="address">
                              <address class="pull-left location ">
                                  <i class="icon icon-location"></i>
                                  <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                              </address>
                              <span class="pull-right">贸易商</span>
                          </div>
                          <p class="tags">
                              <i class="icon el-tooltip icon-vip3"></i>
                              <i class="icon icon-auth el-tooltip" ></i>
                              <!---->
                          </p>
                      </div>
                  </div>
              </div>`
              }
              var lipro = $(".lipro")
              //console.log(lipro.html())
              lipro.html(mstr)
              _this.mclick()
          }
      })
  }
  if(this.urlId=="h"){
   $.ajax({
      type:"get",
      url:"/search?_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785",
      dataType:"jsonp",
      success:function(data){
          //console.log(1)
          var da = data.result.wall.docs;
          var mstr=``
          console.log(da)
          for(let i=35;i<50;i++){
              mstr+=` <div class="product" data-id=c${da[i].cfav}>
              <div class="tar">
                  <div class="imgbox">
                      <a href="#">
                          <img src="${da[i].img}">
                      </a>
                      <div class="mark">
                          <span class="liprice">￥${da[i].price}</span>
                      </div>
                  </div>
                  <div class="normalshow">
                      <p class="liprice">
                          <span>￥${da[i].price}元</span>
                          <span>/件</span>
                      </p>
                      <h4 class="lititle">
                          <a href="#">${da[i].title}</a>
                      </h4>
                      <p class="desc">
                          <a href="#">杭州跃华物资有限公司</a>
                      </p>
                      <div class="address">
                          <address class="pull-left location ">
                              <i class="icon icon-location"></i>
                              <span title="浙江省杭州市" class="address-txt">浙江省杭州市</span>
                          </address>
                          <span class="pull-right">贸易商</span>
                      </div>
                      <p class="tags">
                          <i class="icon el-tooltip icon-vip3"></i>
                          <i class="icon icon-auth el-tooltip" ></i>
                          <!---->
                      </p>
                  </div>
              </div>
          </div>`
          }
          var lipro = $(".lipro")
          //console.log(lipro.html())
          lipro.html(mstr)
          _this.mclick()
      }
  })
   }
     },
     mclick:function(){
         var product = $(".product")
         var lipro = $(".lipro")
         console.log(product.html())
         var _this = this
         
        product.click(
            function(){
                var daid =  $(this).attr("data-id");
                location.href = "../../html/detail.html?mId="+daid;
            }
        )
        // lipro.on("click","div",$.proxy(_this.Mclick,this))
     },
   
    //  Mclick:function(e){
        
    //     // var product = $(".product")
        
    //     var daid = $(this).attr("data-id")
    //     console.log(daid)
    //     location.href = "../../html/detail.html?mId="+daid;
    //  }
 })
 new mlist()