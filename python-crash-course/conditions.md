# Doing Things Conditionally

By doing things conditionally I mean that we do things based on some conditions. For example, if its raining, I will not play; if it is not raining I will play. Whether it is raining or not is a condition here. Similarly, in programming we can also do or don't, do things conditionally. Before we move, let's write a program that do things conditionally.

Create a new file named **conditionally.py** and write this code:

```python
its_raining = False

if its_raining == True:
    print("I will not play.")
elif its_raining == False:
    print("I will play.")
```

Run the program by entering `python conditionally.py` command in the Terminal.

Output:

```terminal
I will play.
```

Our program in here, create a variable named **its_raining** and assign it a boolean value. Do you remember we talked about boolean variables? They only can have one of these two: True or False. So in our case it is False here.

Next, our program use the **if** keyword followed by the _condition_ **its_raining == True**, checking if the the value of **its_raining** is True. If it is True, it will run the _indented_ code below the colon `:`. Otherwise, it will skip the _indented_ code below the colon and will jump to the line where the keyword **elif** is, and checking if its_raining is False. Since it is False in this case so it runs the _indented_ code below the colon. If **its_raining** didn't contain either of these values, the program would skip both print statements.

## A Complete Examples

In the previous, we we were introduced to **if**, **elif**, **conditions** and indented code below the colon `:` which is called a **code block**. Based on certain condition, we tell our program to run code written in the relevant code block. Code blocks are a grouped pieces of code and can contain one or more lines of code. To start a code block we type `:` colon and go to a newline and then we indent that line. This indention indicates that this code belongs to a code block. But VS Code we wil do indention for you after typed `:` and pressed enter so don't worry about it. Just make sure you start a block by typing `:`.

Let's now write a complete example which will demonstrate majority of these concepts.

Create file named **conditions_example.py**. Write this code:

```python
meals = {
    "mon": "Mashed Potato",
    "tue": "Kidney Beans",
    "wed": "Chicken",
    "thu": "Veg",
    "fri": "Noodles",
    "sat": "Pizza",
    "sun": "Chickpea Salad"
}

messageStart = "Let's cook"

weekday = input("Enter weekday: ")

if weekday == "Monday":
    its = "Its Monday!"
    message = messageStart + " " + meals["mon"] + " today."
    print(its)
    print(message)
elif weekday == "Tuesday":
    its = "Its Tuesday!"
    message = messageStart + " " + meals["tue"] + " today."
    print(its)
    print(message)
elif weekday == "Wednesday":
    its = "Its Wednesday!"
    message = messageStart + " " + meals["wed"] + " today."
    print(its)
    print(message)
elif weekday == "Thursday":
    its = "Its Thursday!"
    message = messageStart + " " + meals["thu"] + " today."
    print(its)
    print(message)
elif weekday == "Friday":
    its = "Its Friday!"
    message = messageStart + " " + meals["fri"] + " today."
    print(its)
    print(message)
elif weekday == "Saturday":
    its = "Its Saturday!"
    message = messageStart + " " + meals["sat"] + " today."
    print(its)
    print(message)
elif weekday == "Sunday":
    its = "Its Sunday!"
    message = messageStart + " " + meals["sun"] + " today."
    print(its)
    print(message)
else:
    print(weekday + " is not a weekday. Enter a correct weekday.")
```
Run the program by entering `python conditions_example.py` command in the Terminal.

Output:
```terminal
Enter weekday: Saturday
Its Saturday!
Let's cook Pizza today.
```

In this code we wrote a complete program that asks the user for the weekday. Based on the user's input, our program displays the meal scheduled for that day with a proper message.

The code is longer compared to the codes we've written before, but it uses the same principles we've learned so far. We used dictionary to store our meal schedule. We used string concatenation to construct a proper message. We used **if** and **elif** to check what the user has entered, and based on the value, the program decides conditionally which block of code to run. There is one new thing at the end of our code, which is `else`, and I'm sure you might have figured it out already. The code belonging to `else:` code block is only run when none of previous condition are true. It is run when you enter something else, other then the day of the week.

We create conditions by comparing things to each other. In this case we compared our **weekday** variable to see what it to see what it contains, and based on it is value, we run a specific block of  code. Each condition can be either right or wrong (True or False) and if a condition is wrong mean False, that block of code is not executed; if the condition is True that block of code is executed. 

We compare things based on:
1. Whether something is equal to something or not
2. Whether something is smaller then something
3. Whether something is greater then something

Examples:
```python
marks = 10
if marks == 10 # is equal; condition is true here
if marks < 10 # is smaller; condition is false here
if marks > 10 # is greater; condition is false

if marks <= 10 # smaller or equal, condition is true since it at least equal
if marks >= 10 # greater or equal, still true since it is at least equal
```

Observe the examples above that how we can compare variable **marks**.


## Summary
First, we learned that conditions are a part of our lives, and we make decisions based on certain conditions. Then we applied the concept of conditions in programs, where we run a piece of code based on specific conditions. Then we wrote a program that asked the user to enter the weekday, and based on the input, it displayed a proper message for what meals will they have today. In this program, we learned about **block of code** and how to use the basic concepts we have already learned to build something more complex. We also learned how to create conditions by comparing our variables to each other or some values. The way we use equal, smaller then or greater then to construct to do the comparison.

## ٍExercise
Write the same example program, but ensure that the user can enter a full day name like "Saturday" or a three-letter abbreviation like "Sat". Also allow the user to enter the names in either uppercase or lowercase, without any constraints on the case of the letters.

*Hint*: You can use `and` and `or` to join multiple conditions. And for case-insensitive behavior, use `.upper()` or `.lower()` methods and then compare the value in the condition.