#!/bin/bash

_DIR_=$(dirname `realpath $BASH_SOURCE`)

cd ${_DIR_}

date

git pull
npm install
npm run build

