//navbar
$('.close').click(function () { 
    $('.navbar').toggleClass('active'); 
});

//singer details
$('.details .s').click(function(){
    var id=this.id;

    $('.singerContent').each(function(){
        if($('#'+id).next()[0].id != this.id){
            $(this).slideUp(1000);
        };
    });
    $(this).next().slideToggle(1000);
});

//event duration
function eventCountDown(){
    var dateNow=new Date();
    var eventDate=new Date(2022, 11,28);
    var currentTime=dateNow.getTime();
    var eventTime=eventDate.getTime();

    var theTime=eventTime -currentTime;

    var seconds=theTime/1000;
    var minutes=seconds/60;
    var hours=minutes/60;
    var days=Math.round(hours/24);
    seconds=Math.round(seconds%60);
    minutes=Math.round(minutes%60);
    hours=Math.round(hours%60);

    $('#days').text(days+" D");
    $('#hours').text(hours+" h");
    $('#minutes').text(minutes+" m");
    $('#seconds').text(seconds+" s");  

    setTimeout(eventCountDown, 1000);
};
eventCountDown();

//available message
$('textarea').keyup(function () { 
    var max=100;
    var theLength=$(this).val().length;    //val() in jquery not value() 
    var char=max -theLength;

    if(char > 0){
        $('.count-red').text(char);
    }else{
        $('.count-red').text("your available character finished");
    };
    
});