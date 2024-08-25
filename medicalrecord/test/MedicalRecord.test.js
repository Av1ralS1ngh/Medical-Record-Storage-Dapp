const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MedicalRecord", () => {
    let medical, user1, transactionResponse, transactionReciept;
    beforeEach(async () => {
        const accounts = await ethers.getSigners();
        user1 = accounts[1];
        const Medical = await ethers.getContractFactory("MedicalRecord");
        medical = await Medical.connect(user1).deploy();
    });
    describe("Deployed", () => {
        it ("The Contract is deployed successfully", async () => {
            expect(await medical.address).to.not.equal(0);
        });
    });
    describe("Add Record", () => {
        it("Add Record", async () => {
            transactionResponse = await medical
                .connect(user1)
                .addRecord(
                    "Wastron",
                    22,
                    "Male",
                    "B+",
                    "Dengue",
                    "Dengue",
                    "Dengue",
                );
                transactionReciept = await transactionResponse.wait();
            });
            it ("Emits a recordAdded event", async () => {
                const event = await transactionReciept.events[0];
                expect(event.event).to.equal("MedicalRecord__addRecord");
                    const args = event.args;
                    expect(args.timestamp).to.not.equal(0);
                    expect(args.name).to.equal("Wastron");
                    expect(args.age).to.equal(22);
                    expect(args.bloodType).to.equal("B+");
                    expect(args.allergies).to.equal("Dengue");
            });
            it("The getRecords function is working", async () => {
                const [
                  timestamp,
                  name,
                  age,
                  gender,
                  bloodType,
                  allergies,
                  diagnosis,
                  treatment,
                ] = await medical.getRecord(await medical.getRecordId());
                expect(await medical.getRecordId()).to.equal(1);
                expect(timestamp).to.not.equal(0);
                expect(name).to.equal("Wastron");
                expect(age).to.equal(22);
                expect(gender).to.equal("Male");
                expect(bloodType).to.equal("B+");
                expect(allergies).to.equal("Dengue");
                expect(diagnosis).to.equal("Dengue");
                expect(treatment).to.equal("Dengue");
              });
            });
          
            describe("The delete function is working", () => {
              beforeEach(async () => {
                transactionResponse = await medical.addRecord(
                  "Wastron",
                  22,
                  "Male",
                  "B+",
                  "Dengue",
                  "Dengue",
                  "Dengue"
                );
                transactionReceipt = await transactionResponse.wait();
                transactionResponse = await medical.deleteRecord(1);
                transactionReceipt = await transactionResponse.wait();
              });
              it("The record is deleted ", async () => {
                expect(await medical.getDeleted(1)).to.be.equal(true);
              });
              it("Emits a delete event", async () => {
                const event = await transactionReceipt.events[0];
                const args = event.args;
                expect(event.event).to.equal("MedicalRecords__DeleteRecord");
                expect(args.timestamp).to.not.equal(0);
                expect(args.name).to.equal("Wastron");
                expect(args.age).to.equal(22);
                expect(args.gender).to.equal("Male");
                expect(args.bloodType).to.equal("B+");
                expect(args.allergies).to.equal("Dengue");
                expect(args.diagnosis).to.equal("Dengue");
                expect(args.treatment).to.equal("Dengue");
              });
});
});
