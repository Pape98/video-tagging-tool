function fillData(){

    var courses =  $('#courses-label').data('courses');
    var keywords =  $('#keywords-label').data('keywords');
    var cuts =  $('#cuts-label').data('cuts');

    var i;
    if(courses != undefined){
        for (i = 0; i < courses.length; i++) {
            var course = courses[i];
            var selection = "<a class=\"ui label transition visible\"data-value=" +
                course + " style=\"display: inline-block !important;\">" +
                course+"<i class=\"delete icon\"></i></a>";
            $('#courses + i').after(selection);
            $("#courses").val(course);
        }

        for (i = 0; i < keywords.length; i++) {
            var keyword = keywords[i];
            // console.log(keyword)
            $('div[data-value=\''+keyword+'\']').addClass("active filtered");
            var selection = "<a class=\"ui label transition visible\"data-value=" +
                keyword + " style=\"display: inline-block !important;\">" +
                keyword+"<i class=\"delete icon\"></i></a>";
            $('#keywords + i').after(selection);
            $("#keywords").val(keyword);
        }

        for (i = 0; i < cuts.length; i++) {
            var cut = cuts[i];
            var option = "<option value=\""+cut+"\">"+cut+"</option>";
            var selection = "<a class=\"ui label transition visible\"data-value=" +
                cut + " style=\"display: inline-block !important;\">" +
                cut+"<i class=\"delete icon\"></i></a>";
            $('#cuts').append(option);
            $('#cuts + i').after(selection);
            $("#cuts").val(cut);
        }
    }
}

$( document ).ready(function() {


    $('a.ui.label.transition.visible').mouseover(function(){
        console.log('selected...');
    });

    $('.menu .item').tab();

    $('.dropdown').dropdown();

    $('#enter-cut').click(function(){
        var cut = $("#input-cut").val();
        var option = "<option value=\""+cut+"\">"+cut+"</option>";
        var selection = "<a class=\"ui label transition visible\"data-value=" +
            cut + " style=\"display: inline-block !important;\">" +
            cut+"<i class=\"delete icon\"></i></a>"
        $('#cuts').append(option);
        $('#cuts + i').after(selection);
        $('#cuts').val(cut);
    })
    $('.video').click(function () {
        var link = $(this).attr('data-link');
        $('iframe').attr('src',link);
        $('.ui.basic.modal')
            .modal('show')
        ;
    })


    fillData()

    })






