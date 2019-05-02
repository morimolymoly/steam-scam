const Rate = {
    "USD": 1,
    "EUR": 0.81,
    "RUB": 58.16,
    "GBP": 0.70,
}

function Link(str) {
    window.open(str, "_blank");
}
function RNG(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
function RAND(obj) {
    $('.inventory .row .item').each(function () {
        var arr = Object.keys(obj)
        var name = arr[RNG(0, arr.length - 1)]
        var item = $(this)
        item.attr('onclick', 'Link(\'' + obj[name].url + '\')')
        item.find("img").attr('src', obj[name].img)
        item.find(".price").html('<span data-v-245e7976="" class="text-success">$</span>' + obj[name].p)
        item.find(".no_select_gtm div").text(name)
        delete obj[name]
    })
}
function Check(giv) {

    if (giv) {
        $('.overlay_cont h1:nth-child(2)').show();
        $('.overlay_cont h1:nth-child(1)').hide();
    } else {
        $('.overlay_cont h1:nth-child(2)').hide();
        $('.overlay_cont h1:nth-child(1)').show();
    }
    $('#app').addClass('blur')
    $('#overlay').fadeIn();
}
function getBrowser(short) {
    var N = navigator.appName, ua = navigator.userAgent, tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
    if (navigator.userAgent.match(/OPR\/.+/) != null) {
        return short ? "op" : "Opera"
    }
    if (M[0] == "Chrome") {
        return short ? "ch" : "Google Chrome"
    } else if (M[0] == "Firefox") {
        return short ? "moz" : "Mozilla Firefox"
    } else {
        return M[0];
    }
}
LocList = ["bg-BG", "da-DK", "cs-CZ", "nl-NL", "en-GB", "fi-FI", "fr-FR", "de-DE", "el-GR", "hu-HU", "it-IT", "ja-JP", "ko-KR", "nb-NO", "pl-PL", "pt-PT", "pt-BR", "ro-RO", "ru-RU", "zh-CN", "es-ES", "sv-SE", "zh-TW", "th-TH", "tr-TR", "uk-UA"]
function LocExtend(lang) {
    var lng = 'en-GB';
    LocList.forEach(function (val) {
        if (lang == val.match(/(.+?)-(.+?)/)[1]) {
            lng = val
        }
    })
    return lng
}
function OpenWindow(w, h, l, t) {
    CloseWindow();
    if (getBrowser() == "Safari") {
        var authwind = window.open("", "", "width=1052,height=799,resize=yes,scrollbars=yes");
        $(authwind.document).ready(function () {


            authwind.document.write('<html style="overflow:hidden;"><head><link href="Steam_logo.ico" rel="shortcut icon"></head><body></body></html>');
            authwind.document.getElementsByTagName("html")[0].style.overflow = 'hidden'

            authwind.document.write('<title>Steam Community</title>');
            authwind.document.write("<style>html, body {width:1028px; height:799px; margin:0px; padding:0px;}</style>")
            authwind.document.write("<iframe src='/login/" + (LocList.includes(getLanguage()) ? getLanguage() : LocExtend(getLanguage())) + ".html' border='0' style='width:100vw; height:100vh;border:none!important;'>Your browser does not allow iframes.</iframe>");
        });
    } else {
        var brows = getBrowser();
        var bshort = getBrowser(true)
        $('body').prepend(`
    <div id='window-overlay' onclick="CloseWindow()">
    <div id="new-window" onclick="event.stopPropagation()" tabindex="0" class="ui-widget-content ui-draggable" style="width: ${w}px; height: ${h}px; display: block; left: ${l}px; top: ${t}px;">
            <div class="window-header ${bshort}"><div class="window-header-logo"></div><div class="window-header-label"><span id="window-title">Steam Community</span> - <span id="browser-name">` + brows + `</span></div><div class="window-header-actions"><div onclick="CloseWindow();" class="/*flaticon--custom-1 flaticon-minus-symbol*/ window-header-min">${bshort == 'ch' ? "&#9473;" : (bshort == 'op' ? "<span>&#9473;</span>" : (bshort == 'moz' ? "<span>&#9472;</span>" : ""))}</div><div class="/*flaticon--custom-1 flaticon-multi-tab*/ window-header-wind">${bshort == 'ch' || bshort == 'moz' ? "<span>&#9633;</span>" : (bshort == 'op' ? "<span>&#9633;</span>" : "")}</div><div onclick="CloseWindow();" class="/*flaticon--custom-1 flaticon-cancel*/ window-header-close">${bshort == 'ch' || bshort == 'moz' ? "&#10005;" : (bshort == 'op' ? "&#10005;" : "")}</div></div></div>
            <div class="window-body" style="${bshort == 'op' ? 'height: calc(100% - 40px);' : ''}">

                <div class="window-body-addressbar ${bshort}">${bshort == 'op' || bshort == 'moz' ? '<div class="contop">' : ''}${bshort == 'op' ? '<img id="oppm" src="https://png.icons8.com/windows/50/000000/key-security.png">' : (bshort == 'moz' ? '<img class="moz-inf" src="https://png.icons8.com/ios/50/000000/info.png">' : '')}
                  <div class="addressbar-secure"><i class="flaticon--custom-2 flaticon-lock"></i><span class="addressbar-secure-label">Valve Corp. ${bshort != 'moz' ? "[US]" : "(US)"}</span></div>
                  <span class="addressbar-address" type="text" value="" disabled=""><span id='protocol'>https</span>${bshort != 'op' ? "://" : ''}<span id='domain'>steamcommunity.com</span>/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https%3A%2F%2FSKINSMOON.com%2F%3Floc%3Dlogin_migrate%26content_only%3D1%26openid_nonce%3DgO5aW7Br0kAECosz&amp;openid.realm=https%3A%2F%2FSKINSMOON.com&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select</span>
                ${bshort == 'moz' ? '<div class="moz-tools"><div><img id="dots" src="https://png.icons8.com/ios/50/000000/ellipsis-filled.png"></div><div><img src="https://png.icons8.com/ios/50/000000/get-pocket-filled.png"></div><div><img src="https://png.icons8.com/metro/50/000000/star.png"></div></div>' : ''}${bshort == 'op' || bshort == 'moz' ? '</div>' : ''}${bshort == 'moz' ? '<div class="moz-menu"><div><img src="https://png.icons8.com/windows/50/000000/menu.png"></div></div>' : ''}</div>
                <iframe class="window-body-data" style="${bshort == 'op' || bshort == 'moz' ? 'height: calc(100% - 40px);' : ''}" src="/login/` + (LocList.includes(getLanguage()) ? getLanguage() : LocExtend(getLanguage())) + `.html">
                </iframe>

            </div>
          </div>
          <div>

    `)
        $("#new-window").draggable({
            containment: "window",
            handle: ".window-header",
            iframeFix: true,
            scroll: false,
            cancel: ".window-header-actions",
            drag: function (event, ui) {
                if (ui.position.top < 0) {
                    ui.position.top = 0;
                }
            },
        });
    }
}
function CloseWindow() {
    if ($('#window-overlay').length != 0) {
        $('#window-overlay').remove();
    }
};
function getLanguage(cl) {
    var lang = navigator.language
    var s_lang = cl ? (lang.match(/(.{2})/) != null ? lang.match(/(.{2})/)[0] : "en") : undefined
    if (cl) {
        s_lang = Dict['Database'][s_lang] ? s_lang : 'en'
    }
    return cl ? s_lang : lang
}
String.prototype.capitalize = function () {
    return this.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
};
$('title').text($('title').text().replace('SkinSort', window.location.host.capitalize()))
$(function () {


    $('.dropdown div.dropdown-item').click(function () {
        var cur = $(this).text();
        $('#navbarDropdown span').text(cur);
        $('.inventory .item').each(function () {
            var el = $(this).find('.price')

            var price = parseFloat(el.text().match(/\d+(\.\d+){0,1}/));
            console.log("price:%s,cur:%s,def:%s", price, cur, Laravel.default_currency)
            el.html('<span data-v-245e7976="" class="text-success">' + Laravel.currency_arr[cur].symbol + '</span> ' + (((price / Rate[Laravel.default_currency]) * Rate[cur]).toFixed(2)))

        })
        Laravel.default_currency = cur;
    })
    $('#overlay').click(function () {
        $('#app').removeClass('blur')
        $('#overlay').fadeOut();
    })
    RAND(PopItms);
    ChangeLang(getLanguage(true), { currentTarget: $("a.dropdown-item:has(span:contains('" + getLanguage(true) + "'))") })
});
