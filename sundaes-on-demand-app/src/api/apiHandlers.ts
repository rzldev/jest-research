import axios, { AxiosError, AxiosResponse } from "axios";
import { OnError, OnSuccess } from "../@types/apis";

export function fetchData(
  route: string,
  onSuccess?: OnSuccess,
  onError?: OnError
) {
  axios
    .get(route)
    .then((res: AxiosResponse) => {
      console.log(res.data);
      onSuccess && onSuccess(res.data);
    })
    .catch((err: AxiosError) => {
      console.error(err);
      onError && onError(err.message);
    });
}
