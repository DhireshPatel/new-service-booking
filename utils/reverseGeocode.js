// Yaha helper functions rahenge.

export async function reverseGeocode(lat, lng) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
  );

  const data = await response.json();

  return {
    city: data.address.city || data.address.town || data.address.village || "",

    state: data.address.state || "",

    pincode: data.address.postcode || "",

    address: data.display_name,
  };
}
