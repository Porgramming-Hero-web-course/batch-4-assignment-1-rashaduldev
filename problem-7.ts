{
    //
    class Car {
        make: string;
        model: string;
        year: number;
      
        constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
      
        getCarAge(): { age: number; currentYear: number } {
          const currentYear: number = new Date().getFullYear();
          const age: number = currentYear - this.year;
          return { age, currentYear };
        }
      }
      const car = new Car("Honda", "Civic", 2018);
      const { age, currentYear } = car.getCarAge();
      console.log(`${age} (assuming current year is ${currentYear})`);
      
    //
}