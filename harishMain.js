SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

//song 1
$(document).ready(function() {
  SC.stream('/tracks/96222523',function(sound){
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
//song 2

$(document).ready(function() {
  SC.stream('/tracks/198411556',function(sound){
    $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 3
$(document).ready(function() {
  SC.stream('/tracks/459702612',function(sound){
    $('#start11').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop11').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 4
$(document).ready(function() {
  SC.stream('/tracks/186938278',function(sound){
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
  SC.stream('/tracks/260013843',function(sound){
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
  SC.stream('/tracks/199682148',function(sound){
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
  SC.stream('/tracks/134062186',function(sound){
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
//song 8
$(document).ready(function() {
  SC.stream('/tracks/112148242',function(sound){
    $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
//song 9
$(document).ready(function() {
  SC.stream('/tracks/71069288',function(sound){
    $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });
    $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
        });
  });
});
