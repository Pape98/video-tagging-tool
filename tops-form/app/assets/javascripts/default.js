$( document ).ready(function() {
    $('.dropdown').dropdown();

    $('#enter-cut').click(function(){
        var cut = $("#input-cut").val();
        var option = "<option value=\""+cut+"\">"+cut+"</option>";
        var selection = "<a class=\"ui label transition visible\"data-value=" +
            cut + " style=\"display: inline-block !important;\">" +
            cut+"<i class=\"delete icon\"></i></a>"
       // $('#cuts + i').after(selection);
        $('#cuts').append(option);
        $('#cuts + i').after(selection);
        $('#cuts').val(cut);
        //alert($('#keywords').val())
    })
});




