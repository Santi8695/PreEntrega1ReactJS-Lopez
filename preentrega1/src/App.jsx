import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/PreEntrega2ReactJS-Lopez' element={<ItemListContainer />} />
                    <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
                    <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h2>Perdon, no disponemos de este producto ahora mismo</h2>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App