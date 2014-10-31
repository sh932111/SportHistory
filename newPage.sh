#!/bin/bash

read -p "Folder Name : " folder
test -z $folder && exit 0
read -p "File Name : " file
test -z $file && exit 0

if [[ ! -e $folder ]]; then
mkdir $folder && cd $folder && mkdir $file && cd $file && touch "$file.html" && touch "$file.css" && touch "$file.js"
else
    cd $folder
    if [[ ! -e $file ]]; then
        mkdir $file && cd $file && touch "$file.html" && touch "$file.css" && touch "$file.js"
    else
        echo "mkdir: unary operator expected"
    fi
fi





