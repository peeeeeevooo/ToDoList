import React from 'react';

const SortSelected = (props) => {
    return (
        <div>
            <select className="select" defaultValue="Сортировка" onChange={(e) => props.setSort(e.target.value)} >
                <option disabled value=''>Сортировка</option>
                <option value="all">Все</option>
                <option value="completed">Выполненные</option>
                <option value="not-completed">Не выполненные</option>
            </select>
        </div>
    );
};

export default SortSelected;