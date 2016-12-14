var React=require('react');
var Nav=require('Nav');
var Main=React.createClass({
 render:function(){
  return(
  //  <h2>Main Component</h2>
  <div>
    <h2>Main Component</h2>
    <Nav></Nav>
  {this.props.children} 
  </div>

  );
 }
});
module.exports=Main;
