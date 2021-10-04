// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import 'hardhat/console.sol';

contract TheTapestry is ERC721 {

  uint currentLine;
  mapping(uint => string) public tapestryLines;

  constructor() ERC721('TheTapestry', 'TAPESTRY') {
    
  }

  // anyone should be able to add a line to the tapestry
  function addThread(string memory _line) public {
    // require(_line.length > 0, "Line must be non-empty");
    // require(currentLine < tapestryLines.length, "Tapestry is full");
    tapestryLines[currentLine] = _line;
    currentLine++;
  }

}
