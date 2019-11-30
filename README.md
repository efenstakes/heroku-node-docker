"# heroku-node-docker" 


heroku container:login

heroku create -a appnamehere

heroku container:push web --app=appnamehere

heroku container:release web --app=appnamehere
