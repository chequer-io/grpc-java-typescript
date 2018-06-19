#!/bin/bash

mkdir -p ./_proto

echo "Compiling protobuf definitions"
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I ../proto \
  --js_out=import_style=commonjs,binary:./_proto \
  --ts_out=service=true:./_proto \
  ../proto/user.proto
