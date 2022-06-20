import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotePage from './pages/NotePage';
import NotesListPage from './pages/NotesListPage';

function App() {
    const [dark, setDark] = useState(false);

    // const Note = (
    // <div className='small'>
    //     Due to lack of authentication and spam protection, i am disabling
    //     the api routes for now. I don't have plans to implement further
    //     logic in this app. However, if i ever do so, the app wil be back
    //     working again. Cya fellas!
    // </div>
    // );

    if (dark) {
        document.getElementById('root').classList.add('dark');
    } else {
        document.getElementById('root').classList.remove('dark');
    }

    return (
        <Router>
            {/* {Note} */}
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
