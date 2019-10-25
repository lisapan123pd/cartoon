#!/bin/sh

docker stop cartoon_bg && docker rm cartoon_bg

docker run -p 8000:8000  -it -d --link mysql:mysql --link redis:redis --net data_default --name cartoon_bg xiexieni/cartoon_bg:$1

docker exec -it cartoon_bg bash
