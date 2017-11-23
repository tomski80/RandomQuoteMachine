
var quotes = [];

$.get( "data/quotes.txt", function (data, status) {
    
    var allQuotes = String(data);
    
    var index = 0;
    var line = "";
    var singleQuote = "";
    var maxIndex = allQuotes.length;
    allQuotes = allQuotes.replace(/\n/g,'£');
   // allQuotes = allQuotes.replace(/-{2}/g,'¬');
    
            
            
    while( index < maxIndex){
        line = "";
        while(allQuotes[index] != '£'){
            line += allQuotes[index];
            index++;
            if(index >= maxIndex) break;
        }

        singleQuote += line;          //add line to quote
        if ( line.length < 2 ){
            //new quote
            quotes.push(singleQuote);
            singleQuote = "";
        }
        index++;
        if(index >= maxIndex) break;
    }
    
    // only update content when data is parsed ! 
    quoteUpdate();

    $().ready( function () {
        
            $('button').text("Next Quote");
            $('button').on('click',quoteUpdate);
    });
        
});

function quoteUpdate() {
    
        var max_index = quotes.length-1;
        var max = max_index;
        var min = 0;
        var index = Math.ceil(Math.random() * (max - min) + min);
    
        var qAndAuthor = quotes[index].replace(/-{2}/,"¬");
        var qAndAuthorArr = qAndAuthor.split("¬");

        var quoteElement = $('#quote');
        var authorElement = $('#author')
        quoteElement.fadeOut();
        authorElement.fadeOut();

        setTimeout( function(){
            $('#quote').html(qAndAuthorArr[0]);
            $('#author').html(qAndAuthorArr[1]);
        },400);
        quoteElement.fadeIn();
        authorElement.fadeIn();



   
        
    }


