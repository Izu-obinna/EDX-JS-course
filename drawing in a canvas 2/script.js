// useful to have them as global variables
var canvas, ctx, w, h; 


window.onload = function init() {
    // called AFTER the page has been loaded
    canvas = document.querySelector("#myCanvas");
  
    // often useful
    w = canvas.width; 
    h = canvas.height;  
  
    // important, we will draw with this object
    ctx = canvas.getContext('2d');
  
    // ready to go !
    // Try to change the parameter values to move
    // the monster
    drawMyMonster(10, 10);
};

function drawMyMonster(x, y) {
    // draw a big monster !
    // head
  
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    // (0, 0) is the top left corner of the monster.
    ctx.strokeRect(0, 0, 100, 100);
  
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);
  
    // nose
    ctx.strokeRect(45, 40, 10, 40);
  
    // mouth
   ctx.strokeRect(35, 84, 30, 10);
  
   // teeth
   ctx.fillRect(38, 84, 10, 10);
   ctx.fillRect(52, 84, 10, 10);
  
   // GOOD practice: restore the context
   ctx.restore();
}

/* ctx.fillRect(x, y, width, height): draws a rectangle whose top left corner is at (x, y) and whose size 
is specified by the width and height parameters; and both outlined by, and filled with, the default color.

ctx.strokeRect(x, y, width, height): same but in wireframe mode.

Note that we use (line 30) ctx.translate(x, y) to make it easier to move the monster around. So, all the 
drawing instructions are coded as if the monster was in (0, 0), at the top left corner of the canvas 
(look at line 33). We draw the body outline with a rectangle starting from (0, 0). Calling context.translate 
"changes the coordinate system" by moving the "old (0, 0)" to (x, y) and keeping other coordinates in the 
same position relative to the origin.

Line 19: we call the drawMonster function with (10, 10) as parameters, which will cause the original 
coordinate system to be translated by (10, 10).

And if we change the coordinate system (this is what the call to ctx.translate(...) does) in a function, 
it is good practice to always save the previous context at the beginning of the function and restore it 
at the end of the function (lines 27 and 50). */