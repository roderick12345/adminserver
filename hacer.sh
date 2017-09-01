#!/bin/bash

case $1 in;
start) 
	git fetch
;;
end)
	git add *
	git commit -m "$2"
	git push -u
esac


