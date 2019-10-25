#!/bin/sh

docker stop cartoon_tools && docker rm cartoon_tools

docker run -p 8073:8073  -it -d --link mysql:mysql --link redis:redis --net data_default --name cartoon_tools xiexieni/cartoon_tools:$1

docker exec -it cartoon_tools bash
