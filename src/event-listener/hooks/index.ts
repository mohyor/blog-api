import * as interfaces from './interfaces'
import * as dataModel from '../../data-model'
import * as components from '../../components'

class Hooks implements interfaces.Instance {
    constructor(public hooks: any) {}
}

export default (): interfaces.Instance => {
    return new Hooks({})
}