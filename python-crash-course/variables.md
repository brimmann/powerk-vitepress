---
outline: deep
---
# Dealing with information?

You might be asking this question "What do you mean by dealing with information and why do we bother talking about it"? Well, if we take a closer look at the world of software, everything is about information. Programs are nothing but dealers with information. We use them to manage information. With Notepad we store information; with websites we share information with the world; even playing videos games deal with information-which character are we playing? How much health of the player is remaining? Where is our character now? Did the enemy get damaged? Everything  is about information. That is why there is a special term for the world of computer: Information Technology or in short, IT. 

Think about the program we wrote. What did it do? It displayed the text *Hello world!* to the user or in other words, it displayed a piece of information to the user on the screen. All the programs we will write deal with information. In our programs we will be handling information, storing it, sharing it, creating it, generating it, transforming it and more.

## Variables

Before we discuss the word *Variable*. Let's write a simple program that will lay the groundwork for us to explore the idea of variables.

Follow the steps in the first chapter to write this code in a new file named **variables.py**:

```python
message = "Hello world!"
print(message)
```
Run the program using ```python variables.py``` command in the Terminal.

Output of the program:
```terminal
Hello world!
```
### What did this program do?
Well, this program does the same thing as the one we wrote in the previous chapter. It simply displays the text *Hello world!* on the screen to the user.

So, what is the difference then? The difference is quite obvious: this program is written differently, but it does the same thing. 

**Explanation:**

This program consists of two lines of code.

```python:line-numbers
message = "Hello world!"
print(message)
```
The first line of the code:
```python:line-numbers
message = "Hello world!"
```
This line tells the computer to store the text *Hello world!* in the container named **message**. This container is called **variable** in programming. It is like a labeled box that stores things inside it. To store something in these boxes, we write its name first, then **an assignment operator**, (the equal symbol = from our keyboard), and then the thing we want to store in our container which is the text *Hello world* in this case. This text we want to store inside the variable is a piece of information. So basically our containers in programs, which are variables, store information inside them. The text you want to store in a variable should be inside double quotation marks (""). The complete syntax is as follow:

***variable_name = information_you_want_to_store_in***

The second line of code:
```python:line-numbers=2
print(message)
```
The second line of our code is quite similar. The only difference that instead of writing our text directly inside **print()** function, we have written the name of the container we created. This tells the print function to print the content of the container, which is the text *Hello world!*. This leads to the same result as the the program in the previous chapter.

### Why variables?
You might be wondering, if both of our programs, up to this point do the same thing, why bother creating a container to store our text inside it and then give the name of the container to the **print()** function to display its content? You are right, there is no need for an extra line of code just to display a text. We can directly print them using one line of code. However, programs are not always about printing some text on the screen. Programs can be much more complicated. What our programs do can be something huge with many tasks to perform. As we keep writing programs we will face situations where we must use these containers. In fact, all the programs we see and use daily have lots and lots of containers (variables) inside them.

Therefore, the concept of variables is one of the most fundamental part programming to learn. We need to learn how to crete variables, when to create variables and how to use variables, what kinds of variables we can create and much more.

### Some words to remember
Take a look at these containers (variables). You don't have to write or run it, just check them out.

```python
name = "John Dove"
roadName = "Second Ave"
label = "Click me"
someVariable = "" # Containers can be empty
```
**Comments:** Comments are some extra text we write inside our code. It start with a hash symbol # and is not part of our code. Just some extra text.


Now let's become a bit more technical and learn some terms.

|Term| Meaning of the term|
|----|--------------------|
|Variable|These are the containers we talked about.|
|Declaration of variable|When create a variable you declare them by writing their name.|
|Initialization of variable|When storing a piece of information inside a variable.|
|Data| It has different uses, but we can use them instead of the word information here.|
|Value|We value of a variable, refers to the things inside a container|

We will be using these terms from time to time throughout the course. Make sure to remember them.

In the coming sections we are going to learn about types of variables and how to use them.

## Basic Types of Variables
Before we start let's write and run this program:
```python
message = "Hello world!"
print(message)

name = "Jade Khan"
phone_number = 123456789
weight = 84.4

print(name)
print(phone_number)
print(weight)
```
Run the program using ```python variables.py``` command in the Terminal.

Output:
``` terminal
Hello world!
Jade Khan
123456789
84.4
```

**Explanation:**
So, in this program we created some more variables. The first variable, **message**, is the same as the before containing a text that we printed it on the screen. Next, we created a variable called **name** which holds the value *Jade Khan*. Then, we created another variable named **phoneNumber**, which hold a phone number notice this isn't enclosed in double quotation marks. Lastly, we create a variable called **weight** which also hold a number but with a decimal point.

When we run the program, it goes thought the following steps:

