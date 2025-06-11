export const BaseResponse = {
    /* 200 OK : 요청 성공 */
    SIGNIN_SUCCESS :{
        success: true,
        code: 200,
        message: 'sign in success',
    },

    UNLIKE_TRACK_SUCCESS :{
        success: true,
        code: 200,
        message: 'track unliked',
    },

    LIKE_TRACK_SUCCESS:{
        success: true,
        code: 200,
        message: 'track liked',
    },

    /* 201 CREATED : 요청 성공, 자원 생성 */
    CREATE_PLAYLIST_SUCCESS :{
        success: true,
        code: 201,
        message: '플레이리스트 생성에 성공했습니다.',
    },

    /* 400 BAD_REQUEST : 잘못된 요청 */
    

    /* 401 UNAUTHORIZED : 인증되지 않은 사용자 */
    

    /* 403 FORBIDDEN : 권한이 없는 사용자 */

    /* 404 NOT_FOUND : Resource 를 찾을 수 없음 */
    MUSIC_NOT_FOUND: {
        success: false,
        code: 404,
        message: 'music not found',
    },

    USER_NOT_FOUND: {
        success: false,
        code: 404,
        message: 'user not found',
    },

    USER_LIKE_NOT_FOUND: {
        success: false,
        code: 404,
        message: 'user like not found',
    },

    /* 409 CONFLICT : Resource 의 현재 상태와 충돌. 보통 중복된 데이터 존재 */
    TRACK_ALREADY_LIKED: {
        success: false,
        code: 409,
        message: 'track already liked',
    },

    /* 500 INTERNAL_SERVER_ERROR */
    CREATE_PLAYLIST_FAILED: {
        success: false,
        code: 500,
        message: '플레이리스트 생성에 실패',
    },
    TRACK_LIKE_FAILED: {
        success: false,
        code: 500,
        message: 'track like failed',
    },
    TRACK_UNLIKE_FAILED: {
        success: false,
        code: 500,
        message: 'track unlike failed',
    },
}