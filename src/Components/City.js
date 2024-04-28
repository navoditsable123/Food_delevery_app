import React, { useState } from 'react';

const SearchArray = () => {
    // Define state for items and selected item
    const [items, setItems] = useState(["Ahmadnagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Bhandara",
        "Bhusawal",
        "Bid",
        "Buldhana",
        "Chandrapur",
        "Daulatabad",
        "Dhule",
        "Jalgaon",
        "Kalyan",
        "Karli",
        "Kolhapur",
        "Mahabaleshwar",
        "Malegaon",
        "Matheran",
        "Mumbai",
        "Nagpur",
        "Nanded",
        "Nashik",
        "Osmanabad",
        "Pandharpur",
        "Parbhani",
        "Pune",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sevagram",
        "Solapur",
        "Thane",
        "Ulhasnagar",
        "Vasai-Virar",
        "Wardha",
        "Yavatmal"
    ]);
    const [selectedItem, setSelectedItem] = useState("");

    // Function to handle search
    const searchArray = () => {
        const index = items.indexOf(selectedItem);
        if (index !== -1) {
            alert("Item found at index " + index);
        } else {
            alert("Item not found");
        }
    };

    return (
        <div>

            <label htmlFor="searchInput"></label>
            <select className="btn btn-secondary" id="searchInput" value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option disabled value="">Select Location</option>
                {items.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

        </div>
    );
}

export default SearchArray;



