var cesium = {

    init: function(){

        var sheets = document.styleSheets,
            templates = [];

        for(var i=0; i<sheets.length; i++){

            for(var d=0; d<sheets[i].cssRules.length; d++){

                if( sheets[i].cssRules[d]['media'] && sheets[i].cssRules[d]['media'][0] === 'template' ){
                
                    //verify template has at least 2 properties listed and that first one starts with 'name'
                    if( sheets[i].cssRules[d].cssRules.length > 1 && sheets[i].cssRules[d].cssRules[0].selectorText.indexOf('name') === 0 ){
                        console.log(sheets[i].cssRules[d].cssRules[0].selectorText);
                    }

                }

//                var selector = sheets[i].cssRules[d].selectorText.split(' ');
                
//                if( selector[0] === '.template' ){
//                    
////                    var obj = {
////                        name: selector[1],
////                        cssText: sheets[i].cssRules[d].style.cssText,
////                        structure: sheets[i].cssRules[d].selectorText.split(' ').slice(2).join(' ') //remove first 2 space separated values which should be the .template class and template name
////                    };
////
////                    console.log(obj);
////                    cesium.build_html(obj.structure);
//                }

            }

        }

    },
    
    build_html: function(str){
    
    }

}