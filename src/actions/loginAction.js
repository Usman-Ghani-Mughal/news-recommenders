export const login = (decision) => {
    return {
        type: 'login',
        payload: decision
    };
};