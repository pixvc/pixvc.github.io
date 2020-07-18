/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/06/10/hello-world/index.html","62ebc806f427d3b95115191d81cde6b3"],["/2020/06/10/makefile/index.html","3f1312e362a8eaeb26c45415279d77cc"],["/2020/06/11/lua基本语法/index.html","b375ef21bca9f2a6b30bbc3b35863dc4"],["/2020/06/11/lua循环语句/index.html","4c7c5419184717af0b40a52c5446b864"],["/2020/06/11/lua数据类型/index.html","648371e19758d531b8761bf890f59f72"],["/2020/06/12/Lua函数/index.html","64659f5f3d1813c7c8fa53100caf1550"],["/2020/06/12/c语言可变数目参数/index.html","ae7b2be29a2becd8c1feebe32a21b835"],["/2020/06/12/迭代器/index.html","39958e0af1f71ae511ed64ef6f8455d5"],["/2020/06/15/模块和包/index.html","fd80912287fda3aecaf61fe220aa04f0"],["/2020/06/15/表/index.html","b2cbee48bfbc11c26b3a30850343b01b"],["/2020/06/16/lua面向对象/index.html","dc257bdb61e53df4decf4e056a305afc"],["/2020/06/16/协同程序/index.html","b00cd3cd2acb175040f7c78e1b5094b7"],["/2020/06/19/CAN/index.html","0e04fab467377d5383163c4a5973a081"],["/2020/06/19/IIC/index.html","970dc5c0251f5915ec9ff4cd05bd6343"],["/2020/06/19/SPI/index.html","e42ce336635622b2acd4f98c25b99ec0"],["/2020/06/19/UART/index.html","40ada2bbd0590b08afd85724ef9f2b5d"],["/2020/06/21/线程与进程/index.html","257063f04d70a5800b805dfbee8365b8"],["/2020/06/21/面试ARM/index.html","74cbdbd59e626664c8c5a4f67d27a434"],["/2020/06/21/面试C语言篇/index.html","9ea1d8a4222727ab8517682d27ff706e"],["/2020/06/22/TCP UDP协议/index.html","9a084be98ea1afdbcb5313b2881bb79d"],["/2020/06/24/线程/index.html","b3d4709a9c6a7af112d132e64cf4a35c"],["/2020/06/25/gdb/index.html","efc60646db238a5ff6ee73667b0eae41"],["/2020/06/28/文件描述符/index.html","c3970a8d1ec2d97bc3f4c55825ca9f88"],["/2020/06/30/函数指针/index.html","5da0eadc787687f67739561861c7d6e1"],["/2020/07/11/进程间通信/index.html","246791fc4f0e20c63df80752f15b0a5a"],["/about/index.html","133cff51c695b0d5f69bc8588c2bd08b"],["/archives/2020/06/index.html","93da0169d2be53b7adf49b22727a7011"],["/archives/2020/06/page/2/index.html","3e830f0f6d251d0a8dbf5125f284fc56"],["/archives/2020/06/page/3/index.html","d73fa5c66b092908f7d2f9cb959613f4"],["/archives/2020/07/index.html","c6dae7f3a19f9204a6e1ff12ccb2f99c"],["/archives/2020/index.html","dbf791dd713831d7ce95d3eff7cb33d8"],["/archives/2020/page/2/index.html","75eeb3ea3f09522af785a78705e6acba"],["/archives/2020/page/3/index.html","ef9075fa624eafde63d096059fb43241"],["/archives/index.html","d1dcc3a7620796b2bae74e19377ed80c"],["/archives/page/2/index.html","c8c5a855bcaaeef31fd80f28f2db2d1d"],["/archives/page/3/index.html","babf6151318824c9e2ec83b7a0a8a673"],["/categories/C语言/index.html","2bfb246b8f82449d53cf540683db1352"],["/categories/Linux/index.html","9fa83acb5efccd0ffa381752e4eb981d"],["/categories/Makefile基本语法/index.html","c59863a0629c7fdabb94599ab9bdb5c9"],["/categories/Markdown/index.html","9ac000db3aa3049ffcecd0c27d556fb8"],["/categories/index.html","227a19963f9d85fc7b41d9dd3b5ac2a3"],["/categories/lua语言/index.html","a4705c6b508b91d9868ab90ba39ae875"],["/categories/嵌入式面试题/index.html","79f4f4177ca5880065affb40202ae672"],["/categories/网络协议/index.html","0458e13a65b56a08d8df6cda372c6d03"],["/categories/通信协议/index.html","46fe6b612060d308fc45dee93921de89"],["/css/main.css","70b02fa9a94a6c5fe10077825e82c84e"],["/images/1.png","fbedd3044e218bb04eea85638caca4e1"],["/images/10.png","3b3e45f3e86fe7902b3b1a12f0d4c38d"],["/images/11.png","1f68e45f73bd595a16701eedbe682ef8"],["/images/12.png","85fb3d4f89a049680d8151cd3c4451fe"],["/images/13.png","a26f5341fa64214e3b4d73516d429485"],["/images/14.png","e597180e80ae65a95a4e3e019319ca6f"],["/images/15.png","d319479e544100e701f98656155784f2"],["/images/16.png","c12fdf1f43cf4a1673d3c65a6b2a53d7"],["/images/17.png","e0fc76ae4b14a8dcefafa078983cc4e1"],["/images/18.png","b92c7e56f4087a292fe9b0d88327e623"],["/images/19.png","946f716967c2085e73032af3c374c347"],["/images/2.png","677a4c0e229179cba02840d3791f7510"],["/images/20.png","885233a847a320d44e493845cd5a3804"],["/images/21.png","6e7e257c9759e280753356e97c4ce6c9"],["/images/22.png","6960641f544dd42a1140c26cadcc5ce4"],["/images/23.png","970194cc3582176d26b0dc8a35030bf8"],["/images/24.png","70f4ad1c50b7ed97ce009bf5f61e6793"],["/images/25.png","4e2d7249b2fedf578cf96c73984537f5"],["/images/26.png","c61a2789c96dfdf1236d06feecb39535"],["/images/27.png","22db2d0a4a8c0f4777e4cccc57ad9f26"],["/images/28.png","d16a24a21cb0748c143177aa003fd07c"],["/images/29.png","4376171656fe1bb960878d5784f5200c"],["/images/3.png","caf1ed4b093e05760f83525ac70cc006"],["/images/30.png","38ecbed0be1d9c320c09217f7ae16748"],["/images/31.png","4e67d34f954671b817192afa33d553ac"],["/images/32.png","62e159e166c8bf71c2b44df23ec6a829"],["/images/33.png","50e54e824bb03d6d6e2f5780252917d3"],["/images/34.png","8c99c5f739621202362922a97bac9a0c"],["/images/35.png","af714396b1300a40de29ecf13b33f0b9"],["/images/36.png","c82cade1d9c77ad7963711a6465c1ea3"],["/images/37.png","48761f636990019087d90f3410bd4c7a"],["/images/38.png","a33b19094ff58ad076285a4d5766ca86"],["/images/39.png","11cec2dbd4f3b5b3e7a3b80fa360b2c4"],["/images/4.png","f6cccf1c02db77828655ee1db9a071b7"],["/images/5.png","58c0ab0b074f1f9bd0d0c7213329b8ef"],["/images/6.22.png","85f2b85492eeaa9164266c6595442dcc"],["/images/6.png","254d85e885f1b1ed088c2e704060f86f"],["/images/7.png","6e3a206c4fa712d428eeacbc7266ded1"],["/images/8.png","9c1564f7e61821fb7e7194c34449171a"],["/images/9.png","32618a94021502961c9e1e248cf2d035"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/beijing.jpg","8c3af5bd6a12a67ccfeffbe02edfbdf2"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/hea.jpg","aeacf48d29f55a39008081df13e950c6"],["/images/header.jpg","835efae649b4df1f9b0323cea5a76057"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","80e3ee39f8d1f17d9eeda12e2f58891d"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","49bce35d3c4c4fca3b85d613eda5bab4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","cf417bbf2bf79f0912a74e5446c829df"],["/lib/jquery_lazyload/README.html","657a12483a426e2c250d9bf2dcdb6101"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","dcd6914e0d7e61785d2ffe7b15714e14"],["/page/3/index.html","f715c3efcdcce1be498f1513021858d1"],["/sw-register.js","48952d2852009556bf10ac3df657d22a"],["/tags/ARM/index.html","b4477088b4d76d39def07af432160ea5"],["/tags/CAN/index.html","24678d0e3ee4e46aeb9dafe5ba28f4bd"],["/tags/C语言/index.html","112e01fad9bbee627f0e56b169a6b805"],["/tags/IIC/index.html","4277343c189a4cffe1ff954859579e61"],["/tags/Linux/index.html","f3d8da412db9eed93654cca6a1876635"],["/tags/Makefile/index.html","93a2042c6d6edd487c9fe580cf81e684"],["/tags/SPI/index.html","b0e9204637bb8fd4888c08d6e22c0d66"],["/tags/TCP-UDP/index.html","2ed2174a140c5e372da11147a3c9134c"],["/tags/UART/index.html","68ac055222020c893ae2f832ed2e6902"],["/tags/gdb/index.html","96262950afd0bc27821b59bbc26c71d8"],["/tags/index.html","302e2baf87349ee0c737cdcc23a79cb9"],["/tags/lua/index.html","911cbeaf4ee7a2ce2ac5cf4f6bd5b508"],["/tags/makedown/index.html","74c68619a1ab1ad23727d397b8fd1cab"],["/tags/文件描述符/index.html","b96157b4ff82ffe06af5204c551d943e"],["/tags/进程/index.html","5cba38bcb193a5f6361cf9fca87a0508"],["/tags/面试/index.html","b91e5be207ee76ffaa73473a9ebde459"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
