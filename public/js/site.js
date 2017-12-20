function adjustNewsletterHeight() {
    if ($('.push')[0] !== undefined) {
        $('.push').height(window.innerHeight - $('#resultAlert').height() - $('.push').offset().top - $('#newsletter').height() + 32);        
    }
    
    $(window).resize(function () {
        if ($('.push')[0] !== undefined) {
            $('.push').height(window.innerHeight - $('#resultAlert').height() - $('.push').offset().top - $('#newsletter').height() + 32);        
        }
    })
}

adjustNewsletterHeight();