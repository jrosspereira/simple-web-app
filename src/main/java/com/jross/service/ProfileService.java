package com.jross.service;

import com.jross.entity.UserProfile;

import java.util.List;

/**
 *
 * Profile Service
 * @author jpereira
 */
public interface ProfileService {

    List<UserProfile> getProfiles();

    UserProfile getProfile(String id);

    List<UserProfile> getProfileByName(String term);
}
