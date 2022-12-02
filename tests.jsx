(function(){

    #include "fuzzy-search.jsxinc"

    function showResult(result)
    {
        var str = "Results:\n";
        for(var i = 0; i < result.length; i++) {
            var r = result[i];
            str += r.item.name.firstName + " " +
                    r.item.name.lastName + ", " +
                    r.item.country + " | Score: " +
                    r.score + "\n";
        }
        alert(str);
    }

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

    var searcher = new FuzzySearch(people, ['name.firstName', 'country'], {
        caseSensitive: true,
    });

    showResult( searcher.search('arl') );
    showResult( searcher.search('an') );

    alert(FuzzySearch.match("Test", "test"));
    alert(FuzzySearch.match("Test", "es"));
    alert(FuzzySearch.match("Test", "st"));
    alert(FuzzySearch.match("Test", "t"));
    alert(FuzzySearch.match("Test", "est"));
    alert(FuzzySearch.match("Test", "tes"));
    alert(FuzzySearch.match("Test", "other"));
    alert(FuzzySearch.match("Test", "ts"));

    var karl = "Karl";
    var joseph = "Joseph";

    alert( FuzzySearch.match(karl, "Karl") ); // 1
    alert( FuzzySearch.match(karl, "Joseph") ); // 0
    alert( FuzzySearch.match(joseph, "ose") ); // 7
    alert( FuzzySearch.match(joseph, "sep") ); // 8
    alert( FuzzySearch.match(joseph, "oseph") ); // 5
    alert( FuzzySearch.match(joseph, "oh") ); // 9.5
})();