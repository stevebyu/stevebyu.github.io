#!/bin/bash

wiw=$(pwd)

cd ../../stevebyu.github.io/
rm -rf fashionablylate

cd $wiw

git checkout-index -a -f --prefix=../../stevebyu.github.io/fashionablylate/

cd ../../stevebyu.github.io/

git add -u
git commit -m "added changes to fashionablylate pwa"
git push origin master
