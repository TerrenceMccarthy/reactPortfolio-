import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './pages/Projects';


function App() {
    return (
        <>
            <Header />
            
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;


