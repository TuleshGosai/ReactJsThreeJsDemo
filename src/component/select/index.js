import React from 'react'
import './select.css'

const SelectCom = (props) => {
    const { changeHandler, id, data } = props;
    return (
        <select id={id} onChange={(e) => changeHandler(e.target.value)}>
            {
                data.map((d) => (
                    <option key={d.value} value={d.value}>{d.name}</option>
                ))
            }
        </select>
    )
};

export default SelectCom