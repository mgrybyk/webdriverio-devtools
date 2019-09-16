declare namespace NodeJS {
    interface Global {
        expect: Chai.ExpectStatic
    }
}

declare var expect: Chai.ExpectStatic
