<div class="inner_right_page_section clearfix h-100 " >


			<div class="rt_header_panel top_header">
				<div class="flex_row no_wrap_row justify-content-center">
					<div class="logo_container flex_col-auto text-center h65 fl_width_logo_container">
						<figure class="ed_logo">
							<img src="images/logo.png" alt="">
						</figure>
					</div>
					<div class="flex_col-auto theme_page_dropdown h50 flex-align-left">
							<div class="custom_selectpicker_container">
								<select class="selectpicker inlineSlPks" id="change_theme_page">
                    <option><a href="#">theme_index.html</a></option>
                    <option><a href="#">about.html</a></option>
                    <option><a href="#">contact.html</a></option>
                    <option><a href="#">creat_order.html</a></option>
                    <option><a href="#">faq.html</a></option>
										<option><a href="#">my_details.html</a></option>
										<option><a href="#">payment-method.html</a></option>
										<option><a href="#">privacy_policy.html</a></option>
										<option><a href="#">product_details.html</a></option>
										<option><a href="#">product.html</a></option>
										<option><a href="#">shipping-address.html</a></option>
										<option><a href="#">shipping-method.html</a></option>
										<option><a href="#">trial.html</a></option>
                </select>
							</div>
					</div>
					<div class="flex_col-auto theme_device_view h50">
						<ul class="page_nav_list mode_list_style text-center" id="page_mode_nav_list">
							<!--NOTE:
							page_mob := on click display mobile page view
							page_desktop := on click display desktop page view
							page_full_width := on click display full width page view
							-->
							<li class="page_mode_nav">
								<a href="javascript:void(0)" class="ico_list pg_nav_list" id="page_mob">
									<svg viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_mob"></use></svg>
								</a>
							</li>
							<li class="page_mode_nav active">
								<a href="javascript:void(0)" class="ico_list pg_nav_list" id="page_desktop">
									<svg viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_desktop"></use></svg>
								</a>
							</li>
							<li class="page_mode_nav">
								<a href="javascript:void(0)" class="ico_list pg_nav_list" id="page_full_width">
									<svg viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_fl_width"></use></svg>
								</a>
							</li>
						</ul>
					</div>
					<div class="flex_col-auto theme_action flex-align-right h50">
						<button class="btn btn-primary" name="save_btn">SAVE</button>
					</div>
				</div>
			</div>
			<div class="suffle_page_contents">
					<?php include( 'theme_page.php'); ?>
			</div>
</div>
<!--end right_page_section-->
