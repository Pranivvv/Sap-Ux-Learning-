namespace production.management;

entity Production {

    key productId: Integer;
    productName: String(50);
    description: String(100);
    quantity: Integer;
    price: Double

}

