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
	$('.tab_list a').on('click', function (e) {
		var tg = $(this).attr('href');
		$(this).parent('li').addClass('on').siblings('li').removeClass('on');
		$(tg).show().siblings('.tab_cont').hide();
		e.preventDefault();
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

	// 드롭다운
	$(document).on('click', '.dropdown_menu .dropdown_btn, .dropdown_list .v_btn', function () {
		$(this).closest('.dropdown_menu').toggleClass('on');
		return false;
	}).on('click', 'html', function (e) {
		if ($('.dropdown_menu').has(e.target).length === 0) {
			$('.dropdown_menu').removeClass('on');
		}
	});
});

// 레이어 팝업
$(function () {
	$('.layer_popup.show').each(function () {
		openModal($(this), null);
	});
});
$(document).on('click', '.layer_popup .btn_close_popup', function () {
	var target = $(this).closest('.layer_popup').attr('id');
	closeModal('#' + target);
});
function openModal(_target) {
	if ($(_target).length > 0) {
		$(_target).appendTo('body');
		$('body').addClass('layer_open');
		setTimeout(function () {
			$(_target).addClass('show').removeClass('hide');
		}, 100);
	}
}
function closeModal(_target) {
	$(_target).addClass('hide').removeClass('show');
}

// 윈도우 팝업
var popOpenBtn = null;
function openWindow(_obj, popName, w, h, _opener) {
	var popW = 800;
	var popH = 500;
	var myUrl = _obj;
	if (typeof _obj !== 'string') {
		if ($(_obj).prop('tagName') === 'A') {
			popOpenBtn = $(_obj);
			myUrl = $(_obj).attr('href');
		} else if (_opener) {
			popOpenBtn = $(_opener);
		}
	}
	if (w) popW = w;
	if (h) popH = h;
	var left = window.screenX + (window.outerWidth - popW) / 2;
	var top = window.screenY + (window.outerHeight - popH) / 2;
	window.open(myUrl, popName, 'width=' + popW + ', height=' + popH + ', left=' + left + ', top=' + top + ', scrollbars=yes');
}
function closeWindow() {
	window.close();
}