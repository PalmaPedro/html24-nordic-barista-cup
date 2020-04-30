
//jquery scripts:

// === load different image every time the webpage is refreshe == 

(function($){
        $.randomImage = {
            defaults: {
                //you can change these defaults to your own preferences.
                path: '/img/', //change this to the path of your images
                myImages: ['showcase1.png', 'showcase2.png', 'showcase3.png', 'showcase4.png', 'showcase5.png' ] //put image names in this bracket. ex: 'harold.jpg', 'maude.jpg', 'etc'
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
                    
                    //put this image into DOM at class of randomImage
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


