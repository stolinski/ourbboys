//This library requires JQuery
//It also requires stcommon.js in your header for an official list of services
//stlib_picker.defaultServices defines the services from stcommon that get loaded as the default services in the picker
//Styling can be found in stlib_picker.css and should be linked in the page.
//To get selected services as an array of strings:  (ie ["twitter", "sharethis", "facebook"] )
//   Call: var answer = stlib_picker.pickerList[uniqueID]["getServices"]();
var stlib_picker={};stlib_picker.pickerList=[];stlib_picker.defaultServices=["sharethis","tumblr","bebo"];stlib_picker.getServices=function(a){var b=stlib_picker.pickerList[a].getServices;return b()};stlib_picker.setupPicker=function(a,b,c){console.log("setting up picker");console.log(a);var d=[];d.El=a;d.isSelect=!1;d.getServices=function(){var b=[],c=a.children(".stp_pickerLeft").find(".stp_li");c.each(function(){b.push($(this).attr("id").substring(6))});return b};a.append("<div class='stp_pickerLeft'><span class='stp_header'>Selected Service</span><ul class='stp_ulLeft'></ul></div>");a.append("<div class='stp_pickerArrow'><div class='stp_arrow'><img class='stp_up' src='http://www.sharethis.com/images/Direction_Icons_Sprite.png'></img></div><div class='stp_arrow'><img class='stp_left' src='http://www.sharethis.com/images/Direction_Icons_Sprite.png'></img></div><div class='stp_arrow'><img class='stp_right' src='http://www.sharethis.com/images/Direction_Icons_Sprite.png'></img></div><div class='stp_arrow'><img class='stp_down' src='http://www.sharethis.com/images/Direction_Icons_Sprite.png'></img></div></div>");a.append("<div class='stp_pickerRight'><span class='stp_header'>Possible Services</span><ul class='stp_ulRight'></ul></div>");a.append("<div class='stp_clear'></div>");var e=[];b?e=b:e=stlib_picker.defaultServices;$.each(_all_services,function(b,c){if($.inArray(b,e)==-1){var d=a.children(".stp_pickerRight").children(".stp_ulRight");d.append("<li id='st_li_"+b+"' class='stp_li'><img src='http://w.sharethis.com/images/"+b+"_32.png'></img><span class='stp_liText'>"+c.title+"</span></li>")}});for(i=0;i<e.length;i++){var f=a.children(".stp_pickerLeft").children(".stp_ulLeft");f.append("<li id='st_li_"+e[i]+"' class='stp_li'><img src='http://w.sharethis.com/images/"+e[i]+"_32.png'></img><span class='stp_liText'>"+_all_services[e[i]].title+"</span></li>")}a.find(".stp_li").click(function(){a.find(".stp_select").removeClass("stp_select");$(this).addClass("stp_select");stlib_picker.pickerList[a.attr("id")].isSelect=!0});var g=a.children(".stp_pickerArrow").children(".stp_arrow");g.children(".stp_up").click(function(){if(stlib_picker.pickerList[a.attr("id")].isSelect){var b=a.find(".stp_select"),d=b.prev();d.length!=0&&d.before(b);c&&c()}});g.children(".stp_left").click(function(){if(stlib_picker.pickerList[a.attr("id")].isSelect){var b=a.find(".stp_select"),d=a.children(".stp_pickerLeft").children(".stp_ulLeft");d.prepend(b);c&&c()}});g.children(".stp_right").click(function(){if(stlib_picker.pickerList[a.attr("id")].isSelect){var b=a.find(".stp_select"),d=a.children(".stp_pickerRight").children(".stp_ulRight");d.prepend(b);c&&c()}});g.children(".stp_down").click(function(){if(stlib_picker.pickerList[a.attr("id")].isSelect){var b=a.find(".stp_select"),d=b.next();d.length!=0&&d.after(b);c&&c()}});stlib_picker.pickerList[a.attr("id")]=d};