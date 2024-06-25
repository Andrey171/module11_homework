
const getPercents = require('./script');


describe("test", ()=>{
    it('30% of 200 ', () => {
        expect(getPercents(30, 200)).toBe(60);
    })
    it('20% of 100 ', () => {
        expect(getPercents(20, 100)).toBe(20);
    })
    it('15% of 500 ', () => {
        expect(getPercents(15, 500)).toBe(75);
    })
})
















