export interface Weapon {
  name: string;
  damage: number;
  range: number;
}

export interface WeaponFactory {
  create(): Weapon;
}

export class LongSwordFactory implements WeaponFactory {
  create(): Weapon {
    return new LongSwordWeapon();
  }
}

export class LongSwordWeapon implements Weapon {
  name = 'Long Sword';
  damage = 10;
  range = 12;
}

export class PistolFactory implements WeaponFactory {
  create(): Weapon {
    return new PistolWeapon();
  }
}

export class PistolWeapon implements Weapon {
  name = 'Pistol';
  damage = 20;
  range = 50;
}
/*
 *
 * Alternative implementation
 *
 * */

export enum WeaponType {
  LongSword,
  Pistol,
}
export class WeaponCreator {
  create(weaponType: WeaponType): Weapon {
    switch (weaponType) {
      case WeaponType.LongSword:
        return new LongSwordWeapon();
      case WeaponType.Pistol:
        return new PistolWeapon();
      default:
        throw new Error('Unknown weapon.');
    }
  }
}
