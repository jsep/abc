import { SimpleSingleton, UsersApi } from './singleton';

describe('Singleton', () => {
  it('should get the same instance', () => {
    expect(SimpleSingleton.getInstance()).toBe(SimpleSingleton.getInstance());
  });

  it('should get users api with different versions', () => {
    const usersV1 = UsersApi.getInstance('/v1');
    const usersV2 = UsersApi.getInstance('/v2');

    expect(usersV1).toBe(UsersApi.getInstance('/v1'));
    expect(usersV1.version).toBe('/v1');

    expect(usersV2).toBe(UsersApi.getInstance('/v2'));
    expect(usersV2.version).toBe('/v2');

    expect(usersV1).not.toBe(usersV2);
  });
});
