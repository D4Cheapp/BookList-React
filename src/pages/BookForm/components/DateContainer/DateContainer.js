import React, {useState} from 'react';
import style from './DateContainer.module.scss';
import InputMask from "react-input-mask";
import {useParams} from "react-router-dom";

function DateContainer({refs, bookInfo}) {
    const type = useParams().type;

    const [inputValue, setInputValue] = useState();

    function onInputChange(event) {
        setInputValue(event.value)
    }

    return (
        <div className={style.date}>
            <label className={style.label}>
                Дата начала чтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateFromRef} onChange={onInputChange} value={inputValue}
                           defaultValue={bookInfo ? bookInfo.dateFrom : ''} readOnly={type === 'view'}/>
            </label>

            <label className={style.label}>
                Дата прочтения

                <InputMask className={style.input} mask='99.99.9999' placeholder='ДД.ММ.ГГГГ'
                       ref={refs.dateToRef} onChange={onInputChange} value={inputValue}
                           defaultValue={bookInfo ? bookInfo.dateTo : ''} readOnly={type === 'view'}/>
            </label>
        </div>
    );
}

export default DateContainer;