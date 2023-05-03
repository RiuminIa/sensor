<html lang="en">
<head>
</head>
<body>
    <h1>
        Solving tasks for the IoT enginer position.
    </h1>
    <h2>1 Task: Write a script to decode the payload from the LHT65 temperature sensor.</h2>
    <div>
        I created a class that takes a payload string as an argument in the constructor. The class also has a function to output data in json format. <br>
      <a href="https://github.com/RiuminIa/sensor/blob/main/parseData.js#">script</a>
    </div>
    <h2>2 Task:Create a rest API service that will receive payloads and return decoded data.</h2>
    <div>
        I used the Express framework to create the REST API service. To decrypt the payload I used the decoder from the first task.<br>
The request format:<br>
GET: /sensor/{payload}<br>
		response: status 200 a json data<br>
				 status 400 a json chyba<br><br>
POST: /sensor<br>
	body: {data : payload<br>
 	response: status 200 a json data<br>
				 status 400 a json chyba <br> 
      <a href="https://github.com/RiuminIa/sensor/blob/main/serverSensor.js#">REST API service</a>
    </div>
    <h2>3 Task:Сreate a docker container on which the rest API service from the second task will run.</h2>
    <div>
        I created a <a href="https://github.com/RiuminIa/sensor/blob/main/Dockerfile#">Dockerfile</a> in which I set the necessary instructions to build the container, then the command:<br><i>docker build -t sensor .</i><br>  container was successfully created. 
    </div>
    <h2>4 Task:Run the container with the REST API service on the Internet.</h2>
    <div>
        I used the AWS (Amazon Web Services) service to deploy my created container from task 3. First I created a repository in the ECR (Elastic Container Registry) where I uploaded my docker image. Next I created a cluster in the ECS(Elastic Container Service) and ran the container task with my REST API container on it and set the port from 8080 to port 6565. Then configured security rules to open port 6565 for all ip addresses.
As a result, for my service was allocated address: <a href="http://ec2-13-49-68-184.eu-north-1.compute.amazonaws.com:6565">ec2-13-49-68-184.eu-north-1.compute.amazonaws.com</a>
       <h3>Example</h3>
      <p>
        payload=<i>"cbe00b1c01a3010a2e7fff'</i><br>
        Send a get request to the server. It will look like this:<br>
        <a href="http://ec2-13-49-68-184.eu-north-1.compute.amazonaws.com:6565/sensor/cbe00b1c01a3010a2e7fff">ec2-13-49-68-184.eu-north-1.compute.amazonaws.com:6565/sensor/cbe00b1c01a3010a2e7fff</a><br>
        We got back a json with this data:<br>
        <i>{"teplota":"28.44°C","vlhkosť":"41.9%","batéria":"3040mV","teplotaExt":"26.06°C"}</i>
      </p>
  </div>
</body>
</html>
