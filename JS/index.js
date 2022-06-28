/*网站的动态部分
* 1：新闻数据的加载
* 2：登陆或注册的判断（非空判断）
* 3.轮播滚播（3张图片的自动切换）
* 4.国内 国际电影 点击切换
* */

//Json:是一种轻量级的数据交换格式,采用完全独立于编程语言的文本格式来存储和表示数据。
var JsonArea=[
    {"rank":"01", "name":"大圣归来", "num":"100"},
    {"rank":"02", "name":"罗小黑战记", "num":"100"},
    {"rank":"03", "name":"芳华", "num":"99"},
    {"rank":"04", "name":"我和我的祖国", "num":"99"},
    {"rank":"05", "name":"你好，李焕英", "num":"98"},
    {"rank":"06", "name":"我不是药神", "num":"97"},
    {"rank":"07", "name":"战狼", "num":"97"},
    {"rank":"08", "name":"西虹市首富", "num":"96"},
    {"rank":"09", "name":"白蛇：缘起", "num":"96"},
    {"rank":"10", "name":"流浪地球", "num":"95"}
];

var JsonArea2=[
    {"rank":"01", "name":"夏目友人帐", "num":"100"},
    {"rank":"02", "name":"神探夏洛克", "num":"100"},
    {"rank":"03", "name":"忠犬八公的故事", "num":"99"},
    {"rank":"04", "name":"这个杀手不太冷", "num":"99"},
    {"rank":"05", "name":"寻梦环游记", "num":"98"},
    {"rank":"06", "name":"某科学的超电磁炮", "num":"97"},
    {"rank":"07", "name":"银魂", "num":"97"},
    {"rank":"08", "name":"你好世界", "num":"96"},
    {"rank":"09", "name":"我是大哥大", "num":"96"},
    {"rank":"10", "name":"轮到你了", "num":"95"}
];



var JsonArea3=[
    {"rank":"01", "name":"夏目友人帐", "num":"100"},
    {"rank":"02", "name":"super lover", "num":"100"},
    {"rank":"03", "name":"咒术回战", "num":"99"},
    {"rank":"04", "name":"独占我的英雄", "num":"99"},
    {"rank":"05", "name":"寻梦环游记", "num":"98"},
    {"rank":"06", "name":"某科学的超电磁炮", "num":"97"},
    {"rank":"07", "name":"银魂", "num":"97"},
    {"rank":"08", "name":"纯情罗曼史", "num":"96"},
    {"rank":"09", "name":"小林家的龙女仆", "num":"96"},
    {"rank":"10", "name":"世界第一初恋", "num":"95"}
];

var JsonArea4=[
    {"rank":"01", "name":"罗小黑战记", "num":"100"},
    {"rank":"02", "name":"时光代理人", "num":"100"},
    {"rank":"03", "name":"天宝伏妖录", "num":"99"},
    {"rank":"04", "name":"秦时明月", "num":"99"},
    {"rank":"05", "name":"刺客伍六七", "num":"98"},
    {"rank":"06", "name":"镇魂街", "num":"97"},
    {"rank":"07", "name":"一人之下", "num":"97"},
    {"rank":"08", "name":"中国惊奇先生", "num":"96"},
    {"rank":"09", "name":"画江湖之不良人", "num":"96"},
    {"rank":"10", "name":"狐妖小红娘", "num":"95"}
];


//1.新闻数据的加载
var news=[
    "某科学的超电磁炮",
    "变形金刚",
    "白蛇：缘起",
    "蜘蛛侠",
    "钢铁侠",
    "复仇者联盟",
    "哈利波特",
    "夏目友人帐",
    "憨豆先生",
    "奇异博士"
];

/* 加载新闻
1.获取div
2.添加ol标签
3.循环 li
4.在li标签添加a
5.a里面添加新闻数据
*/

//2.添加一个JS的动态函数
function loadNews() {
//    1.获取对应的div
    var newlist = document.getElementById("newlist");
//    2.创建ol标签
    var ol = document.createElement("ol");
    //3.循环li
    for(var i=0; i<news.length; i++) {
        //4.创建li
        var li = document.createElement("li");
        //5.创建超链接a
        var a = document.createElement("a");
        //获取数据链中的电影数据 i(0-9)
        var text = document.createTextNode(news[i]);
        a.setAttribute("href","news.html");

        li.appendChild(a);
        a.appendChild(text);
        ol.appendChild(li);

    }
    newlist.appendChild(ol);

}

