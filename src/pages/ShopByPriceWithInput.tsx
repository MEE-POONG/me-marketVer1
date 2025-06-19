import React, { useState } from "react";

const ShopByPriceWithInput: React.FC = () => {
    const [minPrice, setMinPrice] = useState(33);
    const [maxPrice, setMaxPrice] = useState(99);

    // ตรวจสอบไม่ให้ min > max และ max < min
    const handleMinChange = (val: number) => {
        setMinPrice(val <= maxPrice ? val : maxPrice);
    };
    const handleMaxChange = (val: number) => {
        setMaxPrice(val >= minPrice ? val : minPrice);
    };

    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow p-5">
            {/* Title */}
            <h2 className="text-lg font-bold text-black mb-2 border-b-2 border-red-600 w-max pb-1">
                SHOP BY PRICE
            </h2>

            {/* Numeric Input */}
            <div className="flex items-center justify-between mb-4 text-sm text-gray-700 gap-3">
                <div className="flex flex-col">
                    <label htmlFor="min" className="mb-1 font-medium">Min</label>
                    <input
                        id="min"
                        type="number"
                        min={0}
                        value={minPrice}
                        onChange={(e) => handleMinChange(Number(e.target.value))}
                        className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                    />
                </div>
                <span className="mt-6">-</span>
                <div className="flex flex-col">
                    <label htmlFor="max" className="mb-1 font-medium">Max</label>
                    <input
                        id="max"
                        type="number"
                        min={0}
                        value={maxPrice}
                        onChange={(e) => handleMaxChange(Number(e.target.value))}
                        className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm"
                    />
                </div>
            </div>

            {/* Slider */}
            <div className="space-y-2 mb-4">
                <input
                    type="range"
                    min={0}
                    max={500}
                    value={minPrice}
                    onChange={(e) => handleMinChange(Number(e.target.value))}
                    className="w-full accent-red-600"
                />
                <input
                    type="range"
                    min={0}
                    max={500}
                    value={maxPrice}
                    onChange={(e) => handleMaxChange(Number(e.target.value))}
                    className="w-full accent-red-600"
                />
            </div>

            {/* Filter Button */}
            <div className="flex justify-end">
                <button className="px-4 py-1 border border-red-600 text-red-600 font-bold text-sm rounded hover:bg-red-600 hover:text-white transition">
                    FILTER
                </button>
            </div>
        </div>
    );
};

export default ShopByPriceWithInput;
