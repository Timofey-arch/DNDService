import {useState} from 'react';
import React from 'react';


export default function Inventory(props: any) {
    const items = props.userData.backgrounds.find((elem: any) => elem.name == props.userData.userBackground).equipment.getEquipment

    return (
        <>
            <></>
            <div className="inventory">
                {items?.map((elem, index) => <div key={index} className="item">{elem}</div>)}
            </div>
        </>
    );
}