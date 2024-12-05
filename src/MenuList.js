import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MenuList.css';

const MenuList = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        // Fetch backend data
        axios.get('http://yourhosting.com/menu.php') // Change to backend URL
            .then(response => {
                setMenu(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container">
            <h1>SIJAJAN</h1>
            <input type="text" placeholder="Cari Makanan" className="search-bar" />
            <div className="menu-list">
                {menu.map(item => (
                    <div className="menu-card" key={item.id}>
                        <img src={item.gambar} alt={item.nama} className="menu-image" />
                        <div className="menu-details">
                            <h2>{item.nama}</h2>
                            <p>Rp {item.harga}</p>
                            <button className="buy-button">Beli</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuList;
