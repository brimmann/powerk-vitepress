---
outline: deep
---
# What is it all about?
Before we start, let's ask ourselves a few questions. Why do we learn programming? What do I want to build? How did the word *programming* even come to my mind? Please take a moment to answer these questions in your mind before moving to the next section. 

Now, let's answer these questions together. The reason we might learn programming might be to build a cool program for our computer. For example, I might want to develop a program that will organize all the movies on my laptop based on their genre and keep track of which ones I've watched and when. Plus, it could do other cool things with my movie collection. Lastly, I might have heard about programming from friends, the internet or a school book.

The answer to these questions could be different for everyone but they all follow the same pattern. We must have our own answers to these questions otherwise reading all these things might lead to frustration or disappointment.

After answering these questions, you might be asking yourself, "How can I build a computer program then?" The answer is simple: with Python. Now let's do some programming.

## What is Python?
As I mentioned earlier Python is something that we use to write(build) computer programs with. It is referred to as a programming language. Before we do anything I want you to take a look a your computer and see how many kinds of programs we have. We have programs like notepad and also have websites which are type of programs that run in your browser. Similarly there are programs that can only be used with a keyboard that don't have a graphical user interface. While they arn't as popular nowadays but they were quite common at the beginning of computer era. Please go ahead and search for '*What are CLI programs?*' and take a look. These CLI programs are still popular among developers and you will learn about them soon as we move forward. There are so many other programming languages out there but we do Python in this crash course.

## Let's do this anyway
Now lets get our hands dirty and write our first program. Up to this point we have learned about overall concept of programs and how they are built(written). And from this point forward, we will be doing things that you might not fully understand, but make sure to follow along. You will understand them once we complete the process. So be patient and follow each step I will tell you. So let's start writing our first program.

### What do we need?
**Assumption**: I assume that you are a Windows user since it is quite common among computer owners. You can follow the whole course even if you don't have a Windows machine but, you will need to figure out how to setup the same environment on your system. And any Python program you write will run on all modern computers regardless of their operating system.

To start writing our first program you need to install the following two things in your computer:
- Python
- VS Code

Once you have installed these two things, you will be able to write any program and run it on your computer.

### Installing Python
Installing Python is quite straight forward. Click on [this link](https://www.python.org/downloads/). Use the **Download Python** button that appears first on the page to download the latest version.

*How to install Python*
![image](/gifs/python-crash-course/install-python.gif)

### Installing VS Code
1. Download the [Visual Studio Code installer](https://code.visualstudio.com/Download) for Windows.
2. Once it is downloaded, run the installer. This will only take a minute.
3. Now VS Code is installed on your system you can open it just like other programs.

*How to install VS Code*
![image](/gifs/python-crash-course/install-vscode.gif)

### Write our first program
So to write a program using Python, we need to go through the following steps.

**Note**: Just follow along and don't worry if it doesn't make sense yet.

1. Create a folder somewhere on your computer and name it *my-python-code*
2. Now open VS Code.
3. Click on **File > Open Folder**.
4. Find the folder we just created named *my-python-code* and click on it.
5. Click on the **Select Folder** button.

After going through the steps above, you will see that your folder is opened in VS Code. Now we can create our first python code inside this folder using VS Code.

*How to open a folder in VS Code*
![image](/gifs/python-crash-course/open-folder-vscode.gif)

Now lets go ahead and create file in VS Code where we will be writing our code.

1. On the left side of your VS Code, you will see your folder name in upper case letters. Move your mouse to that name.
2. You will see a few icons aper to the right of your folder's name. Click on the first icon in the row which appears to be a document with a plus icon.
3. After clicking on that icon you will see an input field appear below the name of your folder, asking you to write something which will be the file's name. Write a the name as *hello.py* and click somewhere else or press enter.
4. Now you will see a new file is created with the name we just entered. Click on that.
5. After clicking on that you will sell that the file is opened to the right of your VS Code where you can type anything. This is the place where we will be writing our code.

*How to open a folder in VS Code*
![image](/gifs/python-crash-course/open-folder-vscode.gif)

**Let write our program now**
In the text area now write this code:

```python
print("Hello World!")
```
Press **Ctrl+S** to save what you just wrote.

This a short one line of text is our first program written in Python. In the next section we will run our program. 

*Write your first program in VS Code*
![image](/gifs/python-crash-course/write-program-vscode.gif)

**Reminder:** If you didn't understand a thing up to this point don't worry. It will all start making sense soon. Just do as I say.

### Run our first program
To run our first program, follow the steps below.

1. Go to **Terminal > New Terminal** and click on it.
2. You will see something appeared at the bottom of your VS Code that allows you to type something in. This is called the Terminal where we can interact with our computer using a CLI(Command Line Interface). Remember I asked to go and search for *'What are CLI programs?'*. Make sure you have done it. No click somewhere in the Terminal.
3. Type this ```python hello.py``` in the Terminal and press enter.

Now you will see that that *'Hello world!'* text from our code we wrote in the previous section appears below the command you just entered.

Congratulations! You have written and run your first program. Don't worry, we will talk about everything we just here and almost everything will make sense to you.

*Run your first program in VS Code*
![image](/gifs/python-crash-course/run-program-vscode.gif)

### What happened?
You might be expecting our program to be something similar to Notepad, a website or something which has window-like structure that you can install or open from your desktop. But our program is just a text *Hello world* that appeared in some part of our VS Code, it wasn't something like Notepad or a website. You are right. However, programs are necessarily Notepad or a website, they are more then that. In the beginning of computer era we didn't have programs like Notepad or websites. They were most like the Terminal in our VS Code, where all you could see was just text on the black background and you would type things in them just like the command ```python hello.py``` we typed. 

The good news is that all programs are built the same way. You can create a program like notepad or a website the same way we created our hello world program. They are all written the same way and follow the same principle regardless of whether they are programs like Notepad, websites or just a text-based old-fashioned CLI program.

So we created CLI program which print a text 'Hello world!' to the Terminal.

We can create advanced programs like Notepad or a website using Python. However we need to learn the universal principle of programming and how they are written by developing text-only-based programs that run in the Terminal. Once we have learned the basics we can move on to build the programs of our choice. After you completed this course, we have a dedicated course for those advanced Python programs, [Python Projects: Building Cool Stuff](/python-stuff/), where you can continue your journey.

## What did we just do?
Let's recap what we have done up to this point. The goal was to write our first program. So, we setup our environment by installing Python and VS Code. We created a folder in our system to store our source code file. Then we opened the folder in VS Code. We created a file name **hello.py**. The name of the file could be anything but **.py** extension is necessary. Then, we wrote our first program which displays the text *Hello world!* to the user on the screen. Then we ran our program using ```python hello.py``` command in the Terminal. We discussed that we need to learn the basics using text-based programs before moving on to advanced programs like Notepad or websites. We also talked about that all the programs, whether basic or advanced, follow the same principles, so once we learned the basics we can create more advanced programs.

## Exercise
Make sure to do this exercise.

Write and run a program that displays *Hello there, I'm a Python program* to the user on the screen.

## What is coming next?
From this point forward, we have our computer ready with VS Code and Python installed. So we will be writing all programs the same way using VS Code. We will create different programs that do more than just displaying text on the screen to the user.

Make sure you have done everything properly and understand most of this chapter. Let's dive deeper. Welcome to the world of programming.