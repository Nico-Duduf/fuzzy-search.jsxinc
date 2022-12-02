# fuzzy-search.jsxinc
 Simple lightweight Fuzzy Search library for Adobe ExtendScript inspired by [Wouter Rutgers' *fuzzy-search*](https://github.com/wouterrutgers/fuzzy-search).

## Quick start guide

```js
(function() {
    #include "fuzzy-search.jsxinc"

    var people = [
            {
                name: {
                    firstName: 'Karl',
                    lastName: 'Marx',
                },
                country: 'Germany',
            },
            {
                name: {
                    firstName: 'Joseph',
                    lastName: 'Proudhon',
                },
                country: 'France',
            }
        ];

    var result = searcher.search('arl');
})();
```

```js
(function() {
    #include "fuzzy-search.jsxinc"

    var karl = "Karl";
    var joseph = "Joseph";

    alert( FuzzySearch.match(karl, "Karl") ); // 1
    alert( FuzzySearch.match(karl, "Joseph") ); // 0
    alert( FuzzySearch.match(joseph, "ose") ); // 7
    alert( FuzzySearch.match(joseph, "sep") ); // 8
    alert( FuzzySearch.match(joseph, "oseph") ); // 5
    alert( FuzzySearch.match(joseph, "oh") ); // 9.5
})();
```

## Documentation

```
    var searcher = new FuzzySearch(<haystack>, [keys], [options]);
    var result = searcher.search(<needle>);
```

**haystack** *(type: `Array`)*

Array of objects containing the search list.

---

**[keys]** *(type: `Array`, default: `[]`)*

List of properties that will be searched. This also supports nested properties.

---

**[options]** *(type: `Object`)*

Object with options that will configure the search. Scroll/Swipe down to see more information on what options are available.

---

**\<needle\>** *(type: `String`, default: `''`)*

The string to Fuzzy Search on.

### Options

**caseSensitive** *(type: `Boolean`, default: `false`)*

Indicates whether comparisons should be case sensitive.

**sort** *(type: `Boolean`, default: `true`)*

When `true` it will sort the results by best match (when searching for `abc` in the search set `['a__b__c', 'abc']` it would return `abc` as the first result).

When `false` it will return the results in the original order.