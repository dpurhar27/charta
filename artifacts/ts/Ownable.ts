export const Ownable = 
{
  "contractName": "Ownable",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506102858061005e6000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638da5cb5b14610051578063f2fde38b146100a6575b600080fd5b341561005c57600080fd5b6100646100df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610104565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561015f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561019b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820651cb27e4b776f860b83de0806c4a53f2b8896356bfa3f8017d2ecbb67b392880029",
  "deployedBytecode": "0x60606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680638da5cb5b14610051578063f2fde38b146100a6575b600080fd5b341561005c57600080fd5b6100646100df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100b157600080fd5b6100dd600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610104565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561015f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561019b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a72305820651cb27e4b776f860b83de0806c4a53f2b8896356bfa3f8017d2ecbb67b392880029",
  "sourceMap": "217:787:22:-;;;469:55;;;;;;;;509:10;501:5;;:18;;;;;;;;;;;;;;;;;;217:787;;;;;;",
  "deployedSourceMap": "217:787:22:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  function Ownable() public {\n    owner = msg.sender;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address newOwner) public onlyOwner {\n    require(newOwner != address(0));\n    OwnershipTransferred(owner, newOwner);\n    owner = newOwner;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
      "exportedSymbols": {
        "Ownable": [
          5398
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 5344,
        "name": "PragmaDirective",
        "src": "0:24:22"
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
          "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5398
          ],
          "name": "Ownable",
          "scope": 5399
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "owner",
              "scope": 5398,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 5345,
                "name": "ElementaryTypeName",
                "src": "238:7:22"
              }
            ],
            "id": 5346,
            "name": "VariableDeclaration",
            "src": "238:20:22"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "OwnershipTransferred"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "previousOwner",
                      "scope": 5352,
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
                        "id": 5347,
                        "name": "ElementaryTypeName",
                        "src": "291:7:22"
                      }
                    ],
                    "id": 5348,
                    "name": "VariableDeclaration",
                    "src": "291:29:22"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newOwner",
                      "scope": 5352,
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
                        "id": 5349,
                        "name": "ElementaryTypeName",
                        "src": "322:7:22"
                      }
                    ],
                    "id": 5350,
                    "name": "VariableDeclaration",
                    "src": "322:24:22"
                  }
                ],
                "id": 5351,
                "name": "ParameterList",
                "src": "290:57:22"
              }
            ],
            "id": 5352,
            "name": "EventDefinition",
            "src": "264:84:22"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Ownable",
              "payable": false,
              "scope": 5398,
              "stateMutability": "nonpayable",
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
                "id": 5353,
                "name": "ParameterList",
                "src": "485:2:22"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5354,
                "name": "ParameterList",
                "src": "495:0:22"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5346,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 5355,
                            "name": "Identifier",
                            "src": "501:5:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5485,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 5356,
                                "name": "Identifier",
                                "src": "509:3:22"
                              }
                            ],
                            "id": 5357,
                            "name": "MemberAccess",
                            "src": "509:10:22"
                          }
                        ],
                        "id": 5358,
                        "name": "Assignment",
                        "src": "501:18:22"
                      }
                    ],
                    "id": 5359,
                    "name": "ExpressionStatement",
                    "src": "501:18:22"
                  }
                ],
                "id": 5360,
                "name": "Block",
                "src": "495:29:22"
              }
            ],
            "id": 5361,
            "name": "FunctionDefinition",
            "src": "469:55:22"
          },
          {
            "attributes": {
              "name": "onlyOwner",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5362,
                "name": "ParameterList",
                "src": "622:2:22"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5363,
                            "name": "Identifier",
                            "src": "631:7:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5485,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 5364,
                                    "name": "Identifier",
                                    "src": "639:3:22"
                                  }
                                ],
                                "id": 5365,
                                "name": "MemberAccess",
                                "src": "639:10:22"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5346,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 5366,
                                "name": "Identifier",
                                "src": "653:5:22"
                              }
                            ],
                            "id": 5367,
                            "name": "BinaryOperation",
                            "src": "639:19:22"
                          }
                        ],
                        "id": 5368,
                        "name": "FunctionCall",
                        "src": "631:28:22"
                      }
                    ],
                    "id": 5369,
                    "name": "ExpressionStatement",
                    "src": "631:28:22"
                  },
                  {
                    "id": 5370,
                    "name": "PlaceholderStatement",
                    "src": "665:1:22"
                  }
                ],
                "id": 5371,
                "name": "Block",
                "src": "625:46:22"
              }
            ],
            "id": 5372,
            "name": "ModifierDefinition",
            "src": "604:67:22"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferOwnership",
              "payable": false,
              "scope": 5398,
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
                      "name": "newOwner",
                      "scope": 5397,
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
                        "id": 5373,
                        "name": "ElementaryTypeName",
                        "src": "859:7:22"
                      }
                    ],
                    "id": 5374,
                    "name": "VariableDeclaration",
                    "src": "859:16:22"
                  }
                ],
                "id": 5375,
                "name": "ParameterList",
                "src": "858:18:22"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5378,
                "name": "ParameterList",
                "src": "894:0:22"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5372,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 5376,
                    "name": "Identifier",
                    "src": "884:9:22"
                  }
                ],
                "id": 5377,
                "name": "ModifierInvocation",
                "src": "884:9:22"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 5379,
                            "name": "Identifier",
                            "src": "900:7:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5374,
                                  "type": "address",
                                  "value": "newOwner"
                                },
                                "id": 5380,
                                "name": "Identifier",
                                "src": "908:8:22"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 5381,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "920:7:22"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 5382,
                                    "name": "Literal",
                                    "src": "928:1:22"
                                  }
                                ],
                                "id": 5383,
                                "name": "FunctionCall",
                                "src": "920:10:22"
                              }
                            ],
                            "id": 5384,
                            "name": "BinaryOperation",
                            "src": "908:22:22"
                          }
                        ],
                        "id": 5385,
                        "name": "FunctionCall",
                        "src": "900:31:22"
                      }
                    ],
                    "id": 5386,
                    "name": "ExpressionStatement",
                    "src": "900:31:22"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5352,
                              "type": "function (address,address)",
                              "value": "OwnershipTransferred"
                            },
                            "id": 5387,
                            "name": "Identifier",
                            "src": "937:20:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5346,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 5388,
                            "name": "Identifier",
                            "src": "958:5:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5374,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 5389,
                            "name": "Identifier",
                            "src": "965:8:22"
                          }
                        ],
                        "id": 5390,
                        "name": "FunctionCall",
                        "src": "937:37:22"
                      }
                    ],
                    "id": 5391,
                    "name": "ExpressionStatement",
                    "src": "937:37:22"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5346,
                              "type": "address",
                              "value": "owner"
                            },
                            "id": 5392,
                            "name": "Identifier",
                            "src": "980:5:22"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5374,
                              "type": "address",
                              "value": "newOwner"
                            },
                            "id": 5393,
                            "name": "Identifier",
                            "src": "988:8:22"
                          }
                        ],
                        "id": 5394,
                        "name": "Assignment",
                        "src": "980:16:22"
                      }
                    ],
                    "id": 5395,
                    "name": "ExpressionStatement",
                    "src": "980:16:22"
                  }
                ],
                "id": 5396,
                "name": "Block",
                "src": "894:107:22"
              }
            ],
            "id": 5397,
            "name": "FunctionDefinition",
            "src": "832:169:22"
          }
        ],
        "id": 5398,
        "name": "ContractDefinition",
        "src": "217:787:22"
      }
    ],
    "id": 5399,
    "name": "SourceUnit",
    "src": "0:1005:22"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-23T04:19:01.781Z"
}