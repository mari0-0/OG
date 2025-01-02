import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { ServiceSelectionBreakdown } from "./ServiceSelectionBreakdown";

const Breakdown = () => {
	const [activeGarage, setActiveGarage] = useState(null);

	const handleGarageClick = (garageId) => {
		if (garageId === null) {
			gsap.to(".popover", {
				opacity: 0,
				display: "none",
			});
			setActiveGarage(null);
			return;
		}

		if (activeGarage === garageId) {
			gsap.to(".popover", {
				opacity: 0,
				display: "none",
			});
			setActiveGarage(null);
			return;
		}

		setActiveGarage(garageId);
		gsap.to(".popover", {
			opacity: 1,
			display: "block",
			duration: 0.5,
			ease: "power4.inOut",
		});
	};
	return (
		<section className="w-full h-[90vh] flex">
			<div className="w-3/5 bg-primary-100 p-4">
				<h1 className="font-fraunces font-bold text-4xl text-center text-secondary-200">
					Audio Q3 (2017)
				</h1>
				<div className="w-full flex justify-center items-center">
					<img src="/car.png" alt="car" className="w-[80%] object-cover" />
				</div>
			</div>
			<div className="w-2/5 p-4 bg-yellow-900 text-primary-100 flex flex-col justify-between">
				<div>
					<h2 className="font-fraunces font-semibold text-2xl text-center">
						Select Breakdown services
					</h2>
					<div className="mt-4 px-2 flex justify-between items-center rounded-md bg-primary-100">
						<input
							type="text"
							placeholder="Search Location"
							className="w-full h-14 p-2 rounded-tl-md rounded-bl-md bg-primary-100 text-secondary-200 focus:outline-none"
						/>
						<button className="w-12 flex justify-center items-center text-secondary-200">
							<FiSearch className="text-xl" />
						</button>
					</div>
					<div className="w-full pt-8 flex flex-col gap-6">
						<ServiceSelectionBreakdown parentName={"Engine Failure"}/>
						<ServiceSelectionBreakdown parentName={"Flatten Tyre"}/>
						<ServiceSelectionBreakdown parentName={"Electrical Issues"}/>
						<ServiceSelectionBreakdown parentName={"Overheating"}/>
						<ServiceSelectionBreakdown parentName={"Misfuelling"}/>

					</div>
				</div>

        <div className="flex justify-end">
          <button className="bg-primary-100 text-secondary-200 px-4 py-2 rounded-sm">Send Request </button>
        </div>
			</div>
		</section>
	);
};

export default Breakdown;
