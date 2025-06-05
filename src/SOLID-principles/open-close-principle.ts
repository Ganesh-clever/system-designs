interface DiscountStrategy{
    getDiscount(): number;
}

class BasicUser implements DiscountStrategy{
    getDiscount(): number {
        return 10;
    }
}

class GoldUser implements DiscountStrategy{
    getDiscount(): number {
        return 20;
    }
}

class PremimumUser implements DiscountStrategy{
    getDiscount(): number {
        return 50;
    }
}

class DiscountService{
    getDiscountStrategy(strategy:DiscountStrategy){
        return strategy.getDiscount();
    }
}

const service = new DiscountService();
console.log(service.getDiscountStrategy(new BasicUser()));
console.log(service.getDiscountStrategy(new PremimumUser()));
