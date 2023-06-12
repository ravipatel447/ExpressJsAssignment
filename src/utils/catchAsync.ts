export function catchAsync(fn) {
  return (req: any, res: any, next: any) => {
    fn(req, res, next).catch(next);
  };
}
