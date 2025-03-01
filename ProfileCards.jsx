import React, { useEffect, useState } from 'react';
// import './UsersApi.css';
import './ProfilrCards.css'

export default function UsersApi() {
    const [profileLogin, setProfileLogin] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
    
                const response = await fetch("https://dummyjson.com/users");
                const data = await response.json();
                setProfileLogin(data.users);

            }
        

        fetchData();
    }, []);

    const handleViewProfile = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={darkMode ? "app dark-mode" : "app"}>
            <header>
                <h1>Users List</h1>
                <div className="toggle-container">
                    <span>Dark Mode  </span>
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        className="toggle"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                    />
                    <label htmlFor="darkModeToggle" className="toggle-label"></label>
                    <span></span>
                </div>
            </header>
            <div className="user-grid">
                {profileLogin.map((user) => (
                    <div className="user-card" key={user.id}>
                        <h3>{user.firstName} {user.lastName}</h3>
                        <button onClick={() => handleViewProfile(user)}>View Profile</button>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedUser.firstName} {selectedUser.lastName}</h2>
                        <img src={selectedUser.image} alt={selectedUser.firstName} height={'200px'} width={'200px'} className='margin'/>
                        <p><strong>Age:</strong> {selectedUser.age}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <p><strong>Phone:</strong> {selectedUser.phone}</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}