{
    // 
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase()
        } else {
            return input.toUpperCase()
        }
    }

    const result1 = formatString('Hridoy',);
    console.log(result1);



    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const highestRating: { title: string; rating: number }[] = []
        for (const item of items) {
            if (item.rating >= 4) {
                highestRating.push(item)
            }
        }

        return highestRating
    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book D", rating: 4.0 }
    ];

    const result2 = filterByRating(books);
    console.log(result2);



    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let concatArr: T[] = []
        for (const arr of arrays) {
            concatArr = concatArr.concat(arr)
        }
        return concatArr
    };

    const result3 = concatenateArrays(['Hasibul', 'Hossain'], ['Prangon']);
    console.log(result3);



    class Vehicle {
        private make: string;
        private year: number;
        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo(): string {
            return `Make ${this.make}, year: ${this.year}`
        }
    }
    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        getModel(): string {
            return `Model: ${this.model}`
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());
    console.log(myCar.getModel());



    function processValue(value: string | number): number {
        if(typeof value === 'string'){
            return value.length;
        }else{
            return value * 2;
        }
      }

      const result4 = processValue('Hasibul')
      console.log(result4);



      interface Product {
        name: string;
        price: number;
      }
      
      function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
          return null;
        }
      
        let expensivePd = products[0];
      
        for (const product of products) {
          if (product.price > expensivePd.price) {
            expensivePd = product;
          }
        }
      
        return expensivePd;
      }

      const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
        { name: "Laptop", price: 50000 }
      ];
      
      const result5 = getMostExpensiveProduct(products);
      console.log(result5);

      

    // 

   
}