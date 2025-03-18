import { Route,Routes } from "react-router"
import { Home } from "../page/Home"
import { StatusPage } from "../page/StatusPage"
import { IAPage } from "../page/IAPage"
import { SavingSection } from "../page/SavingSection"

export const Approuter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Estatus" element={<StatusPage/>}/>
            <Route path="/Apartados" element={<SavingSection/>}/>
            <Route path="/ia" element={<IAPage/>}/>
        </Routes>
    </>
  )
}
