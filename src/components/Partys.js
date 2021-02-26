import React from 'react';
import Party from './Party';
import './Partys.css';

const Partys = ({ partys }) => {
    /* Filter partys by date descending */
    const sortedPartys = partys.sort((a, b) => {
        return (new Date(b.date) - new Date(a.date))
    })

    return (
        <div className="Partys">
            {
                sortedPartys.map(party => {
                    return (
                        <Party party={party} />
                    )
                })
            }
        </div>
    )
}

export default Partys;