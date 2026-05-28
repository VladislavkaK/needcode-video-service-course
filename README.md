# Build and Run the Docker Image
### To build your image, navigate to the directory that has your Dockerfile and run the following command:
```
    docker build -t video-processing-service .
```

### List Docker images
```
    docker images
```

### Copy file: (check name docker container you can use command: docker ps, firstly)
```
    docker cp ./nc-intro.mov epic_shamir:/app/nc-intro.mov
```

### Now, to run the image, use the docker run command:
```
    docker run -p 3000:3000 -d video-processing-service
```

### To list the running containers run:
```
    docker ps
```

### Copy reduced file from epic_shamir:/app to our directory local:
```
    docker cp epic_shamir:/app/processed-nc-intro.mov ./
```

### Container stop:
```
    docker stop <CONTAINER_ID>
```

### To list all containers, even those that have been stopped, run:
```
    docker ps -a
```

### To remove a container run:
```
    docker rm <container-id-or-name>
```
