package com.jross.controller;


import com.fasterxml.jackson.databind.JsonNode;
import com.jross.entity.UserProfile;
import com.jross.service.ProfileService;
import com.jross.util.JsonFetcherUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author jpereira on 4/29/2018.
 */
@RestController
@RequestMapping(value = "/api")
public class ProfileController {

    @Value("${app.source.url}")
    private String sourceUrl;

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    @ResponseBody
    public List<UserProfile> readProfiles() {
        return profileService.profiles();
    }
}
