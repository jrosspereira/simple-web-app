package com.jross.controller;

import com.jross.entity.UserProfile;
import com.jross.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

/**
 * @author jpereira on 4/29/2018.
 */
@RestController
@RequestMapping(value = "/api/profile")
public class ProfileController {

    @Value("${app.source.url}")
    private String sourceUrl;

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    @ResponseBody
    public List<UserProfile> readProfiles() {
        return profileService.getProfiles();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public UserProfile profile(@PathVariable String id) {
        return profileService.getProfile(id);
    }
}
