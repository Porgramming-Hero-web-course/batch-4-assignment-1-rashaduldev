{
    //

    function removeDuplicates(array:number[]):number[]{
        const result:number[]=Array.from(new Set(array));
        return result;
    }
    const DuplicateArray:number[]=[1,2,3,4,4,5,5,61,70,61];
    console.log(removeDuplicates(DuplicateArray));
    

    //
}