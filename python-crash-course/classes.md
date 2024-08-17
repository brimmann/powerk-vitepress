# Chapter Six

::: info Note
If you are totally new to programming, please make sure you have completed [Chapter One](/python-crash-course/), [Chapter two](/python-crash-course/variables), [Chapter Three](/python-crash-course/conditions), [Chapter Four](/python-crash-course/loops.md) and [Chapter Five](/python-crash-course/functions.md).
:::

## Objects in Programming

We can treat different aspects of our program like real world objects. This approach helps us to create better and maintainable solutions. However, keep in mind that you don't have use it; you can build any program using the concepts we've already learned. Let's first write program to introduce the concept.

Create a new file named **objects.py** and write this code:

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print("Information about the Dog:")
        print("Name: ", self.name)
        print("Age:", self.age)


dog1 = Dog("Buddy", 2)
dog2 = Dog("Duke", 4)

dog1.info()
dog2.info()
```

Run the program by typing `python objects.py` command in the Terminal and pressing Enter.

Output:

```terminal
Information about the Dog:
Name:  Buddy
Age: 2
Information about the Dog:
Name:  Duke
Age: 4
```

In this program, we created a definition for a dog-like object, which called a **class**. This class has two variables inside it, which are called **attributes of the class**. The function inside a class is called **method of the class**. This class is named Dog, it stores age and name of a dog and prints these information using the **info()** method. Then we created two variables that contain two different dog objects; this is called **creating objects of a class**. Then we call `.info()` method for each object, and it prints corresponding data for each object.

To create a class, we first define it by using `class` keyword followed by the name of the class, which can be anything. In our case; it is named **Dog**. Then we type a colon and press enter to start a new block that will belong to this class. We then define its attributes and methods.

When defining attributes for a class we use `__init__()` **special method** that will help us initialize values to the attributes by passing them to the class name, like `your_variable = ClassName(values_for_each_attribute)`, when creating an object of it.

## Extending Existing Class

Sometimes we may need to add new method or attributes to an already defined class and create a new class out of it. This process is called **inheritance**. Let's write a program to demonstrate this concept.

Create a new file named **classes1.py** and write this code:

```python
class A:
    def __init__(self, attr1, attr2):
        self.attr1 = attr1
        self.attr2 = attr2

    def print_it(self):
        print("Attributes values of the class:")
        print(self.attr1)
        print(self.attr2)


class B(A):
    def __init__(self, attr1, attr2, attr3):
        super().__init__(attr1, attr2)
        self.attr3 = attr3

    def print_and_transform_it(self):
        print("Transformed attribute values of the class:")
        print(self.attr1.upper())
        print(self.attr2.upper())
        print(self.attr3.upper())

print("#########################################")
print("Class A things:")
obj1 = A("One", "Two")
obj1.print_it()

print("#########################################")
print("Class B things:")
obj2 = B("One", "Two", "Three")
obj2.print_it()
obj2.print_and_transform_it()
```

Run the program by entering `python classes1.py` command in the Terminal:

Output:

```terminal
#########################################
Class A things:
Attributes values of the class:
One
Two
#########################################
Class B things:
Attributes values of the class:
One
Two
Transformed attribute values of the class:
ONE
TWO
THREE
```

In this program, we have created two classes, **A** and **B**. Class **B** extends class **A**, so class **A** is called a **parent class** and class **B** is called a **child class**. Class **B** adds a new attribute and a new method to the class **A**. Then we create an object of **A** and an object of **B**. We pass values to each object accordingly and then we use their methods. Notice that the class **B** object **obj2** can invoke a **print_it** method without defining it in it's code block. This works because it is child class of another and it inherits things from its parent.

To create a new class that extends another class, we start by typing the `class`keyword, followed by the name of the class, parentheses and inside the parentheses the name of the parent class, like this: `class new_class(old_class):`. Then, inside `__init__` we call `super().__init__()` to initialize the inherited attributes using the values passed to this child class.

Inheritance helps us craft very various solutions with higher extendability and reusability.

## Objects are Like Boxes

Our class can hold various types of data, but we want the data to be accessed and modified in a controlled way, not directly. This means that the variables inside our class shouldn't alway be accessible outside the class to prevent unwanted modifications and access. This is called **encapsulation**, which tells the object to keep some data private and only expose it in a defined way. To demonstrate this, let's write a program.

Create a new file named **classes2.py** and write this code:

```python
class MyTextStore:
    def __init__(self, text1, text2):
        self.text1 = text1
        self._text2 = text2

    def print_it(self):
        print("Public text is: ", self.text1)
        print("Private text is: ", self._text2)

    def get_text2(self):
        return self._text2

    def set_text2(self, text):
        if text != "dangerous":
            self._text2 = text
        else:
            print("This is text is to dangerous, it cannot be stored.")


