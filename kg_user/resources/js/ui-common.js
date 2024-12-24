//
// 공통 UI 제어
//

$(document).ready(function () {
	// 탭메뉴
	$('.tab_list a').on('click', function (e) {
		var tg = $(this).attr('href');
		$(this).parent('li').addClass('on').siblings('li').removeClass('on');
		$(tg).show().siblings('.tab_cont').hide();
		e.preventDefault();
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

// 비밀번호 인증 팝업
$(document).on('click', '.btn_show', function () {
	if ($(this).hasClass('on')) {
		$(this).removeClass('on').closest('.input_item').find('input').prop('type','password');
	} else {
		$(this).addClass('on').closest('.input_item').find('input').prop('type','text');
	}
});