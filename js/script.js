window.onload=function () {
    toggleMenu();
    closeAdv();
    showHome(); 
}

function showHome() {
    var showHome = getEleByClass("showhome")[0];
    var home = getEleById("home");
    eventUtil.addHandler(showHome,"click",function (e) {
        var event = eventUtil.getEvent(e);
        home.className += "active";
        console.log(home.className);
        eventUtil.preventDefault(event);
    })
}

//关闭顶部广告按钮
function closeAdv(){
    var close = getEleById("close-adv");
    eventUtil.addHandler(close,"click",function () {
        getEleById("top-adv").style.display = "none";
        console.log(close);
    });
}

//打开或者关闭菜单列表
function toggleMenu() {
    var option = getEleByClass("option");
    var subMenu = getEleByClass("subMenu");
    eventUtil.addHandler(option[0],"click",function (e) {
        var subMenu1=getEleById("sub-menu1");
        var event = eventUtil.getEvent(e);
        var target =eventUtil.getElement(event);
        target.style.backgroundImage="url('images/li-down.png')";
        toggleClass(subMenu1,"open");
        
    });  
    eventUtil.addHandler(option[1],"click",function (e) {
        var subMenu1=getEleById("sub-menu2");
        toggleClass(subMenu1,"open");
    });  
    eventUtil.addHandler(option[2],"click",function (e) {
        var subMenu1=getEleById("sub-menu3");
        toggleClass(subMenu1,"open");
    });  
    eventUtil.addHandler(option[3],"click",function (e) {
        var subMenu1=getEleById("sub-menu4");
        toggleClass(subMenu1,"open");
    });  
    eventUtil.addHandler(option[4],"click",function (e) {
        var subMenu1=getEleById("sub-menu5");
        toggleClass(subMenu1,"open");
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
    console.log(obj);
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
    console.log(obj);
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  
