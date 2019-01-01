function bottom(container){
    this.el = container;
}
bottom.Template = `
<div class="footwrap">
    <div class="footer">
        <div class="fbox">
            <div class="fhelp">
                <dl>
                    <dt>使用帮助</dt>
                    <dd>
                        <a href="#" target="_blank">关于我们</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">联系我们</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">用户协议</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">联系客服</a>
                    </dd>
                </dl>
                <dl>
                    <dt>个人用户</dt>
                    <dd>
                        <a href="#" target="_blank">帮助中心</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">免责条款</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">售后服务</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">常见问题</a>
                    </dd>
                </dl>
                <dl>
                    <dt>商家服务</dt>
                    <dd>
                        <a href="#" target="_blank">商家服务</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">入住协议</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">服务配送</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">联系方式</a>
                    </dd>
                </dl>
                <dl>
                    <dt>服务保障</dt>
                    <dd>
                        <a href="#" target="_blank">在线支付</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">公司转账</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">配送服务</a>
                    </dd>
                </dl>
                <dl>
                    <dt>售后服务</dt>
                    <dd>
                        <a href="#" target="_blank">价格保护</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">返修/退换货</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">取消订单</a>
                    </dd>
                    <dd>
                        <a href="#" target="_blank">退款说明</a>
                    </dd>
                </dl>
            </div>
            <div class="fewm">
                <span>关注二维码</span>
                <p>
                    <img src="../img/img/ewm.png">
                </p>
            </div>
            <div class="fus">
                <p class="fname">全国统一热线</p>
                <p class="fmobile">400-020-1999</p>
                <p class="fservice">服务时间：9:00-21:00</p>
                <p class="fservice">客服邮箱：286277666@qq.com</p>
            </div>
        </div>
    </div>
</div>
<div class="bottomwrap">
    <div class="bottom">
        <div class="copyright">
            Copyright © 2017 All rights reserved. ICP备案：苏ICP备15023721号-3
            <a href="#" target="_blank">增值电信业务经营许可证：苏B2-20160587</a>
            <a href="#" target="_blank" style="color:red;">[知识产权举报]</a>
        </div>

    </div>

</div>
`
$.extend(bottom.prototype,{
    init:function(){
        this.append()
    },
    append:function(){
        //this.el.html(bottom.Template)
        this.content = $("<div></div>")
        this.content.html(bottom.Template);
        this.el.append(this.content);
    }
})

