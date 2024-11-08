{
    //
    function countWordOccurrences(sentence:string,word:string):number{
        const result1:string[]=sentence.toLowerCase().split(" "); 
        const result2:string=word.toLowerCase();
        const finalResult:number=result1.filter(R=>R===result2).length;
        return finalResult;
    }

    console.log(countWordOccurrences("I love typescript", "typescript"));
    
    //
}