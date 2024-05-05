(function () {
    'use strict';
	
    Lampa.Utils.putScriptAsync([
	    'http://192.168.1.49:8000/plugins/addon.js?v=' + Math.random(),
	    'http://192.168.1.49:8000/plugins/dobavka.js?v=' + Math.random()
    ], function () {});

    var timer = setInterval(function(){
        if(typeof Lampa !== 'undefined'){
            clearInterval(timer);

            if(!Lampa.Storage.get('set','false')) start_set();
		 
        }
    },200);
	
    function start_set(){
             Lampa.Storage.set('set','true');
             Lampa.Storage.set('keyboard_type', 'integrate');
             Lampa.Storage.set('start_page', 'main');
             Lampa.Storage.set('source', 'cub');
	     Lampa.Storage.set('background', 'false');
	     Lampa.Storage.set('animation', 'false');
	     Lampa.Storage.set('mask', 'false');
	     Lampa.Storage.set('player_normalization', 'false');
	     Lampa.Storage.set('player_timecode', 'ask');
	     Lampa.Storage.set('screensaver', 'false');
	     Lampa.Storage.set('pages_save_total', '3');
    } 

})();

	/*Удаляем верхние кнопки*/

   setTimeout(function(){
     $('.open--feed').remove();
     $('.open--premium').remove();
   }, 2000);

	/*Удаляем ненужное из главного меню*/

  Lampa.Listener.follow('app', function (e) {
     if (e.type == 'ready') {
             setTimeout(function(){
                        $("[data-action=feed]").eq(0).remove();
                        $("[data-action=myperson]").eq(0).remove();
                        $("[data-action=subscribes]").eq(0).remove();
                        $("[data-action=timetable]").eq(0).remove();
 //                        $("[data-action=mytorrents]").eq(0).remove();
//                         $("[data-action=console]").eq(0).remove();
//                         $("[data-action=settings]").eq(0).remove();
             },10);
     }
  });

/*Удаляем ненужное из меню настроек*/

//  window.lampa_settings.torrents_use = true;
//  window.lampa_settings.plugins_use = true;
  window.lampa_settings.account_use = false;
Lampa.Settings.listener.follow('open', function (e) {
 if (e.name == 'main') {
   setTimeout(function() {
     $('div[data-component="parental_control"]').remove();
     $('div[data-component="my_iptv"]').remove();
     $('div[data-component="tmdb"]').remove();
     $('div[data-component="sisi"]').remove();
     $('div[data-component="my_iptv2"]').remove();
//     $('div[data-component="parser"]').remove();
//     $('div[data-component="server"]').remove();
   }, 5)
 }
});
