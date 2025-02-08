package com.cts.service.interf;

import com.cts.dto.LoginRequest;
import com.cts.dto.Response;
import com.cts.dto.UserDto;
import com.cts.entity.User;

public interface UserService {
    Response registerUser(UserDto registrationRequest);
    Response loginUser(LoginRequest loginRequest);
    Response getAllUsers();
    User getLoginUser();
    Response getUserInfoAndOrderHistory();
}
