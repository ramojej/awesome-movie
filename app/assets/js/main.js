var awesomeMovie = {};

awesomeMovie.dataBase = [];

awesomeMovie.loadAssets = function() {
    $.getJSON('../app/assets/db/movies.json', function(data) {
        awesomeMovie.dataBase = data;
        awesomeMovie.init();
    });
};

awesomeMovie.init = function() {
    awesomeMovie.filterSlider();
    awesomeMovie.getTypes();
    awesomeMovie.getDirectors();
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

awesomeMovie.getTypes = function() {
    var types = [];

    $.each(awesomeMovie.dataBase, function(index, elem) {
        if($.inArray(awesomeMovie.dataBase[index].type, types)) {
            var typeValue = awesomeMovie.dataBase[index].type;
            types.push(typeValue);
            $('#categories').append('<option value="'+ typeValue +'">'+ typeValue +'</option>');
        }
    })

};

awesomeMovie.getDirectors = function() {
    var db = awesomeMovie.dataBase;
    var directors = [];
    
        $.each(db, function(index, elem) {
            if($.inArray(db[index].director, directors)) {
                var directorValue = db[index].director;
                directors.push(directorValue);
                $('#directors').append('<option value="'+ directorValue +'">'+ directorValue +'</option>');
            }
        })    

};

awesomeMovie.loadAssets();