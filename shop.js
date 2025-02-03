const products=[]
function addproduct(){
    let pro=parseInt(prompt('Enter the no.of products to add:'))
    for(let i=0;i<pro;i++){
        let name=prompt('Enter the product name')
        let id=prompt('Enter the product id')
        let price=prompt('Enter the product price')
        let quantity=prompt('Enter the product quantity')
        // let product={
        // name:name,id:id,price:price,quantity:quantity
        // }   
        //     products.push(product)
        products.push({name,id,price,quantity})
        }
        alert ('Products Added Successfully')
}
function updateproduct(){
    let id=parseInt(prompt=('Enter the product id to update'))
    let index=products.find((product)=>product.id==id)
    if(index){
        let name=prompt=('Enter the new product name')
        let price=prompt=('Enter the new product price')
        let quantity=prompt=('Enter the new product quantity')
        products[index]={name,id,price,quantity}
        alert ('Product Updated Successfully')
        }
}

function removeproduct(){
    let id=prompt('Enter product id to delete')
    let index=products.find((product)=>product.id==id)
    if(index){
        products.splice(index,1)
    // products.splice(id,1) 
    alert('Product Delete Successfully')
    }
    else{
        alert('Product Not Found')
    }
}

function viewallproducts(){
    if(products.length==0){
        alert('No Products Available')
    }
    else{
        for(let i=0;i<products.length;i++){
            console.log(products[i])
            }
        }
}
        

function searchproduct(){
    let id=prompt('Enter product id to search')
let index=products.find((product)=>product.id==id)
if(index){
    console.log(index)
}
else{
    alert('Product Not Found')
}
}

function Exit(){
    alert('')
}
function main(){
    while(true){
let choice=prompt('Choose an option:\n 1.Add Product\n 2.Update Product\n 3.Remove Product\n 4.View All Products\n 5.Search Product\n 6.Exit')
switch(choice){
    case '1':addproduct()
    break;  
    case '2':updateproduct()
    break;
    case '3':removeproduct()
    break;
    case '4':viewallproducts()
    break;
    case '5':searchproduct()
    break;
    // case '6':exit()
    // return;
    default:console.log('Invalid choice')
    }
  }
}
main()

