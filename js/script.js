window.onload=function () {
    addMenuEvent();
    closeAdv();
}

//关闭顶部广告按钮
function closeAdv(){
    var close = getElement("close-adv");
    eventUtil.addHandler(close,"click",function () {
        getElement("top-adv").style.display = "none";
        console.log(close);
    });
}

//打开或者关闭菜单列表
function addMenuEvent() {
    var element = getElement("menu-list");
    eventUtil.addHandler(element,"click",function (e) {
        var event = eventUtil.getEvent(e);
        var element = eventUtil.getElement(event);
        if(element && element.nodeName.toUpperCase() == "LI"){
            var childNodes = element.childNodes;
            console.log(childNodes);
             for(var i=0;i<childNodes.length;i++){
                 console.log(childNodes[i].nodeType);
                 if(childNodes[i].nodeType == 1){
                     var len =1;
                     for(var n=0;n<childNodes[i].childNodes.length;n++){
                         if(childNodes[i].childNodes[n].nodeType == 1){
                             len += 1;
                         }
                     }
                     console.log("len:" + len);
                     console.log(element.offsetHeight);
                     if(element.offsetHeight == 34){
                        element.style.height = (len * 34) + 'px'; 
                        }else{
                            element.style.height = 34 + 'px'; 
                     }
                 }else{
                     console.log(element.innerHTML);
                 }
             }
            
        }
    });
}
//获取到LI后的操作
function openMenuToggle(element) {
    
}
 


//根据ID获得html元素
function getElement(id) {
    var element = document.getElementById(id);
    return element;
}

//根据class获得html元素集合
function getClassEle(className) {
    var elements = document.getElementsByClassName(className);
    return elements;
}
//根据标签获得html元素集合
function getTagEle(tagName) {
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