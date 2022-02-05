const arrayGeneric = <T>(arr: T[]): T =>{
    return arr[0];
}

arrayGeneric<number>([1,2,3]);