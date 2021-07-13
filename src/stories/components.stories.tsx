import App from "@tuteria/mobile-lib/src/App"
import { SampleType } from "@tuteria/mobile-lib/src/stores"

export default {
    title: "Components/Sidebar"
}
const store = SampleType.create({name:"Shola",age:33})
export const Sidebar = ({})=>{
    return <App store={store}/>
}