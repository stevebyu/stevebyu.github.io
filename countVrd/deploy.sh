#!/bin/bash

#run tests

git add -p 

git commit 

git push origin master 

pwd=$(pwd)

cd ..

cp $pwd/* stevebyu.github.io/countVrd/

cd stevebyu.github.io/countVrd/

git add .

git commit -m "made updates to countVrd"

git push origin master && echo 'deployed'

