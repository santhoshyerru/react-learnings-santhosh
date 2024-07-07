import Sum from "../Sum";

test("sum of the function should return sum of two", ()=>{
    const result = Sum(1,2);
    expect(result).toBe(3);
})