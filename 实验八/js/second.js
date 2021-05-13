$(function(){
    $(".u-tab").click(function(){
        $('.u-color').removeClass('u-color');
        $(this).addClass('u-color');
        $(".show").hide();
        $(".hide").hide();
        var t=$(this).attr('data_id');
        $(t).show();
    })
});