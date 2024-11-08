{
    //

    function validateKeys<P extends object>(obj: P, keys: (keyof P)[]): boolean {
        return keys.every((key) => key in obj);
    }
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    
    console.log(validateKeys(person, ["name", "age"]));   //for true output 
    console.log(validateKeys(person, ["name", "height"]));  //for false output 
    

    //
}