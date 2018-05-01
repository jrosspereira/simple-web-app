package com.jross;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@SpringBootApplication(scanBasePackages={"com.jross"})
public class SimplewebApplication {

	@Value("${app.source.url}")
	private String sourceUrl;

	public static void main(String[] args) {
		SpringApplication.run(SimplewebApplication.class, args);
	}


}
