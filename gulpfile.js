const gulp = require("gulp");
const connect = require("gulp-connect");
const proxy = require("http-proxy-middleware");

gulp.task("server",function(){
	connect.server({
		root:"./src",
		port:8080,
		livereload:true,
		middleware:function(){
			return [
				//bannner图右侧
				proxy("/api/1014/search/purchase",{
					target:"https://www.jumoresp.com",
					changeOrigin:true
				}),
				//搜索框数据
				proxy("/api/1014/search/init",{
					target:"https://www.jumoresp.com",
					changeOrigin:true
				}),
				
				//药店 http://search.360kad.com/Home/GetRecommRegions?keyWord=%E5%90%8C%E4%BB%81%E5%A0%82
				//适用于列表页
				proxy("/Home",{
					target:"http://search.360kad.com",
					changeOrigin:true
				}),
				// //饿了吗  https://www.ele.me/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4ex27d8vmb&latitude=39.992065&limit=24&longitude=116.339075&offset=0&terminal=web
				// proxy("/restapi",{
				// 	target:"https://www.ele.me",
				// 	changeOrigin:true
				// }),
				//联想 http://www.xa16888.com/index.php?m=goods&c=index&a=ajax_goods&order=rand&limit=6&length=450
				proxy("/index",{
					target:"http://www.xa16888.com",
					changeOrigin:true
				}),
				
				
				// //聚茂 https://1000001538.jumore.com/api/1001/search/relatedGoods?t=1537360533554&_store=100000153
				// proxy("/api/1001/search/relatedGoods",{
				// 	target:"https://1000001538.jumore.com",
				// 	changeOrigin:true
				// }),
				//聚茂1 //a  https://1000001538.jumore.com/api/1001/search/relatedGoods?t=1537687424004&_store=1000001538.jumore.com&notContainId=204186&goodsCategoryGrade1Id=100043&goodsCategoryGrade2Id=102298
				proxy("/api/1001/search/relatedGoods",{
					target:"https://1000001538.jumore.com",
					changeOrigin:true
				}),
				//聚茂2 //b https://xiaocaowu.jumore.com/api/1001/search/relatedGoods?t=1537700166821&_store=xiaocaowu.jumore.com&notContainId=203888&goodsCategoryGrade1Id=100042&goodsCategoryGrade2Id=100417
				proxy("/api/1001/search/relatedGoods",{
					target: "https://xiaocaowu.jumore.com",
					changeOrigin:true
				}),
				//蘑菇街 //c http://list.mogujie.com/search?callback=jQuery21105819924295757217_1537922680784&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785
				proxy("/search",{
					target:"http://list.mogujie.com",
					changeOrigin:true
				}),
				//d http://list.mogujie.com/search?callback=jQuery2110051983723067650756_1538053499222&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50240&action=clothing&acm=3.mce.1_10_1hf4o.109499.0.9y76xr4QXCLAM.pos_0-m_406352-sd_119-mf_15261_1047900-idx_0-mfs_22-dm1_5000&ptp=1._mf1_1239_15261.0.0.CqfFrWeI&_=1538053499223
				proxy("/search",{
					target:"http://list.mogujie.com",
					changeOrigin:true
				}),
			]

		}
	})
})


gulp.task("watch-server",function(){
	gulp.watch("src/**/*",function(){
		gulp.src("src/**/*")
		.pipe(connect.reload())
	})
})

gulp.task("F5",["server","watch-server"])