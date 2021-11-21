// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';

import 'hardhat/console.sol';

/*

1 line = <100 character
4 lines = 1 stanza
4 stanza = 1 chapter = 16 lines

indexes

chapter - current 0-based index, CHANGE to 1-based index
line - 1-based index


*/

contract TheTapestry is ERC721 {
	uint256 currentLine;
	// key: line number => val: actual line (string)
	mapping(uint256 => string) public tapestryLines;

	mapping(address => uint256) linesPerAddress;

	mapping(address => uint256[]) public addressLines;
	mapping(uint256 => address) public weaverByLine;

	constructor() ERC721('TheTapestry', 'TAPESTRY') {}

	function readChapter(uint chapterIndex) public view returns (string memory) {
		string memory chapter;

		for (uint i; i < 16; i++){
		// do math
		// +1 because lines start at 1
			uint j = i + 1 + chapterIndex * 16;
		// assemble/return array of strings
		// access current lines in tapestry

			// THIS SHOULD WORK
			// chapter += tapestryLines[j];
			chapter = string(abi.encodePacked(bytes(chapter), bytes("\n"), bytes(tapestryLines[j])));
		}
		return chapter;
	}

	function readStanza(uint stanzaIndex) public view returns (string memory) {
		string memory stanza;

		for (uint i; i < 4; i++){
			uint k = i + 1 + stanzaIndex * 4;

			stanza = string(abi.encodePacked(bytes(stanza), bytes("\n"), bytes(tapestryLines[k])));
		}
		return stanza;
	}

	function readLine(uint lineIndex) public view returns(string memory) {
		return tapestryLines[lineIndex];
	}
	
	function readLine(uint chapterIndex, uint lineIndex ) public view returns(string memory) {

		// do math
		// +1 because lines start at 1
		uint adjustedLineIndex = lineIndex + chapterIndex * 16;
		return tapestryLines[adjustedLineIndex];
	}
	
	function linesByWeaver(address weaver) public view returns (uint[] memory) {
		return addressLines[weaver];
	}

	// anyone should be able to add a line to the tapestry
	function weave(string memory _line) public {
		// require(_line.length > 0, "Line must be non-empty");
		require(
			bytes(_line).length < 101,
			'Lines are limited to 100 characters'
		);

		// ensure author hasn't exceeded line limit
		// checking that the weaver has space for another line (up to 3)
		require(
			linesPerAddress[msg.sender] < 4,
			'Authors CANT add more than 4 lines in total to the tapestry'
		);

		// ensure author hasn't woven one of the last 16 lines
		// IF the author has woven — check that their last line was at least 15 lines before
		if(linesByWeaver(msg.sender).length > 0){
			uint lineToWeave = currentLine + 1;
			uint lastLineIndex = linesByWeaver(msg.sender).length -1;
			uint lastLine = linesByWeaver(msg.sender)[lastLineIndex];

			require(
				lineToWeave - lastLine > 15,
				'Authors CANT add another line if they wove one of the previous 16 lines'
			);
		}

		// start with line 1
		currentLine++;
		tapestryLines[currentLine] = _line;

		// increment linesPerAddress every time NFT mints
		linesPerAddress[msg.sender]++;

		// add line to addressLines
		addressLines[msg.sender].push(currentLine);

		// add to weaverByLine
		weaverByLine[currentLine] = msg.sender;

		_safeMint(msg.sender, currentLine);
	}
}
