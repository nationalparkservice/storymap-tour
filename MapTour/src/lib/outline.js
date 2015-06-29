// outline.js
// Removes keyboard focus indicator when mouse is used and adds it if tab (keyboard navigation) is used
// based on http://github.com/lindsayevans/outline.js
// based on http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/
(function(d){

    var style_element = d.createElement('STYLE'),
        dom_events = 'addEventListener' in d,
        add_event_listener = function(type, callback){
            // Basic cross-browser event handling
            if(dom_events){
                d.addEventListener(type, callback);
            }else{
                d.attachEvent('on' + type, callback);
            }
        },
        set_css = function(css_text){
            // Handle setting of <style> element contents in IE8
            !!style_element.styleSheet ? style_element.styleSheet.cssText = css_text : style_element.innerHTML = css_text;
        }
        ;

    d.getElementsByTagName('HEAD')[0].appendChild(style_element);

    // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
    add_event_listener('mousedown', function(){
        set_css('a,button{outline:none} [tabindex="0"]{outline:none}');
    });

    add_event_listener('keydown', function(e){
        if (e.keyCode == 9) { //tab
            set_css('');
        }
    });

})(document);