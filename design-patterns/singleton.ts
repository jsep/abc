export class SimpleSingleton {
  private static instance: SimpleSingleton;

  static getInstance() {
    if (!SimpleSingleton.instance) {
      SimpleSingleton.instance = new SimpleSingleton();
    }
    return SimpleSingleton.instance;
  }
}

// Example with singleton with params
export class UsersApi {
  private static instances: Map<string, UsersApi> = new Map<string, UsersApi>();

  static getInstance(apiVersion: string) {
    if (!UsersApi.instances.has(apiVersion)) {
      UsersApi.instances.set(apiVersion, new UsersApi(apiVersion));
    }
    return UsersApi.instances.get(apiVersion);
  }

  private constructor(public version: string) {}

  getUsers() {
    return [{ name: 'Juan' }];
  }
}
