#!/bin/bash

num=0
files="$(find images -type f -exec file {} \; | awk -F: '{if ($2 ~/image/) print $1}')"
echo "var index = [" > index.js

while read -r filename; do
	if [ $num -eq 0 ];then
		echo "\"$filename\"" >> index.js
    else
   		echo ",\"$filename\"" >> index.js
	fi

	num=$((num + 1))
done <<< "$files"
echo "]" >> index.js