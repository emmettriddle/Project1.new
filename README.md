Story Pitch Management System
Project Desciption

A full-stack web application that allows authors to submit story pitches to a publishing company. The pitch can then be approved or rejected by editors at various levels and in various committees based on genre and story length before the author is able to submit a draft of the story. The authors are able to track the status of their pitches throughout the process.
Features

Session Tracking

    HttpSession objects used to store and access session information (such as current logged in user and the professional development resource in question). AJAX Calls
    JavaScript is implemented for front end design in order to send and receive asynchronous HTTP Requests and Responses. HTML Design
    Bootstrap used for CSS
    JavaScript used for DOM Manipulation.

Required Dependencies

<dependencies>

		<!-- https://mvnrepository.com/artifact/org.postgresql/postgresql -->
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
			<version>42.2.20</version>
		</dependency>

		<dependency>
			<groupId>junit</groupId>
			<artifactId>junit</artifactId>
			<version>4.11</version>
			<scope>test</scope>
		</dependency>

		<!-- https://mvnrepository.com/artifact/org.apache.logging.log4j/log4j-core -->
		<dependency>
			<groupId>org.apache.logging.log4j</groupId>
			<artifactId>log4j-core</artifactId>
			<version>2.14.1</version>
		</dependency>

		<!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api -->
		<dependency>
			<groupId>javax.servlet</groupId>
			<artifactId>javax.servlet-api</artifactId>
			<version>4.0.1</version>
			<scope>provided</scope>
		</dependency>

		<!-- https://mvnrepository.com/artifact/com.google.code.gson/gson -->
		<dependency>
			<groupId>com.google.code.gson</groupId>
			<artifactId>gson</artifactId>
			<version>2.8.7</version>
		</dependency>

		<!-- https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind -->
		<dependency>
			<groupId>com.fasterxml.jackson.core</groupId>
			<artifactId>jackson-databind</artifactId>
			<version>2.12.3</version>
		</dependency>
	</dependencies>

