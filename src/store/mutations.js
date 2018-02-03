import { ISAPP } from './mutation-types.js';

export default {
    [ISAPP](state, id) {
        state.isApp = id;
    },
}