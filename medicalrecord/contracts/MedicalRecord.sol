// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

contract MedicalRecord {
    uint public id;
    mapping(uint => Record) records;
    mapping(uint => bool) public isDeleted;
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

    event MedicalRecord__addRecord(
        uint id,
        uint timestamp,
        string name,
        uint age,
        string gender,
        string bloodType,
        string allergies,
        string diagnosis,
        string treatment
    );

    function addRecord(
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _bloodType,
        string memory _allergies,
        string memory _diagnosis,
        string memory _treatment
    ) public {
        id++;
        records[id] = Record(
            id,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodType,
            _allergies,
            _diagnosis,
            _treatment
        );
        emit MedicalRecord__addRecord(
            id,
            block.timestamp,
            _name,
            _age,
            _gender,
            _bloodType,
            _allergies,
            _diagnosis,
            _treatment
        );
    }
}
