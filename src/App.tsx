import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Category = React.lazy(() => import('./pages/Category'));
const GamePlayer = React.lazy(() => import('./pages/GamePlayer'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<Category />} />
            <Route path="/play/:gameId" element={<GamePlayer />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;