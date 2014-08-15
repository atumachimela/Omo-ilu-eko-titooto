function addEvent(elem, evtType, func) {
         if (elem.addEventListener) {
            elem.addEventListener(evtType, func, false);
         } else if (elem.attachEvent) {
            elem.attachEvent("on"+evtType, func);
         } else {
            elem["on"+evtType]=func;
         }
      }

 Object.prototype.hide=function(bool){
    	if(bool)
    		this.style.visibility='hidden';
    	else
    		this.style.display='none';
    };

    Object.prototype.show=function(bool){
    	if(bool)
    		this.style.visibility='visible';
    	else
    	 this.style.display='block';
    };

String.prototype.isEmpty=function(){
    	if(this.trim()=='' || this.trim()==null) {
    		return true;
    		}
    		return false;
    };
    
     var isDefined=function(obj){
    	if(obj==null || typeof obj=="undefined"){
    		return false;
    	}
    	return true;
    };

function getElem(elem) {
	return document.getElementById(elem);
}

function template(tmpl,data){
   return tmpl.replace(/%(\w*)%/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
}
function json2array(data){
			var arr=[];
			for(var x in data){
				if(typeof data[x] != 'function'){
					arr.push((typeof data[x]==typeof {})?(json2array(data[x])):(data[x]));
				}
			}
			return arr;
		}
