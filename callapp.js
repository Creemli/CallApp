/**
 * Created by lixiaoxi on 2017/2/4.
 * @description
 */
(function (WIN, envLib) {

    function withIframe(f) {
        var iframe = document.createElement('iframe');
        var body = document.body;
        iframe.style.cssText='display:none;width=0;height=0';
        body.appendChild(iframe);
        iframe.src = link;
        location.href = link;
    }

    function withLoc(f) {
        location.href = f;
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


    if (envLib.browser.isQQ) {
        // withLoc();
    }

    
    
    
})(window, window.envLib)
