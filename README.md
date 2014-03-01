# Stratos.js [![Build Status](https://travis-ci.org/toddmotto/stratos.png)](https://travis-ci.org/toddmotto/stratos)

Stratos is a 1KB standalone module that simplifies Object manipulation. Stratos provides a range of methods that help developers manipulate JavaScript Objects with ease and very quickly, from extending objects to adding properties, removing or destroying them. The methods keep code readable and take care of the underlying looping, checking and assigning logic. Also includes JSON methods for stringify and parse.

Supports IE6+, but `toJSON` and `fromJSON` are IE8+ as native JSON parsing doesn't exist in IE6/7.

## Methods

#### has()
Returns a boolean on whether an Object property exists.

```javascript
var obj = { name: 'Todd' };
Stratos.has(obj, 'name'); // true
```

#### type()
Returns the raw type of the Object, for example `[object Object]`.

```javascript
var obj = {};
var arr = [];
Stratos.type(obj); // [object Object]
Stratos.type(arr); // [object Array]
```

#### add()
Adds an Object property with corresponding value. Value can be any Object type (array/number/object).

```javascript
var obj = {};
Stratos.add(obj, 'name', 'Todd'); // { name: 'Todd' }
Stratos.add(obj, 'likes', ['Ellie Goulding', 'The Killers']); // { name: 'Todd', likes: ['Ellie Goulding', 'The Killers'] }
```

#### remove()
Removes an Object property.

```javascript
var obj = { name: 'Todd', location: 'UK' };
Stratos.remove(obj, 'name'); // { location: 'UK' }
```

#### extend()
Merges two objects recursively. Uses the `arguments` Object to extend as many objects as needed.

```javascript
var obj1 = { prop1: 'hello', prop2: 'yes', prop3: 'sing' };
var obj2 = { prop1: 'goodbye', prop2: 'no', prop4: 'song' };
var obj3 = { prop5: 'spotify' };

// { prop1: 'goodbye', prop2: 'no', prop3: 'sing', prop4: 'song', prop5: 'spotify' }
Stratos.extend(obj1, obj2, obj3);
```

#### destroy()
Destroys an Object by removing all properties inside it, leaving an empty Object. ECMAScript 5 `strict mode` doesn't allow for top level Object deletion, so we will just erase the contents.

```javascript
var obj = { name: 'Todd', location: 'UK' };
Stratos.destroy(obj); // {}
```

#### keys()
Traverses the Object and returns an array of the Object's own enumerable properties, in the same order as that provided by a `for in` loop.

```javascript
var obj = { name: 'Todd', location: 'UK' };
Stratos.keys(obj); // ['name', 'location']
```

#### vals()
Traverses the Object and returns an array of the Object's own enumerable property values, in the same order as that provided by a `for in` loop.

```javascript
var obj = { name: 'Todd', location: 'UK' };
Stratos.vals(obj); // ['Todd', 'UK']
```

#### toJSON()
Converts an Object to JSON.

```javascript
var obj = { name: 'Todd', location: 'UK' };
Stratos.toJSON(obj); // {"name":"Todd","location":"UK"}
```

#### fromJSON()
Parses JSON back to an Object.

```javascript
var obj = { name: 'Todd', location: 'UK' };
var json = Stratos.toJSON(obj); // {"name":"Todd","location":"UK"}
Stratos.fromJSON(json); // { name: 'Todd', location: 'UK' };
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/stratos.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.

```html
<body>
  <!-- html above -->
  <script src="dist/stratos.js"></script>
  <script>
  // Stratos module available
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history

- 1.2.0
	- Enhanced `extend` method which recursively extends objects
- 1.1.0
	- Add toJSON and fromJSON for stringify/parse methods
- 1.0.0
  - Initial release
