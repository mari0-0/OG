import { useState } from "react";
import gsap from "gsap";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";

const ServicesSelection = () => {
	const [activeGarage, setActiveGarage] = useState(null); // Track which Garage is active

	const handleGarageClick = (garageId) => {
		setActiveGarage(garageId);
		gsap.to(".popover", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			duration: 0.5,
			ease: "power4.inOut",
		});
	};

	const handlePopoverClose = () => {
		gsap.to(".popover", {
			clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
			duration: 0.5,
			ease: "power4.inOut",
		});
	};

	return (
		<section className="w-full h-[90vh] flex">
			{/* Left Sidebar */}
			<div className="w-1/4 h-full bg-orange-100">
				<div className="m-2 px-2 flex justify-between items-center rounded-md bg-primary-100">
					<input
						type="text"
						placeholder="Search Location"
						className="w-full h-14 p-2 rounded-tl-md rounded-bl-md bg-primary-100 focus:outline-none"
					/>
					<button className="w-12 flex justify-center items-center">
						<FiSearch className="text-xl" />
					</button>
				</div>

				<div className="w-full p-2 pt-0 gap-2 flex justify-center items-center">
					<button className="w-1/2 py-3 rounded-md bg-primary-100 flex justify-center items-center gap-2">
						<span>Use GPS</span>
						<span>
							<MdGpsFixed />
						</span>
					</button>
					<button className="w-1/2 py-3 rounded-md bg-secondary text-white flex justify-center items-center gap-2">
						<span>Search</span>
						<span>
							<FiSearch />
						</span>
					</button>
				</div>

				<div className="mt-8 flex flex-col justify-center items-center">
					<Garage onClick={() => handleGarageClick(1)} />
					<Garage onClick={() => handleGarageClick(2)} />
					<Garage onClick={() => handleGarageClick(3)} />
				</div>
			</div>

			{/* Maps Section */}
			<div
				className="w-3/4 h-full bg-orange-700 relative"
				onClick={handlePopoverClose}
			>
				<div
					className="popover w-2/5 h-full p-2 bg-orange-900 absolute "
					style={{
						clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
					}}
				>
					<div className="w-full h-32 bg-black rounded-md pointer-events-auto"></div>
					{activeGarage ? `Garage ${activeGarage}` : ""}
				</div>
			</div>
		</section>
	);
};

export default ServicesSelection;

export const Garage = ({ handleOnClick }) => {
	return (
		<div
			className="garage w-full px-2 py-4 gap-2 flex justify-between items-center hover:bg-orange-200 cursor-pointer"
			onClick={handleOnClick}
		>
			<div className="w-full flex flex-col">
				<div className="font-semibold">Anil Garage</div>
				<div className="flex gap-2 items-center text-neutral-800">
					<div>4</div>
					<div className="flex">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
					</div>
					<div>(121)</div>
				</div>
			</div>
			<div className="text-neutral-800">
				<button>
					<FaAngleDown className="text-lg" />
				</button>
			</div>
		</div>
	);
};
