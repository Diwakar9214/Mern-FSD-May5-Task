class UberPriceCalculator {
    constructor(distance, time, surge = 1) {
        this.distance = distance;
        this.time = time;
        this.surge = surge;
    }

    calculatePrice() {
        const baseFare = 25;
        const ratePerKm = 15;
        const ratePerMinute = 10;
        const totalPrice = baseFare + (this.distance * ratePerKm) + (this.time * ratePerMinute);
        return totalPrice * this.surge;
    }
}

// Example usage
const calculator = new UberPriceCalculator(10, 20, 1.2); // 10 km, 20 minutes, surge multiplier 1.2
console.log("Total Price:", calculator.calculatePrice());