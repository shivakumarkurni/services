app.service("productservice",function(){
   var productdata={
       name="Dell";
       cost=25000;
       color="Red";
   }
  this.getDellDetails=function(){
  	return productdata;
  }
})