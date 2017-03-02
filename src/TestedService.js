class TestedService {

    constructor() {
        this.services = []
    }

    register(svcName, service) {
        this.services[svcName] = service
    }

    unregister(svcName) {
        this.services = _.omit(this.services, svcName)
    }

    getService = (svcName) => this.services[svcName]
}

export default TestedService