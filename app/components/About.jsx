var React=require('react');
var About=React.createClass({
  render:function () {
   return (

<div>
<h1 className="text-center page-title">About</h1>
<ul>
  <li><a href="https://github.com/midjul">Me</a></li>
  <li><a href="https://facebook.github.io/react/">React</a></li>
  <li><a href="http://openweathermap.org/">OpenWeatherMap</a></li>
</ul>
</div>

   );
  }
});


module.exports=About;
