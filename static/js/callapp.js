/**
 * Created by lixiaoxi on 2017/2/4.
 * @description
 */
(function (WIN, envLib) {
    let appLink = 'patoa://pingan.com/home';
    function withIframe(link) {
        var iframe = document.createElement('iframe');
        var body = document.body;
        iframe.style.cssText = 'display:none;width=0;height=0';
        body.appendChild(iframe);
        iframe.src = link;
        location.href = link;
    }

    function withLoc(link) {
        location.href = link;
    }

    function withLink(f) {
        var h = document.createElement('a');
        h.setAttribute('href', f);
        h.style.display = 'none';
        document.body.appendChild(h);
        var g = document.createEvent('HTMLEvents');
        g.initEvent('click', !1, !1);
        h.dispatchEvent(g);
    }

    document.getElementById('show').innerHTML = 'pageshow';
    if (envLib.browser.isQQ) {
        // withLoc();
    }

    if (envLib.os.isIOS) {
        // alert(1);

        var last = Date.now();

        if(envLib.browser.isSafari){
            withLoc(appLink);
        }else{
            withIframe(appLink)
        }
    }
    // $(document).on('visibilitychange webkitvisibilitychange', function() {
    //     var tag = document.hidden || document.webkitHidden;
    //     if (tag) {
    //         document.getElementById('show').innerHTML = 'pagehide';
    //     }
    // })
    // $(window).on('pagehide', function() {
    //     document.getElementById('show').innerHTML = 'pagehide';
    // })
    // document.addEventListener('pagehide',function () {
    //     document.getElementById('show').innerHTML = 'pagehide';
    // });

    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
        alert(1)
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        alert(2)
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        alert(3)
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    } else if(typeof document.mozHidden !== "undefined"){
        alert(4)
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange"
    } else if(typeof document.oHidden !== "undefined"){
        alert(5)
        hidden = "oHidden";
        visibilityChange = "ovisibilitychange";
    }

    document.addEventListener(visibilityChange,function () {
        var tag = document[hidden];
        if (tag) {
            document.getElementById('show').innerHTML = visibilityChange;
        }
    },false)

})(window, window.envLib)
