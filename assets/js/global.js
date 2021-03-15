// Set the date we're counting down to
var countDownDate = new Date('March 17, 2021 11:30:00').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById('demo').innerHTML =
    '<div><span>' + days + '</span><span class="text">Days</span></div>' +
    '<div><span>' + hours + '</span><span class="text">Hrs</span></div>' +
    '<div><span>' + minutes + '</span><span class="text">Min</span></div>' +
    '<div><span>' + seconds + '</span><span class="text">Sec</span></div>';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);
