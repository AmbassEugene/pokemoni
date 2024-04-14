export const getResource = async (endPoint: string) => {
  let responseError: any = null;
  let data: [] | {} = [];

  try {
    const res = await fetch(endPoint);
    data = await res.json();
  } catch (err) {
    responseError = err;
  } finally {
    return {
      responseError,
      data,
    };
  }
};
