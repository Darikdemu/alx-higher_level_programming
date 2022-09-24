#!/usr/bin/python3
def no_c(my_string):
    without_c = " "
    for y in my_string if y != 'c' and y != 'C':
        without_c +=y
        return(without_c)
