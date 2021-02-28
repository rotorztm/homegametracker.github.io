import React from 'react';
import Party from './Party';
import './Partys.css';

const Partys = ({ partys, games }) => {
    /* Filter partys by date descending */
    const sortedPartys = partys.sort((a, b) => {
        return (new Date(b.startDate) - new Date(a.startDate))
    })

    return (
        <div className="Partys">
            {
                sortedPartys.map(party => {
                    return (
                        <Party party={party} games={games} />
                    )
                })
            }
        </div>
    )
}

export default Partys;