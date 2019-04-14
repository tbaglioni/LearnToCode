<script>
var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
function update(){
   var d = new Date ();
   output.innerHTML = 'Year - '+d.getFullYear()+'<br>';
   output.innerHTML += 'Month - '+d.getMonth()+'<br>';
   output.innerHTML += 'Date(in month) - '+d.getDate()+'<br>';
   output.innerHTML += 'Day of Week - '+days[d.getDay()]+'<br>';
   output.innerHTML += 'Hour - '+d.getHours()+'<br>';
   output.innerHTML += 'Minute - '+d.getMinutes()+'<br>';
   output.innerHTML += 'Second - '+d.getSeconds();
}
window.addEventListener( "load",function(){
    setInterval( update, 1000 );
} );
</script>
<div id="output"></div>