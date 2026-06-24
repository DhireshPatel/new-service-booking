// Central catalog of every bookable electrician service, grouped by category.
// Each service carries the fields a ServiceCard needs to render and price.

import {
  Fan,
  Snowflake,
  ToggleLeft,
  Cable,
  Lightbulb,
  BatteryCharging,
} from "lucide-react";

export const categories = [
  {
    slug: "fan-services",
    name: "Fan Services",
    icon: Fan,
    description: "Installation, repair and cleaning for ceiling, wall and exhaust fans.",
  },
  {
    slug: "ac-services",
    name: "AC Services",
    icon: Snowflake,
    description: "Cooling tune-ups, gas refills and full AC installations.",
  },
  {
    slug: "switch-socket-services",
    name: "Switch & Socket Services",
    icon: ToggleLeft,
    description: "Repairs and upgrades for switches, sockets and switchboards.",
  },
  {
    slug: "wiring-services",
    name: "Wiring Services",
    icon: Cable,
    description: "New wiring runs, repairs and full safety inspections.",
  },
  {
    slug: "lighting-services",
    name: "Lighting Services",
    icon: Lightbulb,
    description: "From single bulbs to chandeliers and decorative lighting.",
  },
  {
    slug: "inverter-services",
    name: "Inverter Services",
    icon: BatteryCharging,
    description: "Inverter installation, battery swaps and repairs.",
  },
];

export const services = [
  // Fan Services
  {
    id: "fan-installation",
    category: "fan-services",
    name: "Fan Installation",
    description: "Mounting and wiring of a new ceiling, wall or exhaust fan.",
    price: 299,
    rating: 4.8,
  },
  {
    id: "fan-repair",
    category: "fan-services",
    name: "Fan Repair",
    description: "Diagnosis and fix for noisy, slow or non-spinning fans.",
    price: 199,
    rating: 4.7,
  },
  {
    id: "fan-replacement",
    category: "fan-services",
    name: "Fan Replacement",
    description: "Safe removal of the old unit and fitting of the replacement.",
    price: 399,
    rating: 4.6,
  },
  {
    id: "ceiling-fan-cleaning",
    category: "fan-services",
    name: "Ceiling Fan Cleaning",
    description: "Deep dust removal and blade balancing for smoother spin.",
    price: 149,
    rating: 4.9,
  },

  // AC Services
  {
    id: "ac-installation",
    category: "ac-services",
    name: "AC Installation",
    description: "Complete split or window AC mounting and setup.",
    price: 999,
    rating: 4.8,
  },
  {
    id: "ac-gas-refill",
    category: "ac-services",
    name: "AC Gas Refill",
    description: "Refrigerant top-up to restore full cooling performance.",
    price: 1499,
    rating: 4.7,
  },
  {
    id: "ac-repair",
    category: "ac-services",
    name: "AC Repair",
    description: "Fixes for leaks, weak cooling and unusual AC noises.",
    price: 699,
    rating: 4.6,
  },
  {
    id: "ac-cleaning",
    category: "ac-services",
    name: "AC Cleaning",
    description: "Filter and coil cleaning for fresher, efficient air.",
    price: 499,
    rating: 4.9,
  },

  // Switch & Socket Services
  {
    id: "switch-repair",
    category: "switch-socket-services",
    name: "Switch Repair",
    description: "Fixing loose, sparking or unresponsive wall switches.",
    price: 99,
    rating: 4.7,
  },
  {
    id: "socket-installation",
    category: "switch-socket-services",
    name: "Socket Installation",
    description: "Adding a new power socket point with safe wiring.",
    price: 149,
    rating: 4.8,
  },
  {
    id: "switchboard-replacement",
    category: "switch-socket-services",
    name: "Switchboard Replacement",
    description: "Full swap of an old or damaged switchboard panel.",
    price: 299,
    rating: 4.6,
  },

  // Wiring Services
  {
    id: "new-wiring",
    category: "wiring-services",
    name: "New Wiring",
    description: "Fresh wiring runs for rooms, additions or renovations.",
    price: 599,
    rating: 4.8,
  },
  {
    id: "wiring-repair",
    category: "wiring-services",
    name: "Wiring Repair",
    description: "Locating and repairing faulty or frayed wiring.",
    price: 399,
    rating: 4.7,
  },
  {
    id: "wiring-inspection",
    category: "wiring-services",
    name: "Wiring Inspection",
    description: "Full safety check of your home's existing wiring.",
    price: 299,
    rating: 4.9,
  },

  // Lighting Services
  {
    id: "light-installation",
    category: "lighting-services",
    name: "Light Installation",
    description: "Fitting of ceiling, wall or panel lights.",
    price: 149,
    rating: 4.8,
  },
  {
    id: "chandelier-installation",
    category: "lighting-services",
    name: "Chandelier Installation",
    description: "Careful mounting and wiring of statement chandeliers.",
    price: 999,
    rating: 4.7,
  },
  {
    id: "decorative-lighting-setup",
    category: "lighting-services",
    name: "Decorative Lighting Setup",
    description: "Accent and ambient lighting setup for any occasion.",
    price: 799,
    rating: 4.6,
  },

  // Inverter Services
  {
    id: "inverter-installation",
    category: "inverter-services",
    name: "Inverter Installation",
    description: "Complete setup of a new home inverter system.",
    price: 799,
    rating: 4.8,
  },
  {
    id: "battery-replacement",
    category: "inverter-services",
    name: "Battery Replacement",
    description: "Safe swap of an old inverter battery for a new one.",
    price: 699,
    rating: 4.7,
  },
  {
    id: "inverter-repair",
    category: "inverter-services",
    name: "Inverter Repair",
    description: "Diagnosis and repair for inverters that won't hold charge.",
    price: 499,
    rating: 4.6,
  },
];

export function getServicesByCategory(slug) {
  return services.filter((service) => service.category === slug);
}
