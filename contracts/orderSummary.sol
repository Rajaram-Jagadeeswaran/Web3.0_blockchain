// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract OrderContract {
    uint256 public totalOrders;

    struct Order {
        string delivery_address;
        string review;
    }

    mapping(address => Order) public orders;

    event OrderRequested(address indexed customer, string delivery_address, string review);

    function requestOrder(string memory delivery_address, string memory review) public {
        require(bytes(delivery_address).length > 0, "Delivery Address cannot be empty");
        require(bytes(review).length > 0, "Review cannot be empty");

        // Store the message and URL for the customer
        orders[msg.sender] = Order(delivery_address, review);
        totalOrders++;

        // Emit event to log the Order request
        emit OrderRequested(msg.sender, delivery_address, review);
    }

    function getOrderDetails(address customer) external view returns (string memory delivery_address, string memory review) {
        // Retrieve the stored message and URL for the customer
        Order memory order = orders[customer];
        return (order.delivery_address, order.review);
    }

    function getAddress() external view returns(address) {
        return address(this);
    }
}
