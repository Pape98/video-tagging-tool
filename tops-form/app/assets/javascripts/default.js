function fillData(){

    var courses =  $('#courses-label').data('courses');
    var keywords =  $('#keywords-label').data('keywords');
    var cuts =  $('#cuts-label').data('cuts');
console.log(keywords)
    var i;
    if(courses != undefined) {
        $('#courses').dropdown('set selected',courses);
    }
    if(keywords != undefined) {
        $('#keywords').dropdown('set selected',keywords);
    }
    if(cuts != undefined) {
        $('#cuts').dropdown('set selected',cuts);
    }

}

$( document ).ready(function() {


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
    });

    $('#addKeyword').click(function(){
        $('.ui.accordion')
            .accordion()
        ;
    });

    $('.ui.accordion').accordion();

    $('.ui.radio.checkbox').checkbox();
    fillData()


    })







