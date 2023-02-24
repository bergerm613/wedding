/**
 * Makes a call to the Hebcal api to get the Date of a given geoname.
 *
 * @returns {Promise<Date>} A Date object for sunset in the given geoname
 */
export const getHebcalSunset = async (geoname: string): Promise<Date> => {
  try {
    const response = await fetch(
      `https://www.hebcal.com/zmanim?cfg=json&geonameid=${geoname}&date=2023-03-06`
    );
    const data = await response.json();

    return new Date(data.times.sunset);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
