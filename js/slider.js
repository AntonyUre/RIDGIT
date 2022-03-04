// JavaScript Document

$(document).ready( function(){

/* Swipe Variables */
$.fn.cycle.transitions.scrollHorzTouch = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {

                if (opts.rev)
                fwd = !fwd;

                positionNext = $(next).position();
                positionCurr = $(curr).position();

                $.fn.cycle.commonReset(curr,next,opts);
                if( ( positionNext.left > 0 && fwd ) || ( positionNext.left <  0 && !fwd ) )
                {
                    opts.cssBefore.left = positionNext.left;
                }
                else
                {
                    opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
                }
                if( ( positionCurr.left > 0 && fwd ) || ( positionCurr.left <  0 && !fwd ) )
                {
                             opts.animOut.left = positionCurr.left;
                }
                else
                {
                        opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
                }

	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
     var currenSlide = null;
     var slideNumber = 0;
     var currentLeft = 0;
     var leftStart = 0;
     var sliderExpr;
     var slideFlag = false;

 $('#rotating-item-wrapper').cycle({
        fx:     'fade',
        timeout: 5000,
        pager:  '#nav',
        speedIn:  600,
        speedOut:   600,
        slideExpr: 'img',
        next:   '#nextBt',
        prev:   '#prevBt',
        before: beforeSlide,
        after: afterSlide,
        startingSlide: 0,


    });
	
	
	// And then add this
jQuery("#rotating-item-wrapper").touchwipe({
      wipeRight: function() {
            jQuery("#rotating-item-wrapper").cycle("next");
      },
      wipeLeft: function() {
            jQuery("#rotating-item-wrapper").cycle("prev");
      }
});




// Call this function before the slide start
function beforeSlide( curr, next , opt )
{
     sliderExpr = opt.slideExpr;
     slideFlag = true;
}

// Call this function after the slide start
function afterSlide(curr, next , opt )
{
    currenSlide =  $(next);
    slideNumber = opt.currSlide;
    currentLeft = $(next).position().left;
    slideFlag = false;
}


});