"use client";

import * as React from "react";

import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function ServiceSelectionBreakdown({parentName}) {
	const [showStatusBar, setShowStatusBar] = React.useState(true);
	const [showActivityBar, setShowActivityBar] = React.useState(false);
	const [showPanel, setShowPanel] = React.useState(false);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<p className="cursor-pointer bg-yellow-800 p-2 rounded-sm">{parentName}</p>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Services</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem
					checked={showStatusBar}
					onCheckedChange={setShowStatusBar}
				>
					child service 1
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showActivityBar}
					onCheckedChange={setShowActivityBar}
				>
					child service 2
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem
					checked={showPanel}
					onCheckedChange={setShowPanel}
				>
					child service 3
				</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
