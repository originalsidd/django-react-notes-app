import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';

function App() {
    const [dark, setDark] = useState(false);

    if (dark) {
        document.getElementById('root').classList.add('dark');
    } else {
        document.getElementById('root').classList.remove('dark');
    }

    return (
        <Router>
            <div id='root' className='container'>
                <div className='app'>
                    <Header dark={dark} setDark={setDark} />
                    <Routes>
                        <Route path='/' exact element={<NotesListPage />} />
                        <Route path='/note/:id' element={<NotePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
