
(function(){if(window.jQuery)
var _jQuery=window.jQuery;var jQuery=window.jQuery=function(selector,context){return new jQuery.prototype.init(selector,context);};if(window.$)
var _$=window.$;window.$=jQuery;var quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/;var isSimple=/^.[^:#\[\.]*$/;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(typeof selector=="string"){var match=quickExpr.exec(selector);if(match&&(match[1]||!context)){if(match[1])
selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem)
if(elem.id!=match[3])
return jQuery().find(selector);else{this[0]=elem;this.length=1;return this;}
else
selector=[];}}else
return new jQuery(context).find(selector);}else if(jQuery.isFunction(selector))
return new jQuery(document)[jQuery.fn.ready?"ready":"load"](selector);return this.setArray(selector.constructor==Array&&selector||(selector.jquery||selector.length&&selector!=window&&!selector.nodeType&&selector[0]!=undefined&&selector[0].nodeType)&&jQuery.makeArray(selector)||[selector]);},jquery:"1.2.3",size:function(){return this.length;},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num];},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){var ret=-1;this.each(function(i){if(this==elem)
ret=i;});return ret;},attr:function(name,value,type){var options=name;if(name.constructor==String)
if(value==undefined)
return this.length&&jQuery[type||"attr"](this[0],name)||undefined;else{options={};options[name]=value;}
return this.each(function(i){for(name in options)
jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key=='width'||key=='height')&&parseFloat(value)<0)
value=undefined;return this.attr(key,value,"curCSS");},text:function(text){if(typeof text!="object"&&text!=null)
return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(text));var ret="";jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)
ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0])
jQuery(html,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){var elem=this;while(elem.firstChild)
elem=elem.firstChild;return elem;}).append(this);return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1)
this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1)
this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem);});return this.pushStack(/[^+>] [^+>]/.test(selector)||selector.indexOf("..")>-1?jQuery.unique(elems):elems);},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&&!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement("div");container.appendChild(clone);return jQuery.clean([container.innerHTML])[0];}else
return this.cloneNode(true);});var clone=ret.find("*").andSelf().each(function(){if(this[expando]!=undefined)
this[expando]=null;});if(events===true)
this.find("*").andSelf().each(function(i){if(this.nodeType==3)
return;var events=jQuery.data(this,"events");for(var type in events)
for(var handler in events[type])
jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data);});return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&&jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,this));},not:function(selector){if(selector.constructor==String)
if(isSimple.test(selector))
return this.pushStack(jQuery.multiFilter(selector,this,true));else
selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&&selector[selector.length-1]!==undefined&&!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)<0:this!=selector;});},add:function(selector){return!selector?this:this.pushStack(jQuery.merge(this.get(),selector.constructor==String?jQuery(selector).get():selector.length!=undefined&&(!selector.nodeName||jQuery.nodeName(selector,"form"))?selector:[selector]));},is:function(selector){return selector?jQuery.multiFilter(selector,this).length>0:false;},hasClass:function(selector){return this.is("."+selector);},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,"select")){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type=="select-one";if(index<0)
return null;for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&&!option.attributes.value.specified?option.text:option.value;if(one)
return value;values.push(value);}}
return values;}else
return(this[0].value||"").replace(/\r/g,"");}
return undefined;}
return this.each(function(){if(this.nodeType!=1)
return;if(value.constructor==Array&&/radio|checkbox/.test(this.type))
this.checked=(jQuery.inArray(this.value,value)>=0||jQuery.inArray(this.name,value)>=0);else if(jQuery.nodeName(this,"select")){var values=value.constructor==Array?value:[value];jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,values)>=0||jQuery.inArray(this.text,values)>=0);});if(!values.length)
this.selectedIndex=-1;}else
this.value=value;});},html:function(value){return value==undefined?(this.length?this[0].innerHTML:null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},data:function(key,value){var parts=key.split(".");parts[1]=parts[1]?"."+parts[1]:"";if(value==null){var data=this.triggerHandler("getData"+parts[1]+"!",[parts[0]]);if(data==undefined&&this.length)
data=jQuery.data(this[0],key);return data==null&&parts[1]?this.data(parts[0]):data;}else
return this.trigger("setData"+parts[1]+"!",[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},domManip:function(args,table,reverse,callback){var clone=this.length>1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse)
elems.reverse();}
var obj=this;if(table&&jQuery.nodeName(this,"table")&&jQuery.nodeName(elems[0],"tr"))
obj=this.getElementsByTagName("tbody")[0]||this.appendChild(this.ownerDocument.createElement("tbody"));var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,"script")){scripts=scripts.add(elem);}else{if(elem.nodeType==1)
scripts=scripts.add(jQuery("script",elem).remove());callback.call(obj,elem);}});scripts.each(evalScript);});}};jQuery.prototype.init.prototype=jQuery.prototype;function evalScript(i,elem){if(elem.src)
jQuery.ajax({url:elem.src,async:false,dataType:"script"});else
jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||"");if(elem.parentNode)
elem.parentNode.removeChild(elem);}
jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!="object"&&typeof target!="function")
target={};if(length==1){target=this;i=0;}
for(;i<length;i++)
if((options=arguments[i])!=null)
for(var name in options){if(target===options[name])
continue;if(deep&&options[name]&&typeof options[name]=="object"&&target[name]&&!options[name].nodeType)
target[name]=jQuery.extend(target[name],options[name]);else if(options[name]!=undefined)
target[name]=options[name];}
return target;};var expando="jQuery"+(new Date()).getTime(),uuid=0,windowData={};var exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i;jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)
window.jQuery=_jQuery;return jQuery;},isFunction:function(fn){return!!fn&&typeof fn!="string"&&!fn.nodeName&&fn.constructor!=Array&&/function/i.test(fn+"");},isXMLDoc:function(elem){return elem.documentElement&&!elem.body||elem.tagName&&elem.ownerDocument&&!elem.ownerDocument.body;},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.browser.msie)
script.text=data;else
script.appendChild(document.createTextNode(data));head.appendChild(script);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toUpperCase()==name.toUpperCase();},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)
id=elem[expando]=++uuid;if(name&&!jQuery.cache[id])
jQuery.cache[id]={};if(data!=undefined)
jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name="";for(name in jQuery.cache[id])
break;if(!name)
jQuery.removeData(elem);}}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)
elem.removeAttribute(expando);}
delete jQuery.cache[id];}},each:function(object,callback,args){if(args){if(object.length==undefined){for(var name in object)
if(callback.apply(object[name],args)===false)
break;}else
for(var i=0,length=object.length;i<length;i++)
if(callback.apply(object[i],args)===false)
break;}else{if(object.length==undefined){for(var name in object)
if(callback.call(object[name],name,object[name])===false)
break;}else
for(var i=0,length=object.length,value=object[0];i<length&&callback.call(value,i,value)!==false;value=object[++i]){}}
return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))
value=value.call(elem,i);return value&&value.constructor==Number&&type=="curCSS"&&!exclude.test(name)?value+"px":value;},className:{add:function(elem,classNames){jQuery.each((classNames||"").split(/\s+/),function(i,className){if(elem.nodeType==1&&!jQuery.className.has(elem.className,className))
elem.className+=(elem.className?" ":"")+className;});},remove:function(elem,classNames){if(elem.nodeType==1)
elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(" "):"";},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))>-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
callback.call(elem);for(var name in options)
elem.style[name]=old[name];},css:function(elem,name,force){if(name=="width"||name=="height"){var val,props={position:"absolute",visibility:"hidden",display:"block"},which=name=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){val=name=="width"?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,"padding"+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,"border"+this+"Width",true))||0;});val-=Math.round(padding+border);}
if(jQuery(elem).is(":visible"))
getWH();else
jQuery.swap(elem,props,getWH);return Math.max(0,val);}
return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret;function color(elem){if(!jQuery.browser.safari)
return false;var ret=document.defaultView.getComputedStyle(elem,null);return!ret||ret.getPropertyValue("color")=="";}
if(name=="opacity"&&jQuery.browser.msie){ret=jQuery.attr(elem.style,"opacity");return ret==""?"1":ret;}
if(jQuery.browser.opera&&name=="display"){var save=elem.style.outline;elem.style.outline="0 solid black";elem.style.outline=save;}
if(name.match(/float/i))
name=styleFloat;if(!force&&elem.style&&elem.style[name])
ret=elem.style[name];else if(document.defaultView&&document.defaultView.getComputedStyle){if(name.match(/float/i))
name="float";name=name.replace(/([A-Z])/g,"-$1").toLowerCase();var getComputedStyle=document.defaultView.getComputedStyle(elem,null);if(getComputedStyle&&!color(elem))
ret=getComputedStyle.getPropertyValue(name);else{var swap=[],stack=[];for(var a=elem;a&&color(a);a=a.parentNode)
stack.unshift(a);for(var i=0;i<stack.length;i++)
if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display="block";}
ret=name=="display"&&swap[stack.length-1]!=null?"none":(getComputedStyle&&getComputedStyle.getPropertyValue(name))||"";for(var i=0;i<swap.length;i++)
if(swap[i]!=null)
stack[i].style.display=swap[i];}
if(name=="opacity"&&ret=="")
ret="1";}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&&/^\d/.test(ret)){var style=elem.style.left,runtimeStyle=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;elem.style.left=ret||0;ret=elem.style.pixelLeft+"px";elem.style.left=style;elem.runtimeStyle.left=runtimeStyle;}}
return ret;},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement=='undefined')
context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;jQuery.each(elems,function(i,elem){if(!elem)
return;if(elem.constructor==Number)
elem=elem.toString();if(typeof elem=="string"){elem=elem.replace(/(<(\w+)[^>]*?)\/>/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement("div");var wrap=!tags.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!tags.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||tags.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!tags.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!tags.indexOf("<td")||!tags.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!tags.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||jQuery.browser.msie&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)
div=div.lastChild;if(jQuery.browser.msie){var tbody=!tags.indexOf("<table")&&tags.indexOf("<tbody")<0?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&tags.indexOf("<tbody")<0?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)
if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)
tbody[j].parentNode.removeChild(tbody[j]);if(/^\s/.test(elem))
div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);}
elem=jQuery.makeArray(div.childNodes);}
if(elem.length===0&&(!jQuery.nodeName(elem,"form")&&!jQuery.nodeName(elem,"select")))
return;if(elem[0]==undefined||jQuery.nodeName(elem,"form")||elem.options)
ret.push(elem);else
ret=jQuery.merge(ret,elem);});return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)
return undefined;var fix=jQuery.isXMLDoc(elem)?{}:jQuery.props;if(name=="selected"&&jQuery.browser.safari)
elem.parentNode.selectedIndex;if(fix[name]){if(value!=undefined)
elem[fix[name]]=value;return elem[fix[name]];}else if(jQuery.browser.msie&&name=="style")
return jQuery.attr(elem.style,"cssText",value);else if(value==undefined&&jQuery.browser.msie&&jQuery.nodeName(elem,"form")&&(name=="action"||name=="method"))
return elem.getAttributeNode(name).nodeValue;else if(elem.tagName){if(value!=undefined){if(name=="type"&&jQuery.nodeName(elem,"input")&&elem.parentNode)
throw"type property can't be changed";elem.setAttribute(name,""+value);}
if(jQuery.browser.msie&&/href|src/.test(name)&&!jQuery.isXMLDoc(elem))
return elem.getAttribute(name,2);return elem.getAttribute(name);}else{if(name=="opacity"&&jQuery.browser.msie){if(value!=undefined){elem.zoom=1;elem.filter=(elem.filter||"").replace(/alpha\([^)]*\)/,"")+
(parseFloat(value).toString()=="NaN"?"":"alpha(opacity="+value*100+")");}
return elem.filter&&elem.filter.indexOf("opacity=")>=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100).toString():"";}
name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(value!=undefined)
elem[name]=value;return elem[name];}},trim:function(text){return(text||"").replace(/^\s+|\s+$/g,"");},makeArray:function(array){var ret=[];if(typeof array!="array")
for(var i=0,length=array.length;i<length;i++)
ret.push(array[i]);else
ret=array.slice(0);return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i<length;i++)
if(array[i]==elem)
return i;return-1;},merge:function(first,second){if(jQuery.browser.msie){for(var i=0;second[i];i++)
if(second[i].nodeType!=8)
first.push(second[i]);}else
for(var i=0;second[i];i++)
first.push(second[i]);return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i<length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}
return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i<length;i++)
if(!inv&&callback(elems[i],i)||inv&&!callback(elems[i],i))
ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i<length;i++){var value=callback(elems[i],i);if(value!==null&&value!=undefined){if(value.constructor!=Array)
value=[value];ret=ret.concat(value);}}
return ret;}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?"styleFloat":"cssFloat";jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode=="CSS1Compat",props:{"for":"htmlFor","class":"className","float":styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,innerHTML:"innerHTML",className:"className",value:"value",disabled:"disabled",checked:"checked",readonly:"readOnly",selected:"selected",maxlength:"maxLength",selectedIndex:"selectedIndex",defaultValue:"defaultValue",tagName:"tagName",nodeName:"nodeName"}});jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,"parentNode");},next:function(elem){return jQuery.nth(elem,2,"nextSibling");},prev:function(elem){return jQuery.nth(elem,2,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&&typeof selector=="string")
ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret));};});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i<length;i++)
jQuery(args[i])[original](this);});};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,"");if(this.nodeType==1)
this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?"remove":"add"](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery("*",this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)
this.parentNode.removeChild(this);}},empty:function(){jQuery(">*",this).remove();while(this.firstChild)
this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});jQuery.each(["Height","Width"],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&&document.body["client"+name]||jQuery.browser.safari&&window["inner"+name]||document.compatMode=="CSS1Compat"&&document.documentElement["client"+name]||document.body["client"+name]:this[0]==document?Math.max(Math.max(document.body["scroll"+name],document.documentElement["scroll"+name]),Math.max(document.body["offset"+name],document.documentElement["offset"+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+"px");};});var chars=jQuery.browser.safari&&parseInt(jQuery.browser.version)<417?"(?:[\\w*_-]|\\\\.)":"(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",quickChild=new RegExp("^>\\s*("+chars+"+)"),quickID=new RegExp("^("+chars+"+)(#)("+chars+"+)"),quickClass=new RegExp("^([#.]?)("+chars+"*)");jQuery.extend({expr:{"":function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2]);},"#":function(a,i,m){return a.getAttribute("id")==m[2];},":":{lt:function(a,i,m){return i<m[3]-0;},gt:function(a,i,m){return i>m[3]-0;},nth:function(a,i,m){return m[3]-0==i;},eq:function(a,i,m){return m[3]-0==i;},first:function(a,i){return i==0;},last:function(a,i,m,r){return i==r.length-1;},even:function(a,i){return i%2==0;},odd:function(a,i){return i%2;},"first-child":function(a){return a.parentNode.getElementsByTagName("*")[0]==a;},"last-child":function(a){return jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a;},"only-child":function(a){return!jQuery.nth(a.parentNode.lastChild,2,"previousSibling");},parent:function(a){return a.firstChild;},empty:function(a){return!a.firstChild;},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||"").indexOf(m[3])>=0;},visible:function(a){return"hidden"!=a.type&&jQuery.css(a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden";},hidden:function(a){return"hidden"==a.type||jQuery.css(a,"display")=="none"||jQuery.css(a,"visibility")=="hidden";},enabled:function(a){return!a.disabled;},disabled:function(a){return a.disabled;},checked:function(a){return a.checked;},selected:function(a){return a.selected||jQuery.attr(a,"selected");},text:function(a){return"text"==a.type;},radio:function(a){return"radio"==a.type;},checkbox:function(a){return"checkbox"==a.type;},file:function(a){return"file"==a.type;},password:function(a){return"password"==a.type;},submit:function(a){return"submit"==a.type;},image:function(a){return"image"==a.type;},reset:function(a){return"reset"==a.type;},button:function(a){return"button"==a.type||jQuery.nodeName(a,"button");},input:function(a){return/input|select|textarea|button/i.test(a.nodeName);},has:function(a,i,m){return jQuery.find(m[3],a).length;},header:function(a){return/h\d/i.test(a.nodeName);},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length;}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,new RegExp("^([:.#]*)("+chars+"+)")],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&&expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,"");cur=not?elems=f.r:jQuery.merge(cur,f.r);}
return cur;},find:function(t,context){if(typeof t!="string")
return[t];if(context&&context.nodeType!=1&&context.nodeType!=9)
return[];context=context||document;var ret=[context],done=[],last,nodeName;while(t&&last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false;var re=quickChild;var m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++)
for(var c=ret[i].firstChild;c;c=c.nextSibling)
if(c.nodeType==1&&(nodeName=="*"||c.nodeName.toUpperCase()==nodeName))
r.push(c);ret=r;t=t.replace(re,"");if(t.indexOf(" ")==0)continue;foundToken=true;}else{re=/^([>+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j<rl;j++){var n=m=="~"||m=="+"?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling)
if(n.nodeType==1){var id=jQuery.data(n);if(m=="~"&&merge[id])break;if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m=="~")merge[id]=true;r.push(n);}
if(m=="+")break;}}
ret=r;t=jQuery.trim(t.replace(re,""));foundToken=true;}}
if(t&&!foundToken){if(!t.indexOf(",")){if(context==ret[0])ret.shift();done=jQuery.merge(done,ret);r=ret=[context];t=" "+t.substr(1,t.length);}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]];}else{re2=quickClass;m=re2.exec(t);}
m[2]=m[2].replace(/\\/g,"");var elem=ret[ret.length-1];if(m[1]=="#"&&elem&&elem.getElementById&&!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&&oid&&typeof oid.id=="string"&&oid.id!=m[2])
oid=jQuery('[@id="'+m[2]+'"]',elem)[0];ret=r=oid&&(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[];}else{for(var i=0;ret[i];i++){var tag=m[1]=="#"&&m[3]?m[3]:m[1]!=""||m[0]==""?"*":m[2];if(tag=="*"&&ret[i].nodeName.toLowerCase()=="object")
tag="param";r=jQuery.merge(r,ret[i].getElementsByTagName(tag));}
if(m[1]==".")
r=jQuery.classFilter(r,m[2]);if(m[1]=="#"){var tmp=[];for(var i=0;r[i];i++)
if(r[i].getAttribute("id")==m[2]){tmp=[r[i]];break;}
r=tmp;}
ret=r;}
t=t.replace(re2,"");}}
if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t);}}
if(t)
ret=[];if(ret&&context==ret[0])
ret.shift();done=jQuery.merge(done,ret);return done;},classFilter:function(r,m,not){m=" "+m+" ";var tmp=[];for(var i=0;r[i];i++){var pass=(" "+r[i].className+" ").indexOf(m)>=0;if(!not&&pass||not&&!pass)
tmp.push(r[i]);}
return tmp;},filter:function(t,r,not){var last;while(t&&t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,"");break;}}
if(!m)
break;if(m[1]==":"&&m[2]=="not")
r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3]);else if(m[1]==".")
r=jQuery.classFilter(r,m[2],not);else if(m[1]=="["){var tmp=[],type=m[3];for(var i=0,rl=r.length;i<rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2]))
z=jQuery.attr(a,m[2])||'';if((type==""&&!!z||type=="="&&z==m[5]||type=="!="&&z!=m[5]||type=="^="&&z&&!z.indexOf(m[5])||type=="$="&&z.substr(z.length-m[5].length)==m[5]||(type=="*="||type=="~=")&&z.indexOf(m[5])>=0)^not)
tmp.push(a);}
r=tmp;}else if(m[1]==":"&&m[2]=="nth-child"){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]=="even"&&"2n"||m[3]=="odd"&&"2n+1"||!/\D/.test(m[3])&&"0n+"+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i<rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling)
if(n.nodeType==1)
n.nodeIndex=c++;merge[id]=true;}
var add=false;if(first==0){if(node.nodeIndex==last)
add=true;}else if((node.nodeIndex-last)%first==0&&(node.nodeIndex-last)/first>=0)
add=true;if(add^not)
tmp.push(node);}
r=tmp;}else{var fn=jQuery.expr[m[1]];if(typeof fn=="object")
fn=fn[m[2]];if(typeof fn=="string")
fn=eval("false||function(a,i){return "+fn+";}");r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r);},not);}}
return{r:r,t:t};},dir:function(elem,dir){var matched=[];var cur=elem[dir];while(cur&&cur!=document){if(cur.nodeType==1)
matched.push(cur);cur=cur[dir];}
return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])
if(cur.nodeType==1&&++num==result)
break;return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&(!elem||n!=elem))
r.push(n);}
return r;}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)
return;if(jQuery.browser.msie&&elem.setInterval!=undefined)
elem=window;if(!handler.guid)
handler.guid=this.guid++;if(data!=undefined){var fn=handler;handler=function(){return fn.apply(this,arguments);};handler.data=data;handler.guid=fn.guid;}
var events=jQuery.data(elem,"events")||jQuery.data(elem,"events",{}),handle=jQuery.data(elem,"handle")||jQuery.data(elem,"handle",function(){var val;if(typeof jQuery=="undefined"||jQuery.event.triggered)
return val;val=jQuery.event.handle.apply(arguments.callee.elem,arguments);return val;});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener)
elem.addEventListener(type,handle,false);else if(elem.attachEvent)
elem.attachEvent("on"+type,handle);}}
handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)
return;var events=jQuery.data(elem,"events"),ret,index;if(events){if(types==undefined||(typeof types=="string"&&types.charAt(0)=="."))
for(var type in events)
this.remove(elem,type+(types||""));else{if(types.type){handler=types.handler;types=types.type;}
jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(".");type=parts[0];if(events[type]){if(handler)
delete events[type][handler.guid];else
for(handler in events[type])
if(!parts[1]||events[type][handler].type==parts[1])
delete events[type][handler];for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener)
elem.removeEventListener(type,jQuery.data(elem,"handle"),false);else if(elem.detachEvent)
elem.detachEvent("on"+type,jQuery.data(elem,"handle"));}
ret=null;delete events[type];}}});}
for(ret in events)break;if(!ret){var handle=jQuery.data(elem,"handle");if(handle)handle.elem=null;jQuery.removeData(elem,"events");jQuery.removeData(elem,"handle");}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data||[]);if(type.indexOf("!")>=0){type=type.slice(0,-1);var exclusive=true;}
if(!elem){if(this.global[type])
jQuery("*").add([window,document]).trigger(type,data);}else{if(elem.nodeType==3||elem.nodeType==8)
return undefined;var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event)
data.unshift(this.fix({type:type,target:elem}));data[0].type=type;if(exclusive)
data[0].exclusive=true;if(jQuery.isFunction(jQuery.data(elem,"handle")))
val=jQuery.data(elem,"handle").apply(elem,data);if(!fn&&elem["on"+type]&&elem["on"+type].apply(elem,data)===false)
val=false;if(event)
data.shift();if(extra&&jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined)
val=ret;}
if(fn&&donative!==false&&val!==false&&!(jQuery.nodeName(elem,'a')&&type=="click")){this.triggered=true;try{elem[type]();}catch(e){}}
this.triggered=false;}
return val;},handle:function(event){var val;event=jQuery.event.fix(event||window.event||{});var parts=event.type.split(".");event.type=parts[0];var handlers=jQuery.data(this,"events")&&jQuery.data(this,"events")[event.type],args=Array.prototype.slice.call(arguments,1);args.unshift(event);for(var j in handlers){var handler=handlers[j];args[0].handler=handler;args[0].data=handler.data;if(!parts[1]&&!event.exclusive||handler.type==parts[1]){var ret=handler.apply(this,args);if(val!==false)
val=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}
if(jQuery.browser.msie)
event.target=event.preventDefault=event.stopPropagation=event.handler=event.data=null;return val;},fix:function(event){var originalEvent=event;event=jQuery.extend({},originalEvent);event.preventDefault=function(){if(originalEvent.preventDefault)
originalEvent.preventDefault();originalEvent.returnValue=false;};event.stopPropagation=function(){if(originalEvent.stopPropagation)
originalEvent.stopPropagation();originalEvent.cancelBubble=true;};if(!event.target)
event.target=event.srcElement||document;if(event.target.nodeType==3)
event.target=originalEvent.target.parentNode;if(!event.relatedTarget&&event.fromElement)
event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&&event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc.clientTop||0);}
if(!event.which&&((event.charCode||event.charCode===0)?event.charCode:event.keyCode))
event.which=event.charCode||event.keyCode;if(!event.metaKey&&event.ctrlKey)
event.metaKey=event.ctrlKey;if(!event.which&&event.button)
event.which=(event.button&1?1:(event.button&2?3:(event.button&4?2:0)));return event;},special:{ready:{setup:function(){bindReady();return;},teardown:function(){return;}},mouseenter:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseover",jQuery.event.special.mouseenter.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseover",jQuery.event.special.mouseenter.handler);return true;},handler:function(event){if(withinElement(event,this))return true;arguments[0].type="mouseenter";return jQuery.event.handle.apply(this,arguments);}},mouseleave:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind("mouseout",jQuery.event.special.mouseleave.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind("mouseout",jQuery.event.special.mouseleave.handler);return true;},handler:function(event){if(withinElement(event,this))return true;arguments[0].type="mouseleave";return jQuery.event.handle.apply(this,arguments);}}}};jQuery.fn.extend({bind:function(type,data,fn){return type=="unload"?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&&data);});},one:function(type,data,fn){return this.each(function(){jQuery.event.add(this,type,function(event){jQuery(this).unbind(event);return(fn||data).apply(this,arguments);},fn&&data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn);});},triggerHandler:function(type,data,fn){if(this[0])
return jQuery.event.trigger(type,data,this[0],false,fn);return undefined;},toggle:function(){var args=arguments;return this.click(function(event){this.lastToggle=0==this.lastToggle?1:0;event.preventDefault();return args[this.lastToggle].apply(this,arguments)||false;});},hover:function(fnOver,fnOut){return this.bind('mouseenter',fnOver).bind('mouseleave',fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)
fn.call(document,jQuery);else
jQuery.readyList.push(function(){return fn.call(this,jQuery);});return this;}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.apply(document);});jQuery.readyList=null;}
jQuery(document).triggerHandler("ready");}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener&&!jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",jQuery.ready,false);if(jQuery.browser.msie&&window==top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left");}catch(error){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();if(jQuery.browser.opera)
document.addEventListener("DOMContentLoaded",function(){if(jQuery.isReady)return;for(var i=0;i<document.styleSheets.length;i++)
if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}
jQuery.ready();},false);if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady)return;if(document.readyState!="loaded"&&document.readyState!="complete"){setTimeout(arguments.callee,0);return;}
if(numStyles===undefined)
numStyles=jQuery("style, link[rel=stylesheet]").length;if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}
jQuery.ready();})();}
jQuery.event.add(window,"load",jQuery.ready);}
jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,change,select,"+"submit,keydown,keypress,keyup,error").split(","),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&&parent!=elem)try{parent=parent.parentNode;}catch(error){parent=elem;}
return parent==elem;};jQuery(window).bind("unload",function(){jQuery("*").add(document).unbind();});jQuery.fn.extend({load:function(url,params,callback){if(jQuery.isFunction(url))
return this.bind("load",url);var off=url.indexOf(" ");if(off>=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}
callback=callback||function(){};var type="GET";if(params)
if(jQuery.isFunction(params)){callback=params;params=null;}else{params=jQuery.param(params);type="POST";}
var self=this;jQuery.ajax({url:url,type:type,dataType:"html",data:params,complete:function(res,status){if(status=="success"||status=="notmodified")
self.html(selector?jQuery("<div/>").append(res.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(selector):res.responseText);self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,"form")?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=(new Date).getTime();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}
return jQuery.ajax({type:"GET",url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}
return jQuery.ajax({type:"POST",url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{global:true,type:"GET",timeout:0,contentType:"application/x-www-form-urlencoded",processData:true,async:true,data:null,username:null,password:null,accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){var jsonp,jsre=/=\?(&|$)/g,status,data;s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));if(s.data&&s.processData&&typeof s.data!="string")
s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(s.type.toLowerCase()=="get"){if(!s.url.match(jsre))
s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?";}else if(!s.data||!s.data.match(jsre))
s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json";}
if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){jsonp="jsonp"+jsc++;if(s.data)
s.data=(s.data+"").replace(jsre,"="+jsonp+"$1");s.url=s.url.replace(jsre,"="+jsonp+"$1");s.dataType="script";window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}
if(head)
head.removeChild(script);};}
if(s.dataType=="script"&&s.cache==null)
s.cache=false;if(s.cache===false&&s.type.toLowerCase()=="get"){var ts=(new Date()).getTime();var ret=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+ts+"$2");s.url=ret+((ret==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+ts:"");}
if(s.data&&s.type.toLowerCase()=="get"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null;}
if(s.global&&!jQuery.active++)
jQuery.event.trigger("ajaxStart");if((!s.url.indexOf("http")||!s.url.indexOf("//"))&&s.dataType=="script"&&s.type.toLowerCase()=="get"){var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src=s.url;if(s.scriptCharset)
script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;success();complete();head.removeChild(script);}};}
head.appendChild(script);return undefined;}
var requestDone=false;var xml=window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();xml.open(s.type,s.url,s.async,s.username,s.password);try{if(s.data)
xml.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)
xml.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");xml.setRequestHeader("X-Requested-With","XMLHttpRequest");xml.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default);}catch(e){}
if(s.beforeSend)
s.beforeSend(xml);if(s.global)
jQuery.event.trigger("ajaxSend",[xml,s]);var onreadystatechange=function(isTimeout){if(!requestDone&&xml&&(xml.readyState==4||isTimeout=="timeout")){requestDone=true;if(ival){clearInterval(ival);ival=null;}
status=isTimeout=="timeout"&&"timeout"||!jQuery.httpSuccess(xml)&&"error"||s.ifModified&&jQuery.httpNotModified(xml,s.url)&&"notmodified"||"success";if(status=="success"){try{data=jQuery.httpData(xml,s.dataType);}catch(e){status="parsererror";}}
if(status=="success"){var modRes;try{modRes=xml.getResponseHeader("Last-Modified");}catch(e){}
if(s.ifModified&&modRes)
jQuery.lastModified[s.url]=modRes;if(!jsonp)
success();}else
jQuery.handleError(s,xml,status);complete();if(s.async)
xml=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout>0)
setTimeout(function(){if(xml){xml.abort();if(!requestDone)
onreadystatechange("timeout");}},s.timeout);}
try{xml.send(s.data);}catch(e){jQuery.handleError(s,xml,null,e);}
if(!s.async)
onreadystatechange();function success(){if(s.success)
s.success(data,status);if(s.global)
jQuery.event.trigger("ajaxSuccess",[xml,s]);}
function complete(){if(s.complete)
s.complete(xml,status);if(s.global)
jQuery.event.trigger("ajaxComplete",[xml,s]);if(s.global&&!--jQuery.active)
jQuery.event.trigger("ajaxStop");}
return xml;},handleError:function(s,xml,status,e){if(s.error)s.error(xml,status,e);if(s.global)
jQuery.event.trigger("ajaxError",[xml,s,e]);},active:0,httpSuccess:function(r){try{return!r.status&&location.protocol=="file:"||(r.status>=200&&r.status<300)||r.status==304||r.status==1223||jQuery.browser.safari&&r.status==undefined;}catch(e){}
return false;},httpNotModified:function(xml,url){try{var xmlRes=xml.getResponseHeader("Last-Modified");return xml.status==304||xmlRes==jQuery.lastModified[url]||jQuery.browser.safari&&xml.status==undefined;}catch(e){}
return false;},httpData:function(r,type){var ct=r.getResponseHeader("content-type");var xml=type=="xml"||!type&&ct&&ct.indexOf("xml")>=0;var data=xml?r.responseXML:r.responseText;if(xml&&data.documentElement.tagName=="parsererror")
throw"parsererror";if(type=="script")
jQuery.globalEval(data);if(type=="json")
data=eval("("+data+")");return data;},param:function(a){var s=[];if(a.constructor==Array||a.jquery)
jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+"="+encodeURIComponent(this.value));});else
for(var j in a)
if(a[j]&&a[j].constructor==Array)
jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+"="+encodeURIComponent(this));});else
s.push(encodeURIComponent(j)+"="+encodeURIComponent(a[j]));return s.join("&").replace(/%20/g,"+");}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:"show",width:"show",opacity:"show"},speed,callback):this.filter(":hidden").each(function(){this.style.display=this.oldblock||"";if(jQuery.css(this,"display")=="none"){var elem=jQuery("<"+this.tagName+" />").appendTo("body");this.style.display=elem.css("display");if(this.style.display=="none")
this.style.display="block";elem.remove();}}).end();},hide:function(speed,callback){return speed?this.animate({height:"hide",width:"hide",opacity:"hide"},speed,callback):this.filter(":visible").each(function(){this.oldblock=this.oldblock||jQuery.css(this,"display");this.style.display="none";}).end();},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&&jQuery.isFunction(fn2)?this._toggle(fn,fn2):fn?this.animate({height:"toggle",width:"toggle",opacity:"toggle"},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(":hidden")?"show":"hide"]();});},slideDown:function(speed,callback){return this.animate({height:"show"},speed,callback);},slideUp:function(speed,callback){return this.animate({height:"hide"},speed,callback);},slideToggle:function(speed,callback){return this.animate({height:"toggle"},speed,callback);},fadeIn:function(speed,callback){return this.animate({opacity:"show"},speed,callback);},fadeOut:function(speed,callback){return this.animate({opacity:"hide"},speed,callback);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?"each":"queue"](function(){if(this.nodeType!=1)
return false;var opt=jQuery.extend({},optall);var hidden=jQuery(this).is(":hidden"),self=this;for(var p in prop){if(prop[p]=="hide"&&hidden||prop[p]=="show"&&!hidden)
return jQuery.isFunction(opt.complete)&&opt.complete.apply(this);if(p=="height"||p=="width"){opt.display=jQuery.css(this,"display");opt.overflow=this.style.overflow;}}
if(opt.overflow!=null)
this.style.overflow="hidden";opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))
e[val=="toggle"?hidden?"show":"hide":val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||"px";if(unit!="px"){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}
if(parts[1])
end=((parts[1]=="-="?-1:1)*end)+start;e.custom(start,end,unit);}else
e.custom(start,val,"");}});return true;});},queue:function(type,fn){if(jQuery.isFunction(type)||(type&&type.constructor==Array)){fn=type;type="fx";}
if(!type||(typeof type=="string"&&!fn))
return queue(this[0],type);return this.each(function(){if(fn.constructor==Array)
queue(this,type,fn);else{queue(this,type).push(fn);if(queue(this,type).length==1)
fn.apply(this);}});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)
this.queue([]);this.each(function(){for(var i=timers.length-1;i>=0;i--)
if(timers[i].elem==this){if(gotoEnd)
timers[i](true);timers.splice(i,1);}});if(!gotoEnd)
this.dequeue();return this;}});var queue=function(elem,type,array){if(!elem)
return undefined;type=type||"fx";var q=jQuery.data(elem,type+"queue");if(!q||array)
q=jQuery.data(elem,type+"queue",array?jQuery.makeArray(array):[]);return q;};jQuery.fn.dequeue=function(type){type=type||"fx";return this.each(function(){var q=queue(this,type);q.shift();if(q.length)
q[0].apply(this);});};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&&speed.constructor==Object?speed:{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&easing.constructor!=Function&&easing};opt.duration=(opt.duration&&opt.duration.constructor==Number?opt.duration:{slow:600,fast:200}[opt.duration])||400;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)
jQuery(this).dequeue();if(jQuery.isFunction(opt.old))
opt.old.apply(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)
options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)
this.options.step.apply(this.elem,[this.now,this]);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop=="height"||this.prop=="width")
this.elem.style.display="block";},cur:function(force){if(this.elem[this.prop]!=null&&this.elem.style[this.prop]==null)
return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=(new Date()).getTime();this.start=from;this.end=to;this.unit=unit||this.unit||"px";this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd);}
t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i<timers.length;i++)
if(!timers[i]())
timers.splice(i--,1);if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop=="width"||this.prop=="height")
this.elem.style[this.prop]="1px";jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=(new Date()).getTime();if(gotoEnd||t>this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)
if(this.options.curAnim[i]!==true)
done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")
this.elem.style.display="block";}
if(this.options.hide)
this.elem.style.display="none";if(this.options.hide||this.options.show)
for(var p in this.options.curAnim)
jQuery.attr(this.elem.style,p,this.options.orig[p]);}
if(done&&jQuery.isFunction(this.options.complete))
this.options.complete.apply(this.elem);return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}
return true;}};jQuery.fx.step={scrollLeft:function(fx){fx.elem.scrollLeft=fx.now;},scrollTop:function(fx){fx.elem.scrollTop=fx.now;},opacity:function(fx){jQuery.attr(fx.elem.style,"opacity",fx.now);},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit;}};jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&&parseInt(version)<522&&!/adobeair/i.test(userAgent),fixed=jQuery.css(elem,"position")=="fixed";if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop);}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&&!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&&!safari2)
border(offsetParent);if(!fixed&&jQuery.css(offsetParent,"position")=="fixed")
fixed=true;offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent;}
while(parent&&parent.tagName&&!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(jQuery.css(parent,"display")))
add(-parent.scrollLeft,-parent.scrollTop);if(mozilla&&jQuery.css(parent,"overflow")!="visible")
border(parent);parent=parent.parentNode;}
if((safari2&&(fixed||jQuery.css(offsetChild,"position")=="absolute"))||(mozilla&&jQuery.css(offsetChild,"position")!="absolute"))
add(-doc.body.offsetLeft,-doc.body.offsetTop);if(fixed)
add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));}
results={top:top,left:left};}
function border(elem){add(jQuery.curCSS(elem,"borderLeftWidth",true),jQuery.curCSS(elem,"borderTopWidth",true));}
function add(l,t){left+=parseInt(l)||0;top+=parseInt(t)||0;}
return results;};})();Primer=function(container,width,height){this.container=container
this.width=width
this.height=height
this.actions=[]
this.init()}
Primer.prototype={init:function(){var el=$(this.container).eq(0)
el.append('<canvas width="'+this.width+'" height="'+this.height+'"></canvas>')
var jelc=$('canvas',el)
var elc=jelc[0]
this.context=elc.getContext('2d')
this.root=new Primer.Layer()
this.root.bind(this)
var self=this
jelc.eq(0).mousemove(function(e){e.localX=e.clientX-elc.offsetLeft
e.localY=e.clientY-elc.offsetTop
self.ghost(e)})},addChild:function(child){child.bind(this)
this.root.addChild(child)
this.draw()},draw:function(){this.context.clearRect(0,0,this.width,this.height)
this.root.draw()},ghost:function(e){this.root.ghost(e)
for(var i in this.actions){var action=this.actions[i]
action[0](action[1])}
this.actions=[]}}
Primer.Layer=function(){this.primer=null
this.children=[]
this.calls=[]
this.xVal=0
this.yVal=0
this.visibleVal=true
this.mouseoverVal=function(){}
this.mouseoutVal=function(){}
this.mouseWithin=false}
Primer.Layer.prototype={bind:function(primer){this.primer=primer
for(var i in this.children){this.children[i].bind(primer)}},get context(){return this.primer.context},get x(){return this.xVal},set x(xVal){this.xVal=xVal
if(this.primer)this.primer.draw()},get y(){return this.yVal},set y(yVal){this.yVal=yVal
if(this.primer)this.primer.draw()},get visible(){return this.visibleVal},set visible(visibleVal){this.visibleVal=visibleVal
if(this.primer)this.primer.draw()},addChild:function(child){child.bind(this.primer)
this.children.push(child)
if(this.primer)this.primer.draw()},mouseover:function(fn){this.mouseoverVal=fn},mouseout:function(fn){this.mouseoutVal=fn},set fillStyle(a){this.calls.push(["fillStyle",a])},set strokeStyle(a){this.calls.push(["strokeStyle",a])},beginPath:function(){this.calls.push(["beginPath"])},moveTo:function(a,b){this.calls.push(["moveTo",a,b])},lineTo:function(a,b){this.calls.push(["lineTo",a,b])},fill:function(){this.calls.push(["fill"])},stroke:function(){this.calls.push(["stroke"])},fillRect:function(a,b,c,d){this.calls.push(["fillRect",a,b,c,d])},draw:function(){if(!this.visible){return}
this.context.save()
this.context.translate(this.x,this.y)
for(var i in this.calls){var call=this.calls[i]
switch(call[0]){case"strokeStyle":this.context.strokeStyle=call[1];break
case"fillStyle":this.context.fillStyle=call[1];break
case"fillRect":this.context.fillRect(call[1],call[2],call[3],call[4]);break
case"beginPath":this.context.beginPath();break
case"moveTo":this.context.moveTo(call[1],call[2]);break
case"lineTo":this.context.lineTo(call[1],call[2]);break
case"fill":this.context.fill();break
case"stroke":this.context.stroke();break}}
for(var i in this.children){this.children[i].draw()}
this.context.restore()},ghost:function(e){if(!this.visible){return}
this.context.save()
this.context.translate(this.x,this.y)
for(var i in this.calls){var call=this.calls[i]
switch(call[0]){case"fillRect":this.ghostFillRect(e,call[1],call[2],call[3],call[4]);break
case"beginPath":this.context.beginPath();break
case"moveTo":this.context.moveTo(call[1],call[2]);break
case"lineTo":this.context.lineTo(call[1],call[2]);break
case"fill":this.ghostFill(e);break}}
for(var i in this.children){e.localX-=this.x
e.localY-=this.y
this.children[i].ghost(e)}
this.context.restore()},ghostDetect:function(e){if(this.context.isPointInPath(e.localX-this.x,e.localY-this.y)){if(!this.mouseWithin){this.primer.actions.push([this.mouseoverVal,e])}
this.mouseWithin=true}else{if(this.mouseWithin){this.primer.actions.push([this.mouseoutVal,e])}
this.mouseWithin=false}},ghostFillRect:function(e,x,y,w,h){this.context.beginPath()
this.context.moveTo(x,y)
this.context.lineTo(x+w,y)
this.context.lineTo(x+w,y+h)
this.context.lineTo(x,y+h)
this.context.lineTo(x,y)
this.ghostDetect(e)},ghostFill:function(e){this.ghostDetect(e)}};(function($){$.fn.extend({autocomplete:function(urlOrData,options){var isUrl=typeof urlOrData=="string";options=$.extend({},$.Autocompleter.defaults,{url:isUrl?urlOrData:null,data:isUrl?null:urlOrData,delay:isUrl?$.Autocompleter.defaults.delay:10,max:options&&!options.scroll?10:150},options);options.highlight=options.highlight||function(value){return value;};return this.each(function(){new $.Autocompleter(this,options);});},result:function(handler){return this.bind("result",handler);},search:function(handler){return this.trigger("search",[handler]);},flushCache:function(){return this.trigger("flushCache");},setOptions:function(options){return this.trigger("setOptions",[options]);},unautocomplete:function(){return this.trigger("unautocomplete");}});$.Autocompleter=function(input,options){var KEY={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34};var $input=$(input).attr("autocomplete","off").addClass(options.inputClass);var timeout;var previousValue="";var cache=$.Autocompleter.Cache(options);var hasFocus=0;var lastKeyPressCode;var config={mouseDownOnSelect:false};var select=$.Autocompleter.Select(options,input,selectCurrent,config);$input.keydown(function(event){lastKeyPressCode=event.keyCode;switch(event.keyCode){case KEY.UP:event.preventDefault();if(select.visible()){select.prev();}else{onChange(0,true);}
break;case KEY.DOWN:event.preventDefault();if(select.visible()){select.next();}else{onChange(0,true);}
break;case KEY.PAGEUP:event.preventDefault();if(select.visible()){select.pageUp();}else{onChange(0,true);}
break;case KEY.PAGEDOWN:event.preventDefault();if(select.visible()){select.pageDown();}else{onChange(0,true);}
break;case options.multiple&&$.trim(options.multipleSeparator)==","&&KEY.COMMA:case KEY.TAB:case KEY.RETURN:if(selectCurrent()){if(!options.multiple)
$input.blur();event.preventDefault();}
break;case KEY.ESC:select.hide();break;default:clearTimeout(timeout);timeout=setTimeout(onChange,options.delay);break;}}).keypress(function(){}).focus(function(){hasFocus++;}).blur(function(){hasFocus=0;if(!config.mouseDownOnSelect){hideResults();}}).click(function(){if(hasFocus++>1&&!select.visible()){onChange(0,true);}}).bind("search",function(){var fn=(arguments.length>1)?arguments[1]:null;function findValueCallback(q,data){var result;if(data&&data.length){for(var i=0;i<data.length;i++){if(data[i].result.toLowerCase()==q.toLowerCase()){result=data[i];break;}}}
if(typeof fn=="function")fn(result);else $input.trigger("result",result&&[result.data,result.value]);}
$.each(trimWords($input.val()),function(i,value){request(value,findValueCallback,findValueCallback);});}).bind("flushCache",function(){cache.flush();}).bind("setOptions",function(){$.extend(options,arguments[1]);if("data"in arguments[1])
cache.populate();}).bind("unautocomplete",function(){select.unbind();$input.unbind();});function selectCurrent(){var selected=select.selected();if(!selected)
return false;var v=selected.result;previousValue=v;if(options.multiple){var words=trimWords($input.val());if(words.length>1){v=words.slice(0,words.length-1).join(options.multipleSeparator)+options.multipleSeparator+v;}
v+=options.multipleSeparator;}
$input.val(v);hideResultsNow();$input.trigger("result",[selected.data,selected.value]);return true;}
function onChange(crap,skipPrevCheck){if(lastKeyPressCode==KEY.DEL){select.hide();return;}
var currentValue=$input.val();if(!skipPrevCheck&&currentValue==previousValue)
return;previousValue=currentValue;currentValue=lastWord(currentValue);if(currentValue.length>=options.minChars){$input.addClass(options.loadingClass);if(!options.matchCase)
currentValue=currentValue.toLowerCase();request(currentValue,receiveData,hideResultsNow);}else{stopLoading();select.hide();}};function trimWords(value){if(!value){return[""];}
var words=value.split($.trim(options.multipleSeparator));var result=[];$.each(words,function(i,value){if($.trim(value))
result[i]=$.trim(value);});return result;}
function lastWord(value){if(!options.multiple)
return value;var words=trimWords(value);return words[words.length-1];}
function autoFill(q,sValue){if(options.autoFill&&(lastWord($input.val()).toLowerCase()==q.toLowerCase())&&lastKeyPressCode!=8){$input.val($input.val()+sValue.substring(lastWord(previousValue).length));$.Autocompleter.Selection(input,previousValue.length,previousValue.length+sValue.length);}};function hideResults(){clearTimeout(timeout);timeout=setTimeout(hideResultsNow,200);};function hideResultsNow(){select.hide();clearTimeout(timeout);stopLoading();if(options.mustMatch){$input.search(function(result){if(!result)$input.val("");});}};function receiveData(q,data){if(data&&data.length&&hasFocus){stopLoading();select.display(data,q);autoFill(q,data[0].value);select.show();}else{hideResultsNow();}};function request(term,success,failure){if(!options.matchCase)
term=term.toLowerCase();var data=cache.load(term);if(data&&data.length){success(term,data);}else if((typeof options.url=="string")&&(options.url.length>0)){var extraParams={};$.each(options.extraParams,function(key,param){extraParams[key]=typeof param=="function"?param():param;});$.ajax({mode:"abort",port:"autocomplete"+input.name,dataType:options.dataType,url:options.url,data:$.extend({q:lastWord(term),limit:options.max},extraParams),success:function(data){var parsed=options.parse&&options.parse(data)||parse(data);cache.add(term,parsed);success(term,parsed);}});}else{failure(term);}};function parse(data){var parsed=[];var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[0],result:options.formatResult&&options.formatResult(row,row[0])||row[0]};}}
return parsed;};function stopLoading(){$input.removeClass(options.loadingClass);};};$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){return row[0];},autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>");},scroll:true,scrollHeight:180,attachTo:'body'};$.Autocompleter.Cache=function(options){var data={};var length=0;function matchSubset(s,sub){if(!options.matchCase)
s=s.toLowerCase();var i=s.indexOf(sub);if(i==-1)return false;return i==0||options.matchContains;};function add(q,value){if(length>options.cacheLength){flush();}
if(!data[q]){length++;}
data[q]=value;}
function populate(){if(!options.data)return false;var stMatchSets={},nullData=0;if(!options.url)options.cacheLength=1;stMatchSets[""]=[];for(var i=0,ol=options.data.length;i<ol;i++){var rawValue=options.data[i];rawValue=(typeof rawValue=="string")?[rawValue]:rawValue;var value=options.formatItem(rawValue,i+1,options.data.length);if(value===false)
continue;var firstChar=value.charAt(0).toLowerCase();if(!stMatchSets[firstChar])
stMatchSets[firstChar]=[];var row={value:value,data:rawValue,result:options.formatResult&&options.formatResult(rawValue)||value};stMatchSets[firstChar].push(row);if(nullData++<options.max){stMatchSets[""].push(row);}};$.each(stMatchSets,function(i,value){options.cacheLength++;add(i,value);});}
setTimeout(populate,25);function flush(){data={};length=0;}
return{flush:flush,add:add,populate:populate,load:function(q){if(!options.cacheLength||!length)
return null;if(!options.url&&options.matchContains){var csub=[];for(var k in data){if(k.length>0){var c=data[k];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub.push(x);}});}}
return csub;}else
if(data[q]){return data[q];}else
if(options.matchSubset){for(var i=q.length-1;i>=options.minChars;i--){var c=data[q.substr(0,i)];if(c){var csub=[];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub[csub.length]=x;}});return csub;}}}
return null;}};};$.Autocompleter.Select=function(options,input,select,config){var CLASSES={ACTIVE:"ac_over"};var listItems,active=-1,data,term="",needsInit=true,element,list;function init(){if(!needsInit)
return;element=$("<div/>").hide().addClass(options.resultsClass).css("position","absolute").appendTo(options.attachTo);list=$("<ul>").appendTo(element).mouseover(function(event){if(target(event).nodeName&&target(event).nodeName.toUpperCase()=='LI'){active=$("li",list).removeClass(CLASSES.ACTIVE).index(target(event));$(target(event)).addClass(CLASSES.ACTIVE);}}).click(function(event){$(target(event)).addClass(CLASSES.ACTIVE);select();input.focus();return false;}).mousedown(function(){config.mouseDownOnSelect=true;}).mouseup(function(){config.mouseDownOnSelect=false;});if(options.width>0)
element.css("width",options.width);needsInit=false;}
function target(event){var element=event.target;while(element&&element.tagName!="LI")
element=element.parentNode;if(!element)
return[];return element;}
function moveSelect(step){listItems.slice(active,active+1).removeClass();movePosition(step);var activeItem=listItems.slice(active,active+1).addClass(CLASSES.ACTIVE);if(options.scroll){var offset=0;listItems.slice(0,active).each(function(){offset+=this.offsetHeight;});if((offset+activeItem[0].offsetHeight-list.scrollTop())>list[0].clientHeight){list.scrollTop(offset+activeItem[0].offsetHeight-list.innerHeight());}else if(offset<list.scrollTop()){list.scrollTop(offset);}}};function movePosition(step){active+=step;if(active<0){active=listItems.size()-1;}else if(active>=listItems.size()){active=0;}}
function limitNumberOfItems(available){return options.max&&options.max<available?options.max:available;}
function fillList(){list.empty();var max=limitNumberOfItems(data.length);for(var i=0;i<max;i++){if(!data[i])
continue;var formatted=options.formatItem(data[i].data,i+1,max,data[i].value,term);if(formatted===false)
continue;var li=$("<li>").html(options.highlight(formatted,term)).addClass(i%2==0?"ac_event":"ac_odd").appendTo(list)[0];$.data(li,"ac_data",data[i]);}
listItems=list.find("li");if(options.selectFirst){listItems.slice(0,1).addClass(CLASSES.ACTIVE);active=0;}
list.bgiframe();}
return{display:function(d,q){init();data=d;term=q;fillList();},next:function(){moveSelect(1);},prev:function(){moveSelect(-1);},pageUp:function(){if(active!=0&&active-8<0){moveSelect(-active);}else{moveSelect(-8);}},pageDown:function(){if(active!=listItems.size()-1&&active+8>listItems.size()){moveSelect(listItems.size()-1-active);}else{moveSelect(8);}},hide:function(){element&&element.hide();active=-1;},visible:function(){return element&&element.is(":visible");},current:function(){return this.visible()&&(listItems.filter("."+CLASSES.ACTIVE)[0]||options.selectFirst&&listItems[0]);},show:function(){var offset=$(input).offset();element.css({width:typeof options.width=="string"||options.width>0?options.width:$(input).width(),top:offset.top+input.offsetHeight,left:offset.left}).show();if(options.scroll){list.scrollTop(0);list.css({maxHeight:options.scrollHeight,overflow:'auto'});if($.browser.msie&&typeof document.body.style.maxHeight==="undefined"){var listHeight=0;listItems.each(function(){listHeight+=this.offsetHeight;});var scrollbarsVisible=listHeight>options.scrollHeight;list.css('height',scrollbarsVisible?options.scrollHeight:listHeight);if(!scrollbarsVisible){listItems.width(list.width()-parseInt(listItems.css("padding-left"))-parseInt(listItems.css("padding-right")));}}}},selected:function(){var selected=listItems&&listItems.filter("."+CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);return selected&&selected.length&&$.data(selected[0],"ac_data");},unbind:function(){element&&element.remove();}};};$.Autocompleter.Selection=function(field,start,end){if(field.createTextRange){var selRange=field.createTextRange();selRange.collapse(true);selRange.moveStart("character",start);selRange.moveEnd("character",end);selRange.select();}else if(field.setSelectionRange){field.setSelectionRange(start,end);}else{if(field.selectionStart){field.selectionStart=start;field.selectionEnd=end;}}
field.focus();};})(jQuery);(function($){$.fn.bgIframe=$.fn.bgiframe=function(s){if($.browser.msie&&/6.0/.test(navigator.userAgent)){s=$.extend({top:'auto',left:'auto',width:'auto',height:'auto',opacity:true,src:'javascript:false;'},s||{});var prop=function(n){return n&&n.constructor==Number?n+'px':n;},html='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+s.src+'"'+'style="display:block;position:absolute;z-index:-1;'+
(s.opacity!==false?'filter:Alpha(Opacity=\'0\');':'')+'top:'+(s.top=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+\'px\')':prop(s.top))+';'+'left:'+(s.left=='auto'?'expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+\'px\')':prop(s.left))+';'+'width:'+(s.width=='auto'?'expression(this.parentNode.offsetWidth+\'px\')':prop(s.width))+';'+'height:'+(s.height=='auto'?'expression(this.parentNode.offsetHeight+\'px\')':prop(s.height))+';'+'"/>';return this.each(function(){if($('> iframe.bgiframe',this).length==0)
this.insertBefore(document.createElement(html),this.firstChild);});}
return this;};})(jQuery);jQuery.cookie=function(name,value,options){if(typeof value!='undefined'){options=options||{};if(value===null){value='';options.expires=-1;}
var expires='';if(options.expires&&(typeof options.expires=='number'||options.expires.toUTCString)){var date;if(typeof options.expires=='number'){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000));}else{date=options.expires;}
expires='; expires='+date.toUTCString();}
var path=options.path?'; path='+(options.path):'';var domain=options.domain?'; domain='+(options.domain):'';var secure=options.secure?'; secure':'';document.cookie=[name,'=',encodeURIComponent(value),expires,path,domain,secure].join('');}else{var cookieValue=null;if(document.cookie&&document.cookie!=''){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+'=')){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break;}}}
return cookieValue;}};jQuery.fn.corner=function(options){var settings={tl:{radius:8},tr:{radius:8},bl:{radius:8},br:{radius:8},antiAlias:true,autoPad:true,validTags:["div"]};if(options&&typeof(options)!='string')
jQuery.extend(settings,options);return this.each(function(){new curvyObject(settings,this).applyCorners();});};function curvyObject(){this.box=arguments[1];this.settings=arguments[0];this.topContainer=null;this.bottomContainer=null;this.masterCorners=new Array();this.contentDIV=null;var boxHeight=$(this.box).css("height");var boxWidth=$(this.box).css("width");var borderWidth=$(this.box).css("borderTopWidth");var bgImage=$(this.box).css("backgroundImage");var boxPosition=$(this.box).css("position");var boxPaddingTop=$(this.box).css("paddingTop");var boxPaddingBottom=$(this.box).css("paddingBottom");var boxPaddingLeft=$(this.box).css("paddingLeft");var boxPaddingRight=$(this.box).css("paddingRight");this.boxPaddingTop=strip_px(boxPaddingTop);this.boxPaddingBottom=strip_px(boxPaddingBottom);this.boxPaddingLeft=strip_px(boxPaddingLeft);this.boxPaddingRight=strip_px(boxPaddingRight);this.borderColour=format_colour($(this.box).css("borderTopColor"));this.boxColour=format_colour($(this.box).css("backgroundColor"));this.boxHeight=parseInt(((boxHeight!=""&&boxHeight!="auto"&&boxHeight.indexOf("%")==-1)?boxHeight.substring(0,boxHeight.indexOf("px")):this.box.scrollHeight));this.boxWidth=parseInt(((boxWidth!=""&&boxWidth!="auto"&&boxWidth.indexOf("%")==-1)?boxWidth.substring(0,boxWidth.indexOf("px")):this.box.scrollWidth));this.borderWidth=parseInt(((borderWidth!=""&&borderWidth.indexOf("px")!==-1)?borderWidth.slice(0,borderWidth.indexOf("px")):0));this.borderString=this.borderWidth+"px"+" solid "+this.borderColour;this.bgImage=((bgImage!="none")?bgImage:"");if(this.bgImage=="initial")this.bgImage="";this.boxContent=this.box.innerHTML;if(boxPosition!="absolute")$(this.box).css("position","relative");$(this.box).css("padding","0px !important");if(($.browser.msie&&$.browser.version==6)&&boxWidth=="auto"&&boxHeight=="auto")$(this.box).css("width","100%");if(($.browser.msie)){$(this.box).css("zoom","1");$(this.box+" *").css("zoom","normal");}
if(this.settings.autoPad==true&&(this.boxPaddingTop>0||this.boxPaddingBottom>0||this.boxPaddingLeft>0||this.boxPaddingRight>0))
this.box.innerHTML="";this.applyCorners=function(){for(var t=0;t<2;t++){switch(t){case 0:if(this.settings.tl||this.settings.tr){var newMainContainer=document.createElement("DIV");var topMaxRadius=Math.max(this.settings.tl?this.settings.tl.radius:0,this.settings.tr?this.settings.tr.radius:0);$(newMainContainer).css({width:"100%","font-size":"1px",overflow:"hidden",position:"absolute","padding-left":this.borderWidth,"padding-right":this.borderWidth,height:topMaxRadius+"px",top:0-topMaxRadius+"px",left:0-this.borderWidth+"px"});this.topContainer=this.box.appendChild(newMainContainer);};break;case 1:if(this.settings.bl||this.settings.br){var newMainContainer=document.createElement("DIV");var botMaxRadius=Math.max(this.settings.bl?this.settings.bl.radius:0,this.settings.br?this.settings.br.radius:0);$(newMainContainer).css({width:"100%","font-size":"1px",overflow:"hidden",position:"absolute","padding-left":this.borderWidth,"padding-right":this.borderWidth,height:botMaxRadius,bottom:0-botMaxRadius+"px",left:0-this.borderWidth+"px"});this.bottomContainer=this.box.appendChild(newMainContainer);};break;};};if(this.settings.autoPad==true&&(this.boxPaddingTop>0||this.boxPaddingBottom>0||this.boxPaddingLeft>0||this.boxPaddingRight>0)){var contentContainer=document.createElement("DIV");$(contentContainer).css("position","relative").html(this.boxContent).addClass="autoPadDiv";var topPadding=Math.abs(topMaxRadius-this.boxPaddingTop);var botPadding=Math.abs(botMaxRadius-this.boxPaddingBottom);if(topMaxRadius<this.boxPaddingTop)
$(contentContainer).css("padding-top",topPadding);else
$(contentContainer).css("padding-top",this.boxPaddingTop);if(botMaxRadius<this.boxPaddingBottom)
$(contentContainer).css("padding-bottom",botPadding);else
$(contentContainer).css("padding-bottom",this.boxPaddingBottom);$(contentContainer).css({"padding-left":this.boxPaddingLeft,"padding-right":this.boxPaddingRight});this.contentDIV=this.box.appendChild(contentContainer);};if(this.topContainer)$(this.box).css("border-top",0);if(this.bottomContainer)$(this.box).css("border-bottom",0);var corners=["tr","tl","br","bl"];for(var i in corners){if(i>-1<4){var cc=corners[i];if(!this.settings[cc]){if(((cc=="tr"||cc=="tl")&&this.topContainer!=null)||((cc=="br"||cc=="bl")&&this.bottomContainer!=null)){var newCorner=document.createElement("DIV");$(newCorner).css({position:"relative","font-size":"1px",overflow:"hidden"});if(this.bgImage=="")
$(newCorner).css("background-color",this.boxColour);else
$(newCorner).css("background-image",this.bgImage).css("background-color",this.boxColour);;switch(cc)
{case"tl":$(newCorner).css({height:topMaxRadius-this.borderWidth,"margin-right":this.settings.tr.radius-(this.borderWidth*2),"border-left":this.borderString,"border-top":this.borderString,left:-this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":this.borderWidth+"px 0px"});break;case"tr":$(newCorner).css({height:topMaxRadius-this.borderWidth,"margin-left":this.settings.tl.radius-(this.borderWidth*2),"border-right":this.borderString,"border-top":this.borderString,left:this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":"-"+(topMaxRadius+this.borderWidth)+"px 0px"});break;case"bl":if(topMaxRadius>0)
$(newCorner).css({height:botMaxRadius-this.borderWidth,"margin-right":this.settings.br.radius-(this.borderWidth*2),"border-left":this.borderString,"border-bottom":this.borderString,left:-this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":"0px -"+($(this.box).height()+topMaxRadius-this.borderWidth+1)+"px"});else
$(newCorner).css({height:botMaxRadius-this.borderWidth,"margin-right":this.settings.br.radius-(this.borderWidth*2),"border-left":this.borderString,"border-bottom":this.borderString,left:-this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":"0px -"+($(this.box).height())+"px"});break;case"br":if(topMaxRadius>0)
$(newCorner).css({height:botMaxRadius-this.borderWidth,"margin-left":this.settings.bl.radius-(this.borderWidth*2),"border-right":this.borderString,"border-bottom":this.borderString,left:this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":"-"+this.settings.bl.radius+this.borderWidth+"px -"+($(this.box).height()+topMaxRadius-this.borderWidth+1)+"px"});else
$(newCorner).css({height:botMaxRadius-this.borderWidth,"margin-left":this.settings.bl.radius-(this.borderWidth*2),"border-right":this.borderString,"border-bottom":this.borderString,left:this.borderWidth+"px","background-repeat":$(this.box).css("background-repeat"),"background-position":"-"+this.settings.bl.radius+this.borderWidth+"px -"+($(this.box).height())+"px"});break;};};}else{if(this.masterCorners[this.settings[cc].radius]){var newCorner=this.masterCorners[this.settings[cc].radius].cloneNode(true);}else{var newCorner=document.createElement("DIV");$(newCorner).css({height:this.settings[cc].radius,width:this.settings[cc].radius,position:"absolute","font-size":"1px",overflow:"hidden"});var borderRadius=parseInt(this.settings[cc].radius-this.borderWidth);for(var intx=0,j=this.settings[cc].radius;intx<j;intx++){if((intx+1)>=borderRadius)
var y1=-1;else
var y1=(Math.floor(Math.sqrt(Math.pow(borderRadius,2)-Math.pow((intx+1),2)))-1);if(borderRadius!=j){if((intx)>=borderRadius)
var y2=-1;else
var y2=Math.ceil(Math.sqrt(Math.pow(borderRadius,2)-Math.pow(intx,2)));if((intx+1)>=j)
var y3=-1;else
var y3=(Math.floor(Math.sqrt(Math.pow(j,2)-Math.pow((intx+1),2)))-1);};if((intx)>=j)
var y4=-1;else
var y4=Math.ceil(Math.sqrt(Math.pow(j,2)-Math.pow(intx,2)));if(y1>-1)this.drawPixel(intx,0,this.boxColour,100,(y1+1),newCorner,-1,this.settings[cc].radius);if(borderRadius!=j){for(var inty=(y1+1);inty<y2;inty++){if(this.settings.antiAlias){if(this.bgImage!=""){var borderFract=(pixelFraction(intx,inty,borderRadius)*100);if(borderFract<30){this.drawPixel(intx,inty,this.borderColour,100,1,newCorner,0,this.settings[cc].radius);}else{this.drawPixel(intx,inty,this.borderColour,100,1,newCorner,-1,this.settings[cc].radius);};}else{var pixelcolour=BlendColour(this.boxColour,this.borderColour,pixelFraction(intx,inty,borderRadius));this.drawPixel(intx,inty,pixelcolour,100,1,newCorner,0,this.settings[cc].radius,cc);};};};if(this.settings.antiAlias){if(y3>=y2)
{if(y2==-1)y2=0;this.drawPixel(intx,y2,this.borderColour,100,(y3-y2+1),newCorner,0,0);}}else{if(y3>=y1)
{this.drawPixel(intx,(y1+1),this.borderColour,100,(y3-y1),newCorner,0,0);}};var outsideColour=this.borderColour;}else{var outsideColour=this.boxColour;var y3=y1;};if(this.settings.antiAlias){for(var inty=(y3+1);inty<y4;inty++){this.drawPixel(intx,inty,outsideColour,(pixelFraction(intx,inty,j)*100),1,newCorner,((this.borderWidth>0)?0:-1),this.settings[cc].radius);};};};this.masterCorners[this.settings[cc].radius]=newCorner.cloneNode(true);};if(cc!="br"){for(var t=0,k=newCorner.childNodes.length;t<k;t++){var pixelBar=newCorner.childNodes[t];var pixelBarTop=strip_px($(pixelBar).css("top"));var pixelBarLeft=strip_px($(pixelBar).css("left"));var pixelBarHeight=strip_px($(pixelBar).css("height"));if(cc=="tl"||cc=="bl"){$(pixelBar).css("left",this.settings[cc].radius-pixelBarLeft-1+"px");};if(cc=="tr"||cc=="tl"){$(pixelBar).css("top",this.settings[cc].radius-pixelBarHeight-pixelBarTop+"px");};switch(cc){case"tr":$(pixelBar).css("background-position","-"+Math.abs((this.boxWidth-this.settings[cc].radius+this.borderWidth)+pixelBarLeft)+"px -"+Math.abs(this.settings[cc].radius-pixelBarHeight-pixelBarTop-this.borderWidth)+"px");break;case"tl":$(pixelBar).css("background-position","-"+Math.abs((this.settings[cc].radius-pixelBarLeft-1)-this.borderWidth)+"px -"+Math.abs(this.settings[cc].radius-pixelBarHeight-pixelBarTop-this.borderWidth)+"px");break;case"bl":if(topMaxRadius>0)
$(pixelBar).css("background-position","-"+Math.abs((this.settings[cc].radius-pixelBarLeft-1)-this.borderWidth)+"px -"+Math.abs(($(this.box).height()+topMaxRadius-this.borderWidth+1))+"px");else
$(pixelBar).css("background-position","-"+Math.abs((this.settings[cc].radius-pixelBarLeft-1)-this.borderWidth)+"px -"+Math.abs(($(this.box).height()))+"px");break;};};};};if(newCorner){switch(cc){case"tl":if($(newCorner).css("position")=="absolute")$(newCorner).css("top","0");if($(newCorner).css("position")=="absolute")$(newCorner).css("left","0");if(this.topContainer)this.topContainer.appendChild(newCorner);break;case"tr":if($(newCorner).css("position")=="absolute")$(newCorner).css("top","0");if($(newCorner).css("position")=="absolute")$(newCorner).css("right","0");if(this.topContainer)this.topContainer.appendChild(newCorner);break;case"bl":if($(newCorner).css("position")=="absolute")$(newCorner).css("bottom","0");if(newCorner.style.position=="absolute")$(newCorner).css("left","0");if(this.bottomContainer)this.bottomContainer.appendChild(newCorner);break;case"br":if($(newCorner).css("position")=="absolute")$(newCorner).css("bottom","0");if($(newCorner).css("position")=="absolute")$(newCorner).css("right","0");if(this.bottomContainer)this.bottomContainer.appendChild(newCorner);break;};};};};var radiusDiff=new Array();radiusDiff["t"]=Math.abs(this.settings.tl.radius-this.settings.tr.radius);radiusDiff["b"]=Math.abs(this.settings.bl.radius-this.settings.br.radius);for(z in radiusDiff){if(z=="t"||z=="b"){if(radiusDiff[z]){var smallerCornerType=((this.settings[z+"l"].radius<this.settings[z+"r"].radius)?z+"l":z+"r");var newFiller=document.createElement("DIV");$(newFiller).css({height:radiusDiff[z],width:this.settings[smallerCornerType].radius+"px",position:"absolute","font-size":"1px",overflow:"hidden","background-color":this.boxColour});switch(smallerCornerType)
{case"tl":$(newFiller).css({"bottom":"0","left":"0","border-left":this.borderString});this.topContainer.appendChild(newFiller);break;case"tr":$(newFiller).css({"bottom":"0","right":"0","border-right":this.borderString});this.topContainer.appendChild(newFiller);break;case"bl":$(newFiller).css({"top":"0","left":"0","border-left":this.borderString});this.bottomContainer.appendChild(newFiller);break;case"br":$(newFiller).css({"top":"0","right":"0","border-right":this.borderString});this.bottomContainer.appendChild(newFiller);break;}};var newFillerBar=document.createElement("DIV");$(newFillerBar).css({position:"relative","font-size":"1px",overflow:"hidden","background-color":this.boxColour,"background-image":this.bgImage,"background-repeat":$(this.box).css("background-repeat")});switch(z){case"t":if(this.topContainer){if(this.settings.tl.radius&&this.settings.tr.radius){$(newFillerBar).css({height:topMaxRadius-this.borderWidth+"px","margin-left":this.settings.tl.radius-this.borderWidth+"px","margin-right":this.settings.tr.radius-this.borderWidth+"px","border-top":this.borderString});if(this.bgImage!="")
$(newFillerBar).css("background-position","-"+(topMaxRadius+this.borderWidth)+"px 0px");this.topContainer.appendChild(newFillerBar);};$(this.box).css("background-position","0px -"+(topMaxRadius-this.borderWidth+1)+"px");};break;case"b":if(this.bottomContainer){if(this.settings.bl.radius&&this.settings.br.radius){$(newFillerBar).css({height:botMaxRadius-this.borderWidth+"px","margin-left":this.settings.bl.radius-this.borderWidth+"px","margin-right":this.settings.br.radius-this.borderWidth+"px","border-bottom":this.borderString});if(this.bgImage!=""&&topMaxRadius>0)
$(newFillerBar).css("background-position","-"+(this.settings.bl.radius-this.borderWidth)+"px -"+($(this.box).height()+topMaxRadius-this.borderWidth+1)+"px");else
$(newFillerBar).css("background-position","-"+(this.settings.bl.radius-this.borderWidth)+"px -"+($(this.box).height())+"px");this.bottomContainer.appendChild(newFillerBar);};};break;};};};};this.drawPixel=function(intx,inty,colour,transAmount,height,newCorner,image,cornerRadius){var pixel=document.createElement("DIV");$(pixel).css({height:height,width:"1px",position:"absolute","font-size":"1px",overflow:"hidden"});var topMaxRadius=Math.max(this.settings["tr"].radius,this.settings["tl"].radius);if(image==-1&&this.bgImage!=""){if(topMaxRadius>0)
$(pixel).css("background-position","-"+((this.boxWidth-cornerRadius-this.borderWidth)+intx)+"px -"+(($(this.box).height()+topMaxRadius-this.borderWidth)-inty)+"px");else
$(pixel).css("background-position","-"+((this.boxWidth-cornerRadius-this.borderWidth)+intx)+"px -"+(($(this.box).height())-inty)+"px");$(pixel).css({"background-image":this.bgImage,"background-repeat":$(this.box).css("background-repeat"),"background-color":colour,"background-position":"-"+((this.boxWidth-cornerRadius-this.borderWidth)+intx)+"px -"+(($(this.box).height()+topMaxRadius-this.borderWidth)-inty)+"px"});}
else
{$(pixel).css("background-color",colour);};if(transAmount!=100)
setOpacity(pixel,transAmount);$(pixel).css({top:inty+"px",left:intx+"px"});newCorner.appendChild(pixel);};};function BlendColour(Col1,Col2,Col1Fraction){var red1=parseInt(Col1.substr(1,2),16);var green1=parseInt(Col1.substr(3,2),16);var blue1=parseInt(Col1.substr(5,2),16);var red2=parseInt(Col2.substr(1,2),16);var green2=parseInt(Col2.substr(3,2),16);var blue2=parseInt(Col2.substr(5,2),16);if(Col1Fraction>1||Col1Fraction<0)Col1Fraction=1;var endRed=Math.round((red1*Col1Fraction)+(red2*(1-Col1Fraction)));if(endRed>255)endRed=255;if(endRed<0)endRed=0;var endGreen=Math.round((green1*Col1Fraction)+(green2*(1-Col1Fraction)));if(endGreen>255)endGreen=255;if(endGreen<0)endGreen=0;var endBlue=Math.round((blue1*Col1Fraction)+(blue2*(1-Col1Fraction)));if(endBlue>255)endBlue=255;if(endBlue<0)endBlue=0;return"#"+IntToHex(endRed)+IntToHex(endGreen)+IntToHex(endBlue);};function IntToHex(strNum){base=strNum/16;rem=strNum%16;base=base-(rem/16);baseS=MakeHex(base);remS=MakeHex(rem);return baseS+''+remS;};function MakeHex(x){if((x>=0)&&(x<=9)){return x;}else{switch(x){case 10:return"A";case 11:return"B";case 12:return"C";case 13:return"D";case 14:return"E";case 15:return"F";};};};function pixelFraction(x,y,r){var pixelfraction=0;var xvalues=new Array(1);var yvalues=new Array(1);var point=0;var whatsides="";var intersect=Math.sqrt((Math.pow(r,2)-Math.pow(x,2)));if((intersect>=y)&&(intersect<(y+1))){whatsides="Left";xvalues[point]=0;yvalues[point]=intersect-y;point=point+1;};var intersect=Math.sqrt((Math.pow(r,2)-Math.pow(y+1,2)));if((intersect>=x)&&(intersect<(x+1))){whatsides=whatsides+"Top";xvalues[point]=intersect-x;yvalues[point]=1;point=point+1;};var intersect=Math.sqrt((Math.pow(r,2)-Math.pow(x+1,2)));if((intersect>=y)&&(intersect<(y+1))){whatsides=whatsides+"Right";xvalues[point]=1;yvalues[point]=intersect-y;point=point+1;};var intersect=Math.sqrt((Math.pow(r,2)-Math.pow(y,2)));if((intersect>=x)&&(intersect<(x+1))){whatsides=whatsides+"Bottom";xvalues[point]=intersect-x;yvalues[point]=0;};switch(whatsides){case"LeftRight":pixelfraction=Math.min(yvalues[0],yvalues[1])+((Math.max(yvalues[0],yvalues[1])-Math.min(yvalues[0],yvalues[1]))/2);break;case"TopRight":pixelfraction=1-(((1-xvalues[0])*(1-yvalues[1]))/2);break;case"TopBottom":pixelfraction=Math.min(xvalues[0],xvalues[1])+((Math.max(xvalues[0],xvalues[1])-Math.min(xvalues[0],xvalues[1]))/2);break;case"LeftBottom":pixelfraction=(yvalues[0]*xvalues[1])/2;break;default:pixelfraction=1;};return pixelfraction;};function rgb2Hex(rgbColour){try{var rgbArray=rgb2Array(rgbColour);var red=parseInt(rgbArray[0]);var green=parseInt(rgbArray[1]);var blue=parseInt(rgbArray[2]);var hexColour="#"+IntToHex(red)+IntToHex(green)+IntToHex(blue);}catch(e){alert("There was an error converting the RGB value to Hexadecimal in function rgb2Hex");};return hexColour;};function rgb2Array(rgbColour){var rgbValues=rgbColour.substring(4,rgbColour.indexOf(")"));var rgbArray=rgbValues.split(", ");return rgbArray;};function setOpacity(obj,opacity){opacity=(opacity==100)?99.999:opacity;if($.browser.safari&&obj.tagName!="IFRAME")
{var rgbArray=rgb2Array(obj.style.backgroundColor);var red=parseInt(rgbArray[0]);var green=parseInt(rgbArray[1]);var blue=parseInt(rgbArray[2]);obj.style.backgroundColor="rgba("+red+", "+green+", "+blue+", "+opacity/100+")";}
else if(typeof(obj.style.opacity)!="undefined")
{obj.style.opacity=opacity/100;}
else if(typeof(obj.style.MozOpacity)!="undefined")
{obj.style.MozOpacity=opacity/100;}
else if(typeof(obj.style.filter)!="undefined")
{obj.style.filter="alpha(opacity:"+opacity+")";}
else if(typeof(obj.style.KHTMLOpacity)!="undefined")
{obj.style.KHTMLOpacity=opacity/100;}};function format_colour(colour){var returnColour="#ffffff";if(colour!=""&&colour!="transparent")
{if(colour.substr(0,3)=="rgb")
{returnColour=rgb2Hex(colour);}
else if(colour.length==4)
{returnColour="#"+colour.substring(1,2)+colour.substring(1,2)+colour.substring(2,3)+colour.substring(2,3)+colour.substring(3,4)+colour.substring(3,4);}
else
{returnColour=colour;};};return returnColour;};function strip_px(value){return parseInt(((value!=""&&value.indexOf("px")!==-1)?value.slice(0,value.indexOf("px")):0))}
(function($){$.dimensions={version:'@VERSION'};$.each(['Height','Width'],function(i,name){$.fn['inner'+name]=function(){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';return this.css('display')!='none'?this[0]['client'+name]:num(this,name.toLowerCase())+num(this,'padding'+torl)+num(this,'padding'+borr);};$.fn['outer'+name]=function(options){if(!this[0])return;var torl=name=='Height'?'Top':'Left',borr=name=='Height'?'Bottom':'Right';options=$.extend({margin:false},options||{});var val=this.css('display')!='none'?this[0]['offset'+name]:num(this,name.toLowerCase())
+num(this,'border'+torl+'Width')+num(this,'border'+borr+'Width')
+num(this,'padding'+torl)+num(this,'padding'+borr);return val+(options.margin?(num(this,'margin'+torl)+num(this,'margin'+borr)):0);};});$.each(['Left','Top'],function(i,name){$.fn['scroll'+name]=function(val){if(!this[0])return;return val!=undefined?this.each(function(){this==window||this==document?window.scrollTo(name=='Left'?val:$(window)['scrollLeft'](),name=='Top'?val:$(window)['scrollTop']()):this['scroll'+name]=val;}):this[0]==window||this[0]==document?self[(name=='Left'?'pageXOffset':'pageYOffset')]||$.boxModel&&document.documentElement['scroll'+name]||document.body['scroll'+name]:this[0]['scroll'+name];};});$.fn.extend({position:function(){var left=0,top=0,elem=this[0],offset,parentOffset,offsetParent,results;if(elem){offsetParent=this.offsetParent();offset=this.offset();parentOffset=offsetParent.offset();offset.top-=num(elem,'marginTop');offset.left-=num(elem,'marginLeft');parentOffset.top+=num(offsetParent,'borderTopWidth');parentOffset.left+=num(offsetParent,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left};}
return results;},offsetParent:function(){var offsetParent=this[0].offsetParent;while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&$.css(offsetParent,'position')=='static'))
offsetParent=offsetParent.offsetParent;return $(offsetParent);}});function num(el,prop){return parseInt($.curCSS(el.jquery?el[0]:el,prop,true))||0;};})(jQuery);(function($){$.facebox=function(data,klass){$.facebox.loading()
if(data.ajax)fillFaceboxFromAjax(data.ajax,klass)
else if(data.image)fillFaceboxFromImage(data.image,klass)
else if(data.div)fillFaceboxFromHref(data.div,klass)
else if($.isFunction(data))data.call($)
else $.facebox.reveal(data,klass)}
$.extend($.facebox,{settings:{opacity:0,overlay:true,loadingImage:'/facebox/loading.gif',closeImage:'/facebox/closelabel.gif',imageTypes:['png','jpg','jpeg','gif'],faceboxHtml:'\
    <div id="facebox" style="display:none;"> \
      <div class="popup"> \
        <table> \
          <tbody> \
            <tr> \
              <td class="tl"/><td class="b"/><td class="tr"/> \
            </tr> \
            <tr> \
              <td class="b"/> \
              <td class="body"> \
                <div class="content"> \
                </div> \
                <div class="footer"> \
                  <a href="#" class="close"> \
                    <img src="/facebox/closelabel.gif" title="close" class="close_image" /> \
                  </a> \
                </div> \
              </td> \
              <td class="b"/> \
            </tr> \
            <tr> \
              <td class="bl"/><td class="b"/><td class="br"/> \
            </tr> \
          </tbody> \
        </table> \
      </div> \
    </div>'},loading:function(){init()
if($('#facebox .loading').length==1)return true
showOverlay()
$('#facebox .content').empty()
$('#facebox .body').children().hide().end().append('<div class="loading"><img src="'+$.facebox.settings.loadingImage+'"/></div>')
$('#facebox').css({top:getPageScroll()[1]+(getPageHeight()/10),left:$(window).width()/2-205}).show()
$(document).bind('keydown.facebox',function(e){if(e.keyCode==27)$.facebox.close()
return true})
$(document).trigger('loading.facebox')},reveal:function(data,klass){$(document).trigger('beforeReveal.facebox')
if(klass)$('#facebox .content').addClass(klass)
$('#facebox .content').append(data)
$('#facebox .loading').remove()
$('#facebox .body').children().fadeIn('normal')
$('#facebox').css('left',$(window).width()/2-($('#facebox table').width()/2))
$(document).trigger('reveal.facebox').trigger('afterReveal.facebox')},close:function(){$(document).trigger('close.facebox')
return false}})
$.fn.facebox=function(settings){init(settings)
function clickHandler(){$.facebox.loading(true)
var klass=this.rel.match(/facebox\[?\.(\w+)\]?/)
if(klass)klass=klass[1]
fillFaceboxFromHref(this.href,klass)
return false}
return this.click(clickHandler)}
function init(settings){if($.facebox.settings.inited)return true
else $.facebox.settings.inited=true
$(document).trigger('init.facebox')
makeCompatible()
var imageTypes=$.facebox.settings.imageTypes.join('|')
$.facebox.settings.imageTypesRegexp=new RegExp('\.'+imageTypes+'$','i')
if(settings)$.extend($.facebox.settings,settings)
$('body').append($.facebox.settings.faceboxHtml)
var preload=[new Image(),new Image()]
preload[0].src=$.facebox.settings.closeImage
preload[1].src=$.facebox.settings.loadingImage
$('#facebox').find('.b:first, .bl, .br, .tl, .tr').each(function(){preload.push(new Image())
preload.slice(-1).src=$(this).css('background-image').replace(/url\((.+)\)/,'$1')})
$('#facebox .close').click($.facebox.close)
$('#facebox .close_image').attr('src',$.facebox.settings.closeImage)}
function getPageScroll(){var xScroll,yScroll;if(self.pageYOffset){yScroll=self.pageYOffset;xScroll=self.pageXOffset;}else if(document.documentElement&&document.documentElement.scrollTop){yScroll=document.documentElement.scrollTop;xScroll=document.documentElement.scrollLeft;}else if(document.body){yScroll=document.body.scrollTop;xScroll=document.body.scrollLeft;}
return new Array(xScroll,yScroll)}
function getPageHeight(){var windowHeight
if(self.innerHeight){windowHeight=self.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){windowHeight=document.documentElement.clientHeight;}else if(document.body){windowHeight=document.body.clientHeight;}
return windowHeight}
function makeCompatible(){var $s=$.facebox.settings
$s.loadingImage=$s.loading_image||$s.loadingImage
$s.closeImage=$s.close_image||$s.closeImage
$s.imageTypes=$s.image_types||$s.imageTypes
$s.faceboxHtml=$s.facebox_html||$s.faceboxHtml}
function fillFaceboxFromHref(href,klass){if(href.match(/#/)){var url=window.location.href.split('#')[0]
var target=href.replace(url,'')
$.facebox.reveal($(target).clone().show(),klass)}else if(href.match($.facebox.settings.imageTypesRegexp)){fillFaceboxFromImage(href,klass)}else{fillFaceboxFromAjax(href,klass)}}
function fillFaceboxFromImage(href,klass){var image=new Image()
image.onload=function(){$.facebox.reveal('<div class="image"><img src="'+image.src+'" /></div>',klass)}
image.src=href}
function fillFaceboxFromAjax(href,klass){$.get(href,function(data){$.facebox.reveal(data,klass)})}
function skipOverlay(){return $.facebox.settings.overlay==false||$.facebox.settings.opacity===null}
function showOverlay(){if(skipOverlay())return
if($('facebox_overlay').length==0)
$("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')
$('#facebox_overlay').hide().addClass("facebox_overlayBG").css('opacity',$.facebox.settings.opacity).click(function(){$(document).trigger('close.facebox')}).fadeIn(200)
return false}
function hideOverlay(){if(skipOverlay())return
$('#facebox_overlay').fadeOut(200,function(){$("#facebox_overlay").removeClass("facebox_overlayBG")
$("#facebox_overlay").addClass("facebox_hide")
$("#facebox_overlay").remove()})
return false}
$(document).bind('close.facebox',function(){$(document).unbind('keydown.facebox')
$('#facebox').fadeOut(function(){$('#facebox .content').removeClass().addClass('content')
hideOverlay()
$('#facebox .loading').remove()})})})(jQuery);(function($){$.fn.ajaxSubmit=function(options){if(typeof options=='function')
options={success:options};options=$.extend({url:this.attr('action')||window.location.toString(),type:this.attr('method')||'GET'},options||{});var veto={};$.event.trigger('form.pre.serialize',[this,options,veto]);if(veto.veto)return this;var a=this.formToArray(options.semantic);if(options.data){for(var n in options.data)
a.push({name:n,value:options.data[n]});}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false)return this;$.event.trigger('form.submit.validate',[a,this,options,veto]);if(veto.veto)return this;var q=$.param(a);if(options.type.toUpperCase()=='GET'){options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;options.data=null;}
else
options.data=q;var $form=this,callbacks=[];if(options.resetForm)callbacks.push(function(){$form.resetForm();});if(options.clearForm)callbacks.push(function(){$form.clearForm();});if(!options.dataType&&options.target){var oldSuccess=options.success||function(){};callbacks.push(function(data){if(this.evalScripts)
$(options.target).attr("innerHTML",data).evalScripts().each(oldSuccess,arguments);else
$(options.target).html(data).each(oldSuccess,arguments);});}
else if(options.success)
callbacks.push(options.success);options.success=function(data,status){for(var i=0,max=callbacks.length;i<max;i++)
callbacks[i](data,status,$form);};var files=$('input:file',this).fieldValue();var found=false;for(var j=0;j<files.length;j++)
if(files[j])
found=true;if(options.iframe||found){if($.browser.safari&&options.closeKeepAlive)
$.get(options.closeKeepAlive,fileUpload);else
fileUpload();}
else
$.ajax(options);$.event.trigger('form.submit.notify',[this,options]);return this;function fileUpload(){var form=$form[0];var opts=$.extend({},$.ajaxSettings,options);var id='jqFormIO'+$.fn.ajaxSubmit.counter++;var $io=$('<iframe id="'+id+'" name="'+id+'" />');var io=$io[0];var op8=$.browser.opera&&window.opera.version()<9;if($.browser.msie||op8)io.src='javascript:false;document.write("");';$io.css({position:'absolute',top:'-1000px',left:'-1000px'});var xhr={responseText:null,responseXML:null,status:0,statusText:'n/a',getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){}};var g=opts.global;if(g&&!$.active++)$.event.trigger("ajaxStart");if(g)$.event.trigger("ajaxSend",[xhr,opts]);var cbInvoked=0;var timedOut=0;setTimeout(function(){var encAttr=form.encoding?'encoding':'enctype';var t=$form.attr('target'),a=$form.attr('action');$form.attr({target:id,method:'POST',action:opts.url});form[encAttr]='multipart/form-data';if(opts.timeout)
setTimeout(function(){timedOut=true;cb();},opts.timeout);$io.appendTo('body');io.attachEvent?io.attachEvent('onload',cb):io.addEventListener('load',cb,false);form.submit();$form.attr({action:a,target:t});},10);function cb(){if(cbInvoked++)return;io.detachEvent?io.detachEvent('onload',cb):io.removeEventListener('load',cb,false);var ok=true;try{if(timedOut)throw'timeout';var data,doc;doc=io.contentWindow?io.contentWindow.document:io.contentDocument?io.contentDocument:io.document;xhr.responseText=doc.body?doc.body.innerHTML:null;xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;if(opts.dataType=='json'||opts.dataType=='script'){var ta=doc.getElementsByTagName('textarea')[0];data=ta?ta.value:xhr.responseText;if(opts.dataType=='json')
eval("data = "+data);else
$.globalEval(data);}
else if(opts.dataType=='xml'){data=xhr.responseXML;if(!data&&xhr.responseText!=null)
data=toXml(xhr.responseText);}
else{data=xhr.responseText;}}
catch(e){ok=false;$.handleError(opts,xhr,'error',e);}
if(ok){opts.success(data,'success');if(g)$.event.trigger("ajaxSuccess",[xhr,opts]);}
if(g)$.event.trigger("ajaxComplete",[xhr,opts]);if(g&&!--$.active)$.event.trigger("ajaxStop");if(opts.complete)opts.complete(xhr,ok?'success':'error');setTimeout(function(){$io.remove();xhr.responseXML=null;},100);};function toXml(s,doc){if(window.ActiveXObject){doc=new ActiveXObject('Microsoft.XMLDOM');doc.async='false';doc.loadXML(s);}
else
doc=(new DOMParser()).parseFromString(s,'text/xml');return(doc&&doc.documentElement&&doc.documentElement.tagName!='parsererror')?doc:null;};};};$.fn.ajaxSubmit.counter=0;$.fn.ajaxForm=function(options){return this.ajaxFormUnbind().submit(submitHandler).each(function(){this.formPluginId=$.fn.ajaxForm.counter++;$.fn.ajaxForm.optionHash[this.formPluginId]=options;$(":submit,input:image",this).click(clickHandler);});};$.fn.ajaxForm.counter=1;$.fn.ajaxForm.optionHash={};function clickHandler(e){var $form=this.form;$form.clk=this;if(this.type=='image'){if(e.offsetX!=undefined){$form.clk_x=e.offsetX;$form.clk_y=e.offsetY;}else if(typeof $.fn.offset=='function'){var offset=$(this).offset();$form.clk_x=e.pageX-offset.left;$form.clk_y=e.pageY-offset.top;}else{$form.clk_x=e.pageX-this.offsetLeft;$form.clk_y=e.pageY-this.offsetTop;}}
setTimeout(function(){$form.clk=$form.clk_x=$form.clk_y=null;},10);};function submitHandler(){var id=this.formPluginId;var options=$.fn.ajaxForm.optionHash[id];$(this).ajaxSubmit(options);return false;};$.fn.ajaxFormUnbind=function(){this.unbind('submit',submitHandler);return this.each(function(){$(":submit,input:image",this).unbind('click',clickHandler);});};$.fn.formToArray=function(semantic){var a=[];if(this.length==0)return a;var form=this[0];var els=semantic?form.getElementsByTagName('*'):form.elements;if(!els)return a;for(var i=0,max=els.length;i<max;i++){var el=els[i];var n=el.name;if(!n)continue;if(semantic&&form.clk&&el.type=="image"){if(!el.disabled&&form.clk==el)
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});continue;}
var v=$.fieldValue(el,true);if(v&&v.constructor==Array){for(var j=0,jmax=v.length;j<jmax;j++)
a.push({name:n,value:v[j]});}
else if(v!==null&&typeof v!='undefined')
a.push({name:n,value:v});}
if(!semantic&&form.clk){var inputs=form.getElementsByTagName("input");for(var i=0,max=inputs.length;i<max;i++){var input=inputs[i];var n=input.name;if(n&&!input.disabled&&input.type=="image"&&form.clk==input)
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});}}
return a;};$.fn.formSerialize=function(semantic){return $.param(this.formToArray(semantic));};$.fn.fieldSerialize=function(successful){var a=[];this.each(function(){var n=this.name;if(!n)return;var v=$.fieldValue(this,successful);if(v&&v.constructor==Array){for(var i=0,max=v.length;i<max;i++)
a.push({name:n,value:v[i]});}
else if(v!==null&&typeof v!='undefined')
a.push({name:this.name,value:v});});return $.param(a);};$.fn.fieldValue=function(successful){for(var val=[],i=0,max=this.length;i<max;i++){var el=this[i];var v=$.fieldValue(el,successful);if(v===null||typeof v=='undefined'||(v.constructor==Array&&!v.length))
continue;v.constructor==Array?$.merge(val,v):val.push(v);}
return val;};$.fieldValue=function(el,successful){var n=el.name,t=el.type,tag=el.tagName.toLowerCase();if(typeof successful=='undefined')successful=true;if(successful&&(!n||el.disabled||t=='reset'||t=='button'||(t=='checkbox'||t=='radio')&&!el.checked||(t=='submit'||t=='image')&&el.form&&el.form.clk!=el||tag=='select'&&el.selectedIndex==-1))
return null;if(tag=='select'){var index=el.selectedIndex;if(index<0)return null;var a=[],ops=el.options;var one=(t=='select-one');var max=(one?index+1:ops.length);for(var i=(one?index:0);i<max;i++){var op=ops[i];if(op.selected){var v=$.browser.msie&&!(op.attributes['value'].specified)?op.text:op.value;if(one)return v;a.push(v);}}
return a;}
return el.value;};$.fn.clearForm=function(){return this.each(function(){$('input,select,textarea',this).clearFields();});};$.fn.clearFields=$.fn.clearInputs=function(){return this.each(function(){var t=this.type,tag=this.tagName.toLowerCase();if(t=='text'||t=='password'||tag=='textarea')
this.value='';else if(t=='checkbox'||t=='radio')
this.checked=false;else if(tag=='select')
this.selectedIndex=-1;});};$.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=='function'||(typeof this.reset=='object'&&!this.reset.nodeType))
this.reset();});};$.fn.enable=function(b){if(b==undefined)b=true;return this.each(function(){this.disabled=!b});};$.fn.select=function(select){if(select==undefined)select=true;return this.each(function(){var t=this.type;if(t=='checkbox'||t=='radio')
this.checked=select;else if(this.tagName.toLowerCase()=='option'){var $sel=$(this).parent('select');if(select&&$sel[0]&&$sel[0].type=='select-one'){$sel.find('option').select(false);}
this.selected=select;}});};})(jQuery);(function($){$.hotkeys=function(options){for(key in options)$.hotkey(key,options[key])
return this}
$.hotkey=function(key,value){$.hotkeys.cache[key.charCodeAt(0)-32]=value
return this}
$.hotkeys.cache={}})(jQuery)
jQuery(document).ready(function($){$('a[hotkey]').each(function(){$.hotkey($(this).attr('hotkey'),$(this).attr('href'))})
$(document).bind('keydown.hotkey',function(e){if($(e.target).is(':input'))return
if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return true
var el=$.hotkeys.cache[e.keyCode]
if(el)$.isFunction(el)?el.call(this):window.location=el})});(function($){$.fn.editable=function(target,options){var settings={target:target,name:'value',id:'id',type:'text',width:'auto',height:'auto',event:'click',onblur:'cancel',loadtype:'GET',loadtext:'Loading...',placeholder:'Click to edit',submittype:'post',loaddata:{},submitdata:{}};if(options){$.extend(settings,options);}
var plugin=$.editable.types[settings.type].plugin||function(){};var submit=$.editable.types[settings.type].submit||function(){};var buttons=$.editable.types[settings.type].buttons||$.editable.types['defaults'].buttons;var content=$.editable.types[settings.type].content||$.editable.types['defaults'].content;var element=$.editable.types[settings.type].element||$.editable.types['defaults'].element;var callback=settings.callback||function(){};if(!$.isFunction($(this)[settings.event])){$.fn[settings.event]=function(fn){return fn?this.bind(settings.event,fn):this.trigger(settings.event);}}
$(this).attr('title',settings.tooltip);settings.autowidth='auto'==settings.width;settings.autoheight='auto'==settings.height;return this.each(function(){if(!$.trim($(this).html())){$(this).html(settings.placeholder);}
$(this)[settings.event](function(e){var self=this;if(self.editing){return;}
$(self).css("visibility","hidden");if(settings.width!='none'){settings.width=settings.autowidth?$(self).width():settings.width;}
if(settings.height!='none'){settings.height=settings.autoheight?$(self).height():settings.height;}
$(this).css("visibility","");if($(this).html().toLowerCase().replace(/;/,'')==settings.placeholder.toLowerCase().replace(/;/,'')){$(this).html('');}
self.editing=true;self.revert=$(self).html();$(self).html('');var form=$('<form/>');if(settings.cssclass){if('inherit'==settings.cssclass){form.attr('class',$(self).attr('class'));}else{form.attr('class',settings.cssclass);}}
if(settings.style){if('inherit'==settings.style){form.attr('style',$(self).attr('style'));form.css('display',$(self).css('display'));}else{form.attr('style',settings.style);}}
var input=element.apply(form,[settings,self]);var input_content;if(settings.loadurl){var t=setTimeout(function(){input.disabled=true;content.apply(form,[settings.loadtext,settings,self]);},100);var loaddata={};loaddata[settings.id]=self.id;if($.isFunction(settings.loaddata)){$.extend(loaddata,settings.loaddata.apply(self,[self.revert,settings]));}else{$.extend(loaddata,settings.loaddata);}
$.ajax({type:settings.loadtype,url:settings.loadurl,data:loaddata,async:false,success:function(result){window.clearTimeout(t);input_content=result;input.disabled=false;}});}else if(settings.data){input_content=settings.data;if($.isFunction(settings.data)){input_content=settings.data.apply(self,[self.revert,settings]);}}else{input_content=self.revert;}
content.apply(form,[input_content,settings,self]);input.attr('name',settings.name);buttons.apply(form,[settings,self]);plugin.apply(form,[settings,self]);$(self).append(form);$(':input:visible:enabled:first',form).focus();if(settings.select){input.select();}
input.keydown(function(e){if(e.keyCode==27){input.blur();e.preventDefault();reset();}});var t;if('cancel'==settings.onblur){input.blur(function(e){t=setTimeout(reset,500);});}else if('submit'==settings.onblur){input.blur(function(e){form.submit();});}else if($.isFunction(settings.onblur)){input.blur(function(e){settings.onblur.apply(self,[input.val(),settings]);});}else{input.blur(function(e){});}
form.submit(function(e){if(t){clearTimeout(t);}
e.preventDefault();submit.apply(form,[settings,self]);if($.isFunction(settings.target)){var str=settings.target.apply(self,[input.val(),settings]);$(self).html(str);self.editing=false;callback.apply(self,[self.innerHTML,settings]);if(!$.trim($(self).html())){$(self).html(settings.placeholder);}}else{var submitdata={};submitdata[settings.name]=input.val();submitdata[settings.id]=self.id;if($.isFunction(settings.submitdata)){$.extend(submitdata,settings.submitdata.apply(self,[self.revert,settings]));}else{$.extend(submitdata,settings.submitdata);}
$(self).html(settings.indicator);$.ajax({type:settings.submittype,url:settings.target,data:submitdata,success:function(str){$(self).html(str);self.editing=false;callback.apply(self,[self.innerHTML,settings]);if(!$.trim($(self).html())){$(self).html(settings.placeholder);}}});}
return false;});function reset(){$(self).html(self.revert);self.editing=false;if(!$.trim($(self).html())){$(self).html(settings.placeholder);}}
$(self).bind('reset',reset)});});};$.editable={types:{defaults:{element:function(settings,original){var input=$('<input type="hidden">');$(this).append(input);return(input);},content:function(string,settings,original){$(':input:first',this).val(string);},buttons:function(settings,original){if(settings.submit){var submit=$('<input type="submit">');submit.val(settings.submit);$(this).append(submit);}
if(settings.cancel){var cancel=$('<input type="button">');cancel.val(settings.cancel);$(this).append(cancel);$(cancel).click(function(){$(original).html(original.revert);original.editing=false;});}}},text:{element:function(settings,original){var input=$('<input>');if(settings.width!='none'){input.width(settings.width);}
if(settings.height!='none'){input.height(settings.height);}
input.attr('autocomplete','off');$(this).append(input);return(input);}},textarea:{element:function(settings,original){var textarea=$('<textarea>');if(settings.rows){textarea.attr('rows',settings.rows);}else{textarea.height(settings.height);}
if(settings.cols){textarea.attr('cols',settings.cols);}else{textarea.width(settings.width);}
$(this).append(textarea);return(textarea);}},select:{element:function(settings,original){var select=$('<select>');$(this).append(select);return(select);},content:function(string,settings,original){if(String==string.constructor){eval('var json = '+string);for(var key in json){if(!json.hasOwnProperty(key)){continue;}
if('selected'==key){continue;}
var option=$('<option>').val(key).append(json[key]);$('select',this).append(option);}}
$('select',this).children().each(function(){if($(this).val()==json['selected']){$(this).attr('selected','selected');};});}}},addInputType:function(name,input){$.editable.types[name]=input;}};})(jQuery);(function($){$.extend($.fn,{livequery:function(type,fn,fn2){var self=this,q;if($.isFunction(type))
fn2=fn,fn=type,type=undefined;$.each($.livequery.queries,function(i,query){if(self.selector==query.selector&&self.context==query.context&&type==query.type&&(!fn||fn.$lqguid==query.fn.$lqguid)&&(!fn2||fn2.$lqguid==query.fn2.$lqguid))
return(q=query)&&false;});q=q||new $.livequery(this.selector,this.context,type,fn,fn2);q.stopped=false;$.livequery.run(q.id);return this;},expire:function(type,fn,fn2){var self=this;if($.isFunction(type))
fn2=fn,fn=type,type=undefined;$.each($.livequery.queries,function(i,query){if(self.selector==query.selector&&self.context==query.context&&(!type||type==query.type)&&(!fn||fn.$lqguid==query.fn.$lqguid)&&(!fn2||fn2.$lqguid==query.fn2.$lqguid)&&!this.stopped)
$.livequery.stop(query.id);});return this;}});$.livequery=function(selector,context,type,fn,fn2){this.selector=selector;this.context=context||document;this.type=type;this.fn=fn;this.fn2=fn2;this.elements=[];this.stopped=false;this.id=$.livequery.queries.push(this)-1;fn.$lqguid=fn.$lqguid||$.livequery.guid++;if(fn2)fn2.$lqguid=fn2.$lqguid||$.livequery.guid++;return this;};$.livequery.prototype={stop:function(){var query=this;if(this.type)
this.elements.unbind(this.type,this.fn);else if(this.fn2)
this.elements.each(function(i,el){query.fn2.apply(el);});this.elements=[];this.stopped=true;},run:function(){if(this.stopped)return;var query=this;var oEls=this.elements,els=$(this.selector,this.context),nEls=els.not(oEls);this.elements=els;if(this.type){nEls.bind(this.type,this.fn);if(oEls.length>0)
$.each(oEls,function(i,el){if($.inArray(el,els)<0)
$.event.remove(el,query.type,query.fn);});}
else{nEls.each(function(){query.fn.apply(this);});if(this.fn2&&oEls.length>0)
$.each(oEls,function(i,el){if($.inArray(el,els)<0)
query.fn2.apply(el);});}}};$.extend($.livequery,{guid:0,queries:[],queue:[],running:false,timeout:null,checkQueue:function(){if($.livequery.running&&$.livequery.queue.length){var length=$.livequery.queue.length;while(length--)
$.livequery.queries[$.livequery.queue.shift()].run();}},pause:function(){$.livequery.running=false;},play:function(){$.livequery.running=true;$.livequery.run();},registerPlugin:function(){$.each(arguments,function(i,n){if(!$.fn[n])return;var old=$.fn[n];$.fn[n]=function(){var r=old.apply(this,arguments);$.livequery.run();return r;}});},run:function(id){if(id!=undefined){if($.inArray(id,$.livequery.queue)<0)
$.livequery.queue.push(id);}
else
$.each($.livequery.queries,function(id){if($.inArray(id,$.livequery.queue)<0)
$.livequery.queue.push(id);});if($.livequery.timeout)clearTimeout($.livequery.timeout);$.livequery.timeout=setTimeout($.livequery.checkQueue,20);},stop:function(id){if(id!=undefined)
$.livequery.queries[id].stop();else
$.each($.livequery.queries,function(id){$.livequery.queries[id].stop();});}});$.livequery.registerPlugin('append','prepend','after','before','wrap','attr','removeAttr','addClass','removeClass','toggleClass','empty','remove');$(function(){$.livequery.play();});var init=$.prototype.init;$.prototype.init=function(a,c){var r=init.apply(this,arguments);if(a&&a.selector)
r.context=a.context,r.selector=a.selector;if(typeof a=='string')
r.context=c||document,r.selector=a;return r;};$.prototype.init.prototype=$.prototype;})(jQuery);(function($){$.fn.relatizeDate=function(){return $(this).each(function(){$(this).text($.relatizeDate(this))})}
$.relatizeDate=function(element){return $.relatizeDate.timeAgoInWords(new Date($(element).text()))}
$r=$.relatizeDate
$.extend($.relatizeDate,{shortDays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],days:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],shortMonths:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],strftime:function(date,format){var day=date.getDay(),month=date.getMonth();var hours=date.getHours(),minutes=date.getMinutes();var pad=function(num){var string=num.toString(10);return new Array((2-string.length)+1).join('0')+string};return format.replace(/\%([aAbBcdHImMpSwyY])/g,function(part){switch(part[1]){case'a':return $r.shortDays[day];break;case'A':return $r.days[day];break;case'b':return $r.shortMonths[month];break;case'B':return $r.months[month];break;case'c':return date.toString();break;case'd':return pad(date.getDate());break;case'H':return pad(hours);break;case'I':return pad((hours+12)%12);break;case'm':return pad(month+1);break;case'M':return pad(minutes);break;case'p':return hours>12?'PM':'AM';break;case'S':return pad(date.getSeconds());break;case'w':return day;break;case'y':return pad(date.getFullYear()%100);break;case'Y':return date.getFullYear().toString();break;}})},timeAgoInWords:function(targetDate,includeTime){return $r.distanceOfTimeInWords(targetDate,new Date(),includeTime);},distanceOfTimeInWords:function(fromTime,toTime,includeTime){var delta=parseInt((toTime.getTime()-fromTime.getTime())/1000);if(delta<60){return'less than a minute ago';}else if(delta<120){return'about a minute ago';}else if(delta<(45*60)){return(parseInt(delta/60)).toString()+' minutes ago';}else if(delta<(120*60)){return'about an hour ago';}else if(delta<(24*60*60)){return'about '+(parseInt(delta/3600)).toString()+' hours ago';}else if(delta<(48*60*60)){return'1 day ago';}else{var days=(parseInt(delta/86400)).toString();if(days>5){var fmt='%B %d, %Y'
if(includeTime)fmt+=' %I:%M %p'
return $r.strftime(fromTime,fmt);}else{return days+" days ago"}}}})})(jQuery);(function($){$.fn.spamjax=function(callback,settings){if($.isFunction(settings)){var s=callback,callback=settings,settings=s}
var settings=settings||{}
var options={}
if(!$.facebox)settings.facebox=null
options.complete=function(xhr,ok){callback.call(this,xhr.responseText,ok)}
if(settings.confirmation){options.beforeSubmit=function(){var execute=confirm(settings.confirmation)
if(!execute)return false
if(settings.facebox)$.facebox.loading()}}else if(settings.facebox){options.beforeSubmit=$.facebox.loading}
return $(this).ajaxForm($.extend(settings,options))}})(jQuery);jQuery.fn.truncate=function(max,settings){settings=jQuery.extend({chars:/\s/,trail:["...",""]},settings);var myResults={};var ie=$.browser.msie;function fixIE(o){if(ie){o.style.removeAttribute("filter");}}
return this.each(function(){var $this=jQuery(this);var myStrOrig=$this.html().replace(/\r\n/gim,"");var myStr=myStrOrig;var myRegEx=/<\/?[^<>]*\/?>/gim;var myRegExArray;var myRegExHash={};var myResultsKey=$("*").index(this);while((myRegExArray=myRegEx.exec(myStr))!=null){myRegExHash[myRegExArray.index]=myRegExArray[0];}
myStr=jQuery.trim(myStr.split(myRegEx).join(""));if(myStr.length>max){var c;while(max<myStr.length){c=myStr.charAt(max);if(c.match(settings.chars)){myStr=myStr.substring(0,max);break;}
max--;}
if(myStrOrig.search(myRegEx)!=-1){var endCap=0;for(eachEl in myRegExHash){myStr=[myStr.substring(0,eachEl),myRegExHash[eachEl],myStr.substring(eachEl,myStr.length)].join("");if(eachEl<myStr.length){endCap=myStr.length;}}
$this.html([myStr.substring(0,endCap),myStr.substring(endCap,myStr.length).replace(/<(\w+)[^>]*>.*<\/\1>/gim,"").replace(/<(br|hr|img|input)[^<>]*\/?>/gim,"")].join(""));}else{$this.html(myStr);}
myResults[myResultsKey]=myStrOrig;$this.html(["<div class='truncate_less'>",$this.html(),settings.trail[0],"</div>"].join("")).find(".truncate_show",this).click(function(){if($this.find(".truncate_more").length==0){$this.append(["<div class='truncate_more' style='display: none;'>",myResults[myResultsKey],settings.trail[1],"</div>"].join("")).find(".truncate_hide").click(function(){$this.find(".truncate_more").css("background","#fff").fadeOut("normal",function(){$this.find(".truncate_less").css("background","#fff").fadeIn("normal",function(){fixIE(this);$(this).css("background","none");});fixIE(this);});return false;});}
$this.find(".truncate_less").fadeOut("normal",function(){$this.find(".truncate_more").fadeIn("normal",function(){fixIE(this);});fixIE(this);});jQuery(".truncate_show",$this).click(function(){$this.find(".truncate_less").css("background","#fff").fadeOut("normal",function(){$this.find(".truncate_more").css("background","#fff").fadeIn("normal",function(){fixIE(this);$(this).css("background","none");});fixIE(this);});return false;});return false;});}});};var GitHub={gravatar:function(md5,size){size=size||35
var host=location.protocol=='https:'?'https://secure.gravatar.com':'http://gravatar.com'
var prot=location.protocol=='https:'?'https':'http'
return'<img src="'+host+'/avatar/'+md5+'?s='+size+'&d='+prot+'%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-'+size+'.png" />'},rename_confirmation:function(){return"Read the following before clicking OK:\n\n\
* This may take a few minutes.\n\
* We won't setup any redirects from your old name. This includes repository urls, your profile, any feeds, etc. \
In other words, if you have a popular project, you're probably going to upset a lot of people.\n\
* You'll need to update any .git/config's to point to your new name if you have local copies of your repo(s).\n\n\
Ready to proceed?"}}
Function.prototype.delay=function(time){return setTimeout(this,time)}
$.fn.scrollTo=function(el,speed){if(typeof el=='number'||!el){speed=el
target=this
container='html,body'}else{target=el
container=this}
var offset=$(target).offset().top-30
$(container).animate({scrollTop:offset},speed||1000)
return this}
$.gitbox=function(url,klass){$.facebox(function(){$.get(url,function(data){$.facebox(data,'nopad')
$('#facebox .footer').hide()})})}
$.fn.spin=function(){return this.after('<img src="/images/modules/ajax/indicator.gif" id="spinner"/>')}
$.fn.stopSpin=function(){return this.next().remove()}
$.extend(GitHub,{scrollToHilightedLine:function(){var lines,target=window.location.hash
if(lines=target.match(/^#?(?:L|-)(\d+)$/g)){lines=$.map(lines,function(line){return parseInt(line.replace(/\D/g,''))})
$('#LID'+lines[0]).scrollTo(1)}}})
$(function(){GitHub.scrollToHilightedLine()
$('.jshide').hide()
$('.toggle_link').click(function(){$($(this).attr('href')).toggle()
return false})
$('.hide_alert').click(function(){$('#site_alert').slideUp()
$.cookie('hide_alert','t',{expires:7})
return false})
$('#login_field').focus()
$('#versions_select').change(function(){location.href=this.value})
if($.facebox)$('a[rel*=facebox]').facebox()
if($.fn.truncate){$('.truncate').bind('truncate',function(){$(this).truncate(50,{chars:/.*/})}).trigger('truncate')}
if($.fn.corner)$('.corner').corner()
if($.fn.relatizeDate)$('.relatize').relatizeDate()
$.userAutocomplete=function(){if(!$.fn.autocomplete)return
$(".autocompleter").autocomplete('/users/ajax_search',{formatItem:function(row){row=row[0].split(' ')
return GitHub.gravatar(row[1],24)+' '+row[0]},formatResult:function(row){return row[0].split(' ')[0]}})
$(".autocompleter").result(function(){$(this).css('background','#73DFFF')})
$(".autocompleter").keypress(function(){$(this).css('background','')})}
$.userAutocomplete()});$.ajaxSetup({'beforeSend':function(xhr){xhr.setRequestHeader("Accept","text/javascript")}})
GitHub.highlightLines=function(e){var target,lines
if(e){$('.line').css('background-color','transparent')
target=$(this).attr('rel')
if(e.shiftKey){target=window.location.hash.replace(/-\d+/,'')+'-'+target.replace(/\D/g,'')}
window.location.hash=target}else{target=window.location.hash}
if(lines=target.match(/#?(?:L|-)(\d+)/g)){lines=$.map(lines,function(line){return parseInt(line.replace(/\D/g,''))})
if(lines.length==1)
return $('#LC'+lines[0]).css('background-color','#ffc')
for(var i=lines[0];i<=lines[1];i++)
$('#LC'+i).css('background-color','#ffc')
$('#LC'+lines[0]).scrollTo(1)}
return false}
$(function(){GitHub.highlightLines()
$('.line_numbers span').mousedown(GitHub.highlightLines)});GitHub.Commit={currentBubble:null,dumpEmptyClass:function(){$(this).removeClass('empty')},addEmptyClass:function(){if(!$(this).data('clicked')&&$(this).text()=='0')$(this).addClass('empty')},highlightLine:function(){$(this).parent().css('background','#ffc')},unhighlightLine:function(){if(!$(this).data('clicked'))$(this).parent().css('background','')},jumpToHashFile:function(){if(window.location.hash&&!/diff-\d+/.test(window.location.hash)){var line,hash=window.location.hash
if(position=hash.match(/-P(\d+)/)){hash=hash.replace(position[0],'')
position=position[1]}
var target=$('#toc a:contains("'+hash.replace('#','')+'")')
if(target.length>0){var diff=target.attr('href')
$(diff).scrollTo(1)
if(position){setTimeout(function(){GitHub.Commit.highlightLine.call($(diff+' .cp-'+position))},50)}}}},observeHash:function(){if(window.location.hash!=GitHub.Commit.oldHash){GitHub.Commit.oldHash=window.location.hash
GitHub.Commit.jumpToHashFile()}}}
$(function(){GitHub.Commit.jumpToHashFile()
GitHub.Commit.oldHash=window.location.hash
setInterval(GitHub.Commit.observeHash,50)
var clearHovered=function(){if(GitHub.Commit.hovered){GitHub.Commit.addEmptyClass.call(GitHub.Commit.hovered)
GitHub.Commit.unhighlightLine.call(GitHub.Commit.hovered)
GitHub.Commit.hovered=null}}
$('#files').mouseout(function(e){var bubble=$(e.target)
bubble=bubble.is('.bubble')?bubble:bubble.parent()
if(bubble.is(':not(.faux-bubble)'))clearHovered()})
$('#files').mouseover(function(e){var bubble=$(e.target)
bubble=bubble.is('.bubble')?bubble:bubble.parent()
if(!bubble.is('.bubble'))return
GitHub.Commit.hovered=bubble
if(bubble.is('.empty'))
GitHub.Commit.dumpEmptyClass.call(bubble)
if(bubble.is(':not(.faux-bubble)'))
GitHub.Commit.highlightLine.call(bubble)})
$('#files').click(function(e){var bubble=$(e.target)
bubble=bubble.is('.bubble')?bubble:bubble.parent()
if(!bubble.is('.bubble'))return
bubble.data('clicked',true)
GitHub.currentBubble=bubble
var url=window.location.pathname.replace('commit','comments')
url+='/'+$.trim(bubble.parents('.file').find('.meta .info').text())
if(bubble.is(':not(.faux-bubble)')){var pos=parseInt(bubble.attr('class').match(/cp-(\d+)/)[1])
url+='?position='+pos}
if(pos){var firstLine=parseInt(bubble.parents('tbody').find('.line_numbers:first > a:first').text())
url+='&line='+(firstLine+pos-1)}
$.gitbox(url)})
$(document).bind('close.facebox',function(){if(GitHub.currentBubble){var el=GitHub.currentBubble
$(el).data('clicked',false)
GitHub.Commit.unhighlightLine.call(el)
GitHub.Commit.addEmptyClass.call(el)}})
$('.add_comment').livequery('click',function(){var text=$.trim($('#commit_comment_form textarea').val())
if(text==''){$('#commit_comments .inner').scrollTo('#commit_comment_form')}else{$('.actions :button').attr('disabled',true)
$('.add_comment').spin()
$.post($('#commit_comment_form').attr('action'),{body:text},function(data){$('.no_one').remove()
$('.comment_list .previewed').remove()
$('.comment_list').append('<li>'+data+'</li>')
$('#commit_comment_form textarea').val('')
$('.actions :button').attr('disabled',false).stopSpin()
GitHub.currentBubble.addClass('commented')
var count=GitHub.currentBubble.find('span')
count.text(parseInt(count.text())+1)})}})
$('#preview_comment').livequery('click',function(){$('.actions :button').attr('disabled',true)
$('.add_comment').spin()
var target=$('#commit_comment_form').attr('action').replace('create','preview')
var text='*Comment Preview:* '+$.trim($('#commit_comment_form textarea').val())
$.post(target,{body:text},function(data){$('.no_one').remove()
$('.comment_list .previewed').remove()
$('.comment_list').append('<li class="previewed">'+data+'</li>')
$('.actions :button').attr('disabled',false).stopSpin()})})
$('.delete_comment').click(function(){var self=this
$(this).spin()
$.post(this.href,{'_method':'delete'},function(){$(self).next().remove()
$(self).parents('.comment').hide()})
return false})
$('#add_comment_button').click(function(){var self=this
$(self).spin().attr('disabled',true)
setTimeout(function(){$(self).parents('form').submit()},10)})
$.each(['line','file','all'],function(_,type){var klass=type+'_link'
$('a.'+klass).livequery('click',function(){$('.links a').show()
$('h1 span').hide()
$('span.'+klass).show()
$('a.'+klass).hide()
$('span.'+type+'_header').show()
$('.comment_list').hide()
$('#comments_for_'+type).toggle()
return false})})});GitHub.Commits={elements:[],current:null,selected:function(){return $(this.elements).eq(this.current)},select:function(index){this.current=index
$('.selected').removeClass('selected')
return this.elements.eq(index).addClass('selected')},next:function(){if(this.current!==null){if(this.elements.length-1==this.current)return
var el=this.select(++this.current)
if(el.offset().top-$(window).scrollTop()+50>$(window).height())el.scrollTo(200)}else{this.select(0)}},prev:function(){if(!this.current){this.elements.eq(0).removeClass('selected')
return this.current=null}
var el=this.select(--this.current)
if(el.offset().top-$(window).scrollTop()<0)el.scrollTo(200)},link:function(key){if(GitHub.Commits.current===null)return false
window.location=GitHub.Commits.selected().find('[hotkey='+key+']').attr('href')}}
$(function(){GitHub.Commits.elements=$('.commit')
$.hotkeys({c:function(){GitHub.Commits.link('c')},p:function(){GitHub.Commits.link('p')},t:function(){GitHub.Commits.link('t')},j:function(){GitHub.Commits.next()},k:function(){GitHub.Commits.prev()}})
$('#invite_link > a').click(function(){var url=location.pathname.match(/(.+\/commits)(\/|$)/)[1]+'/invitees'
$.post(url,{},function(invitees){if(invitees.length==0){$('#invitee_box').html("<p>Everyone is already on GitHub!</p>")}else{for(var i in invitees){var html='<li><label><input name="emails[]" value="'+invitees[i][0]+'" type="checkbox" /> '
html+=invitees[i][1]+' <small> - '+invitees[i][0]+'</label></li>'
$('#invitees').append(html)}
$('#invitee_box > p').hide()}},'json')
$(this).hide()
$('#invitee_box').show()
return false})
$('#invite_form').submit(function(){$(this).find('input[type=submit]').attr('value','Sending Invites...').attr('disabled','disabled')
$.post($(this).attr('action'),$(this).serialize(),function(){$('#invitee_box').html('<h3>Thanks!</h3><p>Your invites have been sent.</p>')})
return false})});$(function(){$('.repo_filter').click(function(){$('#repo_listing li').hide()
$('#repo_filter a').removeClass('filter_selected')
$(this).addClass('filter_selected')
$('#repo_listing li.'+$(this).attr('rel')).show()
return false})});GitHub.editableGenerator=function(options){return function(_,self){var defaults={id:'field',tooltip:'Click to edit!',indicator:'Saving...',data:function(data){return $(self).attr('data')||data},style:"display: inline",onblur:'submit',callback:function(){(function(){if($(self).attr('data'))$(self).attr('data',$(self).text())
$(self).trigger('truncate').next().show()
$(self).trigger('afterSave.editableGenerator')}).delay(20)}}
return $(this).editable($(this).attr('rel'),$.extend({},defaults,options))}}
$(function(){$('.edit_link').click(function(){$(this).prev().trigger('click')
return false})});$(function(){$('#import-authors').click(function(){var button=$(this).val('Generating Author List...').attr('disabled','disabled')
var post_url=$('#new_repository').attr('action')+'/grab_authors'
$.post(post_url,{'svn_url':$('#svn_url').val()},function(authors){if(authors.toString()==''){button.attr('disabled','').val('Step 1: Import Authors')
alert("No authors were returned, please try a different URL")}else{$('#authors').show()
$.each(authors,function(i,author){var li=$('<tr><td><input type="text" disabled="disabled" value="'+author+'" name="svn_authors[]" /></td><td><input size="40" type="text" name="git_authors[]"/></td></tr>')
li.appendTo('#authors-list')})
button.parent().remove()
$('#import-submit').show()}},'json')
return false})
$('#import-submit').click(function(){$(this).attr('disabled','disabled')
var form=$(this).parent().parent()
form.find('input[name="svn_authors[]"]').attr('disabled','')
form.submit()})
$('.repo span.edit').each(GitHub.editableGenerator({width:'350px'}))
$('.repo span.editarea').each(GitHub.editableGenerator({type:'textarea',width:'550px',height:'100px',cancel:'Cancel',submit:'OK'}))
$('span.edit, span.editarea').click(function(){$(this).next().hide()})
$('#run_postreceive_test').click(function(){$.post(location.href+'/test_postreceive',{})
$.facebox($('#postreceive_test').text())
return false})
$('#repository_postreceive_url').bind('afterSave.editableGenerator',function(){if($('#repository_postreceive_url').text().slice(0,4)=='http')
$('#run_postreceive_test').show()
else
$('#run_postreceive_test').hide()})
$('#add_new_member_link').click(function(){$('#add_new_member').show()
$('#add_member').focus()
return false})
$('#add_member_cancel').click(function(){$('#add_new_member').hide().find('input[type=text]').val('')
return false})
$('#add_new_member form').submit(function(){$('#add_member_cancel').spin()
$('#add_new_member :submit').attr('disabled',true)
$.post(this.action,{'member':$('#add_member').val()},function(data){if($.inArray($(data).find('a:first').text(),$('.members li a:not(.action)').map(function(){return $(this).text()}))==-1)
$('.members').append(data)
$('#add_member').val('').css('background-color','').focus()
$('#add_new_member :submit').attr('disabled',false)
$('#spinner').remove()})
return false})
$('.revoke_member').click(function(){$.post(this.href,'',function(data){console.log(data)})
$(this).parent().parent().remove()
return false})
$('.toggle_permission').click(function(){$('.public_repo, .private_repo, .public_security, .private_security').toggle()
if($('.repo').is('.public'))$('.repo').removeClass('public').addClass('private')
else $('.repo').removeClass('private').addClass('public')
$.post(this.href,'')
return false})
$('#copy_permissions ul li a').click(function(){$(this).parents('form').submit()
return false})
$('#delete_repo').click(function(){var confirm_string='Are you sure you want to delete this repository?  There is no going back.'
return confirm(confirm_string)})
$('#reveal_delete_repo_info').click(function(){$(this).toggle()
$('#delete_repo_info').toggle()
return false})
$('#repo_rename > input[type=submit]').click(function(){if(!confirm(GitHub.rename_confirmation())){return false}})
$('.toggle_watch').click(function(){if($('.userbox').length==0)return true
$('.toggle_watch').toggle()
$.post($(this).attr('href'),{data:{}})
return false})
$('.git_url_facebox').click(function(){$.facebox($($(this).attr('rel')).html(),'tip')
return false})
$('#donate_activate_toggle a').click(function(){$(this).parent().hide()
$('#donate_activate').show()
return false})
$('#pledgie_deactivate').click(function(){$('#paypal').val('')
return true})
$('.pull_request_button').click(function(){var self=this
$.facebox(function(){$.get(self.href,function(data){$.facebox(data,'nopad')
$('#facebox .footer').hide()
$.userAutocomplete()})})
return false})
$('.repo_toggle').click(function(){var options={}
options['field']=this.id
options['value']=this.checked?'1':'0'
var url=window.location.pathname.replace('edit','update')
$.post(url,options)
$('#rubygem_save').show()})
$('.test_hook').click(function(){var self=$(this).spin().siblings('.right').remove().end()
var href=location.href.replace(/hooks/,'test_service')
$.post(href,{name:self.attr('rel')||''},function(){self.next().remove()
self.next().after('<div class="right"><em>Payload deployed</em></div>')})
return false})
$('.postreceive_hook_help').click(function(){$('#postreceive_urls-help').toggle()
return false})
$('.hook_help').click(function(){var div=$('#'+this.id.replace('-toggle',''))
if(div.is(":visible")){div.hide()}else{div.show()
div.html('<pre>Loading...</pre>')
var url='/pjhyett/github-services/tree/master/docs/'+div.attr('id').replace('-help','')
$.get(url,{'raw':'true'},function(data){div.html('<pre>'+data+'</pre>')})}
return false})
$('#close_facebox').livequery('click',function(){$(document).trigger('close.facebox')
return false})
$('#pull_request .select_all').livequery('click',function(){$('#facebox :checkbox').attr('checked',true)
return false})
$('#pull_request .add_recipient').livequery('click',function(){var user=$(this).prev().val()
$(this).prev().val('').css('background','Window')
if(!$.trim(user))return
var list=$('#pull_request .recipients ul')
var recipients=list.find('li').map(function(){return $.trim($(this).text())})
if($.inArray(user,recipients)>=0)return list.find('li:contains('+user+') :checkbox').attr('checked',true)
$('#pull_request .recipients ul').prepend('<li><label><input type="checkbox" name="message[to][]" value="'+user+'"/> '+user+'</label>').end().find(':checkbox:first').attr('checked',true)})
$('#pull_request_form').livequery('submit',function(){var empty=[]
var recipient_controls=$(this).find("input[name='message[to][]']")
recipient_controls.each(function(){if($(this).is(':checkbox')&&!$(this).attr('checked')||$(this).is(':text')&&$(this).val()=='')
empty.push($(this))})
if(empty.length==recipient_controls.length){$('#pull_request_error').show().text('Please select at least one recipient.')
return false}else{$(this).ajaxSubmit(function(){$('#pull_request_error').remove()
$('#pull_request').find('h1').text('Sent!').end().find('.pull_request_inside').empty().append('<p>Your pull request was sent.</p>').end().find('.actions :last').remove().end().find('#close_facebox').val('Close')
var close=setTimeout(function(){$(document).trigger('close.facebox')},2500)
$(document).one('close.facebox',function(){clearTimeout(close)})})
return false}})
$('#add_auto_response_action').livequery('click',function(){$.ajax({async:true,data:'&repo[pull_request_auto_response]=',type:'PUT',url:window.location.pathname.replace('edit','update_pull_request_auto_response')})
$('#auto_responder_details').html('<a href="#" id="disable_auto_response_action">Add auto-responder</a>')
return false})
$('#disable_auto_response_action').livequery('click',function(){$.facebox({div:'#auto_response_editor'},'nopad')
$('#facebox .footer').hide()
return false})
$('.cancel_auto_response_action').livequery('click',function(){$.facebox.close()
return false})
$('.auto_response_form').livequery('submit',function(){var self=this,auto_response
$(self).ajaxSubmit(function(key){$.facebox.close()
auto_response=$(self).find('textarea').val().slice(0,40)
if(auto_response.length>=40)
auto_response+='...'
$('#auto_responder_details').html('<em>'+auto_response+'</em> ('+'<a href="#" id="add_auto_response_action">Remove auto-responder</a>)')})
return false;})
$('.add_postreceive_url').livequery('click',function(){var parent=$(this).parent()
var row=parent.clone()
var fieldset=$(this).parents('fieldset')
row.find('input').val('')
fieldset.find('p:last').before(row)
var remove=fieldset.find('.remove_postreceive_url:first').clone()
parent.find('a').after(remove.show())
parent.find('a:first').remove()
return false})
$('.remove_postreceive_url').livequery('click',function(){$(this).parent().remove()
return false})});GitHub.Fluid={init:function(){if(!window.fluid)return
with(GitHub.Fluid){setDockCount()
addMenuItems()}},setDockCount:function(){window.fluid.dockBadge=$('.inbox strong a').text()},addMenuItems:function(){with(GitHub.Fluid){addDockJump("My Account",'/account')
addDockJump("News",'/news')
addDockJump("Repositories",'/repositories')
addDockJump("Popular Watched",'/popular/watched')
addDockJump("Popular Forked",'/popular/forked')}},addDockJump:function(name,path){window.fluid.addDockMenuItem(name,function(){window.location='http://github.com'+path})}}
$(GitHub.Fluid.init);$(function(){$('#header .inbox, .cancel').click(function(){window.location='/inbox'
return false})
$('#inbox .del a').click(function(){var self=this
$.ajax({url:$(this).attr('rel'),data:{_method:'delete'},type:'POST',success:function(){$(self).parents('.item').hide()}})
return false})
$('#message .del a').click(function(){var self=this
$.ajax({url:window.location.href,data:{_method:'delete'},type:'POST',success:function(){window.location='/inbox'}})
return false})
$('#reveal_deleted').click(function(){$(this).parent().hide()
$('.hidden_message').show()
return false})});$(function(){if($('#impact_graph').length>0){GitHub.ImpactGraph.drawImpactGraph()}})
GitHub.ImpactGraph={colors:null,data:null,chunkVerticalSpace:2,initColors:function(authors){seedColors=[[222,0,0],[255,141,0],[255,227,0],[38,198,0],[0,224,226],[0,33,226],[218,0,226]]
this.colors=new Array()
var i=0
for(var author in authors){var color=seedColors[i%7]
if(i>6){color=[this.randColorValue(color[0]),this.randColorValue(color[1]),this.randColorValue(color[2])]}
this.colors.push(color)
i+=1}},drawImpactGraph:function(){var streams={}
var repo=$('#impact_graph').attr('rel')
var self=this
$.getJSON("/"+repo+"/graphs/impact_data",function(data){self.initColors(data.authors)
var ctx=self.createCanvas(data)
data=self.padChunks(data)
self.data=data
$.each(data.buckets,function(i,item){self.drawBucket(streams,item,i)})
self.drawAll(ctx,data,streams)
self.authorHint()})},createCanvas:function(data){var width=data.buckets.length*50*2-50
var height=0
for(var i in data.buckets){var bucket=data.buckets[i]
var bucketHeight=0
for(var j in bucket.i){var chunk=bucket.i[j]
bucketHeight+=this.normalizeImpact(chunk[1])+this.chunkVerticalSpace}
if(bucketHeight>height){height=bucketHeight}}
$('#impact_graph div').remove()
var els=$('#impact_graph')
els.height(height+50).css("border","1px solid #aaa")
$('#caption').show()
els.append('<canvas width="'+width+'" height="'+(height+30)+'"></canvas>')
var elc=$('#impact_graph canvas')[0]
return elc.getContext('2d')},padChunks:function(data){for(var author in data.authors){var first=this.findFirst(author,data)
var last=this.findLast(author,data)
for(var i=first+1;i<last;i++){if(!this.bucketHasAuthor(data.buckets[i],author)){data.buckets[i].i.push([author,0])}}}
return data},bucketHasAuthor:function(bucket,author){for(var j=0;j<bucket.i.length;j++){if(bucket.i[j][0]==parseInt(author)){return true}}
return false},findFirst:function(author,data){for(var i=0;i<data.buckets.length;i++){if(this.bucketHasAuthor(data.buckets[i],author)){return i}}},findLast:function(author,data){for(var i=data.buckets.length-1;i>=0;i--){if(this.bucketHasAuthor(data.buckets[i],author)){return i}}},colorFor:function(author){var color=this.colors[author]
return("rgb("+color[0]+","+color[1]+","+color[2]+")")},randColorValue:function(seed){var delta=Math.round(Math.random()*100)-50
var newVal=seed+delta
if(newVal>255){newVal=255}
if(newVal<0){newVal=0}
return(newVal)},drawBucket:function(streams,bucket,i){var maxY=0
var self=this
$.each(bucket.i,function(j,chunk){var authorID=chunk[0]
var impact=self.normalizeImpact(chunk[1])
if(!streams[authorID]){streams[authorID]=new Array()}
streams[authorID].push([i*100,maxY,50,impact,chunk[1]])
maxY=maxY+impact+self.chunkVerticalSpace})},normalizeImpact:function(size){if(size<=9){return size+1}else if(size<=5000){return Math.round(10+size/50)}else{return Math.round(100+(Math.log(size)*10));}},drawAll:function(ctx,data,streams){this.drawStreams(ctx,streams,null)
this.drawDates(data)},drawStreams:function(ctx,streams,topAuthor){ctx.clearRect(0,0,10000,500)
$('.activator').remove()
for(var author in streams){if(author!=topAuthor){this.drawStream(author,streams,ctx,true)}}
if(topAuthor!=null){this.drawStream(topAuthor,streams,ctx,false)}},drawStream:function(author,streams,ctx,activator){ctx.fillStyle=this.colorFor(author)
chunks=streams[author]
for(var i=0;i<chunks.length;i++){var chunk=chunks[i]
ctx.fillRect(chunk[0],chunk[1],chunk[2],chunk[3])
if(activator){this.placeActivator(author,streams,ctx,chunk[0],chunk[1],chunk[2],chunk[3],chunk[4])}
if(i!=0){ctx.beginPath()
ctx.moveTo(previousChunk[0]+50,previousChunk[1])
ctx.bezierCurveTo(previousChunk[0]+75,previousChunk[1],chunk[0]-25,chunk[1],chunk[0],chunk[1])
ctx.lineTo(chunk[0],chunk[1]+chunk[3])
ctx.bezierCurveTo(chunk[0]-25,chunk[1]+chunk[3],previousChunk[0]+75,previousChunk[1]+previousChunk[3],previousChunk[0]+50,previousChunk[1]+previousChunk[3])
ctx.fill()}
previousChunk=chunk}},drawStats:function(author,streams){chunks=streams[author]
for(var i=0;i<chunks.length;i++){var chunk=chunks[i]
var impact=chunk[4]
if(impact>10){this.drawStat(impact,chunk[0],chunk[1]+(chunk[3]/2))}}},drawStat:function(text,x,y){var styles=''
styles+='position: absolute;'
styles+='left: '+x+'px;'
styles+='top: '+y+'px;'
styles+='width: 50px;'
styles+='text-align: center;'
styles+='color: #fff;'
styles+='font-size: 9px;'
styles+='z-index: 0;'
$('#impact_graph').append('<p class="stat" style="'+styles+'">'+text+'</p>')},drawDate:function(text,x,y){y+=3
var styles=''
styles+='position: absolute;'
styles+='left: '+x+'px;'
styles+='top: '+y+'px;'
styles+='width: 50px;'
styles+='text-align: center;'
styles+='color: #888;'
styles+='font-size: 9px;'
$('#impact_graph').append('<p style="'+styles+'">'+text+'</p>')},placeActivator:function(author,streams,ctx,x,y,w,h,impact){y+=5
var styles=''
styles+='position: absolute;'
styles+='left: '+x+'px;'
styles+='top: '+y+'px;'
styles+='width: '+w+'px;'
styles+='height: '+h+'px;'
styles+='z-index: 100;'
styles+='cursor: pointer;'
var id='a'+x+'-'+y
$('#impact_graph').append('<div class="activator" id="'+id+'" style="'+styles+'">&nbsp;</div>')
var self=this
$('#'+id).mouseover(function(e){$(e.target).css("background-color","black").css("opacity","0.08")
self.drawAuthor(author)}).mouseout(function(e){$(e.target).css("background-color","transparent")
self.clearAuthor()
self.authorHint()}).mousedown(function(){$('.stat').remove()
self.clearAuthor()
self.drawStreams(ctx,streams,author)
self.drawStats(author,streams)
self.drawSelectedAuthor(author)
self.authorHint()})},drawDates:function(data){var self=this
$.each(data.buckets,function(i,bucket){var max=0
$.each(bucket.i,function(j,chunk){max+=self.normalizeImpact(chunk[1])+1})
var months=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
var date=new Date()
date.setTime(bucket.d*1000)
var dateString=''+date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear()
self.drawDate(dateString,i*100,max+7)})},authorText:function(text,x,y){var id=null
if(y<25){id='selected_author_text'}else{id='author_text'}
var styles=''
styles+='position: absolute;'
styles+='left: '+x+'px;'
styles+='top: '+y+'px;'
styles+='width: 920px;'
styles+='color: #444;'
styles+='font-size: 18px;'
$('#impact_legend').append('<p id="'+id+'" style="'+styles+'">'+text+'</p>')},authorHint:function(){this.authorText('<span style="color: #aaa;">mouse over the graph for more details</span>',0,30)},drawAuthor:function(author){this.clearAuthor()
var ctx=$('#impact_legend canvas')[0].getContext('2d')
ctx.fillStyle=this.colorFor(author)
ctx.strokeStyle="#888888"
ctx.fillRect(0,30,20,20)
ctx.strokeRect(0.5,30.5,19,19)
var name=this.data.authors[author].n
this.authorText(name+' <span style="color: #aaa;">(click from more info)</span>',25,30)},drawSelectedAuthor:function(author){this.clearSelectedAuthor()
var ctx=$('#impact_legend canvas')[0].getContext('2d')
ctx.fillStyle=this.colorFor(author)
ctx.strokeStyle="#000000"
ctx.fillRect(0,0,20,20)
ctx.strokeRect(0.5,0.5,19,19)
var auth=this.data.authors[author]
var name=auth.n
var commits=auth.c
var adds=auth.a
var dels=auth.d
this.authorText(name+' ('+commits+' commits, '+adds+' additions, '+dels+' deletions)',25,0)},clearAuthor:function(){var ctx=$('#impact_legend canvas')[0].getContext('2d')
ctx.clearRect(0,30,920,20)
$('#author_text').remove()},clearSelectedAuthor:function(){var ctx=$('#impact_legend canvas')[0].getContext('2d')
ctx.clearRect(0,0,920,20)
$('#selected_author_text').remove()}};$(function(){$('#add_key_action').click(function(){$(this).toggle()
$('#new_key').toggle().find(':text').focus()
return false})
$('.edit_key_action').livequery('click',function(){$.gitbox($(this).attr('href'))
return false})
$('#cancel_add_key').click(function(){$('#add_key_action').toggle()
$('#new_key').toggle().find('textarea').val('')
$('#new_key').find(':text').val('')
$('#new_key .object_error').remove()
return false})
$('.cancel_edit_key').livequery('click',function(){$.facebox.close()
$('#new_key .object_error').remove()
return false})
$('.delete_key').livequery('click',function(){if(confirm('Are you sure you want to delete this key?')){$.ajax({type:'DELETE',url:$(this).attr('href')});$(this).parent().remove()}
return false})
$('.key_editing').livequery('submit',function(){var self=this
$(self).find('.object_error').remove()
$(self).find(':submit').attr('disabled',true).spin()
$(self).ajaxSubmit(function(key){if(key.substring(0,3)=="<li"){if($(self).attr('id').substring(0,4)=='edit'){$('#'+$(self).attr('id').substring(5)).replaceWith(key)
$.facebox.close()}else{$('.keys ul').append(key)
$('#add_key_action').toggle()
$(self).toggle()}
$(self).find('textarea').val('')
$(self).find(':text').val('')}else{$(self).append(key)}
$(self).find(':submit').attr('disabled',false).stopSpin()})
return false})});$(function(){if($('#network .out_of_date').length>0){var up_to_date=function(){$('#network .out_of_date').addClass("up_to_date").text("This graph has new data available. Reload the page to see it!");};var repo=$('#network .out_of_date').attr('rel');var tid=[];var pinger=function(){$.getJSON("/"+repo+"/network_current",function(data){if(data.current){up_to_date();clearInterval(tid[0]);}})}
tid.push(setInterval(pinger,5000));}});$(function(){$(".graph .bars").each(function(i){var graph=this
var callback=function(data){new ParticipationGraph(graph,data)}
var datasource=$(this).attr("rel")
$.get(datasource,null,callback,"text")})});ParticipationGraph=function(el,data){this.BAR_WIDTH=7
this.allCommits=null
this.ownerCommits=null
this.primer=new Primer(el,416,20)
this.data=data
this.readData()
this.draw()}
ParticipationGraph.prototype={readData:function(){var data_strings=this.data.split("\n")
this.allCommits=this.base64BytesToIntArray(data_strings[0])
this.ownerCommits=this.base64BytesToIntArray(data_strings[1])},max:function(arr){var max=arr[0]
for(var i=1;i<arr.length;i++){if(arr[i]>max){max=arr[i]}}
return max},integerize:function(arr){var out=new Array()
for(var i=0;i<arr.length;i++){out.push(parseInt(arr[i]))}
return out},base64ByteToInt:function(byte){var chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-"
return chars.indexOf(byte)},base64BytesToIntArray:function(data){var arr=[]
var num
for(var i=0;i<data.length;i++){if(i%2==0){num=64*this.base64ByteToInt(data.charAt(i))}else{num=num+this.base64ByteToInt(data.charAt(i))
arr.push(num)}}
return arr},draw:function(){var max=this.max(this.allCommits)
var scale
if(max>=20){scale=19.0/max}else{scale=1}
var allCommitsLayer=new Primer.Layer()
for(var i=0;i<this.allCommits.length;i++){var square=new Primer.Layer()
square.fillStyle="#CACACA"
var d=this.allCommits[i]*scale
square.fillRect(i*(this.BAR_WIDTH+1),20-d,this.BAR_WIDTH,d)
allCommitsLayer.addChild(square)}
var ownerCommitsLayer=new Primer.Layer()
for(var i=0;i<this.ownerCommits.length;i++){var square=new Primer.Layer()
square.fillStyle="#336699"
var d=this.ownerCommits[i]*scale
square.fillRect(i*(this.BAR_WIDTH+1),20-d,this.BAR_WIDTH,d)
ownerCommitsLayer.addChild(square)}
this.primer.addChild(allCommitsLayer)
this.primer.addChild(ownerCommitsLayer)}};$(function(){$('.repo_facet').click(function(){$('#repo_value').attr('value',$(this).text().replace(/ /g,''))
$('#search_form').submit()});$('.lang_facet').click(function(){$('#lang_value').attr('value',$(this).text())
$('#search_form').submit()});$('.pager_link').click(function(){$('#start_value').attr('value',$(this).text())
$('#search_form').submit()});});$(function(){$('#signup_form').submit(function(){$('#signup_button').attr('disabled',true).val('Creating your GitHub account...')})});$(function(){$('#file-edit-link').click(function(){$('#readme').hide()
$('#files').children().hide().end().append('<div class="blob-editor"><img src="/images/modules/browser/loading.gif"/></div>')
$('.blob-editor').load($(this).attr('rel'),{},function(){$('#files').scrollTo(500)})
return false})
$('#cancel-blob-editing').livequery('click',function(){$('.blob-editor').remove()
$('#readme').show()
$('#files').children().show()
return false})
$('#download_button').click(function(){$.gitbox($(this).attr('rel'))
return false})
$('.download_link').livequery('click',function(){$(document).trigger('close.facebox')})
$('.other_download_link').livequery('click',function(){$.gitbox($(this).attr('href'))
return false})
$('#private-clone-url > a').bind('contextmenu',function(){var size=$(this).text().length
$(this).hide().next().attr('size',size).show().focus().get(0).select()
return false})
var dim=function(){$(this).hide().prev().show()}
$('#private-clone-url > :input').mouseout(dim).blur(dim)
$('.toggle_watch > img').click(function(){var url=$(this).parent().attr('href')
if(url!='/signup'){$('.toggle_watch').show()
$(this).parent().hide()
$.post(url,{})
return false}})})
$(function(){$('a.follow').click(function(){$.post(this.href,'')
$(this).parent().find('.follow').toggle()
return false})
if(GitHub.editableGenerator)$('#dashboard span.edit').each(GitHub.editableGenerator({width:'200px',submittype:'put'}))
$('.user_toggle').click(function(){var options={}
options[this.name]=this.checked?'1':'0'
options['_method']='put'
$.post('/account',options)
$('#notify_save').show()})
$('#add_email_action').click(function(){$(this).toggle()
$('#add_email_form').toggle().find(':text').focus()
return false})
$('#cancel_add_email').click(function(){$('#add_email_action').toggle()
$('#add_email_form').toggle().find(':text').val('')
return false})
$('.delete_email').livequery('click',function(){if($('.email').length==1){$.facebox('You must always have at least one email address.  If you want to delete this address, add a new one first.')
return false}
$.post($(this).attr('href'),{email:$(this).prev().text()})
$(this).parent().remove()
return false})
$('#user_rename > input[type=submit]').click(function(){if(!confirm(GitHub.rename_confirmation())){return false}})
if($('.email').length>0){$('#add_email_form').submit(function(){$('#add_email_form :submit').attr('disabled',true).spin()
var self=this
$(this).ajaxSubmit(function(user){$('.emails ul').append(user)
$('#add_email_form :submit').attr('disabled',false).stopSpin()
$(self).find(':text').val('').focus()})
return false})}
$('#change_plan_toggle').click(function(){$('.plan_box').hide()
$('#change_plan').show()
return false})
$('#change_plan_disabled_toggle').click(function(){$('#update_cc').hide()
$('#change_plan').show()})
$('#update_cc_toggle').click(function(){$('.plan_box').hide()
$('#update_cc').show()
return false})
$('.plan_cancel').click(function(){$('.plan_box').hide()
$('#current_plan').show()
return false})
$('#change_plan_form').submit(function(){var plan=$('#plan_selector').val()
$('#update_cc_form input#plan').val(plan)
if(plan=='free'){$('#update_cc_form').submit()
return false}
$('strong.plan_pricing').hide()
$('#change_plan').hide()
if(plan=='coupon'){$('#coupon_box').show()
return false}
$('#'+plan+'_cost').show()
$('#update_cc').show()
if(!$('#can_update_cc').is('.dont_show'))$('#can_update_cc').show()
return false})
$('#plan_update_button').click(function(){$('#update_cc_form').submit()
return false})
$('#update_cc_form input[type=submit]').click(function(){$(this).attr('disabled',true)
$(this).val('Processing Credit Card...')
$('#update_cc_form').submit()})
$('#show_card_form').submit(function(){$.post($(this).attr('action'),{},function(data){var result=$('<p>'+data+'</p>')
$('#show_card_submit').after(result)})
return false})
$('#reveal_cancel_info').click(function(){$(this).toggle()
$('#cancel_info').toggle()
return false})
$('#cancel_plan').submit(function(){var message="Are you POSITIVE you want to delete your account? There is absolutely NO going back. All your repositories, comments, wiki pages - everything will be gone. Please consider downgrading your plan."
return confirm(message)})});$(function(){var swap_search_and_links=function(){$('#header .userbox .site_links').toggle()
$('#header .userbox form').toggle()
$(this).is(':visible')
setTimeout(function(){$('#q').focus()},50)
return false}
$('#header .userbox .search_repos_link').click(swap_search_and_links)
$('#header .userbox .cancel_search_link').click(swap_search_and_links)
$.hotkey('s',function(){$('.search_repos_link').click()})});$(function(){$('#see-more-elsewhere').click(function(){$('.seen-elsewhere').show()
$(this).remove()
return false})})