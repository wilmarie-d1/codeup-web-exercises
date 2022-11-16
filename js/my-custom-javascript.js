"use strict";

// (function() {
//
//     $(function() {
//         alert('The DOM has finished loading!');
//     })

// ${'h2'}.html("I changed it");


// });
$(function(){
    $(document).ready(function() {

        // let contents = $('#h1-id').html()
        // alert(contents);
    //
    //     let insideStuff = $('#jquery').html();
    //     alert(insideStuff);
    //
    //     $('p').css('background-color', 'pink')
    //     $('h1').css('background-color', "yellow")
    //
    // })
        //Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
        //     $('li').css('font-size', "20px");
            // $('.codeup').css({"border-color": "red",
            // "border-width":"1px",
            // "border-style":"solid"});

        // $('li').css('border', 'solid 1px red');
//Craft selectors that highlight all the h1, p, and li elements.
//         $('h1, p, li').css('background-color', 'pink');

        // let contents = $('h1').html();
        // alert(contents);
        //
        // Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.
        //
        //     Remove your custom jQuery code from previous exercises.
        //
        //     Add jQuery code that will change the background color of an h1 element when clicked.
        //
        //     Make all paragraphs have a font size of 18px when they are double clicked.
        //
        //     Set all li text color to red when the mouse is hovering; reset to black when it is not.

                $('h1').on('click', function () {
                    $('h1').css('background-color', 'pink');
                })

                $('p').on('dblclick', function () {
                    $('p').css('font-size', '18px');
                })

                 $('li').hover(
            function() {
                $('li').css('color', 'red');
            },
            function() {
                $('li').css('color', 'black');
            }
        );



    })
});
