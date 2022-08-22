#!/bin/sh
docker compose down
cd ..
source ./bin/activate
source .envrc
docker compose up -d
kill -9 $(lsof -t -i :8000)
make cleanup
make run