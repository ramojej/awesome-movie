var awesomeMovie = {};

awesomeMovie.init = function() {
    awesomeMovie.filterSlider();
};

awesomeMovie.filterSlider = function() {

    $('.filter.open').on('click', function() {
        $('.filter_container').slideToggle(300, function() {
            var btn = $(this).prev();

            if(btn.hasClass('active')) {
                $('.filter.open').find('.btn_title').text('Filter by');
                btn.removeClass('active');
            } else {
                $('.filter.open').find('.btn_title').text('Close');
                btn.addClass('active');
            }
        });
    });
};

awesomeMovie.init();