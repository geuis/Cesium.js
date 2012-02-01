var cesium = {

    init: function(){

        var sheets = document.styleSheets,
            templates = [];

        for(var i=0; i<sheets.length; i++){

            for(var d=0; d<sheets[i].cssRules.length; d++){

                var selector = sheets[i].cssRules[d].selectorText.split(' ');
                
                if( selector[0] === '.template' ){
                    
                    var obj = {
                        name: selector[1],
                        cssText: sheets[i].cssRules[d].style.cssText,
                        structure: sheets[i].cssRules[d].selectorText
                    };

                    console.log(obj);
                }

            }

        }

    }

}