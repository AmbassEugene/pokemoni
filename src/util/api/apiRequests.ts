export async function getResource<T>(endPoint: string) {
  let responseError: any = null;
  let data: T | undefined;

  try {
    const res = await fetch(endPoint);
    data = (await res.json()) as T;
  } catch (err) {
    responseError = err;
  } finally {
    return {
      responseError,
      data,
    };
  }
}
