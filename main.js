$(function() {
    $('input:checkbox').change(function() {
        $("#periodMessage").text("");
        $("#groupMessage").text("");
        var period1Cnt = $('.period1 :checked').length;
        var period2Cnt = $('.period2 :checked').length;
        var period3Cnt = $('.period3 :checked').length;
        var period4Cnt = $('.period4 :checked').length;
        var group1Cnt = $('.group1 :checked').length;
        var group2Cnt = $('.group2 :checked').length;
        var group3Cnt = $('.group3 :checked').length;
        var group4Cnt = $('.group4 :checked').length;
        
        if (period1Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第1期間は2つまでしか選択できません。");
        }
        if (period2Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第2期間は2つまでしか選択できません。");
        }
        if (period3Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第3期間は2つまでしか選択できません。");
        }
        if (period4Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第4期間は2つまでしか選択できません。");
        }
        if (group1Cnt > 1) {
            $(this).prop('checked', false);
            $("#groupMessage").text("緑色の枠は1つしか選択できません。（[初見1][初見2]）");
        }
        if (group2Cnt > 2) {
            $(this).prop('checked', false);
            $("#groupMessage").text("赤色の枠は2つまでしか選択できません。（[一撃][初見TA][長TA][Give&Take][短TA][メイドインワリオ]）");
        }
        if (group3Cnt > 3) {
            $(this).prop('checked', false);
            $("#groupMessage").text("青色の枠は3つまでしか選択できません。（[ミニゲーム][初見殺し][トレハン][デス数]）");
        }
        if (group4Cnt > 1) {
            $(this).prop('checked', false);
            $("#groupMessage").text("黄色の枠は1つしか選択できません。（[ボス][耐久][針ゲ]）");
        }
    })
});