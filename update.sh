#!/bin/bash
version=$(npm version minor)
echo "$version"
git add .
git commit -m "$version"
git push -u origin master