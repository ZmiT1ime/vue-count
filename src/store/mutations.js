import { RELEASEMSG } from './mutation-types.js';

export default {
    [RELEASEMSG](state, param) {
        state.releaseData.push(param);
        // localStorage.setItem('releaseData', JSON.stringify(state.releaseData));
    },
}