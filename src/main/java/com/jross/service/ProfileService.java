package com.jross.service;

import com.jross.entity.UserProfile;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 * Profile Service
 * @author jpereira
 */
public interface ProfileService {

    List<UserProfile> profiles();
}
