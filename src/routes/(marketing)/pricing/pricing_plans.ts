export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Auditor",
    description: "A free plan to get you started!",
    price: "€0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: [
      "Access to free courses",
      "Free contributions guides",
      "Free questions to the community",
    ],
  },
  {
    id: "student",
    name: "Student",
    description: "A plan for students to get access to courses and tests",
    price: "€5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QxNUXLtQekolYk0ahm77OUH",
    stripe_product_id: "prod_Rr5fRTUf0jR5Lb",
    features: [
      "Everything in Auditor",
      "Questions to speakers",
      "Access to certifications",
    ],
  },
  {
    id: "alumni",
    name: "Alumni",
    description: "A plan for alumni to get access to all content",
    price: "€15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1QxNVVLtQekolYk0pSYDyQzN",
    stripe_product_id: "prod_Rr5gccqxGjwCro",
    features: [
      "Everything in Student",
      "Access to all courses",
      "Access to all tests",
    ],
  },
]
