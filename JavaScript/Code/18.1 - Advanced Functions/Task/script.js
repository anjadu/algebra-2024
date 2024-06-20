const chef = {
    prepareDish(dishName) {
        // Implement the chef's logic
        console.log(`The chef is preparing ${dishName}.`);
    },
};

const waiter = {
    takeOrder(tableNumber, dishName) {
        // Implement the waiter's logic for taking an order
        console.log(`Waiter is taking an order for ${dishName} at table ${tableNumber}.`);
    },
    serveDish(tableNumber, dishName) {
        // Implement the waiter's logic for serving a dish
        console.log(`Waiter is serving ${dishName} to table ${tableNumber}.`);
    },
};

function placeOrder(tableNumber, dishName, chef) {
    // Implement the order placement logic
      // Waiter takes the order
      waiter.takeOrder.call(waiter, tableNumber, dishName);
    
      // Chef prepares the dish
      chef.prepareDish.call(chef, dishName);
      
      // Waiter serves the dish
      waiter.serveDish.call(waiter, tableNumber, dishName);
}

// Create the partially applied function orderSteak using bind
const orderSteak = placeOrder.bind(null, undefined, 'Steak', chef);

// Test the functionality
placeOrder(1, 'Steak', chef);
placeOrder(2, 'Pasta', chef);
orderSteak(3);
// Use the partially applied orderSteak function
