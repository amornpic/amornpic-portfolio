import HeaderLink from '../HeaderLink.astro';
import { Avatar } from './avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './dropdown-menu';

export const AvatarDropdownMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar
					src="https://avatars.githubusercontent.com/u/41936114?v=4"
					alt="amornpic img"
					fallbackText="AS"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<a href="/blog">blog</a>
				</DropdownMenuItem>
				<DropdownMenuItem>Billing</DropdownMenuItem>
				<DropdownMenuItem>Team</DropdownMenuItem>
				<DropdownMenuItem>Subscription</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
