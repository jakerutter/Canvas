

function draw() {
    
    DrawSquares();
    RotateSquares();
  }



function DrawSquares(){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var counter = 0;
    var id = setInterval(frame, 100);
    var x = 0;
    var y = 0;
    function frame() {

        if (counter > 144){
            clearInterval(id);
        } else {
            counter +=1;
            
            if (y < 12){
                  ctx.save();
                  ctx.fillStyle = 'rgb(' + (21 * x) + ', ' + (255 - 21 * x) + ', 255)';
                  ctx.translate(10 + y * 50, 10 + x * 50);
                  ctx.fillRect(0, 0, 25, 25);
                  ctx.restore();
                  y+=1;
            }
            else {
            x+=1;
            y=0;
            if (y < 12){
                ctx.save();
                ctx.fillStyle = 'rgb(' + (21 * x) + ', ' + (255 - 21 * x) + ', 255)';
                ctx.translate(10 + y * 50, 10 + x * 50);
                ctx.fillRect(0, 0, 25, 25);
                ctx.restore();
                y+=1;
            }
          }
        }
    }
}
  
function RotateSquares() {
    var ctx = document.getElementById('myCanvas').getContext('2d');
    ctx.translate(300, 300);             // translate to rectangle center 
                                        // x = x + 0.5 * width
                                        // y = y + 0.5 * height
ctx.rotate((Math.PI / 180) * 25);       // rotate
ctx.translate(-300, -300);               // translate back

// draw grey rect
ctx.fillStyle = '#4D4E53';
ctx.fillRect(150, 30, 100, 100);
}



// //This works if all esle fails go back to this
// function DrawSquares(){
//     var ctx = document.getElementById('myCanvas').getContext('2d');
//     var counter = 0;
//     var id = setInterval(frame, 10);
//     function frame() {

//         if (counter == 144){
//             clearInterval(id);
//         } else {
//             counter ++;
//             for (var i = counter-1; i < 12; i++) {
//                 for (var j = counter-1; j < 12; j++) {
//                   ctx.save();
//                   ctx.fillStyle = 'rgb(' + (21 * i) + ', ' + (255 - 21 * i) + ', 255)';
//                   ctx.translate(10 + j * 50, 10 + i * 50);
//                   ctx.fillRect(0, 0, 25, 25);
//                   ctx.restore();
//                     }
//                 }
//         }
//   }
// }



// //draws a cool loading bar
//   function move() {
//     var elem = document.getElementById("myBar"); 
//     var width = 0;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width == 100) {
//         clearInterval(id);
//       } else {
//         width++; 
//         elem.style.width = width + '%'; 
//       }
//     }
//   }