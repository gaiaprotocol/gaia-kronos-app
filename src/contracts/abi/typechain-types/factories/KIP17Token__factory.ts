/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KIP17Token, KIP17TokenInterface } from "../KIP17Token";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "unpause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isPauser",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "mintWithTokenURI",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "paused",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renouncePauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addPauser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "pause",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "from",
        type: "address",
      },
      {
        name: "to",
        type: "address",
      },
      {
        name: "tokenId",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "symbol",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "PauserRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bbc38038062002bbc833981018060405260408110156200003757600080fd5b8101908080516401000000008111156200005057600080fd5b820160208101848111156200006457600080fd5b81516401000000008111828201871017156200007f57600080fd5b505092919060200180516401000000008111156200009c57600080fd5b82016020810184811115620000b057600080fd5b8151640100000000811182820187101715620000cb57600080fd5b505092919050505081818181620000ef6301ffc9a760e01b6200021560201b60201c565b620001076380ac58cd60e01b6200021560201b60201c565b6200011f63780e9d6360e01b6200021560201b60201c565b815162000134906009906020850190620004af565b5080516200014a90600a906020840190620004af565b5062000163635b5e139f60e01b6200021560201b60201c565b505050506200017833620002e460201b60201c565b6200019063eab83e2060e01b6200021560201b60201c565b620001a863fac27f4660e01b6200021560201b60201c565b620001c06342966c6860e01b6200021560201b60201c565b620001d1336200033660201b60201c565b600e805460ff191690556200020d7f4d5507ff0000000000000000000000000000000000000000000000000000000062000215602090811b901c565b505062000554565b7fffffffff000000000000000000000000000000000000000000000000000000008082161415620002a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4b495031333a20696e76616c696420696e746572666163652069640000000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b620002ff81600c6200038860201b62001c381790919060201c565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6200035181600d6200038860201b62001c381790919060201c565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b6200039a82826200042c60201b60201c565b156200040757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b60006001600160a01b0382166200048f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062002b9a6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004f257805160ff191683800117855562000522565b8280016001018555821562000522579182015b828111156200052257825182559160200191906001019062000505565b506200053092915062000534565b5090565b6200055191905b808211156200053057600081556001016200053b565b90565b61263680620005646000396000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80635c975abb116100f9578063983b2d5611610097578063aa271e1a11610071578063aa271e1a146105ce578063b88d4fde146105f4578063c87b56dd146106ba578063e985e9c5146106d7576101c4565b8063983b2d56146105725780639865027514610598578063a22cb465146105a0576101c4565b806370a08231116100d357806370a082311461051657806382dc1ec41461053c5780638456cb591461056257806395d89b411461056a576101c4565b80635c975abb146104e95780636352211e146104f15780636ef8d66d1461050e576101c4565b80633f4ba83a1161016657806342966c681161014057806342966c68146103ce57806346fbf68e146103eb5780634f6ccce71461041157806350bb4e7f1461042e576101c4565b80633f4ba83a1461036457806340c10f191461036c57806342842e0e14610398576101c4565b8063095ea7b3116101a2578063095ea7b3146102ba57806318160ddd146102e857806323b872dd146103025780632f745c5914610338576101c4565b806301ffc9a7146101c957806306fdde0314610204578063081812fc14610281575b600080fd5b6101f0600480360360208110156101df57600080fd5b50356001600160e01b031916610705565b604080519115158252519081900360200190f35b61020c610724565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561024657818101518382015260200161022e565b50505050905090810190601f1680156102735780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61029e6004803603602081101561029757600080fd5b50356107bb565b604080516001600160a01b039092168252519081900360200190f35b6102e6600480360360408110156102d057600080fd5b506001600160a01b038135169060200135610820565b005b6102f061087f565b60408051918252519081900360200190f35b6102e66004803603606081101561031857600080fd5b506001600160a01b03813581169160208101359091169060400135610885565b6102f06004803603604081101561034e57600080fd5b506001600160a01b0381351690602001356108e6565b6102e6610968565b6101f06004803603604081101561038257600080fd5b506001600160a01b038135169060200135610a48565b6102e6600480360360608110156103ae57600080fd5b506001600160a01b03813581169160208101359091169060400135610aa4565b6102e6600480360360208110156103e457600080fd5b5035610abf565b6101f06004803603602081101561040157600080fd5b50356001600160a01b0316610b13565b6102f06004803603602081101561042757600080fd5b5035610b2c565b6101f06004803603606081101561044457600080fd5b6001600160a01b038235169160208101359181019060608101604082013564010000000081111561047457600080fd5b82018360208201111561048657600080fd5b803590602001918460018302840111640100000000831117156104a857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b95945050505050565b6101f0610bfc565b61029e6004803603602081101561050757600080fd5b5035610c05565b6102e6610c5c565b6102f06004803603602081101561052c57600080fd5b50356001600160a01b0316610c67565b6102e66004803603602081101561055257600080fd5b50356001600160a01b0316610cd2565b6102e6610d22565b61020c610dfc565b6102e66004803603602081101561058857600080fd5b50356001600160a01b0316610e5d565b6102e6610ead565b6102e6600480360360408110156105b657600080fd5b506001600160a01b0381351690602001351515610eb6565b6101f0600480360360208110156105e457600080fd5b50356001600160a01b0316610f11565b6102e66004803603608081101561060a57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561064557600080fd5b82018360208201111561065757600080fd5b8035906020019184600183028401116401000000008311171561067957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610f24945050505050565b61020c600480360360208110156106d057600080fd5b5035610f7f565b6101f0600480360360408110156106ed57600080fd5b506001600160a01b0381358116916020013516611067565b6001600160e01b03191660009081526020819052604090205460ff1690565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b05780601f10610785576101008083540402835291602001916107b0565b820191906000526020600020905b81548152906001019060200180831161079357829003601f168201915b505050505090505b90565b60006107c682611095565b61080457604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061257e602b913960400191505060405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600e5460ff16156108715760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61087b82826110b2565b5050565b60075490565b600e5460ff16156108d65760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b6108e18383836111df565b505050565b60006108f183610c67565b821061093157604051600160e51b62461bcd02815260040180806020018281038252602a81526020018061235f602a913960400191505060405180910390fd5b6001600160a01b038316600090815260056020526040902080548390811061095557fe5b9060005260206000200154905092915050565b61097133610b13565b6109af57604051600160e51b62461bcd02815260040180806020018281038252603081526020018061230c6030913960400191505060405180910390fd5b600e5460ff16610a095760408051600160e51b62461bcd02815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015290519081900360640190fd5b600e805460ff191690556040805133815290517f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa9181900360200190a1565b6000610a5333610f11565b610a9157604051600160e51b62461bcd0281526004018080602001828103825260308152602001806123896030913960400191505060405180910390fd5b610a9b8383611232565b50600192915050565b6108e183838360405180602001604052806000815250610f24565b610ac9338261124f565b610b0757604051600160e51b62461bcd02815260040180806020018281038252602f8152602001806124af602f913960400191505060405180910390fd5b610b10816112f6565b50565b6000610b26600d8363ffffffff61130816565b92915050565b6000610b3661087f565b8210610b7657604051600160e51b62461bcd02815260040180806020018281038252602b81526020018061252f602b913960400191505060405180910390fd5b60078281548110610b8357fe5b90600052602060002001549050919050565b6000610ba033610f11565b610bde57604051600160e51b62461bcd0281526004018080602001828103825260308152602001806123896030913960400191505060405180910390fd5b610be88484611232565b610bf28383611372565b5060019392505050565b600e5460ff1690565b6000818152600160205260408120546001600160a01b031680610b2657604051600160e51b62461bcd0281526004018080602001828103825260288152602001806123da6028913960400191505060405180910390fd5b610c65336113d8565b565b60006001600160a01b038216610cb157604051600160e51b62461bcd0281526004018080602001828103825260298152602001806124de6029913960400191505060405180910390fd5b6001600160a01b0382166000908152600360205260409020610b2690611420565b610cdb33610b13565b610d1957604051600160e51b62461bcd02815260040180806020018281038252603081526020018061230c6030913960400191505060405180910390fd5b610b1081611424565b610d2b33610b13565b610d6957604051600160e51b62461bcd02815260040180806020018281038252603081526020018061230c6030913960400191505060405180910390fd5b600e5460ff1615610dba5760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b600e805460ff191660011790556040805133815290517f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2589181900360200190a1565b600a8054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b05780601f10610785576101008083540402835291602001916107b0565b610e6633610f11565b610ea457604051600160e51b62461bcd0281526004018080602001828103825260308152602001806123896030913960400191505060405180910390fd5b610b108161146c565b610c65336114b4565b600e5460ff1615610f075760408051600160e51b62461bcd0281526020600482015260106024820152600160821b6f14185d5cd8589b194e881c185d5cd95902604482015290519081900360640190fd5b61087b82826114fc565b6000610b26600c8363ffffffff61130816565b610f2f848484610885565b610f3b848484846115cb565b610f7957604051600160e51b62461bcd02815260040180806020018281038252603081526020018061247f6030913960400191505060405180910390fd5b50505050565b6060610f8a82611095565b610fc857604051600160e51b62461bcd02815260040180806020018281038252602e8152602001806122de602e913960400191505060405180910390fd5b6000828152600b602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452909183018282801561105b5780601f106110305761010080835404028352916020019161105b565b820191906000526020600020905b81548152906001019060200180831161103e57829003601f168201915b50505050509050919050565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205460ff1690565b6000908152600160205260409020546001600160a01b0316151590565b60006110bd82610c05565b9050806001600160a01b0316836001600160a01b031614156111295760408051600160e51b62461bcd02815260206004820181905260248201527f4b495031373a20617070726f76616c20746f2063757272656e74206f776e6572604482015290519081900360640190fd5b336001600160a01b038216148061114557506111458133611067565b61118357604051600160e51b62461bcd0281526004018080602001828103825260378152602001806125a96037913960400191505060405180910390fd5b60008281526002602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6111e9338261124f565b61122757604051600160e51b62461bcd02815260040180806020018281038252603081526020018061242d6030913960400191505060405180910390fd5b6108e18383836119ae565b61123c82826119cd565b6112468282611b04565b61087b81611b42565b600061125a82611095565b61129857604051600160e51b62461bcd02815260040180806020018281038252602b8152602001806125e0602b913960400191505060405180910390fd5b60006112a383610c05565b9050806001600160a01b0316846001600160a01b031614806112de5750836001600160a01b03166112d3846107bb565b6001600160a01b0316145b806112ee57506112ee8185611067565b949350505050565b610b1061130282610c05565b82611b86565b60006001600160a01b03821661135257604051600160e51b62461bcd02815260040180806020018281038252602281526020018061245d6022913960400191505060405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b61137b82611095565b6113b957604051600160e51b62461bcd02815260040180806020018281038252602b815260200180612402602b913960400191505060405180910390fd5b6000828152600b6020908152604090912082516108e1928401906121e1565b6113e9600d8263ffffffff611bce16565b6040516001600160a01b038216907fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e90600090a250565b5490565b611435600d8263ffffffff611c3816565b6040516001600160a01b038216907f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f890600090a250565b61147d600c8263ffffffff611c3816565b6040516001600160a01b038216907f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f690600090a250565b6114c5600c8263ffffffff611bce16565b6040516001600160a01b038216907fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669290600090a250565b6001600160a01b03821633141561155d5760408051600160e51b62461bcd02815260206004820152601860248201527f4b495031373a20617070726f766520746f2063616c6c65720000000000000000604482015290519081900360640190fd5b3360008181526004602090815260408083206001600160a01b03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b60008060606115e2866001600160a01b0316611cbc565b6115f1576001925050506112ee565b856001600160a01b031663150b7a0260e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561167d578181015183820152602001611665565b50505050905090810190601f1680156116aa5780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106117125780518252601f1990920191602091820191016116f3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611774576040519150601f19603f3d011682016040523d82523d6000602084013e611779565b606091505b5080519193509150158015906117b957508051600160e11b630a85bd010290602080840191908110156117ab57600080fd5b50516001600160e01b031916145b156117c9576001925050506112ee565b856001600160a01b0316636745782b60e01b3389888860405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561185557818101518382015260200161183d565b50505050905090810190601f1680156118825780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909a16999099178952518151919890975087965094509250829150849050835b602083106118ea5780518252601f1990920191602091820191016118cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461194c576040519150601f19603f3d011682016040523d82523d6000602084013e611951565b606091505b50805191935091501580159061199157508051600160e01b636745782b02906020808401919081101561198357600080fd5b50516001600160e01b031916145b156119a1576001925050506112ee565b5060009695505050505050565b6119b9838383611cc2565b6119c38382611e0c565b6108e18282611b04565b6001600160a01b038216611a2b5760408051600160e51b62461bcd02815260206004820152601f60248201527f4b495031373a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611a3481611095565b15611a895760408051600160e51b62461bcd02815260206004820152601b60248201527f4b495031373a20746f6b656e20616c7265616479206d696e7465640000000000604482015290519081900360640190fd5b600081815260016020908152604080832080546001600160a01b0319166001600160a01b038716908117909155835260039091529020611ac890611f01565b60405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b0390911660009081526005602081815260408084208054868652600684529185208290559282526001810183559183529091200155565b600780546000838152600860205260408120829055600182018355919091527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880155565b611b908282611f0a565b6000818152600b6020526040902054600260001961010060018416150201909116041561087b576000818152600b6020526040812061087b9161225f565b611bd88282611308565b611c1657604051600160e51b62461bcd0281526004018080602001828103825260218152602001806123b96021913960400191505060405180910390fd5b6001600160a01b0316600090815260209190915260409020805460ff19169055565b611c428282611308565b15611c975760408051600160e51b62461bcd02815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015290519081900360640190fd5b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b3b151590565b826001600160a01b0316611cd582610c05565b6001600160a01b031614611d1d57604051600160e51b62461bcd0281526004018080602001828103825260288152602001806125076028913960400191505060405180910390fd5b6001600160a01b038216611d6557604051600160e51b62461bcd02815260040180806020018281038252602381526020018061233c6023913960400191505060405180910390fd5b611d6e81611f36565b6001600160a01b0383166000908152600360205260409020611d8f90611f71565b6001600160a01b0382166000908152600360205260409020611db090611f01565b60008181526001602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216600090815260056020526040812054611e3690600163ffffffff611f8816565b600083815260066020526040902054909150808214611ed1576001600160a01b0384166000908152600560205260408120805484908110611e7357fe5b906000526020600020015490508060056000876001600160a01b03166001600160a01b031681526020019081526020016000208381548110611eb157fe5b600091825260208083209091019290925591825260069052604090208190555b6001600160a01b0384166000908152600560205260409020805490611efa9060001983016122a3565b5050505050565b80546001019055565b611f148282611fd1565b611f1e8282611e0c565b60008181526006602052604081205561087b816120ab565b6000818152600260205260409020546001600160a01b031615610b1057600090815260026020526040902080546001600160a01b0319169055565b8054611f8490600163ffffffff611f8816565b9055565b6000611fca83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612147565b9392505050565b816001600160a01b0316611fe482610c05565b6001600160a01b03161461202c57604051600160e51b62461bcd02815260040180806020018281038252602481526020018061255a6024913960400191505060405180910390fd5b61203581611f36565b6001600160a01b038216600090815260036020526040902061205690611f71565b60008181526001602052604080822080546001600160a01b0319169055518291906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6007546000906120c290600163ffffffff611f8816565b600083815260086020526040812054600780549394509092849081106120e457fe5b9060005260206000200154905080600783815481106120ff57fe5b600091825260208083209091019290925582815260089091526040902082905560078054906121329060001983016122a3565b50505060009182525060086020526040812055565b600081848411156121d957604051600160e51b62461bcd0281526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561219e578181015183820152602001612186565b50505050905090810190601f1680156121cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061222257805160ff191683800117855561224f565b8280016001018555821561224f579182015b8281111561224f578251825591602001919060010190612234565b5061225b9291506122c3565b5090565b50805460018160011615610100020316600290046000825580601f106122855750610b10565b601f016020900490600052602060002090810190610b1091906122c3565b8154818355818111156108e1576000838152602090206108e19181019083015b6107b891905b8082111561225b57600081556001016122c956fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031374d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031374275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a206275726e206f6620746f6b656e2074686174206973206e6f74206f776e4b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a72305820fc62e9ea930a34490417c54bf09fa98fdf28293f227b7996464b2753f14926c90029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type KIP17TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KIP17TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KIP17Token__factory extends ContractFactory {
  constructor(...args: KIP17TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "KIP17Token";
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KIP17Token> {
    return super.deploy(name, symbol, overrides || {}) as Promise<KIP17Token>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): KIP17Token {
    return super.attach(address) as KIP17Token;
  }
  connect(signer: Signer): KIP17Token__factory {
    return super.connect(signer) as KIP17Token__factory;
  }
  static readonly contractName: "KIP17Token";
  public readonly contractName: "KIP17Token";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KIP17TokenInterface {
    return new utils.Interface(_abi) as KIP17TokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KIP17Token {
    return new Contract(address, _abi, signerOrProvider) as KIP17Token;
  }
}