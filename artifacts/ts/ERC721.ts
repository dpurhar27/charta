export const ERC721 = 
{
  "contractName": "ERC721",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_approved",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "implementsERC721",
      "outputs": [
        {
          "name": "_implementsERC721",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "_totalSupply",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity 0.4.18;\n\n\n/**\n * Interface for required functionality in the ERC721 standard\n * for non-fungible tokens.\n *\n * Author: Nadav Hollander (nadav at dharma.io)\n */\ncontract ERC721 {\n    // Function\n    function totalSupply() public view returns (uint256 _totalSupply);\n    function balanceOf(address _owner) public view returns (uint256 _balance);\n    function ownerOf(uint _tokenId) public view returns (address _owner);\n    function approve(address _to, uint _tokenId) public;\n    function getApproved(uint _tokenId) public view returns (address _approved);\n    function transferFrom(address _from, address _to, uint _tokenId) public;\n    function transfer(address _to, uint _tokenId) public;\n    function implementsERC721() public view returns (bool _implementsERC721);\n\n    // Events\n    event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n    event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n}\n",
  "sourcePath": "NonFungibleToken/contracts/ERC721.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/ERC721.sol",
      "exportedSymbols": {
        "ERC721": [
          4562
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4491,
        "name": "PragmaDirective",
        "src": "0:23:17"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "Interface for required functionality in the ERC721 standard\nfor non-fungible tokens.\n * Author: Nadav Hollander (nadav at dharma.io)",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4562
          ],
          "name": "ERC721",
          "scope": 4563
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 4562,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4492,
                "name": "ParameterList",
                "src": "234:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_totalSupply",
                      "scope": 4496,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4493,
                        "name": "ElementaryTypeName",
                        "src": "258:7:17"
                      }
                    ],
                    "id": 4494,
                    "name": "VariableDeclaration",
                    "src": "258:20:17"
                  }
                ],
                "id": 4495,
                "name": "ParameterList",
                "src": "257:22:17"
              }
            ],
            "id": 4496,
            "name": "FunctionDefinition",
            "src": "214:66:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 4562,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4503,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4497,
                        "name": "ElementaryTypeName",
                        "src": "304:7:17"
                      }
                    ],
                    "id": 4498,
                    "name": "VariableDeclaration",
                    "src": "304:14:17"
                  }
                ],
                "id": 4499,
                "name": "ParameterList",
                "src": "303:16:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 4503,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4500,
                        "name": "ElementaryTypeName",
                        "src": "341:7:17"
                      }
                    ],
                    "id": 4501,
                    "name": "VariableDeclaration",
                    "src": "341:16:17"
                  }
                ],
                "id": 4502,
                "name": "ParameterList",
                "src": "340:18:17"
              }
            ],
            "id": 4503,
            "name": "FunctionDefinition",
            "src": "285:74:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 4562,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4510,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4504,
                        "name": "ElementaryTypeName",
                        "src": "381:4:17"
                      }
                    ],
                    "id": 4505,
                    "name": "VariableDeclaration",
                    "src": "381:13:17"
                  }
                ],
                "id": 4506,
                "name": "ParameterList",
                "src": "380:15:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4510,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4507,
                        "name": "ElementaryTypeName",
                        "src": "417:7:17"
                      }
                    ],
                    "id": 4508,
                    "name": "VariableDeclaration",
                    "src": "417:14:17"
                  }
                ],
                "id": 4509,
                "name": "ParameterList",
                "src": "416:16:17"
              }
            ],
            "id": 4510,
            "name": "FunctionDefinition",
            "src": "364:69:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 4562,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 4517,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4511,
                        "name": "ElementaryTypeName",
                        "src": "455:7:17"
                      }
                    ],
                    "id": 4512,
                    "name": "VariableDeclaration",
                    "src": "455:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4517,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4513,
                        "name": "ElementaryTypeName",
                        "src": "468:4:17"
                      }
                    ],
                    "id": 4514,
                    "name": "VariableDeclaration",
                    "src": "468:13:17"
                  }
                ],
                "id": 4515,
                "name": "ParameterList",
                "src": "454:28:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4516,
                "name": "ParameterList",
                "src": "489:0:17"
              }
            ],
            "id": 4517,
            "name": "FunctionDefinition",
            "src": "438:52:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 4562,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4524,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4518,
                        "name": "ElementaryTypeName",
                        "src": "516:4:17"
                      }
                    ],
                    "id": 4519,
                    "name": "VariableDeclaration",
                    "src": "516:13:17"
                  }
                ],
                "id": 4520,
                "name": "ParameterList",
                "src": "515:15:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 4524,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4521,
                        "name": "ElementaryTypeName",
                        "src": "552:7:17"
                      }
                    ],
                    "id": 4522,
                    "name": "VariableDeclaration",
                    "src": "552:17:17"
                  }
                ],
                "id": 4523,
                "name": "ParameterList",
                "src": "551:19:17"
              }
            ],
            "id": 4524,
            "name": "FunctionDefinition",
            "src": "495:76:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 4562,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 4533,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4525,
                        "name": "ElementaryTypeName",
                        "src": "598:7:17"
                      }
                    ],
                    "id": 4526,
                    "name": "VariableDeclaration",
                    "src": "598:13:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 4533,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4527,
                        "name": "ElementaryTypeName",
                        "src": "613:7:17"
                      }
                    ],
                    "id": 4528,
                    "name": "VariableDeclaration",
                    "src": "613:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4533,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4529,
                        "name": "ElementaryTypeName",
                        "src": "626:4:17"
                      }
                    ],
                    "id": 4530,
                    "name": "VariableDeclaration",
                    "src": "626:13:17"
                  }
                ],
                "id": 4531,
                "name": "ParameterList",
                "src": "597:43:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4532,
                "name": "ParameterList",
                "src": "647:0:17"
              }
            ],
            "id": 4533,
            "name": "FunctionDefinition",
            "src": "576:72:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 4562,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 4540,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4534,
                        "name": "ElementaryTypeName",
                        "src": "671:7:17"
                      }
                    ],
                    "id": 4535,
                    "name": "VariableDeclaration",
                    "src": "671:11:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 4540,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4536,
                        "name": "ElementaryTypeName",
                        "src": "684:4:17"
                      }
                    ],
                    "id": 4537,
                    "name": "VariableDeclaration",
                    "src": "684:13:17"
                  }
                ],
                "id": 4538,
                "name": "ParameterList",
                "src": "670:28:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4539,
                "name": "ParameterList",
                "src": "705:0:17"
              }
            ],
            "id": 4540,
            "name": "FunctionDefinition",
            "src": "653:53:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "implementsERC721",
              "payable": false,
              "scope": 4562,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4541,
                "name": "ParameterList",
                "src": "736:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_implementsERC721",
                      "scope": 4545,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4542,
                        "name": "ElementaryTypeName",
                        "src": "760:4:17"
                      }
                    ],
                    "id": 4543,
                    "name": "VariableDeclaration",
                    "src": "760:22:17"
                  }
                ],
                "id": 4544,
                "name": "ParameterList",
                "src": "759:24:17"
              }
            ],
            "id": 4545,
            "name": "FunctionDefinition",
            "src": "711:73:17"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 4553,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4546,
                        "name": "ElementaryTypeName",
                        "src": "819:7:17"
                      }
                    ],
                    "id": 4547,
                    "name": "VariableDeclaration",
                    "src": "819:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 4553,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4548,
                        "name": "ElementaryTypeName",
                        "src": "842:7:17"
                      }
                    ],
                    "id": 4549,
                    "name": "VariableDeclaration",
                    "src": "842:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 4553,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4550,
                        "name": "ElementaryTypeName",
                        "src": "863:7:17"
                      }
                    ],
                    "id": 4551,
                    "name": "VariableDeclaration",
                    "src": "863:16:17"
                  }
                ],
                "id": 4552,
                "name": "ParameterList",
                "src": "818:62:17"
              }
            ],
            "id": 4553,
            "name": "EventDefinition",
            "src": "804:77:17"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 4561,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4554,
                        "name": "ElementaryTypeName",
                        "src": "901:7:17"
                      }
                    ],
                    "id": 4555,
                    "name": "VariableDeclaration",
                    "src": "901:22:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 4561,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4556,
                        "name": "ElementaryTypeName",
                        "src": "925:7:17"
                      }
                    ],
                    "id": 4557,
                    "name": "VariableDeclaration",
                    "src": "925:25:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 4561,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4558,
                        "name": "ElementaryTypeName",
                        "src": "952:7:17"
                      }
                    ],
                    "id": 4559,
                    "name": "VariableDeclaration",
                    "src": "952:16:17"
                  }
                ],
                "id": 4560,
                "name": "ParameterList",
                "src": "900:69:17"
              }
            ],
            "id": 4561,
            "name": "EventDefinition",
            "src": "886:84:17"
          }
        ],
        "id": 4562,
        "name": "ContractDefinition",
        "src": "176:796:17"
      }
    ],
    "id": 4563,
    "name": "SourceUnit",
    "src": "0:973:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-23T04:19:01.779Z"
}