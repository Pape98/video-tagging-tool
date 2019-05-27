function fillData(){

    var courses =  $('#courses-label').data('courses');
    var keywords =  $('#keywords-label').data('keywords');
    var cuts =  $('#cuts-label').data('cuts');

    if(courses != undefined) {
        $('#courses').dropdown('set selected',courses);
    }
    if(keywords != undefined) {
        $('#keywords').dropdown('set selected',keywords);
    }
    if(cuts != undefined) {
        var i = 0;
        for(i; i < cuts.length; ++i){
            addCut(cuts[i]);
        }
        console.log(cuts)
        $('#cuts').dropdown('set selected',cuts);
    }

}

function addCut(val){
    var cut = val;
    var option = "<option value=\""+cut+"\">"+cut+"</option>";
    // var selection = "<a class=\"ui label transition visible\"data-value=" +
    //     cut + " style=\"display: inline-block !important;\">" +
    //     cut+"<i class=\"delete icon\"></i></a>"
    $('#cuts').append(option);
}

$( document ).ready(function() {



    $('.edit')
        .popup({
            on: 'hover'
        })
    ;

    $('.ui.embed').embed();



    $('.menu .item').tab();

    $('.dropdown').dropdown();

    $('#enter-cut').click(function(){
        var cut = $("#input-cut").val();
       addCut(cut)
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

    var cuts =  $('#cuts-label').data('cuts');
    var formattedCuts = [];
    var i = 0;
    for(i; i < cuts.length; ++i){
        var cut = {name: cuts[i].toString(), value: cuts[i].toString()};
        formattedCuts.push(cut);
    }

    $('.cuts').dropdown({
        apiSettings: {
            responseAsync: function(settings, callback) {
                const query = settings.urlData.query;
                var response = {
                    success: true,
                    results: formattedCuts
                };
                callback(response);
            }
        }
    });

    $('.ui.form')
        .form({
            fields: {
                username: {
                    identifier: 'username',
                    rules: [
                        {
                            type: 'empty',
                            prompt: 'Please enter a username'
                        }
                    ]
                },
                password: {
                    identifier: 'password',
                    rules: [

                        {
                            type: 'empty',
                            prompt: 'Please enter a password'
                        },
                    ]
                },
                name: {
                    identifier: 'name',
                    rules: [

                        {
                            type: 'empty',
                            prompt: 'Please enter your name'
                        },
                    ]
                },
            }})


    })







