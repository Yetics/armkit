#!/bin/bash

set -euo pipefail

bundle=$(npm pack)

rm -rf dist
mkdir -p dist/js

mv ${bundle} dist/js
