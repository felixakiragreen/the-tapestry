// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

import "hardhat/console.sol";

contract TheTapestry is ERC721 {
    uint256 currentLine;
    mapping(uint256 => string) public tapestryLines;

    constructor() ERC721("TheTapestry", "TAPESTRY") {}

    // anyone should be able to add a line to the tapestry
    function weave(string memory _line) public {
        // require(_line.length > 0, "Line must be non-empty");
        // require(currentLine < tapestryLines.length, "Tapestry is full");

        // start with line 1
        currentLine++;
        tapestryLines[currentLine] = _line;

        _safeMint(msg.sender, currentLine);
    }
}
