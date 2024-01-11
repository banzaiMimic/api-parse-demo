# api-parse-demo
api parsing demo using node with fastify and mongodb

## deps
- yarn (built on 1.22.19)
- node (built on 21.1.0)
- docker-compose (built on Docker Compose version v2.23.3-desktop.2)
- docker (Docker Desktop if on Windows, built on Docker version 24.0.7, build afdd53b)
- WSL2 with hyperv enabled (if on Windows, built on WSL version: 2.0.9.0)

## quickstart
```
#copy .env.local.sample into `.env` on root, can leave with same value(s) for running locally
#(basic 101 to not store .env params on git repo)

docker-compose build
docker-compose up

#visit http://localhost:8090 on browser should print `{"hello":"friend"}`
```

## docker.notes
```
#list all docker containers by id
docker ps -a 

#rebuild YES (basically if you ever modify docker-compose.yml or any `Docker.*` run this to refresh things)
docker-compose build

#to help debug, if you need to keep container running (i.e. it keeps crashing and u want to shell into it locally)
#on end of your Dockerfile put
`ENTRYPOINT ["tail", "-f", "/dev/null"]`
#we can then:

#shell into docker container (note: you only need first few chars of containerId)
docker exec -it <containerId> sh

```