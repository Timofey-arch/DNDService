import MinusIcon from '../../../public/images/icons/minus.png';
import PlusIcon from '../../../public/images/icons/plus.png';
import Image from "next/image";
import { useState } from 'react';
import React from 'react';


export default function Stat(props: any){
    const [statValue, setStatValue] = useState(0);

    function reduceCount(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        if(statValue > 0){
            setStatValue(statValue - 1);
            props.setPointCount(props.pointCount + 1);
        }
    }

    function increaseCount(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        if(statValue < 20 && props.pointCount > 0){
            setStatValue(statValue + 1);
            props.setPointCount(props.pointCount - 1);
        }
    }

    return(
        <section className="stat">
            <div className="stat_name">{props.statName}</div>

            <div className="stat_value">{statValue}</div>

            <div className="stat_value_choose_field">
                <button onClick={reduceCount}>
                    <Image src={MinusIcon} alt="minus" className="button_img"></Image>
                </button>

                <button onClick={increaseCount}>
                    <Image src={PlusIcon} alt="minus" className="button_img"></Image>
                </button>
            </div>
        </section>
    );
}