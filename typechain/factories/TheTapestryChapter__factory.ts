/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TheTapestryChapter,
  TheTapestryChapterInterface,
} from "../TheTapestryChapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_theTapestry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "chapterIndex",
        type: "uint256",
      },
    ],
    name: "printChapter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "theTapestryAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002c1e38038062002c1e8339818101604052810190620000379190620001e6565b6040518060400160405280601281526020017f54686554617065737472794368617074657200000000000000000000000000008152506040518060400160405280600781526020017f43484150544552000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb9291906200011f565b508060019080519060200190620000d49291906200011f565b50505080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002d0565b8280546200012d906200024c565b90600052602060002090601f0160209004810192826200015157600085556200019d565b82601f106200016c57805160ff19168380011785556200019d565b828001600101855582156200019d579182015b828111156200019c5782518255916020019190600101906200017f565b5b509050620001ac9190620001b0565b5090565b5b80821115620001cb576000816000905550600101620001b1565b5090565b600081519050620001e081620002b6565b92915050565b600060208284031215620001ff57620001fe620002b1565b5b60006200020f84828501620001cf565b91505092915050565b600062000225826200022c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200026557607f821691505b602082108114156200027c576200027b62000282565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b620002c18162000218565b8114620002cd57600080fd5b50565b61293e80620002e06000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063c87b56dd11610066578063c87b56dd14610282578063d19bc02c146102b2578063e985e9c5146102ce578063ff6b3458146102fe576100f5565b806370a08231146101fc57806395d89b411461022c578063a22cb4651461024a578063b88d4fde14610266576100f5565b8063095ea7b3116100d3578063095ea7b31461017857806323b872dd1461019457806342842e0e146101b05780636352211e146101cc576100f5565b806301ffc9a7146100fa57806306fdde031461012a578063081812fc14610148575b600080fd5b610114600480360381019061010f9190611a5f565b61031c565b6040516101219190611e4e565b60405180910390f35b6101326103fe565b60405161013f9190611e69565b60405180910390f35b610162600480360381019061015d9190611ab9565b610490565b60405161016f9190611de7565b60405180910390f35b610192600480360381019061018d91906119f2565b610515565b005b6101ae60048036038101906101a991906118dc565b61062d565b005b6101ca60048036038101906101c591906118dc565b61068d565b005b6101e660048036038101906101e19190611ab9565b6106ad565b6040516101f39190611de7565b60405180910390f35b6102166004803603810190610211919061186f565b61075f565b604051610223919061206b565b60405180910390f35b610234610817565b6040516102419190611e69565b60405180910390f35b610264600480360381019061025f91906119b2565b6108a9565b005b610280600480360381019061027b919061192f565b610a2a565b005b61029c60048036038101906102979190611ab9565b610a8c565b6040516102a99190611e69565b60405180910390f35b6102cc60048036038101906102c79190611ab9565b610b33565b005b6102e860048036038101906102e3919061189c565b610c2c565b6040516102f59190611e4e565b60405180910390f35b610306610cc0565b6040516103139190611de7565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103e757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806103f757506103f682610ce6565b5b9050919050565b60606000805461040d90612290565b80601f016020809104026020016040519081016040528092919081815260200182805461043990612290565b80156104865780601f1061045b57610100808354040283529160200191610486565b820191906000526020600020905b81548152906001019060200180831161046957829003601f168201915b5050505050905090565b600061049b82610d50565b6104da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d190611fcb565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610520826106ad565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610591576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105889061202b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105b0610dbc565b73ffffffffffffffffffffffffffffffffffffffff1614806105df57506105de816105d9610dbc565b610c2c565b5b61061e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161061590611f2b565b60405180910390fd5b6106288383610dc4565b505050565b61063e610638610dbc565b82610e7d565b61067d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106749061204b565b60405180910390fd5b610688838383610f5b565b505050565b6106a883838360405180602001604052806000815250610a2a565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610756576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074d90611f6b565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c790611f4b565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461082690612290565b80601f016020809104026020016040519081016040528092919081815260200182805461085290612290565b801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050905090565b6108b1610dbc565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561091f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091690611eeb565b60405180910390fd5b806005600061092c610dbc565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166109d9610dbc565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610a1e9190611e4e565b60405180910390a35050565b610a3b610a35610dbc565b83610e7d565b610a7a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a719061204b565b60405180910390fd5b610a86848484846111b7565b50505050565b6060610a9782610d50565b610ad6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acd9061200b565b60405180910390fd5b6000610ae0611213565b90506000815111610b005760405180602001604052806000815250610b2b565b80610b0a8461122a565b604051602001610b1b929190611dc3565b6040516020818303038152906040525b915050919050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dce9f5c8826040518263ffffffff1660e01b8152600401610b8e919061206b565b60206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611a32565b610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1490611fab565b60405180910390fd5b610c293360075461138b565b50565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610e37836106ad565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610e8882610d50565b610ec7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebe90611f0b565b60405180910390fd5b6000610ed2836106ad565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610f4157508373ffffffffffffffffffffffffffffffffffffffff16610f2984610490565b73ffffffffffffffffffffffffffffffffffffffff16145b80610f525750610f518185610c2c565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610f7b826106ad565b73ffffffffffffffffffffffffffffffffffffffff1614610fd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fc890611feb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611041576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103890611ecb565b60405180910390fd5b61104c8383836113a9565b611057600082610dc4565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110a791906121a6565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110fe919061211f565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6111c2848484610f5b565b6111ce848484846113ae565b61120d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120490611e8b565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611272576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611386565b600082905060005b600082146112a457808061128d906122f3565b915050600a8261129d9190612175565b915061127a565b60008167ffffffffffffffff8111156112c0576112bf612429565b5b6040519080825280601f01601f1916602001820160405280156112f25781602001600182028036833780820191505090505b5090505b6000851461137f5760018261130b91906121a6565b9150600a8561131a919061233c565b6030611326919061211f565b60f81b81838151811061133c5761133b6123fa565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856113789190612175565b94506112f6565b8093505050505b919050565b6113a5828260405180602001604052806000815250611545565b5050565b505050565b60006113cf8473ffffffffffffffffffffffffffffffffffffffff166115a0565b15611538578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026113f8610dbc565b8786866040518563ffffffff1660e01b815260040161141a9493929190611e02565b602060405180830381600087803b15801561143457600080fd5b505af192505050801561146557506040513d601f19601f820116820180604052508101906114629190611a8c565b60015b6114e8573d8060008114611495576040519150601f19603f3d011682016040523d82523d6000602084013e61149a565b606091505b506000815114156114e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d790611e8b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061153d565b600190505b949350505050565b61154f83836115b3565b61155c60008484846113ae565b61159b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159290611e8b565b60405180910390fd5b505050565b600080823b905060008111915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161a90611f8b565b60405180910390fd5b61162c81610d50565b1561166c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161166390611eab565b60405180910390fd5b611678600083836113a9565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546116c8919061211f565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600061179461178f846120ab565b612086565b9050828152602081018484840111156117b0576117af61245d565b5b6117bb84828561224e565b509392505050565b6000813590506117d2816128ac565b92915050565b6000813590506117e7816128c3565b92915050565b6000815190506117fc816128c3565b92915050565b600081359050611811816128da565b92915050565b600081519050611826816128da565b92915050565b600082601f83011261184157611840612458565b5b8135611851848260208601611781565b91505092915050565b600081359050611869816128f1565b92915050565b60006020828403121561188557611884612467565b5b6000611893848285016117c3565b91505092915050565b600080604083850312156118b3576118b2612467565b5b60006118c1858286016117c3565b92505060206118d2858286016117c3565b9150509250929050565b6000806000606084860312156118f5576118f4612467565b5b6000611903868287016117c3565b9350506020611914868287016117c3565b92505060406119258682870161185a565b9150509250925092565b6000806000806080858703121561194957611948612467565b5b6000611957878288016117c3565b9450506020611968878288016117c3565b93505060406119798782880161185a565b925050606085013567ffffffffffffffff81111561199a57611999612462565b5b6119a68782880161182c565b91505092959194509250565b600080604083850312156119c9576119c8612467565b5b60006119d7858286016117c3565b92505060206119e8858286016117d8565b9150509250929050565b60008060408385031215611a0957611a08612467565b5b6000611a17858286016117c3565b9250506020611a288582860161185a565b9150509250929050565b600060208284031215611a4857611a47612467565b5b6000611a56848285016117ed565b91505092915050565b600060208284031215611a7557611a74612467565b5b6000611a8384828501611802565b91505092915050565b600060208284031215611aa257611aa1612467565b5b6000611ab084828501611817565b91505092915050565b600060208284031215611acf57611ace612467565b5b6000611add8482850161185a565b91505092915050565b611aef816121da565b82525050565b611afe816121ec565b82525050565b6000611b0f826120dc565b611b1981856120f2565b9350611b2981856020860161225d565b611b328161246c565b840191505092915050565b6000611b48826120e7565b611b528185612103565b9350611b6281856020860161225d565b611b6b8161246c565b840191505092915050565b6000611b81826120e7565b611b8b8185612114565b9350611b9b81856020860161225d565b80840191505092915050565b6000611bb4603283612103565b9150611bbf8261247d565b604082019050919050565b6000611bd7601c83612103565b9150611be2826124cc565b602082019050919050565b6000611bfa602483612103565b9150611c05826124f5565b604082019050919050565b6000611c1d601983612103565b9150611c2882612544565b602082019050919050565b6000611c40602c83612103565b9150611c4b8261256d565b604082019050919050565b6000611c63603883612103565b9150611c6e826125bc565b604082019050919050565b6000611c86602a83612103565b9150611c918261260b565b604082019050919050565b6000611ca9602983612103565b9150611cb48261265a565b604082019050919050565b6000611ccc602083612103565b9150611cd7826126a9565b602082019050919050565b6000611cef602783612103565b9150611cfa826126d2565b604082019050919050565b6000611d12602c83612103565b9150611d1d82612721565b604082019050919050565b6000611d35602983612103565b9150611d4082612770565b604082019050919050565b6000611d58602f83612103565b9150611d63826127bf565b604082019050919050565b6000611d7b602183612103565b9150611d868261280e565b604082019050919050565b6000611d9e603183612103565b9150611da98261285d565b604082019050919050565b611dbd81612244565b82525050565b6000611dcf8285611b76565b9150611ddb8284611b76565b91508190509392505050565b6000602082019050611dfc6000830184611ae6565b92915050565b6000608082019050611e176000830187611ae6565b611e246020830186611ae6565b611e316040830185611db4565b8181036060830152611e438184611b04565b905095945050505050565b6000602082019050611e636000830184611af5565b92915050565b60006020820190508181036000830152611e838184611b3d565b905092915050565b60006020820190508181036000830152611ea481611ba7565b9050919050565b60006020820190508181036000830152611ec481611bca565b9050919050565b60006020820190508181036000830152611ee481611bed565b9050919050565b60006020820190508181036000830152611f0481611c10565b9050919050565b60006020820190508181036000830152611f2481611c33565b9050919050565b60006020820190508181036000830152611f4481611c56565b9050919050565b60006020820190508181036000830152611f6481611c79565b9050919050565b60006020820190508181036000830152611f8481611c9c565b9050919050565b60006020820190508181036000830152611fa481611cbf565b9050919050565b60006020820190508181036000830152611fc481611ce2565b9050919050565b60006020820190508181036000830152611fe481611d05565b9050919050565b6000602082019050818103600083015261200481611d28565b9050919050565b6000602082019050818103600083015261202481611d4b565b9050919050565b6000602082019050818103600083015261204481611d6e565b9050919050565b6000602082019050818103600083015261206481611d91565b9050919050565b60006020820190506120806000830184611db4565b92915050565b60006120906120a1565b905061209c82826122c2565b919050565b6000604051905090565b600067ffffffffffffffff8211156120c6576120c5612429565b5b6120cf8261246c565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061212a82612244565b915061213583612244565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561216a5761216961236d565b5b828201905092915050565b600061218082612244565b915061218b83612244565b92508261219b5761219a61239c565b5b828204905092915050565b60006121b182612244565b91506121bc83612244565b9250828210156121cf576121ce61236d565b5b828203905092915050565b60006121e582612224565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561227b578082015181840152602081019050612260565b8381111561228a576000848401525b50505050565b600060028204905060018216806122a857607f821691505b602082108114156122bc576122bb6123cb565b5b50919050565b6122cb8261246c565b810181811067ffffffffffffffff821117156122ea576122e9612429565b5b80604052505050565b60006122fe82612244565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156123315761233061236d565b5b600182019050919050565b600061234782612244565b915061235283612244565b9250826123625761236161239c565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4368617074657273206d75737420626520636f6d706c65746520746f2062652060008201527f7072696e74656400000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b6128b5816121da565b81146128c057600080fd5b50565b6128cc816121ec565b81146128d757600080fd5b50565b6128e3816121f8565b81146128ee57600080fd5b50565b6128fa81612244565b811461290557600080fd5b5056fea2646970667358221220f35b1fd0691edf1ab662224aa3f9af6c480e27c78f91ccff7fa15c5f793804fb64736f6c63430008070033";

export class TheTapestryChapter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _theTapestry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TheTapestryChapter> {
    return super.deploy(
      _theTapestry,
      overrides || {}
    ) as Promise<TheTapestryChapter>;
  }
  getDeployTransaction(
    _theTapestry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_theTapestry, overrides || {});
  }
  attach(address: string): TheTapestryChapter {
    return super.attach(address) as TheTapestryChapter;
  }
  connect(signer: Signer): TheTapestryChapter__factory {
    return super.connect(signer) as TheTapestryChapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TheTapestryChapterInterface {
    return new utils.Interface(_abi) as TheTapestryChapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TheTapestryChapter {
    return new Contract(address, _abi, signerOrProvider) as TheTapestryChapter;
  }
}
