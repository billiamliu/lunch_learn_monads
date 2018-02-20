# Functional Programming

### Generally Known As:
- pure
- same input, same output
- no side effects


### Characteristics of First Class Functions
- can be passed as arguments
- can be assigned to variables
- can return other functions
- can be stored in data structures


```javascript
const js = {}
js.makeAdder = n => x => x + n
js.addFive = js.makeAdder(5)

const myList = [0, 1, 3, 5]
myList.map(js.addFive)
```

```ruby
my_h = Hash.new
my_h[:make_adder] = -> (n) { -> (x) { x + n } }
my_h[:add_five] = my_h[:make_adder].(5)

my_list = [0, 1, 3, 5]
my_list.map &my_h[:add_five]
```

```scheme
(define (make-adder n)
  (lambda (x) (+ x n)))
(define add-five (make-adder 5))

(define my-list '(0 1 3 5))
(map add-five my-list)
```
