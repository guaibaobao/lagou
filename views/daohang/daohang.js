/*
* @Author: jingyun
* @Date:   2016-10-16 09:38:56
* @Last Modified by:   jingyun
* @Last Modified time: 2016-10-16 14:14:28
*/

'use strict';
$(document).ready(function(){
	$( ".J_MenuItem" ).each( function( index ){
		$( this ).mouseover( function(){
			
			var catTop,
				borderTop = $( this ).offset().top - 180,
				viewHeight = $( window ).height(),
				scrollTop = $( document ).scrollTop(),
				relaxHeight = viewHeight - ( borderTop - scrollTop );
			
			$( ".border" ).css( "top", borderTop ).show();
			$( ".cat-subcategory" ).show();
			$( ".shadow div" ).hide().eq( index ).show();
			
			var catHeight = $( ".cat-subcategory" ).height();
			if( catHeight <= relaxHeight ){
				catTop = borderTop;
			}else if( catHeight > relaxHeight && catHeight < viewHeight ){
				catTop = scrollTop + viewHeight - catHeight - 10;
			}else{
				catTop = scrollTop + 5;
			}
			$( ".cat-subcategory" ).css( "top", catTop );
			
			$( "span" ).show();
			$( this ).find( "span" ).hide();
		});

		$( ".mallCategory" ).mouseleave( function(){
			$( ".cat-subcategory" ).hide();
			$( ".border" ).hide();
			$( "span" ).show();
		});

	});
	})
