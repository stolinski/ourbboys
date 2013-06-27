/**
 * @file
 * This file contains most of the code for the configuration page.
 */// Create the drupal ShareThis object for clean code and namespacing:
var drupal_st={multiW:function(){$(".st_widgetPic").addClass("st_multi")},classicW:function(){$(".st_widgetPic").removeClass("st_multi")},smallChicklet:function(){drupal_st.removeButtonClasses();$("#stb_sprite").addClass("stbc_")},largeChicklet:function(){drupal_st.removeButtonClasses();$("#stb_sprite").addClass("stbc_large")},hcount:function(){drupal_st.removeButtonClasses();$("#stb_sprite").addClass("stbc_hcount")},vcount:function(){drupal_st.removeButtonClasses();$("#stb_sprite").addClass("stbc_vcount")},button:function(){drupal_st.removeButtonClasses();$("#stb_sprite").addClass("stbc_button")},removeButtonClasses:function(){var a=$("#stb_sprite");a.removeClass("stbc_");a.removeClass("stbc_large");a.removeClass("stbc_hcount");a.removeClass("stbc_vcount");a.removeClass("stbc_button")},getWidget:function(){return $(".st_widgetPic").hasClass("st_multiW")?"5x":"4x"},getButtons:function(){var a="large",b=$(".st_wIm");b.each(function(){$(this).hasClass("st_select")&&(a=$(this).attr("id").substring(3))});console.log(a);return a},setupServiceText:function(){$("#edit-service-option").css({display:"none"})},addEvents:function(){$("#edit-widget-option-st-multi").click(drupal_st.multiW);$("#edit-widget-option-st-direct").click(drupal_st.classicW);$("#edit-button-option-stbc-").click(drupal_st.smallChicklet);$("#edit-button-option-stbc-large").click(drupal_st.largeChicklet);$("#edit-button-option-stbc-hcount").click(drupal_st.hcount);$("#edit-button-option-stbc-vcount").click(drupal_st.vcount);$("#edit-button-option-stbc-button").click(drupal_st.button);$(".st_formButtonSave").click(drupal_st.updateOptions)},serviceCallback:function(){var a=stlib_picker.getServices("myPicker"),b="";for(i=0;i<a.length;i++){b+='"'+_all_services[a[i]].title+":";b+=a[i]+'",'}b=b.substring(0,b.length-1);$("#edit-service-option").attr("value",b)}};$(document).ready(drupal_st.addEvents);$(document).ready(drupal_st.setupServiceText);