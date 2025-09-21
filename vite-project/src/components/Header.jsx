import React from 'react';

export default function Header({ currentTab, setCurrentTab, currentTime }) {
    const tabs = [
        { key: 'dashboard', label: 'Dashboard' },
        { key: 'inventory', label: 'Inventory' },
        { key: 'billing', label: 'Billing' },
        { key: 'all-products', label: 'All Products' },
        { key: 'reports', label: 'Reports' },
        { key: 'settings', label: 'Settings' }
    ];

    return (
        <header className="bg-blue-600 text-white p-4 rounded-lg mb-6 shadow-lg">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold"><i className="fas fa-store mr-2"></i> General Store Shop</h1>
                <div className="text-lg">{currentTime}</div>
            </div>
            <nav className="mt-4 flex space-x-4 overflow-x-auto">
                {tabs.map(t => (
                    <button
                        key={t.key}
                        className={`nav-btn px-3 py-1 rounded ${currentTab === t.key ? 'bg-white text-blue-600 font-semibold' : ''}`}
                        onClick={() => setCurrentTab(t.key)}
                    >{t.label}</button>
                ))}
            </nav>
        </header>
    );
}
