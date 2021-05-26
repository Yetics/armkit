#!/bin/bash

NPROC=8

src=azure-rest-api-specs/specification
dest=armkit-schemas

# Clone the REST API spec repo

git clone https://github.com/Azure/azure-rest-api-specs.git

# Find all the readme.md file and pipe them to autorest
# Run $NPROC jobs in parallel

path="$src/*/resource-manager/readme.md"

printf "%s\0" $path | xargs -0 -n 1 -P $NPROC autorest --azureresourceschema $i

# Gather all generated schemas

for i in $src/*/resource-manager/generated/[0-9]*
do
  d=$(basename $i)
  mkdir -p $dest/$d
  cp $i/*.json $dest/$d
done
