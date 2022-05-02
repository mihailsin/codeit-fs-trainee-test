export const getCountriesList = async () => {
  try {
    const response = await fetch("/countries", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    const countries = data.map((el) => el.name);
    return countries;
  } catch (error) {
    console.error(error);
  }
};
