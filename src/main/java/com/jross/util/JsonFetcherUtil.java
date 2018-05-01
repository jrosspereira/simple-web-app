package com.jross.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.stream.Collectors;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * Convert URL result to JSON
 * @author jpereira
 */
public class JsonFetcherUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(JsonFetcherUtil.class);

    /**
     * Convert url result to json node
     * @param urlString
     * @return
     */
    public static JsonNode urlToJson(String urlString) {
        String urlOutput = null;
        URLConnection urlCon;

        try{
            URL url = new URL(urlString);
            urlCon = url.openConnection();

            LOGGER.info("reading data from URL as InputStream");
            BufferedReader in =
                    new BufferedReader(new InputStreamReader(urlCon.getInputStream()));
            urlOutput = in.lines().collect(Collectors.joining());
            in.close();
        } catch(IOException e) {
            LOGGER.info("Exception while reading JSON from URL - {}", e);
        }

        return stringToJson(urlOutput);
    }

    /**
     * Convert string to JsonNode
     * @param string
     * @return
     */
    public static JsonNode stringToJson(String string){
        try{
            if (string != null && !string.isEmpty()) {
                ObjectMapper mapper = new ObjectMapper();
                return mapper.readTree(string);
            }
        }catch (IOException e){
            LOGGER.warn("No valid JSON Found in given URL");
        }
        return null;
    }
}