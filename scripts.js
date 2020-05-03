
//jquery scripts:

// === load different image every time the webpage is refreshed ===

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
// =====  read more/less button ===== 

var rm = $(".read_more"),
    moreText = "Read More",
    lessText = "Read Less";

rm.click(function () {
    var $this = $(this);
    $this.prev().slideToggle();
    $this.text($this.text() == moreText ? lessText : moreText);
});

// ==== pagination ====

let numberOfItems = $('#article-wrapper .article').length;
//alert(numberOfItems);
let limitPerPage = 3;

// only show 3 items per page
$("#article-wrapper .article:gt(" + (limitPerPage - 1) + ")").hide();

// number of pages needed
let totalPages = Math.ceil(numberOfItems / limitPerPage);

$(".pagination").append("<li class='current-page active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");  // active sets the first page as default

// loop through and add a new page if less or equal than total pages needed
for (let i = 2; i <= totalPages; i++){
  $(".pagination").append("<li class='current-page'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

$(".pagination").append("<li id='next-page'><a class='page-link' href='javascript:void(0)'>" + 'Next' + "</a></li>");

$(".pagination li.current-page").on("click", function() {  // !!!
  if ($(this).hasClass("active")) {
    return false;
  } else {
    //alert('user clicked on number page');
    let currentPage = $(this).index(); // gives back the current number of the page
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    $("#article-wrapper .article").hide();
  
    let grandTotal = limitPerPage * currentPage;

    for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#article-wrapper .article:eq(" + i + ")").show();
    }
  }
  
});

// next page button
$("#next-page").on("click", function () {
  //alert('test');
  let currentPage = $(".pagination li.active").index();
  if (currentPage === totalPages) {
    return false;
  } else {
    currentPage++; // goes one page up
    $(".pagination li").removeClass("active");
    $("#article-wrapper .article").hide();

    let grandTotal = limitPerPage * currentPage;

    for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#article-wrapper .article:eq(" + i + ")").show();
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");  // index starts at 0
  }
});

// previous page button
$("#previous-page").on("click", function () {
  //alert('test');
  let currentPage = $(".pagination li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--; // goes one page up
    $(".pagination li").removeClass("active");
    $("#article-wrapper .article").hide();

    let grandTotal = limitPerPage * currentPage;

    for (let i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#article-wrapper .article:eq(" + i + ")").show();
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");  // index starts at 0
  }
});


