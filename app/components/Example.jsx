var React=require('react');
var {Link}= require('react-router');

var Example=React.createClass({
  render:function () {
   return (
     <div>
       <h1 className="text-center page-title">Example</h1>
       <p>Here are a few example locations to try out:</p>
       <ol>
         <li>
           <link to="/?location=Philadelphia">Philadelphia</link>
         </li>
         <li>
           <link to="/?location=Rio">Rio</link>
         </li>
       </ol>
     </div>
   ) ;
  }
});

module.exports=Example;
