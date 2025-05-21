export enum ResponseCode {
    /* 200 OK : 요청 성공 */
    SIGNIN_SUCCESS = 'OK',

    /* 201 CREATED : 요청 성공, 자원 생성 */
    PLAYLIST_CREATED = 'CREATED',

    /* 400 BAD_REQUEST : 잘못된 요청 */
    PLAYLIST_CREATION_FAIL = 'BAD_REQUEST',

    /* 401 UNAUTHORIZED : 인증되지 않은 사용자 */
    INVALID_USER = 'UNAUTHORIZED',

    /* 403 FORBIDDEN : 권한이 없는 사용자 */

    /* 404 NOT_FOUND : Resource 를 찾을 수 없음 */
    USER_NOT_FOUND = 'NOT_FOUND',
    MUSIC_NOT_FOUND = 'MUSIC_NOT FOUND',
    ANALYSIS_NOT_FOUND = 'ANALYSIS_NOT FOUND',

    /* 409 CONFLICT : Resource 의 현재 상태와 충돌. 보통 중복된 데이터 존재 */

    /* 500 INTERNAL_SERVER_ERROR */
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
}