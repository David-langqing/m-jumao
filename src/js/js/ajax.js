// $.ajax({
//     type: "get",				
//     url: "/Home/GetRecommRegions?keyWord=%E5%90%8C%E4%BB%81%E5%A0%82",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         console.log(da)
//     }
// })
// $.ajax({
//     type: "get",				
//     url: "/restapi/shopping/restaurants?extras%5B%5D=activities&geohash=wx4ex27d8vmb&latitude=39.992065&limit=24&longitude=116.339075&offset=0&terminal=web",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         //console.log(da)
//     }
// })

// $.ajax({
//     type: "get",				
//     url: "/index.php?m=goods&c=index&a=ajax_goods&order=rand&limit=6&length=450",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         //console.log(da)
//     }
// })

// $.ajax({
//     type: "get",				
//     url: "/ajax/mgj.pc.detailinfo/v1?_ajax=1&itemId=1m7lb9y",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         //console.log(da)
//     }
// })

// $.ajax({
//     type: "get",				
//     url: "/api/1001/search/relatedGoods?t=1537687424004&_store=1000001538.jumore.com&notContainId=204186&goodsCategoryGrade1Id=100043&goodsCategoryGrade2Id=102298",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         console.log(da)
//     }
// })
// $.ajax({
//     type: "get",				
//     url: "/api/1001/search/relatedGoods?t=1537700166821&_store=xiaocaowu.jumore.com&notContainId=203888&goodsCategoryGrade1Id=100042&goodsCategoryGrade2Id=100417",
//     dataType:"json",
//     success: function (data) {
//         var da = data;
//         console.log(da)
//     }
// })
// c  蘑菇街  /search?callback=jQuery21105819924295757217_1537922680784&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=&action=clothing&acm=3.mce.1_10_1hh3s.110449.0.ziDCTr4I64VBr.pos_0-m_407632-sd_119-mf_15261_1047902-idx_5-mfs_33-dm1_5000&ptp=1._mf1_1239_15261._keyword_110449.0.POyP7VIq&_=1537922680785
console.log(1)
    $.ajax({
        type: "get",				
        url: "/search?callback=jQuery2110051983723067650756_1538053499222&_version=8193&ratio=3%3A4&cKey=15&page=1&sort=pop&ad=0&fcid=50240&action=clothing&acm=3.mce.1_10_1hf4o.109499.0.9y76xr4QXCLAM.pos_0-m_406352-sd_119-mf_15261_1047900-idx_0-mfs_22-dm1_5000&ptp=1._mf1_1239_15261.0.0.CqfFrWeI&_=1538053499223",
        dataType:"jsonp",
        success: function (data) {
            //resolve(data)
            console.log(2)
            console.log(data)
        }
    })

