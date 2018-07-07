// Regular Expression are the patterns used to match the character combinations in strings.
// In javascript , Regular expressions are objects.
// These patterns are used with exec and test methods of RegExp Object
// These patterns are also used with match, replace, search, split methods of String;


// ==> THERE ARE 2 WAYS TO CREATE REGEX
// --------> 1) let re = /ab+/;       ENCLOSE WITHIN '/'     OUTPUT : ab , abbbbbbb, ababab   | Used when you know regex in advanced
// --------> 2) let re1 = new RegEx('ab+') | Used when regex is obtained at runtime










/*
Options

/ab/ - exact match 'ab'
/^ab/ - Does not match ab
* - 0 or more occurance
+ - 1 or more occurance
? - 0 or 1
. - any single character  Ex: /.n/ = output = an, %n, dn, 4n
{} - exactly n occurances
{n,} - Ex: /a{3,}/ = output = aaa, aaaaaaaaaaa, aaaaaaaaaaaaaaaa  ({value 1 : minimum-occurance , value 2 : Maximum-occurance})
{n,m} - (n <= m) at least n and at most m occurances
[0-9]
[a-z]
[A-Z]
[x|y] - Either x or y

\d - digits
\D - non digits ==> similar to - [^0-9]
\s - space character (include space, tab, line feed)
\S - character other than space
\w - alphanumeric characters [A-Za-z0-9]


/<pattern>/ - case sensitive matching  EX. /ab/
/<pattern>/i - i= case insensitive matching
/<pattern>/g - g= global search. Looking in whole string and returning all the matches

x(?=y) - search for pattern where x is followed by 'y'
         EX. /ab(?=xy)/ => search for pattern where ab is followed by 'xy'
         EX. /ab(?=xy|pq) => search for pattern where ab is followed by 'xy' or 'pq'

*/


var regex = /d(b+)d/;
var result = regex.exec('asfasfasfadfasfdbbbdawfawfawfedbdaegagaea');
console.log(result);
