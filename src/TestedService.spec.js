import TestedService from './TestedService'

describe("TestedService", () => {

    it("should return registered service", () => {

        let service1 = () => ':)'

        let testedService = new TestedService()
        testedService.register('service1', service1)

        expect(testedService.getService('service1')).to.deep.equal(service1)

    })

})