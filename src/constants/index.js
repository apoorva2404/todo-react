import asyncAction from './asyncActionTypes';
import syncAction from './syncActionTypes';

import { createAsyncAction, createSyncAction } from '../utils/helper';
console.log('createAsyncAction', 'createSyncAction',createAsyncAction, createSyncAction);



const actionTypes = {
    ...createAsyncAction(asyncAction),
    ...createSyncAction(syncAction)
}
console.log('actionTypes', actionTypes);
export default actionTypes;