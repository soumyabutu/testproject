<!--page header-->
	<?php include( 'editor_header.php'); ?>
<!--end page header-->

<!--main-->
	<main class="theme_control">
		<aside class="left_setting_section fixed_lf_panel" id="left_setting_panel">
			<?php include( 'editor_left_panel.php'); ?>
		</aside>
		<!--end left_setting_section-->

		<div class="right_page_section float_right_panel" id="data_theme_page">
			<!--NOTE: imp. class name-
								open_page_panel      := display left panel with ( theme panel );
								mobile_page_panel    := display page in mobile view;
								full_with_page_panel := display page in full width;
			-->
			<?php include( 'editor_page_panel.php'); ?>
		</div>
		<!--end right_page_section-->
	</main>
	<!--end main-->


	<!--all svg-->
	<div class="all_svg_container">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="icon_mob"><path fill="transparent" d="M3 1h14v18H3V1z"></path><path fill="currentColor" d="M17 0c.552 0 1 .447 1 1v18c0 .553-.448 1-1 1H3c-.552 0-1-.447-1-1V1c0-.553.448-1 1-1h14zM4 18h12V2H4v16zM9 6h2c.552 0 1-.447 1-1s-.448-1-1-1H9c-.552 0-1 .447-1 1s.448 1 1 1zm1 8c-.552 0-1 .447-1 1s.448 1 1 1 1-.447 1-1-.448-1-1-1z"></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="icon_desktop"><path fill="transparent" d="M1 1h18v10H1V1z"></path><path fill="currentColor" d="M13 14H2v-2h16v2h-5zm-.606 4H7.606c.16-.522.295-1.182.357-2h4.074c.062.818.196 1.478.357 2zM2 10V2h16v8H2zM19 0H1C.448 0 0 .447 0 1v14c0 .553.448 1 1 1h4.95c-.156 1.657-.66 2.293-.658 2.293-.285.286-.37.716-.216 1.09S5.596 20 6 20h8c.39 0 .734-.242.897-.598s.09-.788-.166-1.084c-.004-.007-.52-.64-.68-2.318H19c.552 0 1-.447 1-1V1c0-.553-.448-1-1-1z"></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="icon_fl_width"><path fill="currentColor" d="M16.707 6.293l3 3c.39.39.39 1.023 0 1.414l-3 3c-.195.195-.45.293-.707.293s-.512-.098-.707-.293c-.39-.39-.39-1.023 0-1.414L16.586 11H12c-.552 0-1-.447-1-1s.448-1 1-1h4.586l-1.293-1.293c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0zm-12 0c.39.39.39 1.023 0 1.414L3.414 9H8c.552 0 1 .447 1 1s-.448 1-1 1H3.414l1.293 1.293c.39.39.39 1.023 0 1.414-.195.195-.45.293-.707.293s-.512-.098-.707-.293l-3-3c-.39-.39-.39-1.023 0-1.414l3-3c.39-.39 1.023-.39 1.414 0zM19 0c.552 0 1 .447 1 1v2c0 .553-.448 1-1 1s-1-.447-1-1V2H2v2c0 .553-.448 1-1 1s-1-.447-1-1V1c0-.553.448-1 1-1h18zm0 15c.552 0 1 .447 1 1v3c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1v-3c0-.553.448-1 1-1s1 .447 1 1v2h16v-2c0-.553.448-1 1-1z"></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="undo_ico"><path d="M11.5 3H3.414l1.293-1.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-3 3c-.39.39-.39 1.023 0 1.414l3 3c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L3.414 5H11.5c3.584 0 6.5 2.916 6.5 6.5S15.084 18 11.5 18 5 15.084 5 11.5V11c0-.552-.448-1-1-1s-1 .448-1 1v.5c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5C20 6.813 16.187 3 11.5 3z"></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="redo_ico" ><path d="M11.5 3H3.414l1.293-1.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-3 3c-.39.39-.39 1.023 0 1.414l3 3c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L3.414 5H11.5c3.584 0 6.5 2.916 6.5 6.5S15.084 18 11.5 18 5 15.084 5 11.5V11c0-.552-.448-1-1-1s-1 .448-1 1v.5c0 4.687 3.813 8.5 8.5 8.5s8.5-3.813 8.5-8.5C20 6.813 16.187 3 11.5 3z" ></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="header_ico"><path d="M19 0c.552 0 1 .448 1 1v7c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1h18zM2 7h16V2H2v5zm6 11c.552 0 1 .448 1 1s-.448 1-1 1H6c-.552 0-1-.448-1-1s.448-1 1-1h2zm6 0h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm5-1c-.552 0-1 .448-1 1-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1zM2 18c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zm-1-3c.552 0 1-.448 1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1zm18-4c-.552 0-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1v-2c0-.552-.448-1-1-1z"></path></svg>

			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="close_ico"><path d="M18.263 16l10.07-10.07c.625-.625.625-1.636 0-2.26s-1.638-.627-2.263 0L16 13.737 5.933 3.667c-.626-.624-1.637-.624-2.262 0s-.624 1.64 0 2.264L13.74 16 3.67 26.07c-.626.625-.626 1.636 0 2.26.312.313.722.47 1.13.47s.82-.157 1.132-.47l10.07-10.068 10.068 10.07c.312.31.722.468 1.13.468s.82-.157 1.132-.47c.626-.625.626-1.636 0-2.26L18.262 16z"></path></svg>
	</div>
	<!--all svg ends here-->


<!--page footer-->
	<?php include( 'editor_footer.php'); ?>
<!--end page footer-->
