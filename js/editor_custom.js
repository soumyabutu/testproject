$(document).ready(function(){

  //global variable to select iframe content
  var editor_frame = $('#theme_page_container').contents();



  //sort/suffle page section
  $('#sortable_section').sortable({
    cursor: 'pointer',
    delay: 150,
    axis: "y",
    placeholder: "ui-highlight",
    items: ".suffle_page_ctrl_item:not(.suffle_item_disable)",  //class to disable sortable item
    update: function( event, ui ){
      var nextPosition;
      var index = ui.item.attr('id').replace('sortable_section', '');
      currPosition = editor_frame.find('#theme_page' + index);  //find section in iframe
      if (ui.item.next().attr('id') === undefined) {
        nextPosition = editor_frame.find('.theme_page_single_content');
        currPosition.insertAfter(nextPosition);
      }
      else {
        index = ui.item.next().attr('id').replace('sortable_section', '');
        nextPosition = editor_frame.find('#theme_page' + index);
        currPosition.insertBefore(nextPosition);
      }
    }
  }).disableSelection(); //disable hover-effect
  /*--end-code-suffle left panel content--*/



  //on click toggle eye btn
  $('[page_visibility_btn]').click(function(e){
    e.stopPropagation();
    console.log("yes");
    if(!$(this).hasClass('bt_hide')) {
      $(this).stop().addClass('bt_hide');
    }
    else {
      $(this).removeClass('bt_hide');
    }
  });
  //end-code-on click toggle eye btn




  //disable toggle-eye btn if parent is not dragable
  $('#sortable_section [page_visibility_btn]').click(function(){
    if( $(this).parents('.suffle_page_ctrl_item').hasClass('suffle_item_disable') ) {
      $(this).removeClass('bt_hide');
    }
  });
  //end-code-disable toggle-eye btn if parent is not dragable




  //hide section when we found lft panel visibility btn is hide
  $('#sortable_section [page_visibility_btn]').click(function(){
    var suffle_item = $(this).parents('.suffle_page_ctrl_item').attr('data-suffle_item');
    if( $(this).hasClass('bt_hide') ) {
      $(this).parents('.suffle_page_ctrl_item').addClass('hide_page_item');
      //hide trigger page section on demand
      editor_frame.find('.theme_page_single_content[data-suffle_item='+suffle_item+']').hide();
    }
    else{
      $(this).parents('.suffle_page_ctrl_item').removeClass('hide_page_item');
      //show trigger page section on demand
      editor_frame.find('.theme_page_single_content[data-suffle_item='+suffle_item+']').show();
    }
  });
  //end-code-hide section when we found lft panel visibility btn is hide




  /*swith mode-mobile mode-*/
  $('#page_mob').on('click', function(){
    $('#page_mode_nav_list li').removeClass('active');
    $(this).parents('.page_mode_nav').addClass('active');

    if ( $('#data_theme_page').hasClass('full_with_page_panel') ) {
      $('#data_theme_page').removeClass('full_with_page_panel');
    }
    $('#data_theme_page').addClass('mobile_page_panel');

    //hide side hide_panel
    $("#left_setting_panel").removeClass('hide_panel');
  });
  /*end-code-swith mode-mobile mode-*/




  /*--swith mode-full mode-*/
  $('#page_full_width').on('click', function(){
    $('#page_mode_nav_list li').removeClass('active');
    $(this).parents('.page_mode_nav').addClass('active');

    if ( $('#data_theme_page').hasClass('mobile_page_panel') ) {
      $('#data_theme_page').removeClass('mobile_page_panel');
    }
    $('#data_theme_page').addClass('full_with_page_panel');

    //hide side hide_panel
    $("#left_setting_panel").addClass('hide_panel');
  });
  /*end-code-swith mode-full mode-*/




  /*swith mode-normal mode-*/
  $('#page_desktop').on('click', function(){
    $('#page_mode_nav_list li').removeClass('active');
    $(this).parents('.page_mode_nav').addClass('active');

    if ( $('#data_theme_page').hasClass('full_with_page_panel') ) {
      $('#data_theme_page').removeClass('full_with_page_panel');
    }
    if ( $('#data_theme_page').hasClass('mobile_page_panel') ) {
      $('#data_theme_page').removeClass('mobile_page_panel');
    }

    //hide side hide_panel
    $("#left_setting_panel").removeClass('hide_panel');
  });
  /*end-code-swith mode-normal mode-*/




  /*--load page on demand--*/
  $("#change_theme_page").on('change',function() {
    var load_target_page = $(this).val();
    $("#theme_page_container").attr("src", "theme-folder/"+load_target_page);
  });
  /*--end-code-load page on demand--*/




/*--==================================inner side panel=======================================--*/
/*--open editor inner-side-panel--*/
  $('[data_editor_btn]').click(function(){
    var editor_inner_panel = $(this).parents('.suffle_page_ctrl_item').attr("editor_area_open");
    if(editor_inner_panel == 'false') {
      $('#inner_content_editor_panel').addClass('open');
      $('#inner_content_editor_panel').attr("editor_open", "true");
      $(this).parents('.suffle_page_ctrl_item').attr("editor_area_open", "true");

      //display corresponding section/block by data attr.
      var editor_open_target = $(this).attr("data_editor_btn");

      //find corresponding section/block by data attr and show.
      $('#inner_content_editor_panel .page_content_editor_panel_inner[data_target='+editor_open_target+']').slideDown();
    }
  });
/*--end code- open editor inner-side-panel--*/


/*--back/close editor -inner side panel--*/
  $("[close_inner_panel_btn]").click(function(){
    var editor_open_state = $("#inner_content_editor_panel").attr("editor_open");
    if(editor_open_state == 'true') {
      $("#inner_content_editor_panel").removeClass('open');
      $("#inner_content_editor_panel").attr("editor_open", "false");

      //find corresponding section/block by data attr and show.
      $("#inner_content_editor_panel .page_content_editor_panel_inner").slideUp();

      $("#left_setting_panel").find('.suffle_page_ctrl_item').attr("editor_area_open", "false");

    }
  });
/*--end-code-back/close editor -inner side panel--*/
/*--=================================END inner side panel=======================================--*/




/*--=================================inner side panel=======================================--*/
/*--start inner inner panel--*/
$("[inner_data_editor_btn]").click(function() {
  var inner_content_self_target = $(this).attr("inner_data_editor_btn");
  var inner_content_parent_target = $(this).parents("[inner_editor_area_target="+inner_content_self_target+"]");  console.log(inner_content_parent_target);
  var inner_content_flag = inner_content_parent_target.attr("inner_editor_area_open"); console.log(inner_content_flag);
  if(inner_content_flag == 'false') {
    $("[editor_bottom_control]").hide();

    $("#inner_content_editor_panel").addClass("imp_h100vh");

    inner_content_parent_target.attr("inner_editor_area_open","true");
    inner_content_parent_target.find("[inner_editor_area_action="+inner_content_self_target+"]").addClass("open");


    inner_content_parent_target.find("[inner_editor_area_action="+inner_content_self_target+"] .page_content_editor_panel_inner").show(400);

    //inner_content_parent_target.find(".inner_page_content_editor_panel .page_content_editor_panel_inner").show(400);
  }
  else {
    $("[editor_bottom_control]").show();

    inner_content_parent_target.find("[inner_editor_area_action="+inner_content_self_target+"] .page_content_editor_panel_inner").hide();
    //inner_content_parent_target.find(".inner_page_content_editor_panel .page_content_editor_panel_inner").hide();

    inner_content_parent_target.attr("inner_editor_area_open","false");
    inner_content_parent_target.find("[inner_editor_area_action="+inner_content_self_target+"]").removeClass("open");

    $("#inner_content_editor_panel").removeClass("imp_h100vh");
  }
});
/*--code ends--start inner inner panel--*/

/*--back/close editor -inner inner side panel--*/
  $("[close_inner_inner_panel_btn]").click(function(){
    var inner_content_btn_flag = $(this).parents("[inner_editor_area_open]").attr("inner_editor_area_open");
    if(inner_content_btn_flag == 'true') {
      $(this).parents("[inner_editor_area_open]").find(".inner_page_content_editor_panel").removeClass("open");
      $(this).parents("[inner_editor_area_open]").find(".inner_page_content_editor_panel .page_content_editor_panel_inner").slideUp();
      $(this).parents("[inner_editor_area_open]").attr("inner_editor_area_open","false");
      $("[editor_bottom_control]").show();
    }

  });
/*--end-code-back/close editor -inner inner side panel--*/
/*--=================================END inner inner side panel=======================================--*/




  /*--init colorPicker--*/
  //text-color picker
  $(".editor_txt_color").spectrum({
      showInput: true,
      showAlpha: false,
      showPalette: true,
      showPaletteOnly: false,
      togglePaletteOnly: true,
      showSelectionPalette: true,
      palette: [
        ['#272727' , '#333333' , '#17a2b8' , '#dfe3e8' , '#ffffff'],
        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
      ],
      allowEmpty: false,
      showSelectionPalette: true, // true by default
      localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
  });

  //background-color colorPicker
  $(".editor_bg_color").spectrum({
      showInput: true,
      showAlpha: true,
      showPalette: true,
      showPaletteOnly: false,
      togglePaletteOnly: true,
      showSelectionPalette: true,
      palette: [
        ['#272727' , '#333333' , '#17a2b8' , '#dfe3e8' , '#ffffff'],
        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
      ],
      allowEmpty: true,
      showSelectionPalette: true, // true by default
      localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
  });

  //border-color colorPicker
  $(".editor_border_color").spectrum({
      showInput: true,
      showAlpha: true,
      showPalette: true,
      showPaletteOnly: false,
      togglePaletteOnly: true,
      showSelectionPalette: true,
      palette: [
        ['#272727' , '#333333' , '#17a2b8' , '#dfe3e8' , '#ffffff'],
        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],
        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],
        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
      ],
      allowEmpty: true,
      showSelectionPalette: true, // true by default
      localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection
  });
  /*--end-code-init colorPicker--*/




  /*--range slider--*/
  $( "#slider_hr1, #slider_hr2, #slider_hr3, #slider_hr4" ).slider({
    range: "min",
    min: 20,
    max: 100,
    value: 60,
    slide: function( event, ui ) {
      $( "#sl_amount1, #sl_amount2, #sl_amount3, #sl_amount4" ).val( ui.value + '%' );
    }
  });
  $( "#sl_amount1, #sl_amount2, #sl_amount3, #sl_amount4" ).val( $( "#slider_hr1, #slider_hr2, #slider_hr3, #slider_hr4" ).slider( "value" ) + '%' );
  /*--end-code-range slider--*/





  /*--custom checkbox--from jquery UI--*/
  $( "#checkbox-1 , #checkbox-2, #checkbox-3 , #checkbox-4 , #checkbox-5" ).checkboxradio();
  /*--end-code-custom checkbox--from jquery UI--*/




  /*--file upload--*/
  /*change profile image1*/
  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              $("#imgTarget1").attr('style', 'background-image: url('+e.target.result+')');
          }
          reader.readAsDataURL(input.files[0]);
      }
  }
  $("data_img_change1").change(function(){
      readURL(this);
  });
  /*end-code-change profile image1*/

  /*change profile image1*/
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imgTarget2").attr('style', 'background-image: url('+e.target.result+')');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("data_img_change2").change(function(){
    readURL(this);
  });
  /*end-code-change profile image1*/
  /*--end-code-file-upload--*/





  /*--text editor--*/
  var quill = new Quill('#txt_editor1', {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link']
      ]
    },
    placeholder: 'Write here ...',
    theme: 'snow'  // or 'bubble'
  });


  var quill = new Quill('#txt_editor2', {
    modules: {
      toolbar: [
        ['bold', 'italic'],
        ['link']
      ]
    },
    placeholder: 'Write here ...',
    theme: 'snow'  // or 'bubble'
  });
  /*--end-code-text-editor--*/






  /*--toggle add button in add section-*/
  $("[add_new_section]").click(function(){
      if( $(this).attr("add_new_section") == "false" ) {
        $(this).find(".add_sec_btn").show();
        $(this).attr("add_new_section", "true");
      }
      else {
        $(this).find(".add_sec_btn").hide();
        $(this).attr("add_new_section", "false");
      }
  });
  /*--end-toggle add button in add section-*/





/*--start multi level dropdown--*/
$('#double_dropdown_list').multidropdown();
/*--end multi level dropdown--*/


});
