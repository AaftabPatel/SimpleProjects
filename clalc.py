#importing packages
import tkinter as tk
from tkinter import *
from tkinter import ttk

#creating window 
win = tk.Tk()
win["bg"] = "#555555"
#naming application
win.title("CalculateIT")

#setting application icon
win.iconbitmap("calc.ico")

#setting window size
win.geometry("265x280")

#declaring expression
exp = ""

#process function
def process(val):
	global exp
	exp = exp + str(val)
	equation.set(exp)

def equalPress():
	try:
		global exp
		exp = str(eval(exp))
		equation.set(exp)

	except:
		equation.set("Error")
		exp = ""

#function to clear
def clear():
	global exp
	exp = ""
	equation.set(exp)


#creating text box to show calculations
equation = StringVar()
eq = Entry(win, textvariable=equation, borderwidth=5, relief=SUNKEN, font=25)
eq.pack()

#creating a grid to place buttons
eq.grid(columnspan=4, ipadx=37)

#creating buttons
b7 = Button(win, text="7", bg="black", fg="white", height = 3, width = 6, command =lambda:process(7))
b8 = Button(win, text="8", bg="black", fg="white", height = 3, width = 6, command =lambda:process(8))
b9 = Button(win, text="9", bg="black", fg="white", height = 3, width = 6, command =lambda:process(9))
bslash = Button(win, text="/", bg="white", fg="black", height = 3, width = 6, command =lambda:process("/"))
b4 = Button(win, text="4", bg="black", fg="white", height = 3, width = 6, command =lambda:process(4))
b5 = Button(win, text="5", bg="black", fg="white", height = 3, width = 6, command = lambda:process(5))
b6 = Button(win, text="6", bg="black", fg="white", height = 3, width = 6, command = lambda:process(6))
bmul = Button(win, text="X", bg="white", fg="black", height = 3, width = 6, command = lambda:process("*"))
b1 = Button(win, text="1", bg="black", fg="white", height = 3, width = 6, command = lambda:process(1))
b2 = Button(win, text="2", bg="black", fg="white", height = 3, width = 6, command = lambda:process(2))
b3 = Button(win, text="3", bg="black", fg="white", height = 3, width = 6, command = lambda:process(3))
bminus = Button(win, text="-", bg="white", fg="black", height = 3, width = 6, command = lambda:process("-"))
b0 = Button(win, text="0", bg="black", fg="white", height = 3, width = 6, command = lambda:process(0))
bclear = Button(win, text="C", bg="#ff8c00", fg="white", height = 3, width = 6, command = lambda:clear())
bequlas = Button(win, text="=", bg="white", fg="black", height = 3, width = 6, command = lambda:equalPress())
badd = Button(win, text="+", bg="white", fg="black", height = 3, width = 6, command = lambda:process("+"))

#placing all buttons
b7.grid(row = 3, column = 0, pady=3)
b8.grid(row = 3, column = 1)
b9.grid(row = 3, column = 2)
bslash.grid(row = 3, column = 3)
b4.grid(row = 4, column = 0, pady=3)
b5.grid(row = 4, column = 1)
b6.grid(row = 4, column = 2)
bmul.grid(row = 4, column = 3)
b1.grid(row = 5, column = 0, pady=3)
b2.grid(row = 5, column = 1)
b3.grid(row = 5, column = 2)
bminus.grid(row = 5, column = 3)
b0.grid(row = 6, column = 0, pady=3)
bclear.grid(row = 6, column = 1)
bequlas.grid(row = 6, column = 2)
badd.grid(row = 6, column = 3)


#closing mainloop
win.mainloop()