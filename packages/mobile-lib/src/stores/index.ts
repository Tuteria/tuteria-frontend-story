import {Instance, types} from 'mobx-state-tree'

export const SampleType = types.model("SampleType",{
    name: types.string,
    age: types.number
})

export interface ISampleType extends Instance<typeof SampleType> {}
