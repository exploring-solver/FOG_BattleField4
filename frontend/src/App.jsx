import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerBrowser from './components/ServerBrowser/index';
import MatrixRain from './components/SecondPattern/MatrixRain';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ServerBrowser />} />
        <Route path="/matrixrain" element={<MatrixRain />} />
        <Route path="*" element={
          <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
            <h1 className="text-4xl text-green-400">404 - Page Not Found</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;