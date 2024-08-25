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

    event MedicalRecords__DeleteRecord(
        uint recordId,
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

    function deleteRecord(uint256 _id) public {
        require(!isDeleted[_id], "The record is already deleted");
        Record storage record = records[_id];
        emit MedicalRecords__DeleteRecord(
            record.id,
            block.timestamp,
            record.name,
            record.age,
            record.gender,
            record.bloodType,
            record.allergies,
            record.diagnosis,
            record.treatment
        );
        isDeleted[_id] = true;
    }
}
