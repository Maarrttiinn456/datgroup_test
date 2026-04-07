import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import AppLayout from './layouts/AppLayout';

export default function App() {
    return (
        <div>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Route>
            </Routes>
        </div>
    );
}
