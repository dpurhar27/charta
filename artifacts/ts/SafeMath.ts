export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "sourceMap": "117:1022:21:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1022:21:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          5342
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
        "id": 5246,
        "name": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            5342
          ],
          "name": "SafeMath",
          "scope": 5343
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 5342,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5279,
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
                        "id": 5247,
                        "name": "ElementaryTypeName",
                        "src": "216:7:21"
                      }
                    ],
                    "id": 5248,
                    "name": "VariableDeclaration",
                    "src": "216:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5279,
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
                        "id": 5249,
                        "name": "ElementaryTypeName",
                        "src": "227:7:21"
                      }
                    ],
                    "id": 5250,
                    "name": "VariableDeclaration",
                    "src": "227:9:21"
                  }
                ],
                "id": 5251,
                "name": "ParameterList",
                "src": "215:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5279,
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
                        "id": 5252,
                        "name": "ElementaryTypeName",
                        "src": "261:7:21"
                      }
                    ],
                    "id": 5253,
                    "name": "VariableDeclaration",
                    "src": "261:7:21"
                  }
                ],
                "id": 5254,
                "name": "ParameterList",
                "src": "260:9:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5248,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5255,
                            "name": "Identifier",
                            "src": "280:1:21"
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
                            "id": 5256,
                            "name": "Literal",
                            "src": "285:1:21"
                          }
                        ],
                        "id": 5257,
                        "name": "BinaryOperation",
                        "src": "280:6:21"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 5254
                            },
                            "children": [
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
                                "id": 5258,
                                "name": "Literal",
                                "src": "303:1:21"
                              }
                            ],
                            "id": 5259,
                            "name": "Return",
                            "src": "296:8:21"
                          }
                        ],
                        "id": 5260,
                        "name": "Block",
                        "src": "288:23:21"
                      }
                    ],
                    "id": 5261,
                    "name": "IfStatement",
                    "src": "276:35:21"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        5263
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5279,
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
                            "id": 5262,
                            "name": "ElementaryTypeName",
                            "src": "316:7:21"
                          }
                        ],
                        "id": 5263,
                        "name": "VariableDeclaration",
                        "src": "316:9:21"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5248,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5264,
                            "name": "Identifier",
                            "src": "328:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5250,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5265,
                            "name": "Identifier",
                            "src": "332:1:21"
                          }
                        ],
                        "id": 5266,
                        "name": "BinaryOperation",
                        "src": "328:5:21"
                      }
                    ],
                    "id": 5267,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:21"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5476,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5268,
                            "name": "Identifier",
                            "src": "339:6:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
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
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5263,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 5269,
                                    "name": "Identifier",
                                    "src": "346:1:21"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5248,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 5270,
                                    "name": "Identifier",
                                    "src": "350:1:21"
                                  }
                                ],
                                "id": 5271,
                                "name": "BinaryOperation",
                                "src": "346:5:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5250,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5272,
                                "name": "Identifier",
                                "src": "355:1:21"
                              }
                            ],
                            "id": 5273,
                            "name": "BinaryOperation",
                            "src": "346:10:21"
                          }
                        ],
                        "id": 5274,
                        "name": "FunctionCall",
                        "src": "339:18:21"
                      }
                    ],
                    "id": 5275,
                    "name": "ExpressionStatement",
                    "src": "339:18:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5254
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5263,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5276,
                        "name": "Identifier",
                        "src": "370:1:21"
                      }
                    ],
                    "id": 5277,
                    "name": "Return",
                    "src": "363:8:21"
                  }
                ],
                "id": 5278,
                "name": "Block",
                "src": "270:106:21"
              }
            ],
            "id": 5279,
            "name": "FunctionDefinition",
            "src": "203:173:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 5342,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5297,
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
                        "id": 5280,
                        "name": "ElementaryTypeName",
                        "src": "471:7:21"
                      }
                    ],
                    "id": 5281,
                    "name": "VariableDeclaration",
                    "src": "471:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5297,
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
                        "id": 5282,
                        "name": "ElementaryTypeName",
                        "src": "482:7:21"
                      }
                    ],
                    "id": 5283,
                    "name": "VariableDeclaration",
                    "src": "482:9:21"
                  }
                ],
                "id": 5284,
                "name": "ParameterList",
                "src": "470:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5297,
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
                        "id": 5285,
                        "name": "ElementaryTypeName",
                        "src": "516:7:21"
                      }
                    ],
                    "id": 5286,
                    "name": "VariableDeclaration",
                    "src": "516:7:21"
                  }
                ],
                "id": 5287,
                "name": "ParameterList",
                "src": "515:9:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5289
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5297,
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
                            "id": 5288,
                            "name": "ElementaryTypeName",
                            "src": "605:7:21"
                          }
                        ],
                        "id": 5289,
                        "name": "VariableDeclaration",
                        "src": "605:9:21"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5281,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5290,
                            "name": "Identifier",
                            "src": "617:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5283,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5291,
                            "name": "Identifier",
                            "src": "621:1:21"
                          }
                        ],
                        "id": 5292,
                        "name": "BinaryOperation",
                        "src": "617:5:21"
                      }
                    ],
                    "id": 5293,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5287
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5289,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5294,
                        "name": "Identifier",
                        "src": "717:1:21"
                      }
                    ],
                    "id": 5295,
                    "name": "Return",
                    "src": "710:8:21"
                  }
                ],
                "id": 5296,
                "name": "Block",
                "src": "525:198:21"
              }
            ],
            "id": 5297,
            "name": "FunctionDefinition",
            "src": "458:265:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 5342,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5317,
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
                        "id": 5298,
                        "name": "ElementaryTypeName",
                        "src": "849:7:21"
                      }
                    ],
                    "id": 5299,
                    "name": "VariableDeclaration",
                    "src": "849:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5317,
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
                        "id": 5300,
                        "name": "ElementaryTypeName",
                        "src": "860:7:21"
                      }
                    ],
                    "id": 5301,
                    "name": "VariableDeclaration",
                    "src": "860:9:21"
                  }
                ],
                "id": 5302,
                "name": "ParameterList",
                "src": "848:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5317,
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
                        "id": 5303,
                        "name": "ElementaryTypeName",
                        "src": "894:7:21"
                      }
                    ],
                    "id": 5304,
                    "name": "VariableDeclaration",
                    "src": "894:7:21"
                  }
                ],
                "id": 5305,
                "name": "ParameterList",
                "src": "893:9:21"
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
                              "referencedDeclaration": 5476,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5306,
                            "name": "Identifier",
                            "src": "909:6:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5301,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 5307,
                                "name": "Identifier",
                                "src": "916:1:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5299,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5308,
                                "name": "Identifier",
                                "src": "921:1:21"
                              }
                            ],
                            "id": 5309,
                            "name": "BinaryOperation",
                            "src": "916:6:21"
                          }
                        ],
                        "id": 5310,
                        "name": "FunctionCall",
                        "src": "909:14:21"
                      }
                    ],
                    "id": 5311,
                    "name": "ExpressionStatement",
                    "src": "909:14:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5305
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5299,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5312,
                            "name": "Identifier",
                            "src": "936:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5301,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5313,
                            "name": "Identifier",
                            "src": "940:1:21"
                          }
                        ],
                        "id": 5314,
                        "name": "BinaryOperation",
                        "src": "936:5:21"
                      }
                    ],
                    "id": 5315,
                    "name": "Return",
                    "src": "929:12:21"
                  }
                ],
                "id": 5316,
                "name": "Block",
                "src": "903:43:21"
              }
            ],
            "id": 5317,
            "name": "FunctionDefinition",
            "src": "836:110:21"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 5342,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 5341,
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
                        "id": 5318,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:21"
                      }
                    ],
                    "id": 5319,
                    "name": "VariableDeclaration",
                    "src": "1021:9:21"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 5341,
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
                        "id": 5320,
                        "name": "ElementaryTypeName",
                        "src": "1032:7:21"
                      }
                    ],
                    "id": 5321,
                    "name": "VariableDeclaration",
                    "src": "1032:9:21"
                  }
                ],
                "id": 5322,
                "name": "ParameterList",
                "src": "1020:22:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5341,
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
                        "id": 5323,
                        "name": "ElementaryTypeName",
                        "src": "1066:7:21"
                      }
                    ],
                    "id": 5324,
                    "name": "VariableDeclaration",
                    "src": "1066:7:21"
                  }
                ],
                "id": 5325,
                "name": "ParameterList",
                "src": "1065:9:21"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        5327
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 5341,
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
                            "id": 5326,
                            "name": "ElementaryTypeName",
                            "src": "1081:7:21"
                          }
                        ],
                        "id": 5327,
                        "name": "VariableDeclaration",
                        "src": "1081:9:21"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5319,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 5328,
                            "name": "Identifier",
                            "src": "1093:1:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5321,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 5329,
                            "name": "Identifier",
                            "src": "1097:1:21"
                          }
                        ],
                        "id": 5330,
                        "name": "BinaryOperation",
                        "src": "1093:5:21"
                      }
                    ],
                    "id": 5331,
                    "name": "VariableDeclarationStatement",
                    "src": "1081:17:21"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5476,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 5332,
                            "name": "Identifier",
                            "src": "1104:6:21"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5327,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 5333,
                                "name": "Identifier",
                                "src": "1111:1:21"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5319,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 5334,
                                "name": "Identifier",
                                "src": "1116:1:21"
                              }
                            ],
                            "id": 5335,
                            "name": "BinaryOperation",
                            "src": "1111:6:21"
                          }
                        ],
                        "id": 5336,
                        "name": "FunctionCall",
                        "src": "1104:14:21"
                      }
                    ],
                    "id": 5337,
                    "name": "ExpressionStatement",
                    "src": "1104:14:21"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 5325
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 5327,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 5338,
                        "name": "Identifier",
                        "src": "1131:1:21"
                      }
                    ],
                    "id": 5339,
                    "name": "Return",
                    "src": "1124:8:21"
                  }
                ],
                "id": 5340,
                "name": "Block",
                "src": "1075:62:21"
              }
            ],
            "id": 5341,
            "name": "FunctionDefinition",
            "src": "1008:129:21"
          }
        ],
        "id": 5342,
        "name": "ContractDefinition",
        "src": "117:1022:21"
      }
    ],
    "id": 5343,
    "name": "SourceUnit",
    "src": "0:1140:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-23T04:19:01.782Z"
}