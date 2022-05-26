import exp from "constants";
import soma from "./lib"

describe("Testando varias somas",()=>{
test("Soma simples", () =>{
    expect(soma(1,2)).toBe(3)
});
test("Soma da soma",()=>{
    expect(soma(soma(1,2),3)).toBe(6)
})
test("Soma da soma da soma", ()=>{
    expect(soma(soma(soma(1,2),3),4)).toBe(10)
})
})