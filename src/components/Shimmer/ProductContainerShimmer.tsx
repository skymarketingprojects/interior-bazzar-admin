const ProductContainerShimmer = () => {
    return (
        <div className="w-full max-w-sm rounded-2xl shadow-md  bg-white p-4 animate-pulse">
            {/* Top image placeholder */}
            <div className="h-40 w-full rounded-lg bg-gray-200" />

            {/* Badge placeholder */}
            <div className="mt-2 h-5 w-20 rounded bg-gray-200" />

            {/* Title */}
            <div className="mt-4 h-5 w-3/4 rounded bg-gray-200" />

            {/* Rating + time */}
            <div className="mt-3 flex items-center justify-between">
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="h-4 w-16 rounded bg-gray-200" />
            </div>

            {/* Business name */}
            <div className="mt-3 h-4 w-1/2 rounded bg-gray-200" />

            {/* GST + Since row */}
            <div className="mt-3 flex space-x-3">
                <div className="h-4 w-20 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
            </div>

            {/* Buttons */}
            <div className="mt-5 flex space-x-3">
                <div className="h-10 w-1/2 rounded-lg bg-gray-200" />
                <div className="h-10 w-1/2 rounded-lg bg-gray-200" />
            </div>
        </div>
    )
}
export default ProductContainerShimmer;