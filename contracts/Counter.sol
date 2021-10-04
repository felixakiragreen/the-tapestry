pragma solidity ^0.8.0;

import "hardhat/console.sol";

/*
uint8 = 0 - 256 ... 

uint256 = 0 - 2^256


// uint8 (1 byte) 0-255
// uint16 (2 bytes) 0-65535
// uint32 (4 bytes) 0-4294967295
// uint64 (8 bytes) 0-18446744073709551615
// uint128 (16 bytes) 0-340282366920938463463374607431768211455
// uint256 (32 bytes) 0-115792089237316195423570985008687907853269984665640564039457584007913129639935


uint mynumber;
uint mynumber = 0;

address myaddress;
address myaddress = 0x000000000000000000000000000000;

string mystring;
string mystring = "";

bool mybool;
bool mybool = false;

*/

contract Counter {
    uint256 count;

    event CountedTo(uint256 number);

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp() public returns (uint256) {
        console.log("countUp: count =", count);
        uint256 newCount = count + 1;
        require(newCount > count, "Uint256 overflow");

        count = newCount;

        emit CountedTo(count);
        return count;
    }

    function countDown() public returns (uint256) {
        console.log("countDown: count =", count);
        uint256 newCount = count - 1;
        require(newCount < count, "Uint256 underflow");

        count = newCount;

        emit CountedTo(count);
        return count;
    }
}
