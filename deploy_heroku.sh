#!/bin/sh



docker login --username=_ --password=$HEROKU_AUTH_TOKEN registry.heroku.com 

docker push  registry.heroku.com/$APP_ID_OR_NAME/web


WEB_DOCKER_IMAGE_ID=$(docker inspect rmaycon-load-balancer --format={{.Id}})

curl -n -X PATCH https://api.heroku.com/apps/$APP_ID_OR_NAME/formation   -d '{"updates": [{"type": "web", "docker_image": "$WEB_DOCKER_IMAGE_ID"    }  ]}'   -H "Content-Type: application/json" -H "Accept: application/vnd.heroku+json; version=3.docker-releases" -H "Authorization: Bearer $HEROKU_AUTH_TOKEN" 
