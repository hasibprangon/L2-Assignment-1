{
    // 
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === false) {
            return input.toLowerCase()
        } else {
            return input.toUpperCase()
        }
    }

    const result1 = formatString('Hridoy', );
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


   

    // 
}