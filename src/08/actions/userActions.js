import createActions from '../api-redux-pack/createActions';

const { create } = createActions('users');
export function createUser(data, onComplete) {
  return create(
    data,
    {},
    {
      notification: {
        error: '회원 가입 중에 문제가 발생했습니다.',
        success: '회원 가입이 성공적으로 완료되었습니다.',
      },
      onSuccess: onComplete,
    },
  );
}
