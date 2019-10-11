// 
$(function () {
    $('a[href*="#trait"],a[href*="#media"],a[href*="#story"],a[href*="#gameplay"],a[href*="#top"]').click(function () {
        console.log(this.pathname)
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                        300); //过渡时间
                return false;
            }
        }
    });
});