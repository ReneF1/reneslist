pragma solidity ^0.4.18;

contract SimpleMessageStorage {

    uint public messageId;

    struct message {
        address sender;
        uint256 timestamp;
        bytes32 title;
        bytes32 text;
    }

    mapping (uint => message) public messageStore;

    function postMessage(bytes32 messageTitle,bytes32 messageText) public {
        messageId++;
        messageStore[messageId].sender = msg.sender;
        messageStore[messageId].timestamp = block.timestamp;
        messageStore[messageId].title = messageTitle;
        messageStore[messageId].text = messageText;
    }

    function readMessage(uint msgId) public view returns (bytes32) {
        return messageStore[msgId].text;
    }

}