
//jquery scripts:

// === load different image every time the webpage is refreshed == 

(function($){
        $.randomImage = {
            defaults: {
                path: '/slider/', 
                myImages: ['showcase1.png', 'showcase2.png', 'showcase3.png', 'showcase4.png',
                    'showcase5.png', 'showcase6.png', 'showcase7.png', 'showcase8.png', 'showcase9.png'] 
            }
        };
        
        $.fn.extend({
            randomImage:function(config) {
                var config = $.extend({}, $.randomImage.defaults, config);
                
                return this.each(function() {
                    var imageNames = config.myImages,
                    //get size of array, randomize a number from this
                    // use this number as the array index
                    imageNamesSize = imageNames.length,
                    lotteryNumber = Math.floor(Math.random()*imageNamesSize),
                    winnerImage = imageNames[lotteryNumber],
                    fullPath = config.path + winnerImage;
                    
                    // alt tag will be image filename.
                    $(this).attr({
                        src: fullPath,
                        alt: winnerImage
                    });
                });
            }
        });
    }(jQuery));
    
    $(document).ready(function(){
        $('img:first').randomImage();
    });
    

//2 - search and highlight keyword(s) when found 
//3 - read more/less button 
//4 - pagination ok!


