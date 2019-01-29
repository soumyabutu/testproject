
$(document).ready(function(){

   function myfunction() {
			var sub_width = 0;
			var sub_height = 0;
		 	$(".large").css("background","url('" + $(".small").attr("src") + "') no-repeat");

			$(".zoom-area").mousemove(function(e){
				if(!sub_width && !sub_height)
				{
					var image_object = new Image();
					image_object.src = $(".small").attr("src");
					sub_width = image_object.width;
					sub_height = image_object.height;
				}
				else
				{
					var magnify_position = $(this).offset();

					var mx = e.pageX - magnify_position.left;
					var my = e.pageY - magnify_position.top;

					if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
					{
						$(".large").fadeIn(100);
					}
					else
					{
						$(".large").fadeOut(100);
					}
					if($(".large").is(":visible"))
					{
						var rx = Math.round(mx/$(".small").width()*sub_width - $(".large").width()/2)*-1;
						var ry = Math.round(my/$(".small").height()*sub_height - $(".large").height()/2)*-1;

						var bgp = rx + "px " + ry + "px";

						var px = mx - $(".large").width()/2;
						var py = my - $(".large").height()/2;

						$(".large").css({left: px, top: py, backgroundPosition: bgp});
					}
				}
			})
   };

  $('.btnzoom').click(function() {
       myfunction();
  });

});


$(".overlay").click(function() {
        $("body").removeClass("addpanel");
    });
$( ".menu_btn" ).click(function() {
    $( "body").toggleClass( "addpanel" );
});






$(document).ready(function () {

    $('.next').click(function () {
        $('.current').removeClass('current').hide().next().show().addClass('current');
        $('#progressbar li.active').next().addClass('active');

        if ($('#progress')) {};

        if($('li.first').hasClass('active')){
       $('li.first').removeClass('active');
            $('li.last').addClass('active');

        }else{
            $('li.last').addClass('active');
        }

        });

    $('.previous').click(function () {
        $('.current').removeClass('current').hide().prev().show().addClass('current');
        $('#progressbar li.active').removeClass('active').prev().addClass('active');
    });



    if($('.field3').hasClass('current')){
       $('.field1 #progressbar li.first').removeClass('current');
    };



});





$(".list-grid-buttons button").on('click',function(e) {

    if ($(this).hasClass('grid')) {
        $('.pr-outer').removeClass('list').addClass('grid');
    }
    else if($(this).hasClass('list')) {
        $('.pr-outer').removeClass('grid').addClass('list');
    }
});







$( function() {
    $.widget( "custom.combobox", {
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );

        this.element.hide();
        this._createAutocomplete();
        this._createShowAllButton();
      },

      _createAutocomplete: function() {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";

        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
          .tooltip({
            classes: {
              "ui-tooltip": "ui-state-highlight"
            }
          });

        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },

          autocompletechange: "_removeIfInvalid"
        });
      },

      _createShowAllButton: function() {
        var input = this.input,
          wasOpen = false;

        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", "Show All Items" )
          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .on( "mousedown", function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .on( "click", function() {
            input.trigger( "focus" );

            // Close if already visible
            if ( wasOpen ) {
              return;
            }

            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },

      _source: function( request, response ) {
        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
        response( this.element.children( "option" ).map(function() {
          var text = $( this ).text();
          if ( this.value && ( !request.term || matcher.test(text) ) )
            return {
              label: text,
              value: text,
              option: this
            };
        }) );
      },

      _removeIfInvalid: function( event, ui ) {

        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }

        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });

        // Found a match, nothing to do
        if ( valid ) {
          return;
        }

        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.autocomplete( "instance" ).term = "";
      },

      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      }
    });

    $( "#combobox" ).combobox();
    $( "#toggle" ).on( "click", function() {
      $( "#combobox" ).toggle();
    });
  } );


$('.amnt a').on('click', function(){
    $(this).closest(".pr-row").remove();
});

$(".uc-btn").click(function(){
    $(".tgl-fld").slideToggle(500);
});


$("#q1").click(function() {
    $('html, body').animate({
        scrollTop: $("#qa1").offset().top -78
    }, 1000);
});

