#!/bin/bash
npm version minor
version=$(npm version minor)
echo "$version"