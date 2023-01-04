import { getCounter } from '../getCounter/getCounter';
import { StateSchema } from 'app/config';

export const getCounterValue = (state: StateSchema) => getCounter(state).value;
