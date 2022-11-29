#!/usr/bin/python3
"""0_read_file Module """


def read_file(filename=""):
    """ function to read and print a file """
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
