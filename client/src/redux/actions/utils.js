import { isFunction } from 'utils';

export const getActionTypeByPrefix = prefix => type => `${prefix}.${type}`;

export const createRequestPending = (action) => ({
    type: action + '_PENDING'
});

export const createRequestSuccess = (action, res) => ({
    type: action + '_SUCCESS',
    payload: res.data
});

export const createRequestFailure = (action, errors) => ({
    type: action + '_FAILURE',
    payload: errors
});

export const requestAction = (action, apiCall) => (x = {}) => (dispatch, getState) => {
    const params = isFunction(x) ? x(getState) : x;
    dispatch(createRequestPending(action));

    return apiCall(params).then(res => {
        dispatch(createRequestSuccess(action, res));
        return Promise.resolve(res);
    }).catch(err => {
        dispatch(createRequestFailure(action, err));
        return Promise.reject(err);
    });
};
