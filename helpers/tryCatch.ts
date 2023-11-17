// type tryCatchReturnI<ResultType> = Promise<
//   | {
//       result: Awaited<ResultType>;
//       error: null;
//     }
//   | {
//       result: null;
//       error: any;
//     }
// >;

export async function tryCatch<ResultType>(
  promiseCallBack: () => Promise<ResultType>,
): Promise<
  | {
    result: Awaited<ResultType>
    error: null
  }
  | {
    result: null
    error: any
  }
> {
  try {
    const result = await promiseCallBack()
    return { result, error: null }
  }
  catch (error) {
    return { result: null, error }
  }
}
