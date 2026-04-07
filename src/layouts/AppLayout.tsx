import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import styles from './AppLayout.module.css';

export default function AppLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
}
