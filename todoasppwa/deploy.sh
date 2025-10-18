#!/bin/bash


cp -R * ../stevebyu.github.io/todoasppwa/
cd ../stevebyu.github.io/
git pull origin master
git add todoasppwa/
git commit -m "updated todo app sing page pwa app"
git push origin master

