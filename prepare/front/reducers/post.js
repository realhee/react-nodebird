export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '니니',
        },
        content: '첫 번째 게시글 #향수 #딥티크 #플레르드뽀',
        Images: [{
            src: 'http://img.danawa.com/prod_img/500000/646/921/img/5921646_1.jpg?shrink=500:500&_v=20200720093952',
        }, {
            src: 'https://mblogthumb-phinf.pstatic.net/MjAxODA5MThfNjYg/MDAxNTM3MjQzNDY5MDk3.5PXpPJcC1_yPXEhhxvbAObJaHjVfWdiZQK7ZI8XmwVEg.JbNZHNipk5RQ9vRmfE-r5qU-p1CyzKhF8edHY3LeIDEg.JPEG.gyerimong2/IMG_7450.JPG?type=w800',
        }, {
            src: 'https://lh3.googleusercontent.com/proxy/df--PXARBzZrnYlONGR34z-2mD32lUl2hWk64fIh3KXNsyv3wxbp2byX8wo3glqRtwNlvr-TmoFhLTS46Dr1S7UgjLL97E02DXx9nFWFG6QPdoIB4JXM81bv7p15aHNK7kfMiMxPXuHuPs3mRx5GiTqZyE1noOv8KrXpQ96TeEQjE2Ke8xz9y9Tvu1DLlgFxDC87IbusTnzPQb8IExXZ4cB2qfuk4UnClfv5jnJDT1Z-93rzQ6yLDM_IQYmNsojsv7pS-RQJuODeXtDWQgR93tO9hg2VCASNWmMz6r6IItqmYtM',
        }],
        Comments: [{
            User: {
                nickname: 'zeze',
            },
            content: '맡아보고싶어요~^^',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '가장 좋아하는 향이에요!',
        }]
    }],
    imagePaths: [], // 이미지 업로드 시 경로 저장되는 곳
    postAdded: false, // 게시물 업로드 완료 여부
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: 'dummy data 입니다.',
    User: {
        id: 1,
        nickname: 'genie',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;