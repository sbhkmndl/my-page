window.onload = function onLoad() {
    //prgress-bar html
    var bar = new ProgressBar.Circle('#progress-html', {
  color: '#000',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f39a24', width: 1 },
  to: { color: '#f39a24', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = '80%'
      circle.setText(value);
  }
});
bar.text.style.fontFamily = '"Cubano-Regular",sans-serif';
bar.text.style.fontSize = '20px';
    bar.text.style.color='#f39a24';
    bar.text.style.paddingLeft='10px';
    bar.animate(0.8);  // Number from 0.0 to 1.0  
    
    
    //progressbar-css
     var bar = new ProgressBar.Circle('#progress-css', {
  color: '#000',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#f39a24', width: 1 },
  to: { color: '#7e07d3', width: 5 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = '70%'
      circle.setText(value);
  }
});
bar.text.style.fontFamily = '"Cubano-Regular",sans-serif';
bar.text.style.fontSize = '20px';
    bar.text.style.color='#7e07d3';
    bar.text.style.paddingLeft='10px';
    bar.animate(0.7); 
    
    
    //progressbar-java
         var bar = new ProgressBar.Circle('#progress-java', {
  color: '#000',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#e11409', width: 1 },
  to: { color: '#e11409', width: 5 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = '50%'
      circle.setText(value);
  }
});
bar.text.style.fontFamily = '"Cubano-Regular",sans-serif';
bar.text.style.fontSize = '20px';
    bar.text.style.color='#e11409';
    bar.text.style.paddingLeft='10px';
    bar.animate(0.5); 
    
    
    //progressbar-javascript
         var bar = new ProgressBar.Circle('#progress-javascript', {
  color: '#000',
  strokeWidth: 4,
  trailWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#126c7d', width: 1 },
  to: { color: '#8ff423', width: 5 },
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    var value = '55%'
      circle.setText(value);
  }
});
bar.text.style.fontFamily = '"Cubano-Regular",sans-serif';
bar.text.style.fontSize = '20px';
    bar.text.style.color='#8ff423';
   bar.text.style.paddingLeft='10px';
    bar.animate(0.55); 
    
    
};

//Menu bar Hide
$(document).ready(function(){
    'use strict';
    $(window).scroll(function() {
        'use strict';
        if($(window).scrollTop() < 40 ) {
            $('.menubar').css ({
                'opacity': '0' 
            });
        } else {
            $('.menubar').css ({
                'opacity': '1' 
            });   
        } 
    });
});
 
//resume download & copy
$(document).ready(function(){
    var resume=document.querySelector('.resume-div');
    var downloadbutton=document.querySelector('#resume-download>button');
    var closebutton=document.querySelector('#resume-close>button');
    var viewresume=document.querySelector('#view-resume');
    closebutton.addEventListener('click',function(){
resume.style.display='none';
});
    downloadbutton.addEventListener('click',function(){
window.open('resume/resume.pdf', '_blank');
});
    viewresume.addEventListener('click',function(){
resume.style.display='flex';
});
});

