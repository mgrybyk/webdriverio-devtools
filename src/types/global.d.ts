declare namespace NodeJS {
    interface Global {
        expect: Chai.ExpectStatic
        assert: Chai.AssertStatic
    }
}

declare var expect: Chai.ExpectStatic
