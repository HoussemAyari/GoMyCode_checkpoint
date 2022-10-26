function products (v1,v2){
  let product=0;
  for (let i=0;i<v1.length; i++) {
  product=product+(v1[i]*v2[i]);
   }
   return product;
  }
if (products([1,0,2],[1,1,1])==0){
  console.log("product=",products ([1,0,2],[1,1,1]))
}
else{
  console.log("is not good");
}
