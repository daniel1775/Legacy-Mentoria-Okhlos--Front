import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ContainerLogin from './components/organisms/ContainerLogin'
import {PlantillaMatch} from './components/templates'
import {PaginaAdmin, EstudentPageLoad, MentorPageLoad, ManageStudent, ManageMentor, Dashboard, Sesiones, ManageMatch} from './pages'
import {RequireAuth, Layout,Unauthorized} from './components/atoms'


function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes path={"/"} element={<Layout />} >
        {/*rutas publicas*/}
        <Route path={"/"} element={<ContainerLogin />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        {/*rutas privadas*/}
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/Dashboard"} element={<PaginaAdmin >
            <Dashboard />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/EstudentLoad"} element={<PaginaAdmin >
            <EstudentPageLoad />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/EstudentManage"} element={<PaginaAdmin >
            <ManageStudent />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/MentorLoad"} element={<PaginaAdmin >
            <MentorPageLoad />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/MentorManage"} element={<PaginaAdmin >
            <ManageMentor />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/PlantillaMatch"} element={<PaginaAdmin >
            <PlantillaMatch />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/MatchManage"} element={<PaginaAdmin >
            <ManageMatch />
          </PaginaAdmin>} />
        </Route>
        <Route element={<RequireAuth allowedRoles={"admin"} />} >
          <Route path={"/Sesiones"} element={<PaginaAdmin>
            <Sesiones />
          </PaginaAdmin>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
