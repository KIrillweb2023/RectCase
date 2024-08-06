import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header/Header'

import { HomePage } from './pages/HomePage'
import { InventoryPage } from './pages/InventoryPage'
import { ActionPage } from './pages/ActionPage'
import { OpenCasePage } from './pages/OpenCasePage'
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage'


function App() {
    return (
        <>
        <div className="app">
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={ <HomePage/> }/>
                    <Route path='/Action' element={ <ActionPage/> } />
                    <Route path='/Inventory' element={ <InventoryPage/> }  />
                    <Route path='/OpenCase/:caseID' element={ <OpenCasePage/> } />
                    <Route path='*' element={ <NotFoundPage/> } />
                </Routes>
            
            </main>
        </div>
            
      
        </>
    )
}

export default App
