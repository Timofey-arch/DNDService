import MinusIcon from '../../../public/images/icons/minus.png';
import PlusIcon from '../../../public/images/icons/plus.png';
import Image from "next/image";
import { useState } from 'react';
import React from 'react';


export default function Stat(props: any){
    const [statValue, setStatValue] = useState(10);

    function reduceCount(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        setStatValue(statValue >= 1 ? statValue - 1 : statValue);
    }

    function increaseCount(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        setStatValue(statValue < 20 ? statValue + 1 : statValue);
    }

    return(
        <div className="stat">
            <div className="stat_name">{props.stat_name}</div>

            <div className="stat_value">{statValue}</div>

            <div className="stat_value_choose_field">
                <button onClick={reduceCount}>
                    <Image src={MinusIcon} alt="minus" className="button_img"></Image>
                </button>

                <button onClick={increaseCount}>
                    <Image src={PlusIcon} alt="minus" className="button_img"></Image>
                </button>
            </div>
        </div>
    );
}