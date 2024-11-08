{
    //

    type Circle = {
        shape: "circle";
        radius: number;
    };
    
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    
    type Shape = Circle | Rectangle;
    
    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            const result: number = parseFloat((Math.PI * shape.radius ** 2).toFixed(2));
            return result;
        } else if (shape.shape === "rectangle") {
            const result: number = shape.width * shape.height;
            return result;
        }
        else{
            return 0;
        }
    }
    
    // input1
    const circleArea = calculateShapeArea(
        { 
            shape: "circle", 
            radius: 5 
        });
    console.log(circleArea);
    
        // input2
    const rectangleArea = calculateShapeArea(
        { 
            shape: "rectangle",
            width: 4,
            height: 6 
        });
    console.log(rectangleArea); 
    

    //
}