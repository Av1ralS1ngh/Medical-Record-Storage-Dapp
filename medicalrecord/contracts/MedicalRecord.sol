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

    function getRecord(
        uint _id
    )
        public
        view
        returns (
            uint,
            string memory,
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        Record storage record = records[_id];
        return (
            record.timestamp,
            record.name,
            record.age,
            record.gender,
            record.bloodType,
            record.allergies,
            record.diagnosis,
            record.treatment
        );
    }

    function getRecordId() public view returns (uint) {
        return id;
    }

    function getTimeStamp(uint _id) public view returns (uint) {
        return records[_id].timestamp;
    }

    function getName(uint _id) public view returns (string memory) {
        return records[_id].name;
    }

    function getAge(uint _id) public view returns (uint) {
        return records[_id].age;
    }

    function getGender(uint _id) public view returns (string memory) {
        return records[_id].gender;
    }

    function getBloodType(uint _id) public view returns (string memory) {
        return records[_id].bloodType;
    }

    function getAllergies(uint _id) public view returns (string memory) {
        return records[_id].allergies;
    }

    function getDiagnosis(uint _id) public view returns (string memory) {
        return records[_id].diagnosis;
    }

    function getTreatment(uint _id) public view returns (string memory) {
        return records[_id].treatment;
    }

    function getDeleted(uint256 _id) public view returns (bool) {
        return isDeleted[_id];
    }
}
