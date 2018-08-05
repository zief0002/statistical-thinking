<script type="text/javascript" src="jquery.js"></script>

<script type="text/javascript">
$(document).ready(function()
{
  //hide the all of the element with class msg_body
  $(".msg_body").hide();
  //toggle the componenet with class msg_body
  $(".msg_head").click(function()
  {
    $(this).next(".msg_body").slideToggle(600);
  });
});
</script>


<link href="https://fonts.googleapis.com/css?family=Alegreya|Cormorant+SC|EB+Garamond|News+Cycle|Playfair+Display" rel="stylesheet">
