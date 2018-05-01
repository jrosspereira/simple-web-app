package com.jross.service.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.jross.entity.UserProfile;
import com.jross.service.ProfileService;
import com.jross.util.JsonFetcherUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

/**
 *
 * Profile Service Implementation
 * @author jpereira
 */
@Service
public class ProfileServiceImpl implements ProfileService {

    @Value("${app.source.url}")
    private String sourceUrl;

    /**
     * Get list of profiles
     * @return
     */
    @Override
    public List<UserProfile> profiles() {
        JsonNode userProfileJson = JsonFetcherUtil.urlToJson(sourceUrl);

        ObjectMapper mapper = new ObjectMapper();

        // acquire reader for the right type
        ObjectReader reader = mapper.readerFor(new TypeReference<List<UserProfile>>() {
        });
        // use it
        List<UserProfile> list = null;
        try{
            list = reader.readValue(userProfileJson);
        }catch (IOException e){

        }

        return null;
    }
}
