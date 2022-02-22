import { build } from './Builder';

interface User {
  name: string;
  email: string;
  address: { street: string; country: string };
}
describe('Builder', () => {
  it('should create object', () => {
    const user: User = build<User>()
      .name('James')
      .email('james@email.com')
      .address({ country: 'US', street: '1' })
      .value();
    expect(user.name).toEqual('James');
    expect(user.email).toEqual('james@email.com');
    expect(user.address).toEqual({ street: '1', country: 'US' });
  });
});