//实现国内外的点击切换
// 为国内的电影添加一个点击事件
var guonei=document.getElementById("home").onclick=function (){
    // alert("您点击了国内;;");
    //设置当前的颜色为红
    this.style.color="red";
//    将国外id设置为黑色
    var abroad = document.getElementById("abroad");
    abroad.style.color="black";
//    获取数据的div

    var table = document.getElementById("ranktable");
    //清空原有数据
    table.innerHTML="";
    table.innerHTML='<th width="20%">排名</th><th width="50%">电影名称</th>'+
        '<th width="30%">推荐指数</th>'

//    设置一个虚拟的变量
    var tbody = document.createElement("tbody");
//    循环的获取数据
    for (var i=0; i<JsonArea.length; i++) {
        tbody.innerHTML+='<tr><td>'+JsonArea[i].rank+
            '</td><td>'+JsonArea[i].name+
            '</td><td>'+JsonArea[i].num+
            '</td></tr>'
    }

    table.appendChild(tbody)

}


var guowai=document.getElementById("abroad").onclick=function () {
    // alert("您点击了国外");
    //设置当前的颜色为红
    this.style.color = "red";
//    将国内id设置为黑色
    var home = document.getElementById("home");
    home.style.color = "black";
//    获取数据的div
    var table = document.getElementById("ranktable");
    //清空原有数据
    table.innerHTML="";
    table.innerHTML='<th width="20%">排名</th><th width="50%">电影名称</th>'+
        '<th width="30%">推荐指数</th>'

//    设置一个虚拟的变量
    var tbody2 = document.createElement("tbody");
//    循环的获取数据
    for (var i=0; i<JsonArea2.length; i++) {
        tbody2.innerHTML+='<tr><td>'+JsonArea2[i].rank+
            '</td><td>'+JsonArea2[i].name+
            '</td><td>'+JsonArea2[i].num+
            '</td></tr>'
    }

    table.appendChild(tbody2)

}

var dy=document.getElementById("movie").onclick=function () {
    // alert("您点击了电影");
    //设置当前的颜色为红
    this.style.color = "red";
//    将动漫id设置为黑色
    var comic = document.getElementById("comic");
    comic.style.color = "black";
//    获取数据的div

    var table = document.getElementById("ranktable");
}



var dm=document.getElementById("comic").onclick=function () {
    // alert("您点击了动漫;");
    //设置当前的颜色为红
    this.style.color = "red";
//    将电影id设置为黑色
    var movie = document.getElementById("movie");
    movie.style.color = "white";
//    获取数据的div

    var table = document.getElementById("ranktable");
    //清空原有数据
    table.innerHTML="";
    table.innerHTML='<th width="20%">排名</th><th width="50%">电影名称</th>'+
        '<th width="30%">推荐指数</th>'

//    设置一个虚拟的变量
    var tbody3 = document.createElement("tbody");
//    循环的获取数据
    for (var i=0; i<JsonArea3.length; i++) {
        tbody3.innerHTML+='<tr><td>'+JsonArea3[i].rank+
            '</td><td>'+JsonArea3[i].name+
            '</td><td>'+JsonArea3[i].num+
            '</td></tr>'
    }

    table.appendChild(tbody3)

}

//轮播与滚播的特效

var ul = document.getElementById("ulbanner");
ul.style.left="0px";

var prebtn=document.getElementById("prebtn").onclick=function () {
    // alert("点击了上一页");
    //为图片的初始位置，不能加px
    var left=0;
    // var ul = document.getElementById("ulbanner");
    if(ul.style.left=="-1300px"){
        left=0;
    } else {
        left=parseInt(ul.style.left)-650; //强转为int类型
    }

    ul.style.left=left+"px";
    // console.log(left);
}

var nextbtn=document.getElementById("nextbtn").onclick=function () {
    // alert("点击了上一页");
    //为图片的初始位置，不能加px
    var left=0;
    // var ul = document.getElementById("ulbanner");
    if(ul.style.left=="0px"){
        left=-1300;
    } else {
        left=parseInt(ul.style.left)+650; //强转为int类型
    }

    ul.style.left=left+"px";
    // console.log(left);
}

function rightplay() {
//    为图片的初始位置
    var left=0;
    if(ul.style.left=="-1300px"){
        left=0;
    } else {
        left = parseInt(ul.style.left)-650;

    }

    ul.style.left=left+"px";

}

//开始实现多线程
function autoplay() {
    var time = setInterval(rightplay,3000);

}

function loginbtn() {

    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;
    if(name=="" || pass==""){
        alert("用户名或密码不能为空!!!");
    }
    else if(name=="wsh" && pass=="321"){
        alert("登录成功!!!");
    }
    else{
        alert("登录失败!!!");
    }
}

function onload() {
    loadNews();
    autoplay();
    loginbtn()

}