$("#q2").click(function() {
    $('html, body').animate({
        scrollTop: $("#qa2").offset().top -78
    }, 1000);
});

$("#q3").click(function() {
    $('html, body').animate({
        scrollTop: $("#qa3").offset().top -78
    }, 1000);
});


$('input[type="number"]').keypress(function(e) {
    var a = [];
    var k = e.which;

    for (i = 48; i < 58; i++)
        a.push(i);

    if (!(a.indexOf(k)>=0))
        e.preventDefault();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  draggable: false
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  draggable: false
});


/*--27.6.2018--*/
$(document).ready(function(){
    $('#banner_slider1').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="sl_btn slick-prev"><img src="images/sl_arrow-left.png" alt="" /></button>',
        nextArrow: '<button type="button" class="sl_btn slick-next"><img src="images/sl_arrow-right.png" alt="" /></button>'
    });

    $('#banner_slider2').slick({
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="sl_btn slick-prev"><img src="images/sl_arrow-left.png" alt="" /></button>',
        nextArrow: '<button type="button" class="sl_btn slick-next"><img src="images/sl_arrow-right.png" alt="" /></button>'
    });

    $('#testimonial_slide1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" class="sl_btn slick-prev"><img src="images/sl_arrow-left.png" alt="" /></button>',
        nextArrow: '<button type="button" class="sl_btn slick-next"><img src="images/sl_arrow-right.png" alt="" /></button>',
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

     var slickTrack = $('.testimonial_slide_container').find('.slick-track');
     var slickTrackHeightInner = $(slickTrack).innerHeight();
     //console.log(slickTrackHeightInner);
     $('.testimonial_slide_container').find('.testimonial_slide_items').css('height', slickTrackHeightInner + 'px');

});

/*--30.6.2018--*/
/*--zoom image-gallery2--*/
function img_zoom() {
		//initiate the plugin and pass the id of the div containing gallery images
    $('#img_01').elevateZoom({
		 loadingIcon : '../images/loading.gif',
     zoomType	: "lens",
	 	 lensShape : "round",
	 	 lensSize : 200,
		 borderColour :	'#fff',
		 borderSize :	4,
		 lensBorder	: 2,
	 	 cursor : "crosshair",
	 	 zoomWindowFadeIn : 500,
	 	 zoomWindowFadeOut : 750,
	 	 scrollZoom : true,
		 responsive : true,
		 loadingIcon : true,
	 	 galleryActiveClass : 'active',
		 gallery :'gallery_01'
   });
 }


 /*--text counter-function--*/
function my_spinner(spiner_item) {
	var interval;

	var inp_spin_val = $(spiner_item);

	var inp_spin_parent = $(inp_spin_val).parents(".spin_slider");

	var count = $(inp_spin_val).val();

	var count_max_limit = $(inp_spin_val).attr("data-max");
	var count_min_limit = $(inp_spin_val).attr("data-min");

  //check default value
  if(count < count_min_limit){
    count = count_min_limit;
  }
  if(count > count_max_limit){
    count = count_max_limit;
  }

	inp_spin_parent.find("[data-range-plus]").on('click',function() {
    if (count < count_max_limit ) {
      count++;
      $(inp_spin_val).val(count);
      $(inp_spin_val).attr("value",count);
    }
	});

	inp_spin_parent.find("[data-range-minus]").on('click',function() {
    if (count > count_min_limit ) {
      count--;
      $(inp_spin_val).val(count);
      $(inp_spin_val).attr("value",count);
    }
	});
}
/*--end number counter-function--*/


$(document).ready(function(){

 $("#btnzoom").click(function(){
    //call function
 	 img_zoom();
});
  /*--call increment function--*/
  my_spinner("#count1");

  //initiate the plugin and pass the id of the div containing gallery images
  $('#img_02').elevateZoom({
   loadingIcon : '../images/loading.gif',
   zoomType	: "lens",
   lensShape : "round",
   lensSize : 200,
   borderColour :	'#fff',
   borderSize :	4,
   lensBorder	: 2,
   cursor : "crosshair",
   zoomWindowFadeIn : 500,
   zoomWindowFadeOut : 750,
   scrollZoom : true,
   responsive : true,
   loadingIcon : true
  });

 });
