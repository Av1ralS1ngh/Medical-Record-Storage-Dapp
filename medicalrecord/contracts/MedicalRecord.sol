// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

contract MedicalRecord {
    uint public id;
    mapping(uint=>Record) records;
    mapping(uint=>bool) public isDeleted;
    struct Record {
        uint id;
        uint timestamp;
        string name;
        uint age;
        string gender;
        string bloodType;
        string allergies;
        string diagnosis;
        string treatment;
    }
}