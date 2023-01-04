import React from 'react';
import { Button } from '../../../shared/ui';
import { EButtonSizes } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'entities/Counter';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { t } from 'i18next';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{t('value')} = {counterValue}</h1>
            <Button data-testid="increment-btn" onClick={onIncrement} square size={EButtonSizes.M}>+</Button>
            <Button data-testid="decrement-btn" onClick={onDecrement} square size={EButtonSizes.M}>-</Button>
        </div>
    );
};
