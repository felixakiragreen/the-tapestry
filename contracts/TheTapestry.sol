// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import 'hardhat/console.sol';

/*

1 line = <100 character
4 lines = 1 stanza
4 stanza = 1 chapter = 16 lines

*/

contract TheTapestry is ERC721 {
	uint256 currentLine;
	mapping(uint256 => string) public tapestryLines;

	// address and unint
	mapping(address => uint256 ) linesPerAddress;

	constructor() ERC721('TheTapestry', 'TAPESTRY') {}

	// anyone should be able to add a line to the tapestry
	function weave(string memory _line) public {
		// require(_line.length > 0, "Line must be non-empty");
		require(
			bytes(_line).length < 101,
			'Lines are limited to 100 characters'
		);

		// ensure author hasn't exceeded line limit
		require(
			linesPerAddress[msg.sender] < 4,
			'Authors CANT add more than 4 lines in total to the tapestry'
		);

		// start with line 1
		currentLine++;
		tapestryLines[currentLine] = _line;

		// increment linesPerAddress every time NFT mints
		linesPerAddress[msg.sender]++;

		_safeMint(msg.sender, currentLine);
	}
}
