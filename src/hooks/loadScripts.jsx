// import React, { useEffect } from "react";

// export const useInitialScripts = () => {
//   const scripts = React.useMemo(
//     () => [
//         "/assets/js/vendor/jquery-3.5.1.min.js",
//       "/assets/js/vendor/modernizr-3.11.2.min.js",
//       "/assets/js/plugins/popper.min.js",
//       "/assets/js/plugins/bootstrap.min.js",
//       "/assets/js/plugins/swiper-bundle.min.js",
//       "/assets/js/plugins/jquery.magnific-popup.min.js",
//       "/assets/js/plugins/video-playlist.js",
//       "/assets/js/plugins/jquery.nice-select.min.js",
//       "/assets/js/plugins/ajax-contact.js",
//       "/assets/js/main.js",
//     ],

//     []
//   );

//   const styles = React.useMemo(
//     () => [
//       "/assets/css/plugins/flaticon.css",
//       "/assets/css/plugins/font-awesome.min.css",
//       "/assets/css/plugins/animate.min.css",
//       "/assets/css/plugins/swiper-bundle.min.css",
//       "/assets/css/plugins/magnific-popup.css",
//       "/assets/css/plugins/nice-select.css",
//       "/assets/css/plugins/apexcharts.css",
//       "/assets/css/plugins/jqvmap.min.css",
//     ],
//     []
//   );

//   useEffect(() => {
//     if (scripts) {
//       for (const script of scripts) {
//         const el = document.createElement("script");
//         el.src = script;
//         document.body.appendChild(el);
//       }
//     }
//     if (styles) {
//       for (const style of styles) {
//         const el = document.createElement("link");
//         el.setAttribute("rel", "stylesheet");
//         el.setAttribute("href", style);
//         document.body.appendChild(el);
//       }
//     }
//   }, [styles, scripts]);
// };
