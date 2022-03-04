$(function() {

				var $menu = $('#menu');


				$menu.mmenu();

				$menu.find( 'li > a' ).on(

					'click',

					function()

					{

						var href = $(this).attr( 'href' );



						//	if the clicked link is linked to an anchor, scroll the page to that anchor 

						if ( href.slice( 0, 1 ) == '#' )

						{							

						}

					}

				);

			});