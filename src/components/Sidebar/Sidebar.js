import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://assignment-ten-server-psi.vercel.app/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div className='my-7 md:fixed'>
            {
                categories.map(category => <ul key={category.id} className="menu bg-base-200 w-45">
                <li> <Link to = {`/category/${category.id}`}>{category.name}</Link> </li>
              </ul>
                )
            }
        </div>
    );
};

export default Sidebar;