// app.config(["providerProvider",function(providerProvider){
//       var customerdata={};
//       customerdata.name="shiva";
//       customerdata.age="23";
//       customerdata.city="Hyderabad";
//       customerdata.getName =function(){
//       	return this.name+" "+this.city;
//       }
//       console.log(providerProvider.$get().getName());
// }])
app.provider("provider",function(){
var customerdata={};
      customerdata.name="shiva";
      customerdata.age="23";
      customerdata.city="Hyderabad";
      customerdata.getName=function(){
      	return this.name+" "+this.city+"  "+this.age;
      }
    this.$get=function(){
    	return customerdata;
    }
})




