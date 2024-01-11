#!/bin/bash

docker run -ti --rm \
  --name="chord-chart-studio-1.0.0" \
  -p 3000:3000 \
  docker.io/library/chord-chart-studio:custom-1.0.0 /bin/sh
