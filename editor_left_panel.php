
<div class="inner_left_setting_section clearfix">
			<!--outer editor sidepanel-->
			<div class="lft_header_panel fixed_header h65">
				<div class="flex_row no_wrap_row">
					<div class="logo_container flex_col-auto text-center h65">
						<figure class="ed_logo">
							<img src="images/logo.png" alt="">
						</figure>
					</div>
					<div class="logo_text flex_col h65">
						<span>Debut Before Bold RO 2/28</span>
					</div>
				</div>
			</div>

			<div class="mid_page_list_setting_panel">
				<ul class="flex_nav flex_nav-tabs list_setting_panel" id="theme_navTab" role="tablist">
						<li class="flex_nav-item active">
							<a class="flex_nav-link" id="section_tab" data-toggle="tab" href="#pg_section" role="tab" aria-controls="pg_section" aria-selected="true">Sections</a>
						</li>
						<li class="flex_nav-item">
							<a class="flex_nav-link" id="theme_tab" data-toggle="tab" href="#pg_theme" role="tab" aria-controls="pg_theme" aria-selected="false">Theme settings</a>
						</li>
				</ul>
				<div class="flex_tab-content list_setting_tab-content" id="theme_TabContent">
						<div class="flex_tab-pane fade active" id="pg_section" role="tabpanel" aria-labelledby="section_tab">
									<?php include( 'tab_editor_suffle_sec.php'); ?>
						</div>
						<div class="flex_tab-pane fade" id="pg_theme" role="tabpanel" aria-labelledby="theme_tab">
								<?php include( 'tab_editor_page_theme_sec.php'); ?>
						</div>
				</div>
			</div>
			<!--end code-outer editor sidepanel-->

			<!--inner editor sidepanel-->
			<div class="page_content_editor_panel clearfix" id="inner_content_editor_panel" editor_open = "false">
					<?php include('inner_editor.php'); ?>
			</div>
			<!--end code-inner editor sidepanel-->

			<!--undo-redo editor sidepanel-->
			<div class="lft_header_panel bottom_header" editor_bottom_control>
				<div class="flex_row no_wrap_row">
					<div class="ft_sec flex_col-12">
							<div class="flex_row no_wrap_row flex_no-gutters justify-content-center align-items-center">
								<div class="custom_selectpicker_container flex-align-left">
									<select class="selectpicker inlineSlPks">
											<option disabled selected>Theme actions</option>
											<option><a href="#">Preview theme</a></option>
											<option><a href="#">Edit code</a></option>
											<option><a href="#">Edit languages</a></option>
									</select>
								</div>
								<div class="btm_undo_sec flex-align-right">
									<button class="btn ico_fn_btn">
											<svg viewBox="0 0 20 20"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#undo_ico"></use></svg>
									</button>
									<button class="btn ico_fn_btn">
											<svg viewBox="0 0 20 20" style="transform: rotateY(180deg);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redo_ico"></use></svg>
									</button>
								</div>
							</div>
					</div>
				</div>
			</div>
			<!--end code-undo-redo editor sidepanel-->



</div>