var1 = MyTextStore("Happy birthday!", "the code is abcd")

print(var1.text1)
var1.text1 = "Something else"
print(var1.text1)

# The following code won't work
# print(var1._text2) # It will not work, _text2 is private
# var1._text2 = "Replace it with this"

# The right way
print(var1.get_text2())
var1.set_text2("Some other text")
print(var1.get_text2())

var1.set_text2("dangerous") # It won't be allowed to change text2
print(var1.get_text2()) # text2, didn't changed in previous line
```

Run the program by entering `python classes2.py` in the Terminal.

Output:
```terminal
Happy birthday!
Something else
the code is abcd
Some other text
This is text is to dangerous, it cannot be stored.
Some other text
```

In this program, we created a class with two attributes: a public attribute that can be accessed and modified directly, and a private attribute that has to be accessed through a method which is called **getter** in programming and modified through a method which is called **setter** in programming. The public attribute **text1** can be accessed directly with the object's name, but the private attribute cannot be accessed this way. The setter method **set_text2()** checks if the value that is being assigned to the attribute **_text2** is not equal to the text *dangerous*. This is an example of how we control the value that is sent to be assigned to our private attribute. Hiding a variable inside a class to prevent direct access is, encapsulation.

To define a private with attribute, we start the name by an underscore `_`. When an attribute is set to be private, we need to define at least a getter and setter function if we want it be accessed and modified in a controlled way.

Encapsulation allows us to control the flow of data into and out of the class to prevent unwanted consequences.

## Polymorphism
In programming, we can use a single method to control different objects easily and in an organized way. It is like a remote control that switch on or off a TV, an air conditioner and a fan. Imagine that you have one remote control and switch on or off different devices. To demonstrate this concept, let's write a program.

Create a new file named **classes3.py** and write this code:

```python
class Dog:
    def __init__(self, name):
        self.name = name

    def sounds(self):
        return "Woof"

class Cat:
    def __init__(self, name):
        self.name = name
    
    def sounds(self):
        return "Meow"

class Bird:
    def __init__(self, name):
        self.name = name

    def sounds(self):
        return "Tweet"

dog_var = Dog("Tunny")
cat_var = Cat("Tom")
bird_var = Bird("Spoony")

animal_list = [dog_var, cat_var, bird_var]

for item in animal_list:
    print(item.sounds())
```

Run the program by entering `python classes3.py` in the Terminal.

Output:
```terminal
Woof
Meow
Tweet
```

In this program, we created three classes of animals: **Dog**, **Cat** and **Bird**. Each of these classes have a method, **sounds()**, that returns the sound of the corresponding animal. Then we created an object of each class and assigned them to a list where each element is one of the objects we created. After that, we iterate over list and call the **sound()** method from each item. This is how we use the same method name but called different functions of different objects in a list.

Notice that each class has a method named **sounds()**. Regardless of having of the same name, these methods do different things depending on the objects calling them. This is the key to polymorphism.

## Side Note
This whole chapter covers the basics of a programming paradigm called OOP(Object Oriented Programming). In OOP, developers create the whole program using classes to make it more efficient, reliable and maintainable. It helps in creating a clean architecture for the entire program. There is another paradigm called FP(Functional Programming), where the whole program relies on functions and classes are not used.


## Summary
In this chapter, we learned what are classes and how to define an create them. To create a class we use keyword `class`, followed by the name of the class and colon that starts the code block for the class. We learned what attributes and methods are. Next we learned, how to extend an existing class using inheritance. Lastly we learned about encapsulation and polymorphism. 

## Exercise
1. Rewrite all the programs in this chapter and experiment with them.
2. Rewrite the polymorphism example. Make an Animal class that will be the parent class of all these classes. It is a good idea because they all share the same attribute, name. Create new method named **info()** that prints the name of each animal. Lastly, add a new animal with a sound of your choice.

## What is next?
We have covered all the basics of programming with Python. These were core concept are fundamentals to all programming languages. Now you can start writing your own programs but I strongly recommend finding tutorials that guide you through creating a complete programs from scratch. You can search the web and Youtube for these kinds of tutorials. You can also check [Python Projects: Building Cool Stuff](/python-stuff/) course on Powerk which will teach you how to create cool stuff with Python from ground up. Thank you for following through, and I wish you the best of luck.


