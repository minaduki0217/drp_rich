$(function () {
    $(".clear-button").on("click", function () {
        clearForm(this.form);
        $("#periodMessage").text("");
        $("#groupMessage").text("");
        $("#other1Message").text("");
        $("#other2Message").text("");
        $("#other3Message").text("");
        $("#other4Message").text("");
        $("#other5Message").text("");
        $("#other6Message").text("");
        $("#other7Message").text("");
        $("#other8Message").text("");
        $("#other9Message").text("");
        // 一撃作品を非表示
        $(".ichigekiGroup").css("display", "none");
        // 短TA作品を非表示
        $(".shortTAGroup").css("display", "none");
        // 長TA作品を非表示
        $(".longTAGroup").css("display", "none");
        // Give&Takeパートナーを非表示
        $(".giveAndTakePartner").css("display", "none");
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    function clearForm (form) {
        $(form)
            .find("input, select, textarea")
            .val("")
            .prop("checked", false)
            .prop("selected", false)
        ;

        $(form).find(":radio").filter("[data-default]").prop("checked", true);
    }
});

$(function() {
    // 一撃作品を非表示
    $(".ichigekiGroup").css("display", "none");
    // 短TA作品を非表示
    $(".shortTAGroup").css("display", "none");
    // 長TA作品を非表示
    $(".longTAGroup").css("display", "none");
    // Give&Takeパートナーを非表示
    $(".giveAndTakePartner").css("display", "none");

    $('input:checkbox').change(function() {
        var errorFlg = false;
        // 一撃作品の表示・非表示切替
        $("#periodMessage").text("");
        $("#groupMessage").text("");
        $("#other1Message").text("");
        $("#other2Message").text("");
        $("#other3Message").text("");
        $("#other4Message").text("");
        $("#other5Message").text("");
        $("#other6Message").text("");
        $("#other7Message").text("");
        $("#other8Message").text("");
        $("#other9Message").text("");
        var period1Cnt = $('.period1 :checked').length;
        var period2Cnt = $('.period2 :checked').length;
        var period3Cnt = $('.period3 :checked').length;
        var period4Cnt = $('.period4 :checked').length;
        var periodAllCnt = period1Cnt + period2Cnt + period3Cnt + period4Cnt;
        var group1Cnt = $('.group1 :checked').length;
        var group2Cnt = $('.group2 :checked').length;
        var group3Cnt = $('.group3 :checked').length;
        var group4Cnt = $('.group4 :checked').length;
        var ichigekiCnt = $('.ichigekiGroup :checked').length;
        var longTACnt = $('.longTAGroup :checked').length;
        var shortTACnt = $('.shortTAGroup :checked').length;
        
        if (period1Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第1期間は2つまでしか選択できません。");
            errorFlg = true;
        }
        if (period2Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第2期間は2つまでしか選択できません。");
            errorFlg = true;
        }
        if (period3Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第3期間は2つまでしか選択できません。");
            errorFlg = true;
        }
        if (period4Cnt > 2) {
            $(this).prop('checked', false);
            $("#periodMessage").text("第4期間は2つまでしか選択できません。");
            errorFlg = true;
        }
        if (group1Cnt > 1) {
            $(this).prop('checked', false);
            $("#groupMessage").text("緑色の枠は1つしか選択できません。（[初見1][初見2]）");
            errorFlg = true;
        }
        if (group2Cnt > 2) {
            $(this).prop('checked', false);
            $("#groupMessage").text("赤色の枠は2つまでしか選択できません。（[一撃][初見TA][長TA][Give&Take][短TA][メイドインワリオ]）");
            errorFlg = true;
        }
        if (group3Cnt > 3) {
            $(this).prop('checked', false);
            $("#groupMessage").text("青色の枠は3つまでしか選択できません。（[ミニゲーム][初見殺し][トレハン][デス数]）");
            errorFlg = true;
        }
        if (group4Cnt > 1) {
            $(this).prop('checked', false);
            $("#groupMessage").text("黄色の枠は1つしか選択できません。（[ボス][耐久][針ゲ]）");
            errorFlg = true;
        }
        if (ichigekiCnt > 1) {
            $(this).prop('checked', false);
            $("#other1Message").text("一撃作品は1つしか選択できません。");
            errorFlg = true;
        }
        if (longTACnt > 1) {
            $(this).prop('checked', false);
            $("#other2Message").text("一撃作品は1つしか選択できません。");
            errorFlg = true;
        }
        if (shortTACnt > 1) {
            $(this).prop('checked', false);
            $("#other3Message").text("一撃作品は1つしか選択できません。");
            errorFlg = true;
        }

        if(errorFlg == true) {
            $('body,html').animate({ scrollTop: 0 }, 500);
        }

        if(errorFlg == false) {
            if($("#ichigeki").prop("checked") == true) {
                $(".ichigekiGroup").css("display", "block");
            } else {
                $(".ichigekiGroup").css("display", "none");
            }
            if($("#shortTA").prop("checked") == true) {
                $(".shortTAGroup").css("display", "block");
            } else {
                $(".shortTAGroup").css("display", "none");
            }
            if($("#longTA").prop("checked") == true) {
                $(".longTAGroup").css("display", "block");
            } else {
                $(".longTAGroup").css("display", "none");
            }
            if($("#GiveTake").prop("checked") == true) {
                $(".giveAndTakePartner").css("display", "block");
            } else {
                $(".giveAndTakePartner").css("display", "none");
            }
        }
    })
});

$(function() {
    $('form').submit(function() {
        $("#periodMessage").text("");
        $("#groupMessage").text("");
        $("#other1Message").text("");
        $("#other2Message").text("");
        $("#other3Message").text("");
        $("#other4Message").text("");
        $("#other5Message").text("");
        $("#other6Message").text("");
        $("#other7Message").text("");
        $("#other8Message").text("");
        $("#other9Message").text("");
        var errorFlg = false;
        var period1Cnt = $('.period1 :checked').length;
        var period2Cnt = $('.period2 :checked').length;
        var period3Cnt = $('.period3 :checked').length;
        var period4Cnt = $('.period4 :checked').length;
        var periodAllCnt = period1Cnt + period2Cnt + period3Cnt + period4Cnt;
        var ichigekiCnt = $('.ichigekiGroup :checked').length;
        var longTACnt = $('.longTAGroup :checked').length;
        var shortTACnt = $('.shortTAGroup :checked').length;

        if($("#name").val() == "") {
              $("#other1Message").text("お名前は入力必須です。");
              errorFlg = true;
        }
        if($("#broadcastSite").val() == "") {
              $("#other2Message").text("配信サイトURLは入力必須です。");
              errorFlg = true;
        }
        if($("#discordID").val() == "") {
              $("#other3Message").text("Discord IDは入力必須です。");
              errorFlg = true;
        }
        if($("#ichigeki").prop("checked") == true) {
            if (ichigekiCnt == 0) {
                $("#other4Message").text("一撃を選択した場合、一撃作品を1つ選択して下さい。");
                errorFlg = true;
            }
        }
        if($("#longTA").prop("checked") == true) {
            if (longTACnt == 0) {
                $("#other5Message").text("長TAを選択した場合、長TA作品を1つ選択して下さい。");
                errorFlg = true;
            }
        }
        if($("#shortTA").prop("checked") == true) {
            if (shortTACnt == 0) {
                $("#other6Message").text("短TAを選択した場合、短TA作品を1つ選択して下さい。");
                errorFlg = true;
            }
        }
        if($("#GiveTake").prop("checked") == true) {
            if($("#giveAndTakePartnerName").val() == "") {
              $("#other7Message").text("Give&Takeを選択した場合、パートナーは入力必須です。");
              errorFlg = true;
            }
        }
        if (periodAllCnt == 0) {
            $("#other8Message").text("競技種目は最低でも1つ以上選択して下さい。");
            errorFlg = true;
        }
        if($("#agree").prop("checked") == false) {
            $("#other9Message").text("規約に同意して頂けない場合、大会に参加出来ません。");
            errorFlg = true;
        }
        if(errorFlg == true) {
            $('body,html').animate({ scrollTop: 0 }, 500);
            return false;
        }
    })
});