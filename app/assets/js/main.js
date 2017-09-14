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
    awesomeMovie.generateMarkup();
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

awesomeMovie.generateMarkup = function() {
    var template = '';

    $.each(awesomeMovie.dataBase, function(index) {

        var db = awesomeMovie.dataBase;

        template += '<div class="movie_item">';
        template +=    '<div class="header">';
        template +=        '<div class="left">';
        template +=            '<img src="assets/images/movies/'+ db[index].img +'" alt="">';
        template +=        '</div>';
        template +=        '<div class="right">';
        template +=            '<h3>'+ db[index].title +'</h3>';
        template +=            '<div class="node">';
        template +=                '<span>Year:</span> '+ db[index].year +'';
        template +=            '</div>';
        template +=            '<div class="node">';
        template +=                '<span>Director:</span> '+ db[index].director +'';
        template +=            '</div>';
        template +=            '<div class="node">';
        template +=                '<span>Type:</span> '+ db[index].type +'';
        template +=            '</div>';
        template +=            '<div class="show_desc">See description</div>';
        template +=        '</div>';
        template +=    '</div>';
        template +=    '<div class="description"><strong>Description:</strong> '+ db[index].desc +'';
        template +=    '</div>';
        template += '</div>';        
    });

    $('.movies_content').append(template);
    awesomeMovie.showDescription();
}

awesomeMovie.showDescription = function() {

    $('.show_desc').on('click', function() {

        var $this = $(this);
        var parent = $(this).parents().eq(2);
        var element = parent.find('.description');

        element.slideToggle(300, function() {

            if($this.hasClass('active')) {
                $this.text('See description').removeClass('active');
            } else {
                $this.text('Hide description').addClass('active');
            }

        });

    });

};

awesomeMovie.loadAssets();