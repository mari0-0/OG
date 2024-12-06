import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaAngleDown } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdGpsFixed } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Map from "./Map";

const ServicesSelection = () => {
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
			{/* Left Sidebar */}
			<div className="hidden sm:block sm:w-1/3 md:w-1/4 h-full bg-orange-100 relative z-10">
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

				<div className="w-full p-2 pt-0 gap-2 flex justify-center items-center flex-col md:flex-row">
					<button className="w-full md:w-1/2 py-3 rounded-md bg-primary-100 flex justify-center items-center gap-2">
						<span>Use GPS</span>
						<span>
							<MdGpsFixed />
						</span>
					</button>
					<button className="w-full md:w-1/2 py-3 rounded-md bg-secondary-200 text-white flex justify-center items-center gap-2">
						<span>Search</span>
						<span>
							<FiSearch />
						</span>
					</button>
				</div>

				<div className="mt-8 flex flex-col justify-center items-center">
					<Garage
						handleClick={() => handleGarageClick(1)}
						isActive={activeGarage === 1}
					/>
					<Garage
						handleClick={() => handleGarageClick(2)}
						isActive={activeGarage === 2}
					/>
					<Garage
						handleClick={() => handleGarageClick(3)}
						isActive={activeGarage === 3}
					/>
				</div>
			</div>

			{/* Maps Section */}
			<div className="w-full sm:w-2/3 md:w-3/4 h-full bg-neutral-600 relative ">
				<div className="popover z-[999999] hidden sm:w-2/3 md:w-1/3 btw-md-lg:w-3/5 lg:w-2/5  h-[95%] p-3 bg-white absolute rounded-md left-4 top-4 opacity-0 overflow-y-scroll">
					<div className="w-full mb-2 flex justify-end">
						<button className="bg-neutral-100 rounded-sm p-1">
							<IoMdClose onClick={() => handleGarageClick(null)} />
						</button>
					</div>
					<div className="w-full h-1/3 bg-neutral-400 rounded-md pointer-events-auto"></div>
					<h1 className="text-3xl mt-4 font-bold">
						{activeGarage ? `Garage ${activeGarage}` : ""}
					</h1>
					<p className="mt-4 text-neutral-700 text-justify">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
						voluptas voluptatum sequi quas dignissimos at modi, ad tempora harum
						rerum minima porro dicta aspernatur quaerat soluta ullam numquam
						recusandae minus.
					</p>
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

				<Map activeMarker={activeGarage}/>
			</div>
		</section>
	);
};

export default ServicesSelection;

export const Garage = ({ handleClick, isActive }) => {
	const arrow = useRef(null);

	useGSAP(() => {
		if (isActive) {
			gsap.to(arrow.current, {
				rotate: -90,
				duration: 0.2,
				ease: "power4.inOut",
			});
		} else {
			gsap.to(arrow.current, {
				rotate: 0,
				duration: 0.1,
				ease: "none",
			});
		}
	}, [isActive]);

	return (
		<div
			className="garage w-full px-2 py-4 gap-2 flex justify-between items-center hover:bg-orange-200 cursor-pointer"
			onClick={handleClick}
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
				<button ref={arrow}>
					<FaAngleDown className="text-lg" />
				</button>
			</div>
		</div>
	);
};

export const Service = ({ serviceName, rating }) => {
	return (
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
	);
};
