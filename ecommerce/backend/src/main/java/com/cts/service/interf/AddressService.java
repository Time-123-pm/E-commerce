package com.cts.service.interf;

import com.cts.dto.AddressDto;
import com.cts.dto.Response;

public interface AddressService {
    Response saveAndUpdateAddress(AddressDto addressDto);
}
