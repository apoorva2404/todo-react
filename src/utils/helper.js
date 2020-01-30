export const createAsyncAction = (actions) => {
    const obj = {};
    actions.forEach(actionType => {
        obj[actionType+'_REQUEST'] = actionType+'_REQUEST';
        obj[actionType+'_SUCCESS'] = actionType+'_SUCCESS';
        obj[actionType+'_FAILURE'] = actionType+'_FAILURE';
    });
    return obj;
}


export const createSyncAction = (actions) => {
    const obj = {};
    actions.forEach(actionType => {
        obj[actionType] = actionType;
    });
    return obj;
}