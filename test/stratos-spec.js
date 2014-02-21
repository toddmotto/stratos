/**
 * Stratos.js
 */
describe('Stratos', function () {

  /**
   * has()
   */
  describe('has()', function () {

    var obj = {
      has: 'someValue'
    };

    it('should check the property exists', function () {
      expect(Stratos.has(obj, 'has')).toBe(true);
    });

  });

  /**
   * type()
   */
  describe('type()', function () {

    var obj = {};
    var arr = [];
    var num = 1;

    it('should return the raw type of the object', function () {
      expect(Stratos.type(obj)).toBe('[object Object]');
      expect(Stratos.type(arr)).toBe('[object Array]');
      expect(Stratos.type(num)).toBe('[object Number]');
    });

  });

  /**
   * add()
   */
  describe('add()', function () {

    var obj = { overwrite: 'no' };

    beforeEach(function () {
      Stratos.add(obj, 'overwrite', 'yes');
      Stratos.add(obj, 'propStr', 'key');
      Stratos.add(obj, 'propObj', { 'propObj2': true });
    });

    it('should add properties to the Object', function () {
      expect(obj.propStr).toBe('key');
      expect(obj.propObj.propObj2).toBe(true);
      expect(typeof obj.propObj).toBe('object');
    });

    it('should overwrite existing properties', function () {
      expect(obj.overwrite).toBe('yes');
    });

  });

  /**
   * extend()
   */
  describe('extend()', function () {

    var parent = { prop1: 'hello', prop2: 'yes', prop3: 'sing' };
    var child = { prop1: 'goodbye', prop2: 'no', prop4: 'song' };

    beforeEach(function () {
      Stratos.extend(parent, child);
    });

    it('should overwrite existing (parent) properties', function () {
      expect(parent.prop1).toBe('goodbye');
      expect(parent.prop2).toBe('no');
    });

    it('should leave existing props intact and add props that aren\'t there', function () {
      expect(parent.prop3).toBe('sing');
      expect(parent.prop4).toBe('song');
    });

  });

  /**
   * keys()
   */
  describe('keys()', function () {

    var obj = { prop1: 'hello', prop2: 'yes', prop3: 'sing' };

    it('should return an array of keys with props as elements', function () {
      expect(Object.prototype.toString.call(Stratos.keys(obj))).toBe('[object Array]');
      expect(Stratos.keys(obj)).toContain('prop1');
    });

  });

  /**
   * vals()
   */
  describe('vals()', function () {

    var obj = { prop1: 'hello', prop2: 'yes', prop3: 'sing' };

    it('should return an array of keys with props as elements', function () {
      expect(Object.prototype.toString.call(Stratos.vals(obj))).toBe('[object Array]');
      expect(Stratos.vals(obj)).toContain('hello');
    });

  });

  /**
   * remove()
   */
  describe('remove()', function () {

    var obj = { prop1: 'hello', prop2: { prop3: true } };

    beforeEach(function () {
      Stratos.remove(obj, 'prop2');
    });

    it('should remove said props', function () {
      expect(obj.prop2).toBe(undefined);
    });

  });

  /**
   * destroy()
   */
  describe('destroy()', function () {

    var obj = { prop1: 'hello', prop2: { prop3: true } };

    beforeEach(function () {
      Stratos.destroy(obj);
    });

    it('should delete all props leaving an empty object', function () {
      expect(obj).toEqual({});
    });

  });

  /**
   * toJSON()
   */
  describe('toJSON(), fromJSON()', function () {

    var obj = { prop1: 'hello', prop2: { prop3: true } };
    var json;
    var parsed;

    beforeEach(function () {
      json = Stratos.toJSON(obj);
      parsed = Stratos.fromJSON(json);
    });

    it('should stringify the object', function () {
      expect(Object.prototype.toString.call(json)).toBe('[object String]');
    });

    it('should parse the string back to an object', function () {
      expect(Object.prototype.toString.call(parsed)).toBe('[object Object]');
    });

  });

});
