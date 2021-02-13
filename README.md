FESD Week3

# Topic 3 notes 
* Functions
    * References
        * Guide/overview: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
        * MDN reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
        * https://javascript.info/function-basics
        * https://devdocs.io/
    * Declaration v. execution ("call" or "invoke")
    * Nested functions, closures
    * Pass by value v. pass by reference
    * Return values
    * Default arguments
    * Variable number of arguments
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    * Function scoping in JavaScript
    * Function declarations v. function expression (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
        * Function expressions are not "hoisted"
        * Function expressions can be anonymous or named. Only named if need to reference the function itself in its body (e.g. to write a recursive function)
        * Arrow function expressions -- see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* Arrays
    * References
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    * Array initialization/declaration, literal syntax
* Intermediate Array methods: `map`, `reduce`, `forEach`, `filter`, `splice`
    * References:
        * Array methods https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    * Shorthand function, arrow syntax, etc.
* Objects 
    * References
        * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
        * about 'this': https://javascript.info/object-methods
    * Objects as collection of key-value pairs; distinction between a function and a method; significance of `this`, prototype
    * Advanced
        * Prototypal inheritance; "own" versus inherited properties in objects
            * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
        * Functions as *constructors*; `new` operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
* Equality
    * References
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
        * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
    * Note that built-in methods will follow some specific notion of equality, which you can determine with documentation or 
        in examining behavior. For example, `indexOf` and `lastIndexOf` on `Array` use `===`, not `==`


arrow functions
