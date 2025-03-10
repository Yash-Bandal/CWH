# jQuery Effects 
Hide, Show, Toggle, Slide, Fade, and Animate.
## 1. jQuery hide() and show()
syntax:
```
//callback - optional
$(selector).hide(speed,callback);
$(selector).show(speed,callback);
```
The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.

The optional callback parameter is a function to be executed after the hide() or show() method completes .
```javascript
$("#hide").click(function(){
  $("p").hide(1000);
});

$("#show").click(function(){
  $("p").show();
});
```
## 2.jQuery toggle()
```
$(selector).toggle(speed,callback);
```
default action hide and show 
```javascript
$("button").click(function(){
  $("p").toggle();
});
```

### 3. jQuery Fading Methods
With jQuery you can fade an element in and out of visibility.

jQuery has the following fade methods:
- fadeIn()
- fadeOut()
- fadeToggle()
- fadeTo()

#### 1. fadeIn() 
```
$(selector).fadeIn(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadein

#### 2.  fadeOut()
```
$(selector).fadeOut(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout

#### 3.  fadeToggle()
The jQuery fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
```
$(selector).fadeToggle(speed,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadetoggle

#### 4.  fadeTo()
The required opacity parameter in the fadeTo() method specifies fading to a given opacity (value between 0 and 1)
```
$(selector).fadeTo(speed,opacity,callback);
```
```javascript
$("button").click(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeto


### 4. jQuery Sliding Methods
With jQuery you can create a sliding effect on elements.

jQuery has the following slide methods:

- slideDown()
- slideUp()
- slideToggle()

#### 1. slideDown()
slide down animation
```
$(selector).slideDown(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_down


#### 2. slideUp() 
The jQuery slideUp() method is used to slide up an element
```
$(selector).slideUp(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideDown();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_up

#### 3.  slideToggle() 
The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
```
$(selector).slideToggle(speed,callback);
```
```javascript
$("#flip").click(function(){
  $("#panel").slideToggle();
});
```
See : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle


### 5. jQuery Animations - The animate() Method
The jQuery animate() method is used to create custom animations.

Syntax:
```
$(selector).animate({params},speed,callback);
```
```javascript
//1
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});

//2
$(document).ready(function(){
    $("#animateButton").click(function(){
        $("#box").animate({
            left: '+=100px',
            height: 'toggle'
        });
    });
});
```
see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1
see2 : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_animation1_multicss

### 6. jQuery stop() Method
The jQuery `stop()` method is used to stop an animation or effect before it is finished

Syntax:
```
$(selector).stop(stopAll,goToEnd);
```
```javascript
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});
```
see : https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_stop_slide

### 7. jQuery Callback Functions
A callback function is executed after `the current effect` is 100% finished.
