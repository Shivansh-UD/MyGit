"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function findFoodShelters(address) {
    return __awaiter(this, void 0, void 0, function* () {
        const shelters = [
            { name: "Food Shelter 1", address: "123 Main St", openingTime: "10:00 AM", closingTime: "5:00 PM" },
            { name: "Food Shelter 2", address: "456 Elm St", openingTime: "9:00 AM", closingTime: "6:00 PM" },
            { name: "Food Shelter 3", address: "789 Oak St", openingTime: "8:00 AM", closingTime: "4:00 PM" }
        ];
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(shelters);
            }, 1000);
        });
    });
}
function displayFoodShelters(shelters) {
    console.log("Places with food shelters near you:");
    shelters.forEach(shelter => {
        console.log(`- ${shelter.name}`);
        console.log(`  Address: ${shelter.address}`);
        console.log(`  Opening Time: ${shelter.openingTime}`);
        console.log(`  Closing Time: ${shelter.closingTime}`);
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = "John Doe";
        const userAddress = "321 Maple St";
        const problemDescription = "Facing financial difficulties";
        console.log(`Hello ${userName}!`);
        console.log(`You've mentioned that you're facing the following problem: ${problemDescription}`);
        console.log(`Let's find some food shelters near you based on your address: ${userAddress}`);
        try {
            const shelters = yield findFoodShelters(userAddress);
            displayFoodShelters(shelters);
        }
        catch (error) {
            console.error("An error occurred while fetching food shelters:", error);
        }
    });
}
main();
//# sourceMappingURL=location.js.map