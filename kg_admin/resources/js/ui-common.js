//
// 공통 UI 제어
//

$(document).ready(function () {
	// Sidebar
	$('.lnb_area .depth3').each(function () {
		$(this).css('display', 'none');
	});
	$('.lnb_area .collapse.on').each(function () {
		$(this).find('.depth3').css('display', 'block');
	});

	$(document).on('click', '.lnb_area .collapse > a', function (e) {
		e.preventDefault();
		$(this).next('ul').slideToggle('fast').parent('li').toggleClass('on');
	});

	// 탭메뉴
	$('.tab_list a').on('click', function (e) {
		var tg = $(this).attr('href');
		$(this).parent('li').addClass('on').siblings('li').removeClass('on');
		$(tg).show().siblings('.tab_cont').hide();
		e.preventDefault();
	});

	// 드롭다운
	$(document).on('click', '.dropdown_menu .dropdown_btn, .dropdown_list .dropdown_item', function () {
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