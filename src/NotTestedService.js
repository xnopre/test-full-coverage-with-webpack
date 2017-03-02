class NotTestedService {

    constructor() {
        this.services = []
    }

    set(svcName, service) {
        this.services[svcName] = service
    }

    get = (svcName) => this.services[svcName]
}

export default NotTestedService