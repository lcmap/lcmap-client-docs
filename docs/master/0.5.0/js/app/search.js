!function(e){"use strict";function t(){$("h1, h2").each(function(){var e=$(this),t=e.nextUntil("h1, h2");l.add({id:e.prop("id"),title:e.text(),body:t.text()})})}function i(){r=$(".content"),a=$(".dark-box"),c=$(".search-results"),$("#input-search").on("keyup",n)}function n(e){if(o(),c.addClass("visible"),27===e.keyCode&&(this.value=""),this.value){var t=l.search(this.value).filter(function(e){return e.score>1e-4});t.length?(c.empty(),$.each(t,function(e,t){var i=document.getElementById(t.ref);c.append("<li><a href='#"+t.ref+"'>"+$(i).text()+"</a></li>")}),s.call(this)):(c.html("<li></li>"),$(".search-results li").text('No Results Found for "'+this.value+'"'))}else o(),c.removeClass("visible")}function s(){this.value&&r.highlight(this.value,h)}function o(){r.unhighlight(h)}var r,a,c,h=($(e),{element:"span",className:"search-highlight"}),l=new lunr.Index;l.ref("id"),l.field("title",{boost:10}),l.field("body"),l.pipeline.add(lunr.trimmer,lunr.stopWordFilter),$(t),$(i)}(window);