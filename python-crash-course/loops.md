# Chapter Four
::: info Note
If you are totally new to programming, please make sure you have completed [Chapter One](/python-crash-course/), [Chapter Two](/python-crash-course/variables) and [Chapter Three](/python-crash-course/conditions).
:::
## Doing Things Repeatedly

In this chapter, we will will explore another basic concept of programming: running the same line of code or the same block of code multiple times, repeatedly. For example, if we want to write a program that prints the text _Hello world_ five times on the screen, we might initially do something like this:

```python
print("Hello world!")
print("Hello world!")
print("Hello world!")
print("Hello world!")
print("Hello world!")
```

However, this approach is quite tedious when you have to write the same thing repeatedly. Now let's write another program to do it this in an easier way.

Create a file named **loops1.py** and write this code:

```python
for i in range(5):
    print("Hello world!")
```

Run the program by typing `python loops1.py` in the Terminal.

Output:

```terminal
Hello world!
Hello world!
Hello world!
Hello world!
Hello world!
```

In this example, you can see we achieved the same result with just two lines of code and saved ourselves a lot of time. The magic happens in this line `for i range(5):`. It tells our program to run the following block of code 5 times, as it is specified by `range(number_of_times)` function. If you change the number to 10, the text _Hello world!_ will be printed 10 times. This idea of doing things repeatedly is called, _loop_ and this is called a **for** _loop_ because it is constructed with the keyword **for**.

## Looping Lists and Dictionaries

If I asked you to write a program that prints all the items inside a dictionary or a list, you might do something like this:

```python
a_list = [1, 3, 4]
a_dict = {"name": "Khan", "marks": 88, "grade": "A"}

print(a_list[0])
print(a_list[1])
print(a_list[2])

print(a_dict["name"])
print(a_dict["marks"])
print(a_dict["grade"])
```

It will work, but isn't it the same tedious thing we had to deal with when we tried to print the text _Hello world!_ 5 times? Let's use _loops_ to help us with this task.

Create a file named _loops2.py_ and write this code:

```python
a_list = [1, 3, 4]
a_dict = {"name": "Khan", "marks": 88, "grade": "A"}

# print list using for with range(number_of_times)
print("Printing the list")
for i in range(3):
    print(a_list[i])

# print list using another form of for loop
print("Printing the list again")
for item in a_list:
    print(item)

# print dictionary using for loop
print("Printing the dict")
for key, value in a_dict.items():
    print(key, value)

# printing only value
print("Printing the dict again(only values)")
for _, value in a_dict.items():
    print(value)
```

Now run the program using `python loops2.py` command in the Terminal.

Output:

```terminal
Printing the list
1
3
4
Printing the list again
1
3
4
Printing the dict
name Khan
marks 88
grade A
Printing the dict again(only values)
Khan
88
A
```

In this program, we created a list and a dictionary. Then we printed the list using `for i in range(3)`, since we have three items in our list. We used the in `range(number_of_times)` function set the **number_of_items** to 3. Next, we printed the same list using another form of for loop which is more convenient: `for item in our_list_name`. The word "item" could be anything, but "item" is more relevant. This allows us to print the content of our lists easily without having to access and print them individually.

Next we looped through our dictionary using this form of for loop which is specific to dictionaries, `for key, value in a_dict.items()`. This allows us to access key-value pair of each item in each turn of the loop. The `key, value` could be named anything but "key" and "value" make more sense. In the last loop we printed the same dictionary but this time we omitted the key and only printed the value.

## Another Type of Loop

Suppose we want to write a program that asks the user for a word, converts it to uppercase and print it on the screen. Additionally, we want the program to keep asking for words until the user enters "\-\-stop". For this, a **for** loop wouldn't be very helpful. Instead, we can use another type of loop which is more suitable for situations like this and it is called a **while** loop.

Create a file named **loops3.py** and write this code:

```python
word = ''
while word != "--stop":
    print("This program convert words to uppercase.")
    word = input("Enter a word (to exit enter --stop): ")
    print(word.upper())
    print()

print("Program closed")
```

Run the programs using `python loops3.py` command in the Terminal.

Output:

```terminal
This program convert words to uppercase.
Enter a word (to exit enter --stop):
```

Simple run:

```terminal
Enter a word (to exit enter --stop): Computer
COMPUTER

This program convert words to uppercase.
Enter a word (to exit enter --stop): --stop
--STOP

Program closed
```

In this program, we used a **while** loop. This loop runs the codeblock as long as the condition holds true. This program continuously asks the user for input until the user enters the word _--stop_. When The _--stop_ is entered the condition `word != "--stop"` becomes false, and the loop terminates. 

We instructed the loop to run while the variable **word** is not equal (`!=`) to *--stop*. The condition is checked every time the code block of the while loop ends. If the condition holds true, the loop starts again from the beginning. When it reaches **input()** function, it waits for the user input. After the user enters something, the loop executes the rest of the block until the end, then checks the condition again without going further. This process repeats until the condition is no longer true.


## Summary
In this chapter, we learned how to run a line or a block of code repeatedly using loops. We learned about how can we use loop to iterate through a list and discovered multiple forms of the **for** loop. Next, we learned how to use loop to iterate through dictionaries accessing both keys and values or just values using **for** loop. Lastly, we learned about another type of loop that runs based on certain conditions, called a **while** loop. We can build more complex programs using loops and perform various tasks more efficiently.

## Exercise
Rewrite the example programs in this chapter, modify them and experiment with them.