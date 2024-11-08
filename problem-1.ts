{
    //

    function sumArray(inputArray:number[]):number{
        const result:number=inputArray.reduce((firstNum,nextNum)=>firstNum+nextNum)
        return result;
    }
    
    console.log(sumArray([1,2,3,4,5,7,0]));
    

    //
}