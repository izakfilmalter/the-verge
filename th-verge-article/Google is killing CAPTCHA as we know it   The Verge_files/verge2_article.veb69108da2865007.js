"use strict";var Verge=Verge||{};Verge.Embeds=(function(d){var c={videoContexts:[".m-entry iframe"],facebookContext:d(".fb-post")};var e=function(){b()};var a=function(){c.facebookContext.each(function(){d(this).attr("data-width",200)})};var b=function(){d(c.videoContexts.join(",")).each(Chorus.Video.wrapVideoIframe)};return{init:e,facebook:a,opts:c}})(jQuery);if(Verge.Embeds.opts.facebookContext.length){Verge.Embeds.facebook()}document.addEventListener("DOMContentLoaded",function(){Verge.Embeds.init()});"use strict";var Verge=Verge||{};Verge.Gallery=(function(d){var f=d(window);var c={gallery_selector:".js-gallery",gallery_photo:".js-gallery-photo",gallery_thumbs:".js-gallery-thumbnail",gallery_prev:".js-gallery-prev",gallery_next:".js-gallery-next",gallery_carousel:".js-carousel",gallery_active:"is-active",gallery_lightbox:"lightbox",gallery_entry:"entry"};var g=function(){a(d(c.gallery_selector))};var a=function(i){i.each(h)};var h=function(){var i=d(this);i.find(c.gallery_thumbs).on("click",b);if(!i.hasClass(c.gallery_entry)){i.find(c.gallery_photo+" img").on("click",{gallery:i},e.open);d("#"+c.gallery_lightbox).on("click",{gallery:i},e.close)}else{setTimeout(function(){e.resetCarousel(5,i)},1000)}};var b=function(){var j=d(this);if(j.hasClass(c.gallery_active)){return}var i=j.parents(c.gallery_selector);d(c.gallery_photo+" img").attr("src",j.data().src);i.data("active_photo",j.data().position);d(c.gallery_thumbs).removeClass(c.gallery_active);j.addClass(c.gallery_active)};var e={open:function(i){i.data.gallery.addClass(c.gallery_lightbox);d("#"+c.gallery_lightbox).show(0,function(){e.calculateSize()});f.on("resize.gallery",_.debounce(e.calculateSize,250));e.resetCarousel(5,i.data.gallery)},close:function(i){f.off("resize.gallery");i.data.gallery.removeClass(c.gallery_lightbox);d("#"+c.gallery_lightbox).hide();e.resetCarousel(3,i.data.gallery);e.controls.reset(i.data.gallery);d(c.gallery_photo+" img").removeAttr("style");d(c.gallery_photo).parent().removeAttr("style")},calculateSize:function(){var k=d(c.gallery_selector+"."+c.gallery_lightbox);var l=parseInt(k.css("top"));var m=k.find("h3").height();var i=d(c.gallery_thumbs).eq(0).height();var j=f.height()-(l*2)-m-i;d(c.gallery_photo+" img").css({"max-height":(j-2)+"px"});d(c.gallery_photo).parent().css({"max-height":j+"px"})},resetCarousel:function(l,j){var m=j.find(c.gallery_carousel);var n=m.data().item_count;console.log(n);var i=j.find(c.gallery_thumbs).filter("."+c.gallery_active).data().position;var k=Math.ceil((i/l)+0.01);m.data().items_per_page=l;m.data().page.total=Math.ceil(n/l);j.data("active_photo",i);Verge.Carousel.goToPage(m,k);e.controls.init(j,m)},showImage:function(n){var k=n.data.gallery.data().active_photo;var o=d(this).is(n.data.next)?k+1:k-1;var m=n.data.carousel.data().items_per_page;var l=Math.ceil((o/m)+0.01);var j=o===0;var i=(o+1)===n.data.carousel.data().item_count;n.data.carousel.find(c.gallery_thumbs).eq(o).trigger("click");if(n.data.carousel.data().page.on!==l){Verge.Carousel.goToPage(n.data.carousel,l)}if(j){n.data.prev.removeClass(c.gallery_active)}else{if(!i&&!n.data.prev.hasClass(c.gallery_active)){n.data.prev.addClass(c.gallery_active)}}if(i){n.data.next.removeClass(c.gallery_active)}else{if(!i&&!n.data.next.hasClass(c.gallery_active)){n.data.next.addClass(c.gallery_active)}}n.preventDefault()},controls:{init:function(i,l){console.log(i);console.log(i.data());var k=i.find(c.gallery_prev);var j=i.find(c.gallery_next);var m={gallery:i,carousel:l,prev:k,next:j};k.add(j).on("click",m,e.showImage);if(i.data().active_photo>0){k.addClass(c.gallery_active)}if((i.data().active_photo+1)<l.data().item_count){j.addClass(c.gallery_active)}},reset:function(i){var j=i.find(c.gallery_next+", "+c.gallery_prev);j.removeClass(c.gallery_active).off("click")}}};return{init:g}})(jQuery);jQuery(function(){Verge.Gallery.init()});"use strict";var Verge=Verge||{};Verge.PhotoEssay=(function(e){var a={nextKey:68,previousKey:83,offset:50,$photos:e(".m-photo-essay__photo")};var c=e(document);var b=e(window);var d=e("html, body");var h=function(l){if(l.target.type!=="textarea"&&l.target.type!=="text"){var k=l.keyCode||l.which;switch(k){case a.nextKey:j();break;case a.previousKey:f();break}}};var j=function(){var k,m,l;a.$photos.each(function(){l=e(this);m=Math.floor(l.offset().top);k=Math.floor(b.scrollTop()+a.offset);if(m===k){l=l.next();return false}else{if(m>k){return false}}});g(l);return false};var f=function(){var k,m,l;a.$photos.each(function(){l=e(this);m=Math.floor(l.offset().top);k=Math.floor(b.scrollTop()+a.offset);if(m>=k){l=l.prev();return false}});g(l);return false};var g=function(k){d.animate({scrollTop:k.offset().top-a.offset},100)};var i=function(k){e.extend(a,k);if(a.$photos.length>0){c.on("keydown",h)}};return{init:i}})(jQuery);jQuery(function(){Verge.PhotoEssay.init()});"use strict";var Verge=Verge||{};Verge.Social=(function(c){var b={social_buttons:c(".js-button-social"),follow_bar:c(".m-article__follow-bar"),follow_bar_close:"#js-close-follow-bar",popupWidth:570,popupHeight:570};var a=function(){var g=c(this);var f=g.attr("href");var h=g.data("social-action");var j,i;ga("send",{hitType:"event",eventCategory:"Social",eventAction:h,eventLabel:window.location.href});if(f!=="#"&&!f.match(/^whatsapp/)&&g.attr("target")!=="_blank"){i=(screen.width/2)-(b.popupWidth/2);j=(screen.height/2)-(b.popupHeight/2);if(f.match("pinterest.com")&&f.match("media=https")){f=f.replace("media=https","media=http")}window.open(f,"","width="+b.popupWidth+", height="+b.popupHeight+", top="+j+", left="+i);return false}};var e=function(){c.cookie("closed_follow_bar","true",{expires:365,path:"/"});b.follow_bar.slideUp();return false};var d=function(f){c.extend(b,f);b.social_buttons.on("click",a);b.follow_bar.on("click",b.follow_bar_close,e)};return{init:d}})(jQuery).init();(function(a,e,b){function c(){var g,f=e.getElementsByTagName(b)[0];var d=function(h,i){if(e.getElementById(i)){return}g=e.createElement(b);g.src=h;g.id=i;f.parentNode.insertBefore(g,f)};if(!Util.UserAgentProfiler.isAndroidLt3()){d("//connect.facebook.net/en_US/all.js#xfbml=1","fbjs");d("https://apis.google.com/js/plusone.js","gplus1js");d("//platform.twitter.com/widgets.js","tweetjs")}}if(a.addEventListener){a.addEventListener("load",c,false)}else{if(a.attachEvent){a.attachEvent("onload",c)}}}(window,document,"script"));"use strict";var Verge=Verge||{};Verge.Stream=(function(e){var d={streamTabs:".js-stream-sort",streamActive:"-is-active",streamUpdates:".js-stream-updates",streamNavTab:".js-stream-nav-tab"};var f=function(){if(e(d.streamTabs).length){e(d.streamTabs).find("li a").on("click",a)}if(e(d.streamNavTab).length){e(d.streamNavTab).on("click","a",b)}};var a=function(h){h.preventDefault();var g=e(this);if(g.parent().hasClass(d.streamActive)){return}g.parents(d.streamTabs).find("."+d.streamActive).removeClass(d.streamActive);g.parent().addClass(d.streamActive);c(g.data("sort"))};var c=function(g){var h=e(d.streamUpdates+" li").toArray();var i=(g==="commented")?"data-comment-count":"data-published-on";h.sort(function(k,j){return +k.getAttribute(i)-+j.getAttribute(i)});h=(g==="oldest")?h:h.reverse();e(d.streamUpdates).empty().html(h)};var b=function(i){i.preventDefault();var g=e(d.streamNavTab+"."+d.streamActive).removeClass(d.streamActive).find("a").attr("href");var h=e(this).attr("href");e(this).parent().addClass(d.streamActive);e("#"+g).add("#"+h).toggle()};return{init:f}})(jQuery);document.addEventListener("DOMContentLoaded",function(){Verge.Stream.init()});"use strict";var Verge=Verge||{};Verge.Polls=(function(f){var a={pollParent:"#js-poll",pollBody:"#js-poll-body",pollLoadingClass:"loading",pollFormClass:"form",pollResultsClass:"results",pollOptionsClass:"options",pollSubmittedClass:"submitted",pollEntryIdData:"entry-id",pollIdData:"poll-id",pollFormName:"featured_poll_option",pollAPI:{load:"/verge_entries/poll?entry_id=",results:"/polls/results_sbnu",submit:"/polls/vote_sbnu"},pollError:{classname:"error",render:"There was an error rendering this poll",results:"There was an error loading the results",submit:"There was an error submitting your vote",choose:"Please choose an option before voting"},pollControls:{vote:"#js-poll-vote",results:"#js-poll-results",options:"#js-poll-options"}};var i=function(j,k){if(k){a=f.extend(a,j);a.pollAPI.load=a.pollAPI.load+a.entryId}f.ajax({url:a.pollAPI.load,timeout:10000,success:b.poll,error:function(){d("pollParent","render")}})};var b={poll:function(j){var k=f(a.pollParent).removeClass(a.pollLoadingClass).html(j).find(a.pollBody).data(a.pollIdData);a.pollId=k;e()},results:function(j){f(a.pollBody).removeClass(a.pollFormClass).removeClass(a.pollOptionsClass).addClass(a.pollResultsClass).html(j)}};var d=function(j,k){f(a[j]).addClass(a.pollError.classname).html(a.pollError[k]);if(j==="pollParent"){f(a.pollParent).removeClass(a.pollLoadingClass)}};var e=function(){f(a.pollControls.vote).on("click",g);f(a.pollControls.results).on("click",h);f(a.pollControls.options).on("click",c)};var g=function(){if(!f(a.pollBody).hasClass(a.pollFormClass)){i({},false)}else{var j=f(a.pollBody).find('input[name="'+a.pollFormName+'"]:checked').val();if(_.isUndefined(j)){return}f.ajax({url:a.pollAPI.submit,data:{poll_option:j,id:a.pollId},timeout:10000,type:"POST",success:function(){f(a.pollBody).addClass(a.pollSubmittedClass);h()},error:function(){d("pollBody","submit")}})}};var c=function(){};var h=function(j){f.ajax({url:a.pollAPI.results,data:{id:a.pollId},timeout:10000,success:b.results,error:function(){d("pollBody","results")}});j.preventDefault()};return{init:i,opts:a}})(jQuery);jQuery(function(){var a=jQuery(Verge.Polls.opts.pollParent);if(a.length){Verge.Polls.init({entryId:a.data(Verge.Polls.opts.pollEntryIdData)},true)}});"use strict";var Verge=Verge||{};Verge.Linksets=(function(e){var d={entry_linkset:e(".m-linkset__entry")};var c;var b=function(j){var g,i,h;if(Verge.Util.stopMetaClickPropagation(j)){return}g=e(this);h=c.index(g)+1;i=g.attr("href");ga("send",{hitType:"event",eventCategory:"nextclicks",eventAction:"click:link"+h,eventLabel:g.find("h4").text()});setTimeout(function(){location.href=i},100)};var a=function(){var g,i,h;g=e(this);i=g.attr("href");h=c.index(g)+1;ga("send",{hitType:"event",eventCategory:"nextclicks",eventAction:"view:link"+h,eventLabel:g.find("h4").text(),nonInteraction:1})};var f=function(g){e.extend(d,g);c=d.entry_linkset;c.on("click",b);c.waypoint(a,{offset:"bottom-in-view",triggerOnce:true})};return{init:f}})(jQuery);jQuery(Verge.Linksets.init);"use strict";var Verge=Verge||{};Verge.FeatureVideo=(function(c){var a={play_button:c(".m-video__link"),video_pane:c(".m-video__pane"),feature:c(".m-feature"),played:false};var g=a.play_button.data("title");var e=a.feature.length>0?"feature-lede":"review-lede";var b=function(j){j.preventDefault();var i=a.play_button.data("ooyala-id");var h=Chorus.VideoContext.addVideoFromOoyalaIdWithTitle(i,g);a.video_pane.removeClass("hidden");if(i===""){return}Chorus.VideoContext.createPlayer("video-pane",h,{autoplay:true,ga:{eventAction:"video:play:"+e,eventLabel:g}})};var d=function(){a.play_button.waypoint(function(){ga("send","event","video","video:view:"+e,g,{nonInteraction:1})},{offset:"bottom-in-view",triggerOnce:true})};var f=function(){a.play_button.on("click",b);d();if(Util.UserAgentProfiler.isIOS()||Util.UserAgentProfiler.isAndroid()){a.play_button.trigger("click")}};return{init:f}})(jQuery);jQuery(Verge.FeatureVideo.init);Chorus.SocialCount=(function(h){var k={};function l(){j()}function a(p){if(p<=999){return p}var o=p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");if(p<=9999){return o}else{if(p<=999999){return o.replace(/(.+)(,\d{3})$/,"$1k")}else{return o.replace(/(.+)(,\d{3}){2}$/,"$1m")}}}function j(){var o={facebook:m,twitter:i,linkedin:e,pinterest:g};for(var n in o){var p=o[n];if(typeof p==="undefined"){continue}h("[data-"+n+"-share-count-url]").each(function(){var q=h(this);p(q.data(n+"-share-count-url"),function(r){if(r>0){r=a(r);if(q.data("use-parens")===false){q.html(r).redraw()}else{q.html("("+r+")").redraw()}}})})}}var b={};function m(n,o){if(b[n]){o(b[n]);return}h.getJSON("https://graph.facebook.com/?ids="+n,function(q){var p=q[n].shares||0;b[n]=p;o(p)})}var d={};function i(n,o){if(d[n]){o(d[n]);return}h.ajax({url:"http://cdn.api.twitter.com/1/urls/count.json",dataType:"jsonp",data:{url:n},success:function(p){d[n]=p.count;o(p.count)},error:function(){}})}var c={};function e(n,o){if(c[n]){o(c[n]);return}h.ajax({url:"http://www.linkedin.com/countserv/count/share",dataType:"jsonp",data:{url:n,format:"jsonp"},success:function(p){c[n]=p.count;o(p.count)}})}var f={};function g(n,o){if(f[n]){o(f[n]);return}h.ajax({url:"http://widgets.pinterest.com/v1/urls/count.json",dataType:"jsonp",data:{url:n,format:"jsonp"},success:function(p){f[n]=p.count;o(p.count)}})}h.extend(k,{init:l,initUI:j});return k})(jQuery);jQuery(Chorus.SocialCount.init);