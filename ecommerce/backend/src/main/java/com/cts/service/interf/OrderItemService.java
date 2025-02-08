package com.cts.service.interf;

import org.springframework.data.domain.Pageable;

import com.cts.dto.OrderRequest;
import com.cts.dto.Response;
import com.cts.enums.OrderStatus;

import java.time.LocalDateTime;

public interface OrderItemService {
    Response placeOrder(OrderRequest orderRequest);
    Response updateOrderItemStatus(Long orderItemId, String status);
    Response filterOrderItems(OrderStatus status, LocalDateTime startDate, LocalDateTime endDate, Long itemId, Pageable pageable);
}
