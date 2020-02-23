SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

//song 1
$(document).ready(function() {
  SC.stream('/tracks/267806421',function(sound){
    $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 2
$(document).ready(function() {
  SC.stream('/tracks/125416716',function(sound){
    $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 3
$(document).ready(function() {
  SC.stream('/tracks/267806403',function(sound){
    $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 4
$(document).ready(function() {
  SC.stream('/tracks/213214708',function(sound){
    $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 5
$(document).ready(function() {
  SC.stream('/tracks/125371016',function(sound){
    $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 6
$(document).ready(function() {
  SC.stream('/tracks/112180660',function(sound){
    $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 7
$(document).ready(function() {
  SC.stream('/tracks/107280153',function(sound){
    $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});