window.onload=function () {
    toggleMenu();
    closeAdv();
    showHome();
    showContent(); 
}

//展示主页
function showHome() {
    showModel("update","update");
    showModel("about-us","about-us");
    showModel("showhome","home");
    showModel("settings","settings");
    showModel("feedback","feedback");
    showModel("help-center","help-center");
}

//主页、设置、意见反馈、帮助中心、更新说明、关于
function showModel(className,id) {
    var ele = getEleByClass(className)[0];
    var model = getEleById(id);
    eventUtil.addHandler(ele,"click",function (e) {
        var event = eventUtil.getEvent(e);
        var activeEle = getEleByClass("active")[0];
        var selected = getEleByClass("selected")[0];
        var open = getEleByClass("open");
        var option = getEleByClass("option");
            removeClass(activeEle,"active")
            addClass(model,"active");
            //重置所有选中的子菜单项
            if(selected){
                removeClass(selected,"selected");
            }
            //关闭所有已打开的菜单
            if(open){
                for(var i = 0 ;i<open.length;i++){
                removeClass(open[i],"open");
                }
            }
            //重置菜单箭头方向
            for(var i =0;i<option.length;i++){
                option[i].style.backgroundImage="url(css/images/li-down.png)";
            }
        eventUtil.preventDefault(event);
    });
}


//关闭顶部广告按钮
function closeAdv(){
    var close = getEleById("close-adv");
    eventUtil.addHandler(close,"click",function () {
        getEleById("top-adv").style.display = "none";
    });
}

//打开或者关闭菜单列表
function toggleMenu() {
    var option = getEleByClass("option");
    var subMenu = getEleByClass("subMenu");
    eventUtil.addHandler(option[0],"click",function (e) {
        var subMenu1=getEleById("sub-menu1");
        toggleBackgrodundImg(e);
        toggleClass(subMenu1,"open");
        
    });  
    eventUtil.addHandler(option[1],"click",function (e) {
        var event = eventUtil.getEvent(e);
        var target = eventUtil.getElement(event);
        var subMenu1=getEleById("sub-menu2");
        toggleClass(subMenu1,"open");
        toggleBackgrodundImg(e);
    });  
    eventUtil.addHandler(option[2],"click",function (e) {
        var subMenu1=getEleById("sub-menu3");
        toggleClass(subMenu1,"open");
        toggleBackgrodundImg(e);
    });  
    eventUtil.addHandler(option[3],"click",function (e) {
        var subMenu1=getEleById("sub-menu4");
        toggleClass(subMenu1,"open");
        toggleBackgrodundImg(e);
    });  
    eventUtil.addHandler(option[4],"click",function (e) {
        var subMenu1=getEleById("sub-menu5");
        toggleClass(subMenu1,"open");
        toggleBackgrodundImg(e);
    });  
}
//切换背景图片
function toggleBackgrodundImg(e) {
    var event = eventUtil.getEvent(e);
    var target =eventUtil.getElement(event);
    var backImg = ["css/images/li-up.png","css/images/li-down.png"];
        if(target.style.backgroundImage.indexOf("up") != -1){
                target.style.backgroundImage="url(" + backImg[1] + ")";
            }else{
                target.style.backgroundImage="url(" + backImg[0] + ")";
            }
}

//菜单右侧内容实现
function showContent() {
    var menu = getEleById("menu");
    eventUtil.addHandler(menu,"click",function (e) {
        var event=eventUtil.getEvent(e);
        var target=eventUtil.getElement(event);
        var content = getEleByClass("content-item");
        for(var i=0;i<content.length;i++){
            if(("menu-"+content[i].id) == target.id){
                var activeEle = getEleByClass("active")[0];
                var selected = getEleByClass("selected")[0];
                if(selected){
                    removeClass(selected,"selected");
                }
                addClass(target,"selected");
                removeClass(activeEle,"active")
                addClass(content[i],"active");
            }
        }
    });
}

//根据ID获得html元素
function getEleById(id) {
    var element = document.getElementById(id);
    return element;
}

//根据class获得html元素集合
function getEleByClass(className) {
    var elements = document.getElementsByClassName(className);
    var eleArr=[]
    for(var i=0;i<elements.length;i++){
        eleArr.push(elements[i]);
    }
    return eleArr;
}
//根据标签获得html元素集合
function getEleByTag(tagName) {
    var elements = document.getElementsByClassName(className);
    return elements;
}

var eventUtil = {
    //添加句柄
    addHandler:function (element,type,handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type,handler);
        }else {
            element['on' + type] = handler;
        }
    },
    //删除句柄
    removeHandler:function (element,type,handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false);
        }else if(element.detachEvent){
            element.detachEvent('on' + type,handler);
        }else {
            element['on' + type] = null;
        }
    },
    //获得事件对象
    getEvent:function (event) {
        return event?event:window.event;
    },
    //获得事件类型
    getType:function (event) {
        return event.type;
    },
    //获得目标对象
    getElement:function (event) {
        return event.target || event.srcElement;
    },
    //阻止元素默认行为
    preventDefault:function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    //阻止冒泡
    stopPropagation:function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }
}

//判断元素是否有class
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
} 
//添加class
function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}
//移除class
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
            obj.className = obj.className.replace(reg, ' ');  
        }  
}
//切换class
function toggleClass(obj,cls){ 
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  

