//
// 공통 UI 제어
//

$(document).ready(function () {
	// Sidebar
	$('.lnb_area .depth2').each(function () {
		$(this).css('display', 'none');
	});
	$('.lnb_area .collapse.on').each(function () {
		$(this).find('.depth2').css('display', 'block');
	});

	$(document).on('click', '.lnb_area .collapse > a', function (e) {
		e.preventDefault();
		$(this).next('ul').slideToggle('fast').parent('li').toggleClass('on');
	}).on('click', '.btn_sidebar', function (e) {
		e.preventDefault();
		$(this).parent('#v_sidebar').toggleClass('open');
	});

	// Quickmenu
	$(document).on('click', '.btn_quickmenu', function () {
		$('#v_quickmenu').removeClass('close');
	}).on('click', '.btn_quick_close', function () {
		$('#v_quickmenu').addClass('close');
	});

	// 탭메뉴
	$('.tab_list a').on('click', function () {
		$(this).parent('li').addClass('on').siblings('li').removeClass('on');
	});

	// 상세 펼치기/닫기
	$('.btn_accordion').click(function () {
		$(this).parent('.accordion_item').toggleClass('open');
	});

	// 등록 - 파일첨부
	$(document).on('change', '.form_file', function () {
		if (window.FileReader) {
			var filename = $(this)[0].files[0].name;
		} else {
			var filename = $(this).val().split('/').pop().split('\\').pop();
		}
		$(this).next('.file_name').val(filename);
	});
	$('.file_attatch .file_name').on('click', function () {
		$(this).prev('.form_file').click();
	});
});