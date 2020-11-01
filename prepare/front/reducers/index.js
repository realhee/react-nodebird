const initialState = {
    name: 'hehe',
    age: 28,
    password: 'babo',
};

// async action creator

// 동적 action creator
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
};
changeNickname('new name');

// // action
// const changeNickname = {
//     type: 'CHNGE_NICKNAME',
//     data: 'booboo',
// }

// reducer : (이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action ) => {
    switch (action.type) {
        case 'CHANGE_NICKNAME':
            return {
                ...state,
                name: action.data,
            }
        }
    }
};

export default rootReducer;