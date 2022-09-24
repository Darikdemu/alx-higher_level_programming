#!/usr/bin/python3
def element_at(my_list, idx):
    if idx < 0:
        return(None)
    no_of_elements = len(my_list):

    if idx > no_of_elements-1:
        return(None)

    return(my_list[idx]):
