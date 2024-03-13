async function findFoodShelters(address: string): Promise<any[]> {
    const shelters = [
        { name: "Food Shelter 1", address: "123 Main St", openingTime: "10:00 AM", closingTime: "5:00 PM" },
        { name: "Food Shelter 2", address: "456 Elm St", openingTime: "9:00 AM", closingTime: "6:00 PM" },
        { name: "Food Shelter 3", address: "789 Oak St", openingTime: "8:00 AM", closingTime: "4:00 PM" }
    ];

    return new Promise<any[]>(resolve => {
        setTimeout(() => {
            resolve(shelters);
        }, 1000);
    });
}

function displayFoodShelters(shelters: any[]) {
    console.log("Places with food shelters near you:");
    shelters.forEach(shelter => {
        console.log(`- ${shelter.name}`);
        console.log(`  Address: ${shelter.address}`);
        console.log(`  Opening Time: ${shelter.openingTime}`);
        console.log(`  Closing Time: ${shelter.closingTime}`);
    });
}

async function main() {
    const userName = "John Doe";
    const userAddress = "321 Maple St";
    const problemDescription = "Facing financial difficulties";

    console.log(`Hello ${userName}!`);
    console.log(`You've mentioned that you're facing the following problem: ${problemDescription}`);
    console.log(`Let's find some food shelters near you based on your address: ${userAddress}`);

    try {
        const shelters = await findFoodShelters(userAddress);
        displayFoodShelters(shelters);
    } catch (error) {
        console.error("An error occurred while fetching food shelters:", error);
    }
}

main();
