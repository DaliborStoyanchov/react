export default function ProductTile({ product }) {
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-gray-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
            className="object-cover h-full w-full"
            src={product.image}
            alt={product.title}
          />
        </div>
      </div>
    </div>
  );
}
