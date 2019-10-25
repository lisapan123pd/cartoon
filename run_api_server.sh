#!/bin/sh

docker stop cartoon && docker rm cartoon
docker run -p 8077:8077  -it -d --link mysql:mysql --link redis:redis --net data_default  --name cartoon xiexieni/cartoon_api:$1

docker exec -it cartoon bash

