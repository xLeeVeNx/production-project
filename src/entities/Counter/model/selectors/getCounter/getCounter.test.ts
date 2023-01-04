import { DeepPartial } from 'redux';
import { StateSchema } from 'app/config';
import { getCounter } from './getCounter';

describe('getCounter.test', () => {
    test('should return counter state with value prop', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
