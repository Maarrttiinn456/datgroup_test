import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useFavJokes } from '../contexts/FavJokesContext';
import styles from './Header.module.css';

export default function Header() {
    const location = useLocation();

    const { favJokes } = useFavJokes();

    const favCount = favJokes.length;

    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img
                        className={styles.logo}
                        src="/images/nunchuck_norris.svg"
                        alt="Chuck Norris"
                    />
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                location.pathname === '/' ? styles.active : ''
                            }
                        >
                            Domů
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/favorites"
                            className={
                                location.pathname === '/favorites'
                                    ? styles.active
                                    : ''
                            }
                        >
                            Oblíbené ({favCount})
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
