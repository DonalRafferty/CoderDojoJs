window.onload = function() {
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d");

    // Rectangle
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.lineTo(300, 200);
    context.lineTo(100, 200);
    context.closePath();
    context.stroke();

    // Box
    context.fillRect(500, 100, 300, 200);
    
    // Circle
    context.beginPath();
    context.arc(300, 400, 100, 0, 2*Math.PI);
    context.stroke();
    context.closePath();
};