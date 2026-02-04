const ProductSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure className="h-48 skeleton"></figure>

      <div className="card-body p-4 space-y-3">
        <div className="skeleton h-4 w-3/4"></div>

        <div className="flex gap-2">
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        <div className="skeleton h-5 w-24"></div>
        <div className="skeleton h-3 w-16"></div>

        <div className="skeleton h-9 w-full"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
