function fillData(){

    var courses =  $('#courses-label').data('courses');
    var presenter =  $('#presenter-label').data('presenter');
    var x = $('.cut-input');

    if(courses != undefined) {
        $('#courses').dropdown('set selected',courses);
    }
    if(presenter != undefined) {
        $('#presenter').dropdown('set selected',presenter);
    }
    for(var i = 0; i < x.length; ++i){
        var keywords = $(x[i]).data('keywords');
        var cut = $(x[i]).data('cut');
        if(cut != ''){
            $('.'+cut).dropdown('set selected',keywords);
        }
    }
    update_ui()
}

function KeywordList() {
    var keywordList = $('#keywordLabel').data('keywords');
    var html = '';
    for (var i = 0; i < keywordList.length; ++i) {
        var temp = '<option value="' + keywordList[i] + '">' + keywordList[i] + '</option>'
        html = html + temp;
    }
    console.log(html)
    return html
}


function update_ui(){
    $('.dropdown').dropdown();
}
var indexforID=0;
function uniqueID(){
    return indexforID++;
};
$( document ).ready(function() {


    $('#addResourceButton').click(function(){
        KeywordList();
        var html = '<div class="field"> '+
            ' <label>Resource</label>' +
            '<div class="ui action input">'+
            '<input class="ui big input" type="text" placeholder="Link" name="video[resources[]][link]">'+
            '<input class="ui big input" type="text" placeholder="Description" name="video[resources[]][description]">' +
            '<select id="courses" class="ui small search dropdown" name="video[resources[]][category]">'+
            '<option value="">Resource Type</option>'+
            '<option value="Questions">Questions</option>'+
            '<option value="Answers">Answers</option>'+
            '<option value="Solutions">Solutions</option>'+
            '<option value="Notes">Notes</option>'+
            '</select>'+
            '</div>'+
            '</div>';
        $('#addResourceContainer').after(html);
        update_ui()
    });

    $('.ui.form')
        .form({
            fields: {
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


    $('.edit')
        .popup({
            on: 'hover'
        })
    ;
    $('#addReview').click(function () {
        $('.ui.longer.modal')
            .modal('show')
        ;
    })

    $('.ui.embed').embed();



    $('.menu .item').tab();

    $('.dropdown').dropdown();

    $('#addField').click(function(){
        var x =  $('#keywords').children("option:selected").val()
        var keywords = [];
        $.each($("#keywords option:selected"), function(){
            keywords.push($(this).val());
        });
        var id = uniqueID()
        var html = '<div class="field" style="margin-top:20px ">' +
                '<div class="ui action input">' +
            '<input type="text" placeholder="Ex: 08:23" name="video[segments[]][cut]">' +
            '<select id="mfield' + id + '" multiple="multiple" class="ui fluid search dropdown" name="video[segments[]][keywords][]">'+
            KeywordList()+
            '</select>' +
            '<div class="ui negative button deleteField">Delete</div>' +
            '        </div>' +
            '       </div>';
        $('#timekeyword').append(html);
        $('#mfield' + id).dropdown('set selected',keywords);

        update_ui()
    });

    $('.field').on('click', '.deleteField',function(){
        $(this).parent('div').remove();
    });

    $('#addKeyword').click(function(){
        $('.ui.accordion')
            .accordion()
        ;
    });

    $('.ui.accordion').accordion();

    $('.ui.radio.checkbox').checkbox();
    fillData()


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

    $('.ui.sticky')
        .sticky({
            context: '#context',
            // offset:-25,
            // bottomOffset: 1000,
        })
    ;

    $('#searchButton').click(function(){
        $('.ui.modal.search')
            .modal('show')
        ;
        update_ui()
    });


    })







