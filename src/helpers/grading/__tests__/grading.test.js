import { grading } from "../grading";

describe('Fungsi grading, nilai angka menjadi nilai huruf', () => {
    describe('Mengembalikan nilai A', () => {
        test('input nilai 91', () => {
            expect(grading(91)).toEqual("A")
        })

        test('input nilai 90', () => {
            expect(grading(90)).not.toEqual("A")
        })

        test('input nilai 100', () => {
            expect(grading(100)).toEqual("A")
        })
    })

    describe('Mengembalikan nilai B', () => {
        test('input nilai 81', () => {
            expect(grading(81)).toEqual("B")
        })
        
        test('input nilai 85', () => {
            expect(grading(85)).toEqual("B")
        })

        test('input nilai 79 [salah]', () => {
            expect(grading(79)).not.toEqual("B")
        })
    })
    
})