1. Create variable named **message** which hold the text *Hello world!*. It is a text variable.
2. Print the content of the variable **message**.
3. Create a variable named **name** which holds the value *Jade Khan*. It is a text variable.
4. Create a variable named **phone_number** which holds the value *123456789*. It is a number variable.
5. Create a variable named **weight** which hold the value *84.4*. It is a decimal number.
6. Print the content of variable **name**
7. Print the content of variable **phone_number**
8. Print the content of variable **weight**

**Remember**: The programs run in order, starting from the first line up until the last line in a the file.

In Python we have three types of variables.
1. Number
2. String (text)
3. Boolean (It is very easy, we will get to it once we explored the other two types)

### Numbers
The first common basic type of information we store in variables are numbers. So our variables can hold any number as its value.

***variable_name=number_you_want_to_store***

Examples:
```python
marks = 74
number_of_students = 310
height_of_room = 3.8
temperature = 34
player_health = 88
products_in_stock = 40
net_worth = 28440181
radius = 0.3
```
You don't have to write and run this, just check it out and notice how we have captured different types of information to be stored in variables.

#### The real power of programming 
The real power of using variables lies in how we can can manipulate them, do math with them and so much more.

Create a new file named **var_math.py** and write this code and run it:

```python
message = "This is my bill in US Dollar: "

apples = 2.50
bananas = 1.20
bread = 2.0
milk = 3.0
eggs = 2.50
cheese = 4.00
chicken = 7.50

total = apples + bananas + bread + milk + eggs + cheese + chicken

print(message)
print(apples)
print(bananas)
print(milk)
print(eggs)
print(cheese)
print(chicken)

print("Total cost: ")
print(total)

```
Run the program using ```python var_math.py``` command in the Terminal.

Output:
``` terminal
This is my bill in US Dollar: 
2.5
1.2
3.0
2.5
4.0
7.5
Total cost:
22.7
```

**Explanation:**
Our program stores prices of different items in a bill, sum them up and displays it to the user.

The process of applying math operation on our number variables is quite straight forward. Take a look at these examples, you will figure it out that how easy it is. 

Examples:

You don't have to write and run this code just observe and learn. However you are free to practice with them.
```python
a = 10
b = 20

c = a + b # c is 30 now, store result of 10 + 20
d = c - 5 # d is 30 - 5, which is 25

var1 = 40
var2 = 10
var3 = var1 / var2 # Dividing 40 over 10 which is 4

var4 = 2 * 3
var5 = a * var2 # 10 * 10

num1 = 13
num2 = 15
num3 = 18

avg = (num1 + num2 + num3) / 3 # taking average of three numbers

print(avg)
```
### Strings
The second common piece of information we store in variables is text which referred to as string in programming.

Syntax of storing text in variables is pretty much the same, the only difference is that we need to put it inside double quotation mark.

Take a look at these examples:
```python
country = "Turkey"
place_of_birth = "Dubai, UAE"

# Storing a longer text
home_address = "House No 43, Street 89, G10/4, Islamabad, Pakistan" 

school_name = "Stand International School"
father_name = "Mohammad Khan"
```

#### Things we can do with strings
You might be thinking, "Can we do math with string variables?". The answer isn't a simple yes or no. We cannot do math with text since it doesn't make sense, but there is one mathematical operation we can perform on strings: addition. This isn't actually math in the traditional sense, but rather a way of to join multiple strings into one, which is called **string concatenation** in programming.

example:
```python
first_name = "Michel"
last_name = "Jackson"

# make one them one
full_name = first_name + last_name # Becomes "MichelJackson"
```

Now let's do some fun things with strings. Create a new file named **strings.py** and write the following code:

```python
str1 = "Greetings, everyone!"

# Print the string
print(str1)

# Print in uppercase
print(str1.upper())

# Print in lowercase
print(str1.lower())

# Replace a word in the string
print(str1.replace("everyone", "Jack"))

# Joining two strings
first_name = "Michel"
last_name = "Jackson"
print(first_name + last_name)
```

No run the code by entering ```python strings.py``` command in the Terminal.

Output:
```terminal
Greetings, everyone!
GREETINGS, EVERYONE!
greetings, everyone!
Greetings, Jack!
MichelJackson
```
**Explanation**
Our programs do multiple things with our string *Greetings, everyone!*. Convert it to uppercase letters and print it then convert it to lowercase letters and print it and replacing the word *everyone* with the word *Jack* and print it. Lastly it create two string and join them together to become one string.

### Boolean
Boolean variable are also containers that hold information but the type of information it hold is very simple. Boolean variable can only store one of these two value, a **True** or a **False**.

Examples:
``` python
is_happy = True
test_passed = False
is_empty = True
is_player_alive = True
in_stock = False 
```

You might be asking what is the use of containers that only hold one of two predefined values. It has its own special use. When the time comes you will know how important they are, I promise. Just keep in mind that we have a type of variables that can only a **True** or a **False** at a time.

**Note:** Keep in mind that we cannot perform mathematical operations on boolean values.

