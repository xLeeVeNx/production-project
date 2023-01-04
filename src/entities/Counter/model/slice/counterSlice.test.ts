import { counterReducer, decrement, increment } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('should increment state value by one', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, increment())).toEqual({ value: 11 });
    });

    test('should decrement state value by one', () => {
        const state: CounterSchema = {
            value: 10
        };
        expect(counterReducer(state, decrement())).toEqual({ value: 9 });
    });

    test('should decrement initial state value by one', () => {
        expect(counterReducer(undefined, decrement())).toEqual({ value: -1 });
    });
});
