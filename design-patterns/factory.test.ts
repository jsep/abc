import {
  LongSwordFactory,
  LongSwordWeapon,
  PistolFactory,
  PistolWeapon,
  WeaponCreator,
  WeaponType,
} from './factory';

describe('Factory', () => {
  describe('Classic', () => {
    let lsf: LongSwordFactory;
    let pf: PistolFactory;
    beforeEach(() => {
      lsf = new LongSwordFactory();
      pf = new PistolFactory();
    });
    it('should create long sword weapon', () => {
      const longSword = lsf.create();
      expect(longSword).toBeInstanceOf(LongSwordWeapon);
    });
    it('should create pistol weapon', () => {
      const pistol = pf.create();
      expect(pistol).toBeInstanceOf(PistolWeapon);
    });
  });
  describe('Alternative implementation with only one factory', () => {
    let factory: WeaponCreator;
    beforeEach(() => {
      factory = new WeaponCreator();
    });
    it('should create long sword', () => {
      const longSword = factory.create(WeaponType.LongSword);
      expect(longSword).toBeInstanceOf(LongSwordWeapon);
    });
    it('should create pistol', () => {
      const pistol = factory.create(WeaponType.Pistol);
      expect(pistol).toBeInstanceOf(PistolWeapon);
    });
  });
});
