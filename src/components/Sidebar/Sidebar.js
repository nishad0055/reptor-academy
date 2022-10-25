import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            {
                categories.map(category => <ul key={category.id} className="menu bg-base-200 w-45">
                <li> <Link>{category.name}</Link> </li>
              </ul>
                )
            }
        </div>
    );
};

export default Sidebar;