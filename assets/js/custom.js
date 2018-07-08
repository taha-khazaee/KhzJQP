$(function(){
   Main();
});
function RandomNumber(length){
    return Math.floor(Math.random() * length);
}
function InitializeCard(cards){
    $('.cards').html(cards[RandomNumber(cards.length)]);            
}
   
function Main(){
    var Api = 'http://www.mocky.io/v2/5b42131e2e00005d00222f0d';
    $.ajax({
        url: Api,
        method: 'GET',
        success: function (data) {            
            var insidebody=[];   
            var tagclass='';
            var extraElements='';
            var animation ='';                
            for(i=0;i<data.cards.length;i++)
                {                 
                    switch(data.cards[i].tag){
                        case "sport":
                                tagclass='danger';
                             break;
                        case "art":
                                tagclass='warning';
                             break;
                        case "fun":
                                tagclass='info';                            
                             break;
                    }  
                    switch(data.cards[i].code){
                        case 1:
                                extraElements='';
                                animation='swing';
                             break;
                        case 0:
                                extraElements='<img class="card-img-top mb-3" src="'+data.cards[i].image+'" alt="Card image cap">';
                                animation='';
                             break;
                        case 2:
                                extraElements='<audio controls class="p-2 mb-3"> <source src="'+data.cards[i].sound+'" type="audio/mp3"> Your browser does not support the audio element. </audio>';
                                animation='';
                             break;
                    }
                    insidebody.push('<div class="card mr-auto ml-auto w-50 '+tagclass+' '+animation+'">'+               
                    '<div class="card-body">'+
                    '<h5 class="card-title">' + data.cards[i].title + '</h5>'+
                    '<p class="card-text">' + data.cards[i].description + '</p>'+
                    extraElements+
                    '<span class="badge badge-'+tagclass+' p-1 tag" data-toggle="tooltip" data-placement="top" title="'+data.cards[i].tag+'"><i class="fa fa-tags"></i></span>'+
                    '<a href="#"  class="btn btn-outline-'+tagclass+'" onclick="Main();">Try</a>');                     
                }            
                InitializeCard(insidebody);          
                $('[data-toggle="tooltip"]').tooltip();                       
        }
    })     
}