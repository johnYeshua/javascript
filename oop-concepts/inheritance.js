class Customer
{
    constructor(id,name,address)
    {
        this.id=id;
        this.name=name;
        this.address=address;
    }
  
    cus_data()
    {
        console.log("Customer id:"+this.id);
        console.log("Customer Name:"+this.name);
        console.log("Address :"+this.address);
    }
}


class Product extends Customer
{
    constructor(id,name,address,Pro_name,price)
    {
        super(id,name,address);
        this.Pro_name=Pro_name;
        this.price=price;
        }

        pro_data()
        {
            console.log("Customer id:"+this.id);
            console.log("Customer Name:"+this.name);
            console.log("Address :"+this.address);
            console.log("Product Name:"+this.Pro_name);
            console.log("Price :"+this.price);
        }}

    
    // properties = [this.id, this.name, this.address, this.Pro_name, this.price];
    // pro_data(properties)
    // {
    //    properties.array.forEach(element => {
    //     console.log(element);
    //    });
    // }}
var obj = new Product(10011,"ABC","Chennai","Laptop",45000);
obj.cus_data(); console.log("==========================");obj.pro_data();