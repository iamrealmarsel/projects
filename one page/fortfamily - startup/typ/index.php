<!DOCTYPE html>
<html lang="ru-RU">
  <head>

        <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MT2K2MJ');</script>
    <!-- End Google Tag Manager -->

    <meta charset="utf-8">
    <title>Спасибо за заявку</title><!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE = edge"><![endif]-->
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="keywords" content="">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <link rel="stylesheet" type="text/css" href="https://fortfamily.ru/typ-include/franchise/static/css/styles.min.css">
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script><![endif]-->
    <link rel="shortcut icon" href="https://fortfamily.ru/typ-include/franchise/static/images/favicon/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="https://fortfamily.ru/typ-include/franchise/static/images/favicon/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="https://fortfamily.ru/typ-include/franchise/static/images/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="https://fortfamily.ru/typ-include/franchise/static/images/favicon/apple-touch-icon-114x114.png">
    <script>
      function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("w3-include-html");
          if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Спасибо за заявку!";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
              }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
          }
        }
      }
    </script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
       (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
       m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
       (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

       ym(49296790, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
       });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/49296790" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
      
  </head>
  <body class="index-page">

        <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT2K2MJ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div w3-include-html="https://fortfamily.ru/typ-include/franchise/index.php"></div>

    <script>
      includeHTML();
    </script>

    <script src="https://fortfamily.ru/typ-include/franchise/static/js/libs.min.js"></script>
    <script src="https://fortfamily.ru/typ-include/franchise/static/js/main.js"></script>
  </body>
</html>