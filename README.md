# EasyBank-landing-page
This is a landing page named EasyBank, created using HTML, SCSS, jQuery and Javascript.
This landing page has utilized jQuery library of javascript for a simple collapsible navigation bar animation.
## What I learnt ?

### 1) Event Handlers
How to use event handlers in jQuery which in this case was a simple click event,

Syntax 
```
$( function(){
   $().on({
    click:function(){} //for click event
   },
   {
   hover:function()   //for hover event
   }
   .
   . //so on for other events respectively
   );
} );
```
### 2) Animations using jQuery
Some examples are:-
```
$().slideUp(1000); //for a sliding up and vanishing animation(Parameter is the time taken by the animation to complete in milliseconds)

$().slideDown(1000); //for a sliding up and appearing animation(Parameter is the time taken by the animation to complete in milliseconds)

// and many more
```
For more check out the jQuery documentation:-https://api.jquery.com/
