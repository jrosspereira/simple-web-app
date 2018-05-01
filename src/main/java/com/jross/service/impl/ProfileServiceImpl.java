package com.jross.service.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jross.entity.UserProfile;
import com.jross.service.ProfileService;
import com.jross.util.JsonFetcherUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

/**
 *
 * Profile Service Implementation
 * @author jpereira
 */
@Service
public class ProfileServiceImpl implements ProfileService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ProfileServiceImpl.class);

    @Value("${app.source.url}")
    private String sourceUrl;

    /**
     * Get list of profiles
     * @return
     */
    @Override
    public List<UserProfile> getProfiles() {
        JsonNode userProfileJson = JsonFetcherUtil.urlToJson(sourceUrl);

        List<UserProfile> userProfiles = null;
        if(userProfileJson != null){
            try{
                ObjectMapper mapper = new ObjectMapper();
                TypeReference ref = new TypeReference<List<UserProfile>>(){};
                userProfiles = mapper.readValue(userProfileJson.toString(), ref);
            }catch (IOException e){
                LOGGER.info("Error converting json to user profile.");
            }
        }

        return userProfiles;
    }

    @Override
    public UserProfile getProfile(String id) {
        List<UserProfile> userProfiles = this.getProfiles();
        Optional<UserProfile> profile =
                userProfiles.stream().filter(u -> u.getId().equals(id)).findFirst();

        if(profile != null){
            return profile.get();
        }

        return null;
    }
}
