import { useState } from "react";
import gsap from "gsap";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";

const ServicesSelection = () => {
	const [activeGarage, setActiveGarage] = useState(null);

	const handleGarageClick = (garageId) => {
		if (activeGarage === garageId) {
			gsap.to(".popover", {
				// clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
				opacity: 0,
			});
			setActiveGarage(null);
			return;
		}

		setActiveGarage(garageId);
		gsap.to(".popover",{
			// clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			opacity: 1,
			duration: 0.5,
			ease: "power4.inOut",
		});
	};

	return (
		<section className="w-full h-[90vh] flex">
			{/* Left Sidebar */}
			<div className="w-1/4 h-full bg-orange-100 relative z-10">
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
					<button className="w-1/2 py-3 rounded-md bg-secondary-200 text-white flex justify-center items-center gap-2">
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
				className="w-3/4 h-full p-4 bg-neutral-600 relative "
			>

				<div
					className="popover w-2/6 h-[95%] p-2 bg-white absolute rounded-md left-4 opacity-0 overflow-y-scroll"
				>
					<div className="w-full h-1/3 bg-neutral-400 rounded-md pointer-events-auto"></div>
					<h1 className="text-3xl mt-4 font-bold">{activeGarage ? `Garage ${activeGarage}` : ""}</h1>
					<p className="mt-4 text-neutral-700 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab voluptas voluptatum sequi quas dignissimos at modi, ad tempora harum rerum minima porro dicta aspernatur quaerat soluta ullam numquam recusandae minus.</p>
					<h1 className="text-xl mt-6 font-semibold">Services Offered</h1>
					<div className="mt-4 flex flex-col gap-2">
						<Service />
						<Service />
						<Service />
						<Service />
						<Service />
						<Service />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSelection;

export const Garage = ({ onClick }) => {
	return (
		<div
			className="garage w-full px-2 py-4 gap-2 flex justify-between items-center hover:bg-orange-200 cursor-pointer"
			onClick={onClick}
		>
			<div className="w-full flex flex-col">
				<h4 className="font-semibold">Anil Garage</h4>
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

export const Service = ({ serviceName, rating }) => {
	return(
		<div className="w-full py-2 flex justify-between items-center">
			<h5 className="text-lg font-semibold text-neutral-800">service 1</h5>
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
	)
}