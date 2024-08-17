# Chapter Five

::: info Note
If you are totally new to programming, please make sure you have completed [Chapter One](/python-crash-course/), [Chapter two](/python-crash-course/variables), [Chapter Three](/python-crash-course/conditions) and [Chapter Four](/python-crash-course/loops.md).
:::

## Dividing Your Code into Blocks

Up to now, we have learned all the basics principles of programming that will help us start building our own programs. However, as you start building your own programs, your codebase will grow larger as you keep adding new functionalities. This makes your code hard to manage and modify. To address this problem, we need to properly organize our code. We can do this by dividing our code into different independent parts. Avoid repeating yourself by writing the same code and the same solution again and again. Instead create reusable pieces of your code that can be used whenever needed. Let's write a program to demonstrate this concept.

Create a new file named **blocks.py** and write this code:

```python
def greet():
    print("Hello world!")

greet()
greet()

a = 10
print(a)
greet()
```

Run the program by using `python blocks.py` command in the Terminal.

Output:

```terminal
Hello world!
Hello world!
Hello world!
10
Hello world!
```

This program prints "Hello world"! multiple times and print a variable at some point. However, in this program, we used a new technique to move the `print("Hello world!")` part of our program into a block that starts with `def greet()`. This is called **function**. A function allows us to group a piece of code into a specific block, name that block, and use the name of the block wherever we need it to run the same code. This will help us reuse the code without writing it repeatedly.

We create a function by using `def` keyword followed by the name of the function, which can be anything, and then a pair of parentheses, this is called **definition of a function**. Wherever we want to use the code inside the function we call it by writing the name of the function followed by a pair of parentheses, this is called **calling a function**. In our code, we defined a function named **greet** and placed our code `print("Hello world!")` inside it. Then we used the name of the function to tell the program to run he code inside its code block. By calling the function multiple times we printed the text _Hello world!_ multiple times.

## Passing Data to a Function

When calling a function we can give it some values to use it in its code block.

Create a new file named **functions.py** and write this code:

```python
def greet(name):
    print("Hello " + name)

greet("John")
greet("Ali")
greet("My Friend!")
```

Run the program by entering `python functions.py` command in the Terminal.

Output:

```terminal
Hello John!
Hello Ali!
Hello My Friend!
```

This program defines a function that takes value in the parentheses. We then call the function three times, passing it different values. Each time we pass a new value, it construct a new message accordingly and print it. The value we pass into the function is called an **argument**.

When defining a function, we specify how many value could passed to it. We list names for those values in the parentheses during the definition of the function. The value we passed in our program is named **name**, but we can name it anything.

We can define multiple values to be arguments to our function. Take a look at the following different examples of functions:

```python
def add(a, b):
    result = a + b
    print(result)

add(4, 4) # will print: 8
add(3, 8) # will print: 11
add(a=3, b=8) # will print: 11
add(3, b=8) # will print: 11
add(a=3, 8) # will print: 11

def multiplyThree(a, b, c):
    result = a * b * c
    print(result)


list1 = [1, 3, 4]
multiplyThree(list1[0], list1[1], list1[2]) # prints: 12

# Passing a list into a function
def addAll(the_list):
    result = 0
    for item in the_list:
        result = result + item

    print(result)

addAll(list1) # will print: 8
```

## Getting a Value from a Function

Function can return a value to us, not just receive a value from us. To demonstrate the concept, let's write a program.

Cerate a new file named **functions2.py** and write this code:

```python
def add(a, b):
    result = a + b
    return result

c = add(10, 5) # Function add 10 + 5 and return 15. c is 15 now
print(c) # prints: 15
```

Run the program by entering `python functions2.py` in the Terminal.

Output:
```terminal
15
```

Our program here, we first calls a function, named **add** and pass it two values *10* and *5*. The function, then adds *10* and *5* and place the result in the variable **result**. The function then returns the value of variable **result** to where it was called from. So the the variable **c** receives the value from the function and becomes *15*. Finally the program prints the value of variable **c**.

To return a value from a function, we use the keyword **return** followed by whatever we want to be returned.

## Summery
In this chapter, we learned how to organize our code into blocks by using functions. We then learned how to define and call a function. We demonstrated that how functions can save us from repeating ourselves. After that, we discoverd how to pass values to functions so they can use it in their code blocks. Lastly, we learned how to return a value from a function.

## Exercise
Rewrite all the codes in this chapter and experiment with them. And make sure you do it. Because all exercise are important and they will help us learn things faster and better.
