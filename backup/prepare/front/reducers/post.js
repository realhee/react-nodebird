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

export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
export const RETWEET_REQUEST = 'RETWEET_REQUEST';
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

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